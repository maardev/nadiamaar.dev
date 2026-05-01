'use client'

import { FileText, Image, Video, Layers } from 'lucide-react'
import { ServicePageTemplate, type ServicePageConfig } from '@/components/ServicePageTemplate'

const config: ServicePageConfig = {
  category: 'Servizi AI',
  title: 'AI Content Generation',
  subtitle: 'Contenuti su scala senza compromessi sulla qualità',
  description:
    'Articoli SEO, post social, descrizioni prodotto, video script: generiamo contenuti di qualità su larga scala grazie a workflow AI personalizzati e calibrati sul tono di voce del tuo brand.',
  features: [
    {
      icon: FileText,
      title: 'Articoli SEO',
      description: 'Contenuti ottimizzati per keyword con struttura semantica che piace a Google.',
    },
    {
      icon: Image,
      title: 'Immagini AI',
      description: 'Creazione di asset visivi coerenti con il brand senza costi di agenzia.',
    },
    {
      icon: Video,
      title: 'Video & Reel',
      description: 'Script, caption e copy per video short-form sui principali canali social.',
    },
    {
      icon: Layers,
      title: 'Brand consistency',
      description: 'Tono di voce, stile e messaggi calibrati e costanti su tutti i canali.',
    },
  ],
  featuredTitle: 'Scala la tua produzione di contenuti',
  featuredDescription:
    'Mostraci il tuo piano editoriale attuale. Ti proponiamo come triplicare l\'output mantenendo qualità e coerenza del brand.',
  featuredCta: 'Scopri come',
  featuredHref: '/contatti',
}

export default function Page() {
  return <ServicePageTemplate config={config} />
}
