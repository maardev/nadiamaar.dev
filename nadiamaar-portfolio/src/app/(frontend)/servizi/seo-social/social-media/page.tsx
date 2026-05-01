'use client'

import { Share2, Calendar, Users, BarChart3 } from 'lucide-react'
import { ServicePageTemplate, type ServicePageConfig } from '@/components/ServicePageTemplate'

const config: ServicePageConfig = {
  category: 'SEO & Social',
  title: 'Social Media Management',
  subtitle: 'Costruisci una community attiva attorno al tuo brand',
  description:
    'Strategia, contenuti e gestione quotidiana dei tuoi profili social. Ti rappresentiamo online con coerenza e creatività, costruendo engagement reale con il tuo pubblico su ogni piattaforma.',
  features: [
    {
      icon: Share2,
      title: 'Strategia editoriale',
      description: 'Piano contenuti mensile allineato agli obiettivi di business e al pubblico target.',
    },
    {
      icon: Calendar,
      title: 'Calendario editoriale',
      description: 'Post pianificati, approvati e pubblicati con cadenza regolare e coerente.',
    },
    {
      icon: Users,
      title: 'Community management',
      description: 'Gestione di commenti, DM e interazioni per costruire relazioni autentiche.',
    },
    {
      icon: BarChart3,
      title: 'Report mensile',
      description: 'Analisi delle performance con insight e raccomandazioni per il mese successivo.',
    },
  ],
  featuredTitle: 'Vuoi che i tuoi social lavorino per te?',
  featuredDescription:
    'Gestiamo i tuoi profili come se fossero i nostri. Ti occupi del business, noi della presenza digitale.',
  featuredCta: 'Discuti la strategia',
  featuredHref: '/contatti',
}

export default function Page() {
  return <ServicePageTemplate config={config} />
}
