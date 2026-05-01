'use client'

import { MessageSquare, GitBranch, Zap, Activity } from 'lucide-react'
import { ServicePageTemplate, type ServicePageConfig } from '@/components/ServicePageTemplate'

const config: ServicePageConfig = {
  category: 'Siti Aziendali',
  title: 'Landing Page',
  subtitle: 'Pagine ad alta conversione per ogni campagna',
  description:
    'Landing page progettate per convertire. Ogni elemento — dal copy alle CTA, dalla struttura visiva alle micro-animazioni — è ottimizzato per trasformare i click delle tue campagne in lead e vendite.',
  features: [
    {
      icon: MessageSquare,
      title: 'Copy persuasivo',
      description: 'Testi scritti con tecniche di copywriting per massimizzare l\'engagement.',
    },
    {
      icon: GitBranch,
      title: 'A/B Testing',
      description: 'Varianti multiple testate per trovare la versione con il conversion rate più alto.',
    },
    {
      icon: Zap,
      title: 'Caricamento rapido',
      description: 'Performance ottimizzata per non perdere visitatori durante il caricamento.',
    },
    {
      icon: Activity,
      title: 'Analytics integrato',
      description: 'Tracciamento completo di eventi, form e micro-conversioni in tempo reale.',
    },
  ],
  featuredTitle: 'La tua campagna merita una landing page vincente',
  featuredDescription:
    'Raccontaci la tua prossima campagna. Progettiamo una landing page su misura in tempi record.',
  featuredCta: 'Inizia il progetto',
  featuredHref: '/contatti',
}

export default function Page() {
  return <ServicePageTemplate config={config} />
}
