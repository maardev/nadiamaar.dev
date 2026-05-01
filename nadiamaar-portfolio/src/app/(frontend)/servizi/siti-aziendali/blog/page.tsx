'use client'

import { FileText, Settings, Mail, BarChart3 } from 'lucide-react'
import { ServicePageTemplate, type ServicePageConfig } from '@/components/ServicePageTemplate'

const config: ServicePageConfig = {
  category: 'Siti Aziendali',
  title: 'Blog Aziendali',
  subtitle: 'Content marketing che porta traffico qualificato',
  description:
    'Un blog aziendale ben strutturato è un asset che lavora 24/7 per portare traffico organico, affermare la tua expertise nel settore e alimentare il funnel di vendita con contenuti di valore.',
  features: [
    {
      icon: FileText,
      title: 'Architettura SEO',
      description: 'Struttura dei contenuti progettata per scalare i cluster semantici su Google.',
    },
    {
      icon: Settings,
      title: 'CMS intuitivo',
      description: 'Editor visuale per pubblicare articoli senza dipendere da uno sviluppatore.',
    },
    {
      icon: Mail,
      title: 'Newsletter integrata',
      description: 'Cattura iscritti e invia newsletter automatiche ai lettori più fedeli.',
    },
    {
      icon: BarChart3,
      title: 'Analisi performance',
      description: 'Dashboard con metriche di traffico, engagement e conversioni degli articoli.',
    },
  ],
  featuredTitle: 'Costruisci la tua autorità online',
  featuredDescription:
    'Ti aiutiamo a creare un blog aziendale che generi traffico organico costante e posizioni il tuo brand come leader di settore.',
  featuredCta: 'Parliamo della strategia',
  featuredHref: '/contatti',
}

export default function Page() {
  return <ServicePageTemplate config={config} />
}
