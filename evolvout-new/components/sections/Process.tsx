import { Lightbulb, PenTool, Rocket } from "lucide-react";
import { SectionBadge } from "@/components/ui";

const STEPS = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Entendemos o desafio",
    description: "Conversamos sobre o negócio, os objetivos e o resultado que precisa alcançar.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Desenhamos a solução",
    description: "Definimos uma estratégia clara e construímos a experiência digital certa para o projeto.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Lançamos e evoluímos",
    description: "Entregamos, acompanhamos o desempenho e identificamos oportunidades de melhoria.",
  },
] as const;

export function Process() {
  return (
    <section id="process" className="bg-[#060010] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-5 flex justify-center"><SectionBadge label="Como trabalhamos" /></div>
          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">Da ideia à solução</h2>
          <p className="mt-5 text-lg text-white/60">Um processo simples, transparente e focado no que gera valor para o seu negócio.</p>
        </div>
        <ol className="grid gap-4 md:grid-cols-3">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <li key={step.number} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 lg:p-8">
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400"><Icon className="size-5" /></span>
                  <span className="text-sm font-semibold text-white/30">{step.number}</span>
                </div>
                <h3 className="mt-8 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-white/60">{step.description}</p>
              </li>
            );
          })}
        </ol>
        <div className="mt-10 text-center">
          <a href="#contact" className="inline-flex rounded-full bg-emerald-400 px-7 py-3 font-semibold text-slate-950 transition-colors hover:bg-emerald-300">Falar sobre o meu projeto</a>
        </div>
      </div>
    </section>
  );
}
