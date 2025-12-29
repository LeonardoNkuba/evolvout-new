"use client";

import { Header } from "@/components/layout";
import { COLORS } from "@/constants/theme";
import { Portfolio} from "@/components/sections/Portfolio";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";


/**
* Home Page
*
* Página principal da aplicação com:
* - Efeito de fundo líquido animado (LiquidEther)
* - Header com navegação
* - Hero section com CTAs
*/
export default function Home() {
 return (
   <main className="relative overflow-hidden" style={{ backgroundColor: COLORS.background }}>
     {/* Content Overlay - Permite eventos passarem mas mantém elementos interativos */}
     <div className="relative pointer-events-none" style={{ zIndex: 10 }}>
       <div className="pointer-events-auto">
         <Header />
        
         {/* Hero Section with Navy Blue Background */}
         <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: COLORS.navyBlue }}>
           <div className="relative" style={{ zIndex: 10 }}>
             <Hero />
           </div>
         </div>
        
         {/* Features Section - Sem LiquidEther */}
         <Features />
        
         {/* Portfolio Section */}
         <Portfolio />
        
         {/* Stats Section */}
         <Stats />
        
         {/* About Section */}
         <About />
        
         {/* FAQ Section */}
         <FAQ />
        
         {/* Testimonials Section */}
         <Testimonials />
        
         {/* Contact Section */}
         <Contact />
        
         {/* Footer */}
         <Footer />
       </div>
     </div>
   </main>
 );
}

