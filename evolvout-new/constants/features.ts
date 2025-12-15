/**
 * Services constants
 * Define os serviços oferecidos pela empresa
 */

import { Code, Megaphone, Palette, Cpu} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const SERVICES: Service[] = [
  {
    title: "Marketing Digital",
    description: "Estratégias que conectam sua marca ao público certo",
    icon: Megaphone,
  },
  {
    title: "Desenvolvimento Web",
    description: "Sites modernos e funcionais que impulsionam seu negócio",
    icon: Code,
  },
  {
    title: "Design & Audiovisual",
    description: "Identidades visuais que contam histórias memoráveis",
    icon: Palette,
  },
  {
    title: "Hardware & Software",
    description: "Soluções tecnológicas completas para sua empresa",
    icon: Cpu,
  },
] as const;

