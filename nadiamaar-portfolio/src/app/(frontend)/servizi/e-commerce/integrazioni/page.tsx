'use client'

import { Plug, Database, Layers, Zap } from 'lucide-react'
import { ServicePageTemplate, type ServicePageConfig } from '@/components/ServicePageTemplate'

const config: ServicePageConfig = {
  category: 'E-commerce',
  title: 'Integrazioni Custom',
  subtitle: 'Connetti il tuo store con ogni sistema',
  description:
    'API, webhook e connettori custom per integrare il tuo e-commerce con CRM, ERP, sistemi di pagamento e qualsiasi tool del tuo stack tecnologico. Automatizza i flussi e elimina il lavoro manuale.',
  features: [
    {
      icon: Plug,
      title: 'API RESTful',
      description: 'Integrazione bidirezionale con qualsiasi sistema tramite API standard o custom.',
    },
    {
      icon: Database,
      title: 'CRM & ERP',
      description: 'Sincronizzazione automatica con Salesforce, HubSpot, SAP e altri gestionali.',
    },
    {
      icon: Layers,
      title: 'Gateway di pagamento',
      description: 'Stripe, PayPal, Klarna, Scalapay e metodi di pagamento locali integrati.',
    },
    {
      icon: Zap,
      title: 'Automazioni',
      description: 'Trigger e workflow automatici per ordini, spedizioni, notifiche e resi.',
    },
  ],
  featuredTitle: 'Hai un\'integrazione specifica in mente?',
  featuredDescription:
    'Raccontaci il tuo stack tecnologico. Progettiamo la soluzione di integrazione più efficiente per il tuo caso d\'uso.',
  featuredCta: 'Parliamo del progetto',
  featuredHref: '/contatti',
}

export default function Page() {
  return <ServicePageTemplate config={config} />
}
