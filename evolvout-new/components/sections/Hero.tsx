"use client";

import { motion } from "framer-motion";
import { track } from "@vercel/analytics";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { HERO_TITLE_ANIMATION, HERO_SUBTITLE_ANIMATION, HERO_CTA_ANIMATION } from "@/config/animations";
import { COLORS } from "@/constants/theme";
import type { BaseComponentProps } from "@/types/components";

type HeroProps = BaseComponentProps

/**
 * Hero Section Component
 * 
 * Seção principal da landing page com:
 * - Título animado com gradiente
 * - Subtítulo descritivo
 * - Botões de call-to-action
 * 
 * @param className - Classes CSS adicionais
 */
export function Hero({ className }: HeroProps) {
  return (
    <section
      id="home"
      className={cn(
        "relative min-h-screen flex items-center justify-center",
        "px-4 sm:px-6 lg:px-8",
        "pt-20 pb-32",
        "pointer-events-auto",
        className
      )}
    >
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Main Title */}
        <motion.h1
          {...HERO_TITLE_ANIMATION}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6"
        >
          <span className="text-white">Tecnologia para fazer</span>
          <br />
          <span className="bg-gradient-to-r from-green-300 via-emerald-400 to-green-500 bg-clip-text text-transparent">
            negócios evoluírem.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...HERO_SUBTITLE_ANIMATION}
          className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-12"
        >
          Criamos websites, sistemas e marcas digitais para empresas e empreendedores
          que querem crescer em Angola.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...HERO_CTA_ANIMATION}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full! px-8 py-6 text-base font-semibold text-white transition-all duration-200 shadow-lg hover:shadow-xl"
            style={{
              background: COLORS.gradient.button,
            }}
          >
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                track("cta_click", { location: "hero", action: "request_quote" });
                const target = document.querySelector('#contact');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = COLORS.gradient.buttonHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = COLORS.gradient.button;
              }}
            >
              Solicitar orçamento
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full! px-8 py-6 text-base font-semibold bg-white/10! backdrop-blur-sm border-white/20! text-white hover:bg-white/20! hover:text-white! transition-all duration-200"
          >
            <a 
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                track("cta_click", { location: "hero", action: "view_portfolio" });
                const target = document.querySelector('#portfolio');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Ver projetos
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

