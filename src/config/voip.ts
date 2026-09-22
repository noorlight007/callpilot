// config/voip.ts
// Single source of truth for CallPilot Business VoIP public pricing and copy.
//
// PUBLIC VALUES ONLY.
// Never add supplier, carrier or wholesale line costs to this file. It is
// imported by server components and its values are rendered into page HTML
// and structured data.

export const VOIP_STATUS = 'coming-soon' as const;

export const VOIP_CURRENCY = 'USD' as const;

export type VoipPlan = {
  id: string;
  name: string;
  price: number;
  unit: string;
  featured: boolean;
  summary: string;
  features: string[];
};

export const VOIP_PLANS: VoipPlan[] = [
  {
    id: 'voip-line',
    name: 'VoIP Line',
    price: 5.99,
    unit: '/user/month',
    featured: false,
    summary:
      'Affordable cloud-based business VoIP for companies that need a modern business phone system.',
    features: [
      'Business VoIP line',
      'Inbound and outbound calling',
      'Keep or port an existing business number where supported',
      'CallPilot web platform',
      'Local and international number availability',
      'No setup fee',
    ],
  },
  {
    id: 'voip-automation',
    name: 'VoIP + Automation',
    price: 9.99,
    unit: '/user/month',
    featured: true,
    summary:
      'Business VoIP plus WhatsApp, SMS, ATS/CRM integration, click-to-call, automatic call logging and communication automation.',
    features: [
      'Everything included with VoIP Line',
      'WhatsApp integration',
      'SMS integration',
      'ATS integration',
      'CRM integration',
      'Click-to-call',
      'Automatic call activity logging',
      'Automated communication workflows',
    ],
  },
];

export const getPlan = (id: string): VoipPlan => {
  const plan = VOIP_PLANS.find((p) => p.id === id);
  if (!plan) throw new Error(`Unknown VoIP plan: ${id}`);
  return plan;
};

export const formatPrice = (n: number) => `$${n.toFixed(2)}`;

// Required small print wherever VoIP pricing appears.
export const VOIP_DISCLAIMER =
  'Voice call, SMS and WhatsApp usage charges are separate. Number availability and number porting are subject to country and carrier support. Prices shown in USD.';
