'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, ArrowRight, Zap } from 'lucide-react'
import { cn } from '@/utilities/ui'
import { Button } from '@/components/ui/button'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

type Plan = {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  highlighted: boolean
}

const plans: Plan[] = [
  {
    name: 'Starter',
    price: '990',
    period: 'una tantum',
    description: 'Perfetto per professionisti e piccole imprese che vogliono una presenza online efficace.',
    features: [
      'Sito vetrina fino a 5 pagine',
      'Design responsive mobile-first',
      'Ottimizzazione SEO on-page',
      'CMS per gestione autonoma',
      'Integrazione Google Analytics',
      'Supporto 30 giorni post-lancio',
    ],
    cta: 'Inizia con Starter',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '2.490',
    period: 'una tantum',
    description: 'La scelta ideale per aziende che vogliono crescere online con funzionalità avanzate.',
    features: [
      'Tutto di Starter, più:',
      'E-commerce o landing page',
      'Integrazioni CRM & newsletter',
      'A/B testing e ottimizzazione CRO',
      'Dashboard analytics avanzata',
      'Strategia SEO + content plan',
      'Supporto 90 giorni post-lancio',
    ],
    cta: 'Scegli il piano Pro',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'su preventivo',
    description: 'Soluzioni su misura per aziende con esigenze complesse e obiettivi ambiziosi.',
    features: [
      'Tutto di Pro, più:',
      'Sviluppo custom illimitato',
      'Chatbot AI e automazioni',
      'Analisi predittiva & BI',
      'Account manager dedicato',
      'SLA garantito',
      'Supporto prioritario 12 mesi',
    ],
    cta: 'Richiedi preventivo',
    highlighted: false,
  },
]

export default function PrezziPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-4 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#805CF6]/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#805CF6]/30 bg-[#805CF6]/10 px-3 py-1 text-xs font-medium text-violet-300">
              Prezzi trasparenti
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
              Scegli il piano giusto
            </span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60"
          >
            Nessun costo nascosto, nessuna sorpresa. Prezzi chiari per ogni fase della tua crescita digitale.
          </motion.p>
        </div>
      </section>

      {/* ── Piani ── */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial="hidden"
                animate="visible"
                custom={i}
                variants={fadeUp}
                className={cn(
                  'relative flex flex-col rounded-2xl border p-8 transition-all duration-300',
                  plan.highlighted
                    ? 'border-[#805CF6]/50 bg-[#805CF6]/10 shadow-[0_0_60px_-15px_rgba(128,92,246,0.5)]'
                    : 'border-[#805CF6]/15 bg-white/[0.03] hover:border-[#805CF6]/30',
                )}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#805CF6] px-3 py-1 text-xs font-medium text-white">
                      <Zap className="size-3" /> Più popolare
                    </span>
                  </div>
                )}

                <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#805CF6]">
                  {plan.name}
                </p>
                <div className="mt-3 flex items-end gap-1">
                  <span className="text-4xl font-bold">
                    {plan.price === 'Custom' ? plan.price : `€${plan.price}`}
                  </span>
                  <span className="mb-1 text-sm text-white/40">{plan.period}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{plan.description}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-white/70">
                      <Check className="mt-0.5 size-4 shrink-0 text-[#805CF6]" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={cn(
                    'mt-8 w-full transition-all duration-200',
                    plan.highlighted
                      ? 'border border-[#805CF6]/40 bg-[#805CF6] text-white shadow-[0_0_20px_-2px_rgba(128,92,246,0.6)] hover:bg-[#9277F8]'
                      : 'border border-[#805CF6]/25 bg-transparent text-white hover:bg-[#805CF6]/10',
                  )}
                >
                  <Link href="/contatti">
                    {plan.cta} <ArrowRight className="ml-1 size-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 text-center text-sm text-white/35"
          >
            Non sei sicuro del piano giusto?{' '}
            <Link href="/contatti" className="text-[#805CF6] underline-offset-2 hover:underline">
              Parlaci del tuo progetto
            </Link>{' '}
            e ti guideremo verso la soluzione migliore.
          </motion.p>
        </div>
      </section>
    </div>
  )
}
