'use client'

import { Clock, Search, Database, Shield } from 'lucide-react'
import { ServicePageTemplate, type ServicePageConfig } from '@/components/ServicePageTemplate'

const config: ServicePageConfig = {
  category: 'E-commerce',
  title: 'Migrazione E-commerce',
  subtitle: 'Trasferimento sicuro da qualsiasi piattaforma',
  description:
    'Migrare da Magento, WooCommerce o altre piattaforme non deve essere un rischio. Gestiamo l\'intero processo con zero downtime, senza perdere dati e senza impatti sul tuo posizionamento SEO.',
  features: [
    {
      icon: Clock,
      title: 'Zero downtime',
      description: 'Il tuo store rimane operativo durante tutta la fase di migrazione.',
    },
    {
      icon: Search,
      title: 'SEO preservato',
      description: 'Redirect 301, struttura URL e ranking mantenuti intatti dopo il trasferimento.',
    },
    {
      icon: Database,
      title: 'Dati integri',
      description: 'Prodotti, clienti, ordini e cronologia migrati con precisione chirurgica.',
    },
    {
      icon: Shield,
      title: 'Supporto post-migrazione',
      description: 'Assistenza dedicata per 30 giorni dopo il go-live per risolvere ogni imprevisto.',
    },
  ],
  featuredTitle: 'Migra il tuo store in sicurezza',
  featuredDescription:
    'Contattaci per una valutazione gratuita della tua migrazione. Ti diciamo tempi, costi e rischi prima di iniziare.',
  featuredCta: 'Richiedi valutazione',
  featuredHref: '/contatti',
}

export default function Page() {
  return <ServicePageTemplate config={config} />
}
