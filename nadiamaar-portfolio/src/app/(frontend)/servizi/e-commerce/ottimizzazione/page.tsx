'use client'

import { GitBranch, Activity, TrendingUp, Target } from 'lucide-react'
import { ServicePageTemplate, type ServicePageConfig } from '@/components/ServicePageTemplate'

const config: ServicePageConfig = {
  category: 'E-commerce',
  title: 'Ottimizzazione Conversioni',
  subtitle: 'Trasforma il traffico esistente in fatturato',
  description:
    'Con CRO, A/B testing e analisi approfondita del comportamento utente, identifichiamo le frizioni nel tuo funnel di acquisto e le eliminiamo. Più conversioni, stesso traffico.',
  features: [
    {
      icon: GitBranch,
      title: 'A/B Testing',
      description: 'Sperimentiamo varianti di pagine e flussi per trovare la combinazione vincente.',
    },
    {
      icon: Activity,
      title: 'Heatmap & Analytics',
      description: 'Analisi del comportamento reale degli utenti su ogni pagina del tuo store.',
    },
    {
      icon: TrendingUp,
      title: 'Funnel Analysis',
      description: 'Mappa completa del percorso d\'acquisto con identificazione dei punti di abbandono.',
    },
    {
      icon: Target,
      title: 'ROI misurabile',
      description: 'Ogni ottimizzazione è tracciata e il ritorno sull\'investimento è documentato.',
    },
  ],
  featuredTitle: 'Scopri dove stai perdendo vendite',
  featuredDescription:
    'Un audit CRO gratuito per identificare i 3 principali punti di abbandono nel tuo store. Risultati in 48 ore.',
  featuredCta: 'Richiedi audit CRO',
  featuredHref: '/contatti',
}

export default function Page() {
  return <ServicePageTemplate config={config} />
}
