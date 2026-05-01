'use client'

import { Palette, Search, Settings, Globe } from 'lucide-react'
import { ServicePageTemplate, type ServicePageConfig } from '@/components/ServicePageTemplate'

const config: ServicePageConfig = {
  category: 'Siti Aziendali',
  title: 'Siti Vetrina',
  subtitle: 'Presenza online elegante e professionale',
  description:
    'Un sito vetrina efficace non è solo bello da vedere: è ottimizzato per i motori di ricerca, veloce su ogni dispositivo e progettato per trasmettere fiducia e professionalità ai tuoi visitatori.',
  features: [
    {
      icon: Palette,
      title: 'Design su misura',
      description: 'Ogni sito è progettato da zero per riflettere l\'identità unica del tuo brand.',
    },
    {
      icon: Search,
      title: 'SEO nativo',
      description: 'Struttura tecnica ottimizzata per Google fin dal primo giorno di lancio.',
    },
    {
      icon: Settings,
      title: 'Gestione CMS',
      description: 'Aggiorna contenuti, immagini e pagine in autonomia senza toccare il codice.',
    },
    {
      icon: Globe,
      title: 'Mobile-first',
      description: 'Esperienza fluida e impeccabile su smartphone, tablet e desktop.',
    },
  ],
  featuredTitle: 'Demo live in 48 ore',
  featuredDescription:
    'Ricevi un mockup interattivo del tuo nuovo sito in due giorni lavorativi. Vedilo prima di decidere.',
  featuredCta: 'Richiedi la demo',
  featuredHref: '/contatti',
}

export default function Page() {
  return <ServicePageTemplate config={config} />
}
