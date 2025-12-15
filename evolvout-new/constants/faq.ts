/**
 * FAQ constants
 * Define as perguntas frequentes e suas respostas
 */

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Como funciona o processo de desenvolvimento de soluções digitais?",
    answer: "Transformamos ideias em soluções digitais inteligentes através de um processo claro: começamos entendendo sua visão e objetivos, depois planejamos a melhor estratégia digital, criamos a solução com excelência técnica, e acompanhamos os resultados para otimização contínua. Todo projeto é adaptado à realidade do mercado angolano.",
    category: "Processo"
  },
  {
    question: "Quanto tempo leva para criar uma solução digital completa?",
    answer: "O tempo depende do escopo do projeto. Websites básicos podem ficar prontos em 2-3 semanas, enquanto soluções digitais complexas (aplicativos, e-commerce, sistemas) podem levar 1-3 meses. Após a análise inicial, fornecemos um cronograma realista com marcos claros para acompanhamento.",
    category: "Tempo"
  },
  {
    question: "Quais serviços a EvolvOut oferece para empresas angolanas?",
    answer: "Oferecemos soluções completas para o crescimento digital: Marketing Digital, Desenvolvimento de Websites e Apps, Design e Audiovisual, e Hardware & Software personalizado. Criamos experiências reais e práticas adaptadas ao mercado angolano para negócios que desejam crescer no mundo digital.",
    category: "Serviços"
  },
  {
    question: "Vocês oferecem suporte técnico após a entrega?",
    answer: "Sim! Oferecemos suporte 24/7 para todas as soluções desenvolvidas. Nosso suporte inclui manutenção contínua, atualizações de segurança, otimizações de performance, e treinamento para sua equipe. Estamos sempre disponíveis para garantir que sua presença digital funcione perfeitamente em Angola.",
    category: "Suporte"
  },
  {
    question: "Como funciona o investimento em soluções digitais?",
    answer: "Após analisar suas necessidades, apresentamos um orçamento transparente e personalizado. O investimento pode ser parcelado conforme o cronograma do projeto, com pagamentos associados a marcos de entrega. Oferecemos opções flexíveis para empresas de todos os portes em Angola.",
    category: "Investimento"
  }
] as const;