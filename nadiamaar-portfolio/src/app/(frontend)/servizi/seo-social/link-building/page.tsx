'use client'

import { Link2, Users, TrendingUp, Activity } from 'lucide-react'
import { ServicePageTemplate, type ServicePageConfig } from '@/components/ServicePageTemplate'

const config: ServicePageConfig = {
  category: 'SEO & Social',
  title: 'Link Building',
  subtitle: 'Costruisci l\'autorità del tuo dominio',
  description:
    'Backlink di qualità da siti autorevoli del tuo settore. Strategie white-hat che aumentano il Domain Authority, migliorano il ranking in modo sostenibile e resistono agli aggiornamenti di Google.',
  features: [
    {
      icon: Link2,
      title: 'Backlink di qualità',
      description: 'Solo link da siti con alta autorità e pertinenza tematica al tuo settore.',
    },
    {
      icon: Users,
      title: 'Outreach mirato',
      description: 'Campagne di digital PR per ottenere menzioni e link su media di settore.',
    },
    {
      icon: TrendingUp,
      title: 'Domain Authority',
      description: 'Crescita costante e misurabile del profilo backlink nel tempo.',
    },
    {
      icon: Activity,
      title: 'Monitoraggio costante',
      description: 'Tracciamento del profilo link e rimozione di eventuali link tossici.',
    },
  ],
  featuredTitle: 'Analisi gratuita del tuo profilo backlink',
  featuredDescription:
    'Ti mostriamo lo stato attuale dei tuoi link, i gap rispetto ai competitor e le opportunità immediate da cogliere.',
  featuredCta: 'Analizza i miei link',
  featuredHref: '/contatti',
}

export default function Page() {
  return <ServicePageTemplate config={config} />
}
