'use client'

import { Megaphone, Target, GitBranch, TrendingUp } from 'lucide-react'
import { ServicePageTemplate, type ServicePageConfig } from '@/components/ServicePageTemplate'

const config: ServicePageConfig = {
  category: 'SEO & Social',
  title: 'Google & Meta Ads',
  subtitle: 'Campagne paid che portano risultati misurabili',
  description:
    'Campagne Google Search, Display e Meta Ads gestite da esperti certificati. Targeting preciso, creatività che convertono e ottimizzazione continua per massimizzare il ROAS e il ROI di ogni euro investito.',
  features: [
    {
      icon: Megaphone,
      title: 'Campagne su misura',
      description: 'Struttura e strategia costruite attorno ai tuoi obiettivi e al tuo budget.',
    },
    {
      icon: Target,
      title: 'Targeting avanzato',
      description: 'Audience personalizzate, lookalike e remarketing per raggiungere chi converte.',
    },
    {
      icon: GitBranch,
      title: 'A/B Testing Ads',
      description: 'Test continui su copy, creatività e landing page per ottimizzare le performance.',
    },
    {
      icon: TrendingUp,
      title: 'ROI trasparente',
      description: 'Report settimanali con metriche chiare: ROAS, CPA, CPL e revenue generate.',
    },
  ],
  featuredTitle: 'Campagna di prova senza rischi',
  featuredDescription:
    'Gestiamo il tuo primo mese di campagne con supervisione dedicata. Ti mostriamo i risultati prima di qualsiasi impegno a lungo termine.',
  featuredCta: 'Inizia la campagna',
  featuredHref: '/contatti',
}

export default function Page() {
  return <ServicePageTemplate config={config} />
}
