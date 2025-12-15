/**
 * Statistics constants
 * Define as estatísticas e números da empresa
 */

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export const STATS: Stat[] = [
  {
    value: "100%",
    label: "Conclusão"
  },
  {
    value: "24/7",
    label: "Suporte"
  },
  {
    value: "4.9/5",
    label: "Satisfação"
  },
  {
    value: "98%",
    label: "Qualidade"
  },
  {
    value: "30+",
    label: "Certificações"
  },
  {
    value: "50+",
    label: "Empresas Atendidas"
  },
] as const;

