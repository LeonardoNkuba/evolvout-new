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
    description: "Estratégia, conteúdo e campanhas para aproximar a sua marca do público certo",
    icon: Megaphone,
  },
  {
    title: "Desenvolvimento Web",
    description: "Websites e aplicações pensados para vender, informar e simplificar operações",
    icon: Code,
  },
  {
    title: "Design & Audiovisual",
    description: "Identidade visual, conteúdo e peças audiovisuais consistentes com a sua marca",
    icon: Palette,
  },
  {
    title: "Tecnologia Empresarial",
    description: "Configuração de equipamentos, software e suporte para o trabalho diário da sua equipa",
    icon: Cpu,
  },
] as const;

