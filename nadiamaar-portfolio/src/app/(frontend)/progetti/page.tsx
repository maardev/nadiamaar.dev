'use client'

import React, { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { cn } from '@/utilities/ui'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: 'easeOut' as const },
  }),
}

type Project = {
  title: string
  category: string
  description: string
  tags: string[]
  gradient: string
}

const projects: Project[] = [
  {
    title: 'FashionStore Italia',
    category: 'E-commerce Shopify',
    description: 'Store Shopify custom per brand di moda con 1.200+ prodotti, integrazione CRM e +42% conversion rate.',
    tags: ['Shopify', 'CRO', 'Integrazioni'],
    gradient: 'from-violet-500/20 to-fuchsia-500/10',
  },
  {
    title: 'StudioLegale Bianchi',
    category: 'Sito Vetrina',
    description: 'Restyling completo per studio legale con nuovo CMS, SEO on-page e incremento traffico organico del 180%.',
    tags: ['Next.js', 'SEO', 'CMS'],
    gradient: 'from-blue-500/20 to-violet-500/10',
  },
  {
    title: 'TechStart Assistant',
    category: 'Servizi AI',
    description: 'Chatbot AI multilingue per startup SaaS con integrazione HubSpot e 3.200 conversazioni/mese gestite autonomamente.',
    tags: ['Chatbot AI', 'HubSpot', 'WhatsApp'],
    gradient: 'from-emerald-500/20 to-blue-500/10',
  },
  {
    title: 'Arredo Casa Luxury',
    category: 'SEO & Google Ads',
    description: 'Campagna Google Ads e SEO per e-commerce di arredamento. ROAS 4.8x e +230% traffico organico in 6 mesi.',
    tags: ['Google Ads', 'SEO', 'E-commerce'],
    gradient: 'from-amber-500/20 to-orange-500/10',
  },
  {
    title: 'MedClinic Network',
    category: 'Automazione Workflow',
    description: 'Automazione completa dei processi di prenotazione, reminder e follow-up per catena di cliniche mediche.',
    tags: ['n8n', 'AI', 'Automazione'],
    gradient: 'from-rose-500/20 to-pink-500/10',
  },
  {
    title: 'FoodDelivery Pro',
    category: 'Landing Page & Ads',
    description: 'Landing page ad alta conversione per app food delivery con Meta Ads. CPL ridotto del 60% in 30 giorni.',
    tags: ['Meta Ads', 'CRO', 'Landing Page'],
    gradient: 'from-orange-500/20 to-red-500/10',
  },
]

const categories = ['Tutti', 'E-commerce Shopify', 'Sito Vetrina', 'Servizi AI', 'SEO & Google Ads', 'Automazione Workflow', 'Landing Page & Ads']

export default function ProgettiPage() {
  const [active, setActive] = useState('Tutti')
  const filtered = active === 'Tutti' ? projects : projects.filter((p) => p.category === active)

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-4 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#805CF6]/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#805CF6]/30 bg-[#805CF6]/10 px-3 py-1 text-xs font-medium text-violet-300">
              Case study & progetti
            </span>
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="mt-5 text-4xl font-bold tracking-tight md:text-6xl"
          >
            <span className="bg-gradient-to-r from-white via-white to-violet-300 bg-clip-text text-transparent">
              I nostri progetti
            </span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60"
          >
            Risultati reali per clienti reali. Ogni progetto è la prova concreta di ciò che possiamo fare per il tuo business.
          </motion.p>
        </div>
      </section>

      {/* ── Filtri ── */}
      <section className="px-4 pb-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  'cursor-pointer rounded-full border px-3 py-1 text-xs font-medium transition-all duration-200',
                  active === cat
                    ? 'border-[#805CF6]/60 bg-[#805CF6]/20 text-violet-200'
                    : 'border-[#805CF6]/15 bg-transparent text-white/50 hover:border-[#805CF6]/35 hover:text-white/80',
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial="hidden"
                animate="visible"
                custom={i}
                variants={fadeUp}
                className={cn(
                  'group relative flex flex-col overflow-hidden rounded-2xl border border-[#805CF6]/15 bg-white/[0.03]',
                  'cursor-pointer transition-all duration-300 hover:border-[#805CF6]/35',
                  'hover:shadow-[0_0_40px_-10px_rgba(128,92,246,0.35)]',
                )}
              >
                {/* Colour strip */}
                <div className={cn('h-32 w-full bg-gradient-to-br', project.gradient)} />

                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.15em] text-[#805CF6]">
                    {project.category}
                  </p>
                  <h3 className="mb-2 text-base font-semibold text-white">{project.title}</h3>
                  <p className="flex-1 text-xs leading-relaxed text-white/50">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-[#805CF6]/20 bg-[#805CF6]/8 px-2 py-0.5 text-[10px] text-violet-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute right-4 top-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <div className="flex size-8 items-center justify-center rounded-full border border-[#805CF6]/30 bg-[#0a0a0f]/80 text-violet-300">
                    <ExternalLink className="size-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="mb-4 text-sm text-white/40">Vuoi un risultato simile per il tuo business?</p>
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 rounded-lg border border-[#805CF6]/30 bg-[#805CF6]/10 px-5 py-2.5 text-sm font-medium text-violet-200 transition-all duration-200 hover:border-[#805CF6]/60 hover:bg-[#805CF6]/20 hover:shadow-[0_0_20px_-2px_rgba(128,92,246,0.5)]"
            >
              Parliamo del tuo progetto <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
