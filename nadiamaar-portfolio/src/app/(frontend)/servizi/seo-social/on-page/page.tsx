'use client'

import { Search, FileText, Code, Gauge } from 'lucide-react'
import { ServicePageTemplate, type ServicePageConfig } from '@/components/ServicePageTemplate'

const config: ServicePageConfig = {
  category: 'SEO & Social',
  title: 'SEO On-Page',
  subtitle: 'Ottimizzazione tecnica e contenutistica',
  description:
    'Dall\'audit tecnico alla struttura dei contenuti, ottimizziamo ogni aspetto on-page del tuo sito per scalare le posizioni su Google e portare traffico organico qualificato giorno dopo giorno.',
  features: [
    {
      icon: Search,
      title: 'Keyword research',
      description: 'Analisi delle parole chiave più profittevoli per il tuo settore e target.',
    },
    {
      icon: FileText,
      title: 'Ottimizzazione contenuti',
      description: 'Title, meta description, heading e testi ottimizzati per le query target.',
    },
    {
      icon: Code,
      title: 'Structured data',
      description: 'Implementazione di schema markup per rich snippet e maggiore visibilità.',
    },
    {
      icon: Gauge,
      title: 'Core Web Vitals',
      description: 'Ottimizzazione LCP, INP e CLS per soddisfare i requisiti di Google.',
    },
  ],
  featuredTitle: 'Strategia SEO gratuita per il tuo settore',
  featuredDescription:
    'Un piano di crescita organica pensato per il tuo mercato. Keyword, competitor analysis e roadmap d\'azione. Senza impegno.',
  featuredCta: 'Voglio la strategia',
  featuredHref: '/contatti',
}

export default function Page() {
  return <ServicePageTemplate config={config} />
}
