import type { Metadata } from "next";
export const metadata: Metadata = { title: "Documentação", description: "Informação sobre os serviços e soluções da EvolvOut.", alternates: { canonical: "/docs" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
