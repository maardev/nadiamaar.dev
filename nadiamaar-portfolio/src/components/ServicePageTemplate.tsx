'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import { type LucideIcon, ArrowRight } from 'lucide-react'
import { cn } from '@/utilities/ui'
import { Button } from '@/components/ui/button'

export type ServiceFeature = {
  icon: LucideIcon
  title: string
  description: string
}

export type ServicePageConfig = {
  category: string
  title: string
  subtitle: string
  description: string
  features: ServiceFeature[]
  featuredTitle: string
  featuredDescription: string
  featuredCta?: string
  featuredHref?: string
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' as const },
  }),
}

export function ServicePageTemplate({ config }: { config: ServicePageConfig }) {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-4 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#805CF6]/20 blur-3xl" />
        <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#805CF6]/30 bg-[#805CF6]/10 px-3 py-1 text-xs font-medium text-violet-300">
              {config.category}
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
              {config.title}
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="mt-3 text-lg font-medium text-[#805CF6]"
          >
            {config.subtitle}
          </motion.p>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/60"
          >
            {config.description}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={4}
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Button
              asChild
              className="border border-[#805CF6]/40 bg-[#805CF6] text-white shadow-[0_0_20px_-2px_rgba(128,92,246,0.6)] transition-all duration-200 hover:bg-[#9277F8] hover:shadow-[0_0_28px_-2px_rgba(128,92,246,0.8)]"
            >
              <Link href="/contatti">
                Inizia ora <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#805CF6]/30 bg-transparent text-white hover:bg-[#805CF6]/10 hover:text-white"
            >
              <Link href="/progetti">Vedi i progetti</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="px-4 pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {config.features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={i}
                variants={fadeUp}
                className={cn(
                  'group cursor-default rounded-2xl border border-[#805CF6]/15 bg-white/[0.03] p-6',
                  'transition-all duration-300 hover:border-[#805CF6]/40 hover:bg-[#805CF6]/5',
                  'hover:shadow-[0_0_30px_-8px_rgba(128,92,246,0.4)]',
                )}
              >
                <div className="mb-4 flex size-11 items-center justify-center rounded-xl border border-[#805CF6]/20 bg-[#805CF6]/10 text-violet-300 transition-all duration-200 group-hover:border-[#805CF6]/50 group-hover:bg-[#805CF6]/20 group-hover:shadow-[0_0_15px_-2px_rgba(128,92,246,0.6)]">
                  <feat.icon className="size-5" />
                </div>
                <h3 className="mb-2 text-sm font-semibold text-white">{feat.title}</h3>
                <p className="text-xs leading-relaxed text-white/50">{feat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn(
              'relative overflow-hidden rounded-2xl border border-[#805CF6]/25 p-8 text-center md:p-12',
              'bg-gradient-to-br from-[#805CF6]/15 via-[#0a0a0f] to-fuchsia-500/10',
              'shadow-[0_0_60px_-20px_rgba(128,92,246,0.5)]',
            )}
          >
            <div className="pointer-events-none absolute -top-16 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#805CF6]/30 blur-3xl" />
            <p className="relative mb-2 text-xs font-medium uppercase tracking-[0.15em] text-[#805CF6]">
              Pronto a iniziare?
            </p>
            <h2 className="relative mb-4 text-2xl font-bold md:text-3xl">{config.featuredTitle}</h2>
            <p className="relative mx-auto mb-8 max-w-xl text-sm leading-relaxed text-white/55">
              {config.featuredDescription}
            </p>
            <Button
              asChild
              className="border border-[#805CF6]/40 bg-[#805CF6] text-white shadow-[0_0_20px_-2px_rgba(128,92,246,0.6)] transition-all duration-200 hover:bg-[#9277F8]"
            >
              <Link href={config.featuredHref ?? '/contatti'}>
                {config.featuredCta ?? 'Contattaci'} <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
