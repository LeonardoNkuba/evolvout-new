import { Header } from "@/components/layout";
import { COLORS } from "@/constants/theme";
import { Portfolio} from "@/components/sections/Portfolio";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Process } from "@/components/sections/Process";


/**
* Home Page
*
* Página principal da aplicação com:
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
        
         {/* Features Section */}
         <Features />
        
         {/* Portfolio Section */}
         <Portfolio />

         {/* Process Section */}
         <Process />
        
         {/* About Section */}
         <About />
        
         {/* FAQ Section */}
         <FAQ />
        
         {/* Contact Section */}
         <Contact />
        
         {/* Footer */}
         <Footer />
       </div>
     </div>
   </main>
 );
}

