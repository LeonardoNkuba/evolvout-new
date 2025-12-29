'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { COLORS } from '@/constants/theme';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CookiesPage() {
  return (
    <main
      className="relative min-h-screen"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Header com volta */}
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-green-500 transition">
            <ArrowLeft size={20} />
            Voltar
          </Link>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold text-white mb-8">Política de Cookies</h1>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. O que são Cookies?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Cookies são pequenos ficheiros de texto armazenados no seu dispositivo quando visita o nosso website. Eles permitem-nos lembrar informações sobre a sua visita e melhorar a sua experiência.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Tipos de Cookies que Utilizamos</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Utilizamos os seguintes tipos de cookies:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento do website</li>
                <li><strong>Cookies de Desempenho:</strong> Ajudam-nos a entender como você utiliza o site</li>
                <li><strong>Cookies de Funcionalidade:</strong> Melhoram a funcionalidade e personalização</li>
                <li><strong>Cookies de Marketing:</strong> Utilizados para rastrear e otimizar anúncios</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Terceiros e Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Alguns dos nossos parceiros podem usar cookies para análise e publicidade. Isso inclui:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Google Analytics - para análise de tráfego</li>
                <li>Redes sociais - para integração e publicidade</li>
                <li>Provedores de publicidade - para otimização de anúncios</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Como Controlar Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Você pode controlar e/ou eliminar cookies através das definições do seu navegador:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Google Chrome - Menu &gt; Definições &gt; Privacidade</li>
                <li>Firefox - Menu &gt; Preferências &gt; Privacidade</li>
                <li>Safari - Preferências &gt; Privacidade</li>
                <li>Edge - Definições &gt; Privacidade</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Duração dos Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Alguns cookies são eliminados quando fecha o navegador (cookies de sessão), enquanto outros persistem por períodos mais longos (cookies persistentes).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Consentimento</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ao continuar a utilizar o nosso website, você consente com o uso de cookies conforme descrito nesta política.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Contacto</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Para questões sobre cookies, contacte-nos em: <br />
                <span className="text-green-500 font-semibold">contacto@evolvout.com</span>
              </p>
            </section>

            <section className="mb-12 pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                Última atualização: {new Date().toLocaleDateString('pt-PT')}
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
