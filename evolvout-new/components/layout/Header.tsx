"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { CTA_BUTTON_TEXT, NAVIGATION_ITEMS } from "@/constants/navigation";
import { HEADER_ANIMATION, NAV_ITEM_ANIMATION, NAV_ITEM_TRANSITION, HOVER_SCALE } from "@/config/animations";
import type { BaseComponentProps } from "@/types/components";

type HeaderProps = BaseComponentProps;

/**
 * Header Component
 * 
 * Navegação principal do site com:
 * - Logo responsivo
 * - Links de navegação (desktop)
 * - Botão principal de contacto
 * - Menu mobile hamburger
 * 
 * @param className - Classes CSS adicionais
 */
export function Header({ className }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;
    headerRef.current?.querySelector<HTMLElement>("#mobile-navigation a")?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
      if (event.key === "Tab") {
        const focusable = Array.from(headerRef.current?.querySelectorAll<HTMLElement>("#mobile-navigation a, #mobile-navigation button") ?? []);
        const first = focusable[0];
        const last = focusable.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    const handlePointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("pointerdown", handlePointerDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      ref={headerRef}
      {...HEADER_ANIMATION}
      className={cn(
        "fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50",
        "w-fit max-w-[calc(100vw-2rem)]",
        "pointer-events-auto overflow-visible",
        className
      )}
    >
      <nav
        aria-label="Navegação principal"
        className={cn(
          "flex items-center justify-between",
          "px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10",
          "py-2.5 sm:py-3 md:py-3.5 lg:py-4",
          "rounded-full",
          "backdrop-blur-2xl bg-black/40 border border-white/20",
          "shadow-[0_8px_32px_0_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05)]",
          "relative min-w-0 overflow-visible w-full"
        )}
      >
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            const target = document.querySelector('#home');
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          {...HOVER_SCALE}
          className="flex items-center group shrink-0 cursor-pointer mr-6 sm:mr-8 lg:mr-12 xl:mr-16"
        >
          <Image
            src="/logo.PNG"
            alt="EvolvOut"
            width={120}
            height={40}
            className="h-5 sm:h-6 md:h-7 lg:h-8 xl:h-10 w-auto object-contain"
            style={{ aspectRatio: "120/40" }}
            priority
          />
        </motion.a>

        {/* Navigation Links - Desktop */}
        <div
          className="hidden lg:flex items-center gap-2 xl:gap-3 flex-1 justify-center min-w-0 max-w-full"
        >
          {NAVIGATION_ITEMS.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(item.href);
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              {...NAV_ITEM_ANIMATION}
              transition={{
                delay: NAV_ITEM_TRANSITION.baseDelay + index * NAV_ITEM_TRANSITION.increment,
              }}
              className={cn(
                "px-2 xl:px-3 py-2",
                "text-white/70 hover:text-white",
                "text-sm xl:text-base font-medium",
                "transition-colors duration-200 ease-out",
                "whitespace-nowrap shrink-0",
                "cursor-pointer"
              )}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0 ml-6 sm:ml-8 lg:ml-12 xl:ml-16">
          {/* Hamburger Menu - Mobile */}
          <button
            ref={menuButtonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col items-center justify-center gap-1.5 w-6 h-6 cursor-pointer group"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className={cn(
              "w-5 h-0.5 bg-white transition-all duration-300 block",
              isMenuOpen && "rotate-45 translate-y-2"
            )} />
            <span className={cn(
              "w-5 h-0.5 bg-white transition-all duration-300 block",
              isMenuOpen && "opacity-0"
            )} />
            <span className={cn(
              "w-5 h-0.5 bg-white transition-all duration-300 block",
              isMenuOpen && "-rotate-45 -translate-y-2"
            )} />
          </button>

          <a
            href="#contact"
            onClick={(event) => {
              event.preventDefault();
              handleNavClick("#contact");
            }}
            className="hidden rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-300 lg:inline-flex"
          >
            {CTA_BUTTON_TEXT}
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          id="mobile-navigation"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "absolute top-full left-0 right-0 mt-2",
            "lg:hidden",
            "backdrop-blur-2xl bg-black/40 border border-white/20",
            "rounded-2xl",
            "shadow-[0_8px_32px_0_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05)]",
            "overflow-hidden"
          )}
        >
          <nav className="flex flex-col divide-y divide-white/10">
            {NAVIGATION_ITEMS.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  "px-4 py-3",
                  "text-white/70 hover:text-white",
                  "text-sm font-medium",
                  "transition-colors duration-200 ease-out",
                  "cursor-pointer"
                )}
              >
                {item.label}
              </motion.a>
            ))}
            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                handleNavClick("#contact");
              }}
              className="m-3 rounded-xl bg-emerald-400 px-4 py-3 text-center text-sm font-semibold text-slate-950"
            >
              {CTA_BUTTON_TEXT}
            </a>
          </nav>
        </motion.div>
      )}
      </AnimatePresence>

    </motion.header>
  );
}

