/**
* Portfolio Section Component
* Exibe uma galeria de projetos com filtros por categoria
*/

"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { PortfolioCard } from "./PortfolioCard";
import {
 PORTFOLIO_PROJECTS,
 PORTFOLIO_CATEGORIES,
} from "@/constants/portfolio";
import type { BaseComponentProps } from "@/types/components";

type PortfolioProps = BaseComponentProps;

/**
* Portfolio Section
*
* Seção de portfólio com:
* - Galeria de projetos
* - Filtros por categoria
* - Animações suaves
* - Links para projetos e GitHub
*/
export function Portfolio({ className }: PortfolioProps) {
 const [activeCategory, setActiveCategory] = useState<string>("all");

 // Filter projects based on active category
 const filteredProjects =
   activeCategory === "all"
     ? PORTFOLIO_PROJECTS
     : PORTFOLIO_PROJECTS.filter((project) => project.category === activeCategory);

 return (
   <section
     id="portfolio"
     className={cn(
       "relative py-20 px-4 sm:px-6 lg:px-8 pointer-events-auto",
       className
     )}
   >
     <div className="max-w-7xl mx-auto">
       {/* Header */}
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ duration: 0.5 }}
         className="text-center mb-16"
       >
         <SectionBadge label="Portfólio" />
         <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-6 mb-4">
           Projetos em Destaque
         </h2>
         <p className="text-lg text-slate-400 max-w-2xl mx-auto">
           Conheça alguns dos projetos que transformaram negócios e entregaram
           resultados reais para nossos clientes
         </p>
       </motion.div>

       {/* Category Filter */}
       <motion.div
         className="flex flex-wrap justify-center gap-3 mb-12"
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true, margin: "-100px" }}
       >
         {PORTFOLIO_CATEGORIES.map((category) => (
           <motion.button
             key={category.id}
             onClick={() => setActiveCategory(category.id)}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className={cn(
               "px-6 py-2 rounded-full font-medium transition-all duration-300",
               activeCategory === category.id
                 ? "bg-green-500 text-white shadow-lg"
                 : "border border-slate-600 text-slate-400 hover:text-white"
             )}
           >
             {category.label}
           </motion.button>
         ))}
       </motion.div>

       {/* Projects Grid */}
       <motion.div
         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true, margin: "-100px" }}
       >
         {filteredProjects.map((project, index) => (
           <PortfolioCard
             key={project.id}
             project={project}
             index={index}
           />
         ))}
       </motion.div>

       {/* Empty State */}
       {filteredProjects.length === 0 && (
         <motion.div
           className="text-center py-12"
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true, margin: "-100px" }}
         >
           <p className="text-slate-400 text-lg">
             Nenhum projeto encontrado nesta categoria
           </p>
         </motion.div>
       )}

       {/* CTA Section */}
       <motion.div
         className="mt-16 text-center"
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true, margin: "-100px" }}
       >
         <p className="text-slate-400 mb-6">
           Quer transformar seu próximo projeto?
         </p>
         <a
           href="#contact"
           className="inline-block px-8 py-3 rounded-full font-semibold bg-green-500 text-slate-950 transition-all duration-300 hover:scale-105 hover:shadow-lg"
         >
           Vamos Conversar
         </a>
       </motion.div>
     </div>
   </section>
 );
}
