'use client'

import React, { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { cn } from '@/utilities/ui'
import { Button } from '@/components/ui/button'
import type { BlockSettings } from '@/blocks/shared/types'

export type ContattiPageData = {
  settings?: BlockSettings | null
  heroTitle?: string | null
  heroSubtitle?: string | null
  contactInfo?: {
    email?: string | null
    phone?: string | null
    address?: string | null
    responseTime?: string | null
  } | null
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeInOut' as const },
  }),
}

export function ContattiClient({ pageData }: { pageData?: ContattiPageData | null }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ nome: '', email: '', telefono: '', messaggio: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-4 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#805CF6]/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#805CF6]/30 bg-[#805CF6]/10 px-3 py-1 text-xs font-medium text-violet-300">
              Parliamo del tuo progetto
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
              {pageData?.heroTitle ?? 'Contattaci'}
            </span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60"
          >
            {pageData?.heroSubtitle ?? 'Raccontaci il tuo progetto. Ti risponderemo entro 24 ore con una proposta su misura.'}
          </motion.p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="px-4 pb-24">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_340px]">
          {/* Form */}
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
            {submitted ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-[#805CF6]/25 bg-[#805CF6]/5 p-12 text-center">
                <div className="mb-4 flex size-14 items-center justify-center rounded-full border border-[#805CF6]/30 bg-[#805CF6]/15 text-violet-300">
                  <ArrowRight className="size-6" />
                </div>
                <h2 className="mb-2 text-xl font-bold">Messaggio inviato!</h2>
                <p className="text-sm text-white/55">
                  Grazie per averci contattato. Ti risponderemo entro 24 ore lavorative.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-[#805CF6]/15 bg-white/[0.03] p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="nome" className="text-xs font-medium text-white/60">
                      Nome e cognome *
                    </label>
                    <input
                      id="nome"
                      name="nome"
                      required
                      value={form.nome}
                      onChange={handleChange}
                      placeholder="Mario Rossi"
                      className={cn(
                        'rounded-lg border border-[#805CF6]/20 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-white/25',
                        'outline-none transition-all duration-200',
                        'focus:border-[#805CF6]/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-[#805CF6]/30',
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-white/60">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="mario@azienda.it"
                      className={cn(
                        'rounded-lg border border-[#805CF6]/20 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-white/25',
                        'outline-none transition-all duration-200',
                        'focus:border-[#805CF6]/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-[#805CF6]/30',
                      )}
                    />
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-1.5">
                  <label htmlFor="telefono" className="text-xs font-medium text-white/60">
                    Telefono
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="+39 333 000 0000"
                    className={cn(
                      'rounded-lg border border-[#805CF6]/20 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-white/25',
                      'outline-none transition-all duration-200',
                      'focus:border-[#805CF6]/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-[#805CF6]/30',
                    )}
                  />
                </div>

                <div className="mt-5 flex flex-col gap-1.5">
                  <label htmlFor="messaggio" className="text-xs font-medium text-white/60">
                    Descrivi il tuo progetto *
                  </label>
                  <textarea
                    id="messaggio"
                    name="messaggio"
                    required
                    rows={5}
                    value={form.messaggio}
                    onChange={handleChange}
                    placeholder="Raccontaci cosa stai cercando di realizzare, il tuo settore e il budget indicativo..."
                    className={cn(
                      'resize-none rounded-lg border border-[#805CF6]/20 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-white/25',
                      'outline-none transition-all duration-200',
                      'focus:border-[#805CF6]/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-[#805CF6]/30',
                    )}
                  />
                </div>

                <Button
                  type="submit"
                  className="mt-6 w-full border border-[#805CF6]/40 bg-[#805CF6] text-white shadow-[0_0_20px_-2px_rgba(128,92,246,0.6)] transition-all duration-200 hover:bg-[#9277F8] hover:shadow-[0_0_28px_-2px_rgba(128,92,246,0.8)]"
                >
                  Invia il messaggio <ArrowRight className="ml-1 size-4" />
                </Button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="flex flex-col gap-4"
          >
            {[
              {
                icon: Mail,
                label: 'Email',
                value: pageData?.contactInfo?.email ?? 'ciao@nadiamaar.dev',
                href: `mailto:${pageData?.contactInfo?.email ?? 'ciao@nadiamaar.dev'}`,
              },
              {
                icon: Phone,
                label: 'Telefono',
                value: pageData?.contactInfo?.phone ?? '+39 333 000 0000',
                href: `tel:${(pageData?.contactInfo?.phone ?? '+39 333 000 0000').replace(/\s/g, '')}`,
              },
              {
                icon: MapPin,
                label: 'Sede',
                value: pageData?.contactInfo?.address ?? 'Italia — lavoriamo da remoto',
                href: null,
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-start gap-4 rounded-xl border border-[#805CF6]/15 bg-white/[0.03] p-5"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-[#805CF6]/20 bg-[#805CF6]/10 text-violet-300">
                  <Icon className="size-4" />
                </div>
                <div>
                  <p className="text-xs text-white/40">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="mt-0.5 text-sm font-medium text-white transition-colors hover:text-violet-300"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-0.5 text-sm font-medium text-white">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="mt-2 rounded-xl border border-[#805CF6]/15 bg-white/[0.03] p-5">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#805CF6]">
                Tempi di risposta
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {pageData?.contactInfo?.responseTime ?? (
                  <>
                    Rispondiamo entro <span className="text-white">24 ore lavorative</span>. Per urgenze,
                    scrivici direttamente su WhatsApp.
                  </>
                )}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
