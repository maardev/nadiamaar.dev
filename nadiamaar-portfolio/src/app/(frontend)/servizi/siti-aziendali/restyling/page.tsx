'use client'

import { Search, Sparkles, TrendingUp, Gauge } from 'lucide-react'
import { ServicePageTemplate, type ServicePageConfig } from '@/components/ServicePageTemplate'

const config: ServicePageConfig = {
  category: 'Siti Aziendali',
  title: 'Restyling Web',
  subtitle: 'Rinnova il tuo sito senza perdere nulla',
  description:
    'Il tuo sito è datato, lento o non converte come dovrebbe? Lo analizziamo, lo riprogettiam e lo migriamo preservando il tuo storico SEO e migliorando ogni metrica che conta davvero.',
  features: [
    {
      icon: Search,
      title: 'Audit completo',
      description: 'Analisi tecnica, SEO e UX del sito attuale prima di intervenire.',
    },
    {
      icon: Sparkles,
      title: 'Nuovo design',
      description: 'Restyling moderno che rispecchia i valori del tuo brand e cattura l\'attenzione.',
    },
    {
      icon: TrendingUp,
      title: 'SEO preservato',
      description: 'Redirect e struttura ottimizzati per non perdere un solo punto di ranking.',
    },
    {
      icon: Gauge,
      title: 'Velocità ottimizzata',
      description: 'Il nuovo sito è significativamente più veloce del precedente su ogni device.',
    },
  ],
  featuredTitle: 'È ora di rinnovare la tua presenza online',
  featuredDescription:
    'Richiedi un\'analisi gratuita del tuo sito attuale. Ti mostriamo i 5 problemi principali e come risolverli.',
  featuredCta: 'Analisi gratuita',
  featuredHref: '/contatti',
}

export default function Page() {
  return <ServicePageTemplate config={config} />
}
