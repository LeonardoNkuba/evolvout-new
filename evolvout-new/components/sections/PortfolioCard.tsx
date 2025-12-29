/**
 * Portfolio Card Component
 * Exibe um projeto individual do portfolio com imagem, description and tags
* */

"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import type { BaseComponentProps} from "@/types/components";
import type { PortfolioProject} from "@/constants/portfolio";

interface PortfolioCardProps extends BaseComponentProps {
    project: PortfolioProject;
    index: number;
}

/**
 * Card de projeto individual
 * */
export function PortfolioCard({ project, index, className} : PortfolioCardProps) {
    const containerVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.1,
            }
        }
    };

    const hoverVariants = {
        initial: { scale: 1},
        hover: {scale: 1.02},
    };

    return (
        <motion.div
            variants = {containerVariants}
            whileHover = "hover"
            initial = "hidden"
            whileInView = "visible"
            viewport={{once: true, margin: "-100px"}}
            className = {cn("group h-full", className)}
            >
            <motion.div
                variants = {hoverVariants}
                className = "relative h-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50"
            >
                {/* Image Container */}
                <div className = "relative h-64 overflow-hidden bg-linear-to-br from-slate-800 to-slate-900">
                    {project.image ? (
                       <Image
                           src={project.image}
                           alt={project.title}
                           fill
                           className = "w-full h-full object-cover group-hover:sclae-110 transition-transform duration-500"
                           priority={false}
                       />
                    ) : (
                        <div className="w-full h-full flex items-center justofy-center">
                            <div className="text-4xl font-bold text-slate-600">
                                {project.title.charAt(0)}
                            </div>
                        </div>
                    )}

                    {/* Category base */}
                    <div className="absolute top-4 right-4">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-500 text-slate-950">
                            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                        </span>
                    </div>

                    {/* Overlay on Hover */}
                    <div className = "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-br from-green-500/20 to-green-600/40"/>
                </div>

                {/* Content Container */}
                <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 text-white line-clamp-2">
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                        {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-1 text-xs font-medium rounded-lg bg-green-500/20 text-green-400"
                            >
                                {tag}
                            </span>
                        ))}
                        {project.tags.length > 3 && (
                            <span className="px-2 py-1 text-xs font-medium rounded-lg bg-green-500/20 text-green-400">
                                +{project.tags.length - 3} more
                            </span>
                        )}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-green-500 text-slate-950 font-medium transition-all hover:shadow-lg"
                                title="Ver projeto ao vivo"
                            >
                                <ExternalLink size={16}/>
                                <span>Ver Projeto</span>
                            </a>
                        )}
                        {project.github && (
                            <a 
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center py-2 rounded-lg bg-green-500/15 text-green-400 transition-all hover:bg-green-500/25"
                                title="Ver código no GitHub"
                            >
                                <Github size={16}/>
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>

    );
}
