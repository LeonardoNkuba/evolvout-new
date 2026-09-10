import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string;
}

const LIMITS = { name: 100, email: 254, subject: 150, message: 3000 } as const;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const requestsByIp = new Map<string, number[]>();

function escapeHtml(value: string): string {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (requestsByIp.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) return true;
  recent.push(now);
  requestsByIp.set(ip, recent);
  return false;
}

function parseForm(body: unknown): ContactFormData | null {
  if (!body || typeof body !== "object") return null;
  const input = body as Record<string, unknown>;
  const fields = ["name", "email", "subject", "message"] as const;
  if (fields.some((field) => typeof input[field] !== "string")) return null;

  const form = {
    name: (input.name as string).trim(),
    email: (input.email as string).trim().toLowerCase(),
    subject: (input.subject as string).trim(),
    message: (input.message as string).trim(),
    website: typeof input.website === "string" ? input.website.trim() : "",
  };

  if (fields.some((field) => !form[field] || form[field].length > LIMITS[field])) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return null;
  return form;
}

async function sendEmail(data: ContactFormData): Promise<boolean> {
  if (process.env.NODE_ENV === "development") return true;
  if (!process.env.RESEND_API_KEY) return false;

  const safe = {
    name: escapeHtml(data.name),
    email: escapeHtml(data.email),
    subject: escapeHtml(data.subject),
    message: escapeHtml(data.message).replace(/\n/g, "<br>"),
  };

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "noreply@evolvout.com",
      to: process.env.CONTACT_EMAIL || "contacto@evolvout.com",
      reply_to: data.email,
      subject: `Nova mensagem de contacto: ${data.subject}`,
      html: `<h2>Nova mensagem de contacto</h2><p><strong>Nome:</strong> ${safe.name}</p><p><strong>Email:</strong> ${safe.email}</p><p><strong>Assunto:</strong> ${safe.subject}</p><hr><p><strong>Mensagem:</strong></p><p>${safe.message}</p>`,
    }),
  });

  if (!response.ok) console.error("Resend API error", response.status);
  return response.ok;
}

export async function POST(request: NextRequest) {
  try {
    const contentLength = Number(request.headers.get("content-length") ?? 0);
    if (contentLength > 10_000) return NextResponse.json({ error: "Pedido demasiado grande." }, { status: 413 });

    const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
    if (isRateLimited(ip)) return NextResponse.json({ error: "Muitas tentativas. Tente novamente mais tarde." }, { status: 429 });

    const data = parseForm(await request.json());
    if (!data) return NextResponse.json({ error: "Verifique os campos e tente novamente." }, { status: 400 });
    if (data.website) return NextResponse.json({ success: true }, { status: 200 });

    if (!(await sendEmail(data))) return NextResponse.json({ error: "Não foi possível enviar a mensagem agora." }, { status: 503 });
    return NextResponse.json({ success: true, message: "Mensagem enviada com sucesso." }, { status: 200 });
  } catch (error) {
    console.error("Contact API error", error instanceof Error ? error.message : "unknown");
    return NextResponse.json({ error: "Erro interno. Tente novamente mais tarde." }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "Utilize POST para enviar o formulário de contacto." });
}
