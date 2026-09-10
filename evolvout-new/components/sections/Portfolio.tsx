"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, ExternalLink, X } from "lucide-react";
import { track } from "@vercel/analytics";

import { PORTFOLIO_PROJECTS, type PortfolioProject } from "@/constants/portfolio";
import { cn } from "@/lib/utils";
import type { BaseComponentProps } from "@/types/components";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { PortfolioCard } from "./PortfolioCard";

export function Portfolio({ className }: BaseComponentProps) {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!selectedProject) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setSelectedProject(null);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProject]);

  return (
    <section id="portfolio" className={cn("relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <SectionBadge label="Portfólio" />
          <h2 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">Projectos em destaque</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Explore soluções desenvolvidas para comércio, educação, recrutamento, turismo e empreendedorismo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_PROJECTS.map((project) => (
            <PortfolioCard key={project.id} project={project} onViewCase={(item) => { track("portfolio_case_open", { project: item.id }); setSelectedProject(item); }} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-5 text-slate-400">Tem um desafio semelhante?</p>
          <a href="#contact" className="inline-flex rounded-full bg-emerald-400 px-8 py-3 font-semibold text-slate-950 transition-colors hover:bg-emerald-300">
            Falar sobre o meu projecto
          </a>
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="presentation"
          onMouseDown={(event) => event.target === event.currentTarget && setSelectedProject(null)}
        >
          <div role="dialog" aria-modal="true" aria-labelledby="case-title" className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-slate-950 p-6 shadow-2xl sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-sm font-semibold text-emerald-400">Estudo de caso</span>
                <h3 id="case-title" className="mt-2 text-2xl font-bold text-white sm:text-3xl">{selectedProject.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-400">{selectedProject.description}</p>
              </div>
              <button ref={closeButtonRef} type="button" onClick={() => setSelectedProject(null)} className="shrink-0 rounded-full border border-white/10 p-2 text-white transition-colors hover:bg-white/10" aria-label="Fechar estudo de caso">
                <X className="size-5" />
              </button>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div><h4 className="font-semibold text-white">Desafio</h4><p className="mt-2 leading-relaxed text-slate-400">{selectedProject.details.challenge}</p></div>
              <div><h4 className="font-semibold text-white">Solução</h4><p className="mt-2 leading-relaxed text-slate-400">{selectedProject.details.solution}</p></div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <h4 className="font-semibold text-white">Principais destaques</h4>
              <ul className="mt-4 space-y-3">
                {selectedProject.details.results.map((result) => (
                  <li key={result} className="flex gap-3 text-slate-300"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-400" />{result}</li>
                ))}
              </ul>
            </div>

            {selectedProject.link && (
              <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-emerald-300">
                {selectedProject.linkLabel ?? "Abrir projecto"}<ExternalLink className="size-4" />
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
