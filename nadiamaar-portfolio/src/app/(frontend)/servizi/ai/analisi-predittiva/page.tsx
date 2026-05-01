'use client'

import { TrendingUp, Activity, Shield, BarChart3 } from 'lucide-react'
import { ServicePageTemplate, type ServicePageConfig } from '@/components/ServicePageTemplate'

const config: ServicePageConfig = {
  category: 'Servizi AI',
  title: 'Analisi Predittiva',
  subtitle: 'Decisioni strategiche basate sui dati',
  description:
    'Con modelli di machine learning e business intelligence, trasformiamo i tuoi dati storici in previsioni affidabili che guidano le decisioni strategiche del tuo business e ti danno un vantaggio competitivo reale.',
  features: [
    {
      icon: TrendingUp,
      title: 'Forecasting vendite',
      description: 'Previsioni accurate di ricavi, domanda e trend per pianificare in anticipo.',
    },
    {
      icon: Activity,
      title: 'Dashboard real-time',
      description: 'KPI e metriche chiave aggiornati in tempo reale su una singola dashboard.',
    },
    {
      icon: Shield,
      title: 'Risk management',
      description: 'Modelli di rilevamento anomalie per identificare rischi prima che diventino problemi.',
    },
    {
      icon: BarChart3,
      title: 'Insight competitivi',
      description: 'Analisi del mercato e dei competitor per posizionarti strategicamente.',
    },
  ],
  featuredTitle: 'I tuoi dati valgono più di quanto pensi',
  featuredDescription:
    'Mostraci i dati che hai. Ti mostriamo le previsioni che puoi ottenere e le decisioni che potresti prendere diversamente.',
  featuredCta: 'Analizza i miei dati',
  featuredHref: '/contatti',
}

export default function Page() {
  return <ServicePageTemplate config={config} />
}
