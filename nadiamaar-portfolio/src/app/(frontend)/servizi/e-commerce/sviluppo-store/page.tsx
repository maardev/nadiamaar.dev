'use client'

import { Zap, Palette, TrendingUp, Layers } from 'lucide-react'
import { ServicePageTemplate, type ServicePageConfig } from '@/components/ServicePageTemplate'

const config: ServicePageConfig = {
  category: 'E-commerce',
  title: 'Sviluppo Store Shopify',
  subtitle: 'Store ottimizzati per la conversione',
  description:
    'Progettiamo e sviluppiamo store Shopify su misura che convertono visitatori in clienti. Dal design alla configurazione avanzata, ogni dettaglio è pensato per massimizzare le vendite e offrire una esperienza di acquisto memorabile',
  features: [
    {
      icon: Zap,
      title: 'Performance fulminea',
      description: 'Tempi di caricamento sotto i 2 secondi per ridurre il tasso di abbandono.',
    },
    {
      icon: Palette,
      title: 'UX su misura',
      description: 'Design personalizzato allineato al tuo brand e ottimizzato per la conversione.',
    },
    {
      icon: TrendingUp,
      title: 'CRO integrato',
      description: 'Funnel di acquisto progettato per massimizzare il valore medio dell\'ordine.',
    },
    {
      icon: Layers,
      title: 'Scalabile',
      description: 'Architettura robusta pronta a crescere insieme al tuo business.',
    },
  ],
  featuredTitle: 'Audit Shopify Gratuito',
  featuredDescription:
    'Analizziamo il tuo store e ti mostriamo come aumentare le conversioni del 30% in 90 giorni. Senza impegno.',
  featuredCta: 'Prenota l\'audit',
  featuredHref: '/contatti',
}

export default function Page() {
  return <ServicePageTemplate config={config} />
}
