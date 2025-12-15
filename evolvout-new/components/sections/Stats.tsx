"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { COLORS } from "@/constants/theme";
import { STATS } from "@/constants/stats";
import { SectionBadge } from "@/components/ui";
import type { BaseComponentProps } from "@/types/components";
import { MagicBento } from "@/components/effects/MagicBento";
import { CheckCircle2, TrendingUp, Users, Clock, Award, Building } from "lucide-react";
import "./Stats.css";

/**
 * Stats Section Component
 * 
 * Seção de estatísticas e números da empresa com:
 * - Background com pontos de luz roxos esfumados
 * - Cards de estatísticas animados
 * - Design moderno e futurista
 * 
 * @param className - Classes CSS adicionais
 */
export function Stats({ className }: BaseComponentProps) {
  return (
    <section
      id="stats"
      className={cn(
        "relative min-h-screen flex items-center justify-center",
        "px-4 sm:px-6 lg:px-8",
        "pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 lg:pb-20",
        "pointer-events-auto overflow-hidden",
        className
      )}
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Gradientes esfumados no topo e bottom - transição maior e mais fluida */}
      <div 
        className="absolute top-0 left-0 right-0 h-20 sm:h-24 lg:h-28 pointer-events-none z-5"
        style={{ 
          background: `linear-gradient(to bottom, #060010 0%, #060010 20%, rgba(6, 0, 16, 0.98) 35%, rgba(6, 0, 16, 0.9) 50%, rgba(6, 0, 16, 0.7) 65%, rgba(6, 0, 16, 0.4) 80%, rgba(6, 0, 16, 0.15) 92%, transparent 100%)`
        }}
      />
      <div 
        className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 lg:h-28 pointer-events-none z-5"
        style={{ 
          background: `linear-gradient(to top, #060010 0%, #060010 20%, rgba(6, 0, 16, 0.98) 35%, rgba(6, 0, 16, 0.9) 50%, rgba(6, 0, 16, 0.7) 65%, rgba(6, 0, 16, 0.4) 80%, rgba(6, 0, 16, 0.15) 92%, transparent 100%)`
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Badge */}
          <div className="mb-5 flex justify-center">
            <SectionBadge label="Nossos Números" />
          </div>
          
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 tracking-tight">
            <span className="text-white">Resultados que</span>
            <br />
            <span
              className="bg-clip-text text-transparent block mt-1"
              style={{
                backgroundImage: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Falam por nós
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-gray-400 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Números que comprovam nosso compromisso com excelência e resultados
          </p>
        </motion.div>

        {/* Magic Bento Grid */}
        <MagicBento
          textAutoHide={false}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect={true}
          spotlightRadius={250}
          particleCount={19}
          glowColor="0, 255, 136"
          cards={STATS.map((stat, index) => ({
            color: COLORS.background,
            title: stat.value,
            description: stat.label,
            label: getStatLabel(stat.label),
            value: stat.value,
            hoverContent: getHoverContent(stat, index)
          }))}
        />
      </div>
    </section>
  );
}

/**
 * Helper function para obter label do stat
 */
function getStatLabel(label: string): string {
  const labels: Record<string, string> = {
    "Projetos Entregues": "Projetos",
    "Satisfação dos Clientes": "Satisfação",
    "Empresas Atendidas": "Clientes",
    "Suporte Disponível": "Suporte",
    "Suporte Dedicado": "Suporte",
    "Avaliação Média": "Avaliação"
  };
  return labels[label] || "Estatística";
}

/**
 * Helper function para criar conteúdo hover baseado no stat
 */
function getHoverContent(stat: typeof STATS[number], index: number): React.ReactNode {
    const hoverContents: Record<string, React.ReactNode> = {
        "Conclusão": (
            <div className="hover-content-inner">
                <div className="hover-badge">Performance</div>
                <div className="hover-main-text">100% conclusão</div>
                <div className="hover-sub-text">Todos os projetos</div>
                <div className="hover-extra-info">
          <span className="hover-icon-item">
            <TrendingUp className="size-4" />
            <span>50% antecipados</span>
          </span>
                </div>
            </div>
        ),
        "Suporte": (
            <div className="hover-content-inner">
                <div className="hover-badge">Disponibilidade</div>
                <div className="hover-main-text">24/7</div>
                <div className="hover-sub-text">Suporte dedicado</div>
                <div className="hover-extra-info">
          <span className="hover-icon-item">
            <Clock className="size-4" />
            <span>25% redução tempo</span>
          </span>
                </div>
            </div>
        ),
        "Satisfação": (
            <div className="hover-content-inner">
                <div className="hover-badge">Avaliação</div>
                <div className="hover-main-text">4.9/5</div>
                <div className="hover-sub-text">Analogia à União</div>
                <div className="hover-extra-info">
          <span className="hover-icon-item">
            <Users className="size-4" />
            <span>Referência no setor</span>
          </span>
                </div>
            </div>
        ),
        "Qualidade": (
            <div className="hover-content-inner">
                <div className="hover-badge">Certificação</div>
                <div className="hover-main-text">98%</div>
                <div className="hover-sub-text">Certificação das Cortes</div>
                <div className="hover-extra-info">
          <span className="hover-icon-item">
            <CheckCircle2 className="size-4" />
            <span>Padrões internacionais</span>
          </span>
                </div>
            </div>
        ),
        "Certificações": (
            <div className="hover-content-inner">
                <div className="hover-badge">Qualificação</div>
                <div className="hover-main-text">30+</div>
                <div className="hover-sub-text">Certificações reconhecidas</div>
                <div className="hover-extra-info">
          <span className="hover-icon-item">
            <Award className="size-4" />
            <span>Expertise comprovada</span>
          </span>
                </div>
            </div>
        ),
        "Empresas Atendidas": (
            <div className="hover-content-inner">
                <div className="hover-badge">Clientes</div>
                <div className="hover-main-text">50+</div>
                <div className="hover-sub-text">Empresas acreditadas</div>
                <div className="hover-extra-info">
          <span className="hover-icon-item">
            <Building className="size-4" />
            <span>Diversos setores</span>
          </span>
                </div>
            </div>
        )
    };

    return (
        <div className="hover-content-wrapper">
            {hoverContents[stat.label] || (
                <div className="hover-content-inner">
                    <div className="hover-badge">Info</div>
                    <div className="hover-main-text">100% qualidade</div>
                </div>
            )}
        </div>
    );
}

