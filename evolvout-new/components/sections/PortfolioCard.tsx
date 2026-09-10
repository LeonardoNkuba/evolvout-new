import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";

import { PORTFOLIO_CATEGORIES, type PortfolioProject } from "@/constants/portfolio";
import { cn } from "@/lib/utils";
import type { BaseComponentProps } from "@/types/components";

interface PortfolioCardProps extends BaseComponentProps {
  project: PortfolioProject;
  onViewCase: (project: PortfolioProject) => void;
}

export function PortfolioCard({ project, onViewCase, className }: PortfolioCardProps) {
  const category = PORTFOLIO_CATEGORIES.find((item) => item.id === project.category)?.label ?? project.category;

  return (
    <article className={cn("group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 transition-colors duration-200 hover:border-emerald-400/30", className)}>
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <Image
          src={project.image}
          alt={`Projecto ${project.title}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" aria-hidden="true" />
        <span className="absolute right-4 top-4 rounded-full bg-emerald-400 px-3 py-1 text-xs font-semibold text-slate-950">
          {category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.shortDescription}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-lg bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-5">
          <button
            type="button"
            onClick={() => onViewCase(project)}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/15 px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:border-emerald-400/40 hover:bg-white/5"
          >
            Ver caso
            <ArrowRight className="size-4" />
          </button>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-emerald-400 px-3 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-300"
              aria-label={`${project.linkLabel ?? "Abrir projecto"}: ${project.title}`}
            >
              <ExternalLink className="size-4" />
              <span className="hidden sm:inline">Abrir</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
