"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { COLORS } from "@/constants/theme";
import type { Service } from "@/constants/features";

interface ServiceCardProps {
  service: Service;
  index: number;
  className?: string;
}

/**
 * ServiceCard Component
 * 
 * Card individual de serviço
 * Garante altura uniforme entre todos os cards
 */
export function ServiceCard({ service, index, className }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <div
      className={cn("h-full", className)}
      style={{ animationDelay: `${index * 50}ms` }}
    >
        <Card className="group bg-white/[0.035] hover:bg-white/[0.06] transition-colors duration-200 h-full border border-white/10 hover:border-emerald-400/30 flex flex-col min-h-[140px]">
          <CardContent className="p-4 flex-1 flex flex-col">
            <div className="flex items-start gap-3">
              <div
                className="shrink-0 p-2 rounded-lg transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.primary}20, ${COLORS.secondary}20)`,
                }}
              >
                <div style={{ color: COLORS.primary }}>
                  <Icon className="size-5" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-sm sm:text-base mb-2 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
    </div>
  );
}

