// components/VoipTeaser.tsx
// Reusable internal link into the Business VoIP news article.
// Drop this on the homepage, integrations hub and each ATS page so the new
// article picks up internal links from existing indexed pages.

import Link from 'next/link';

export const VOIP_ARTICLE_PATH =
  '/news/business-voip-whatsapp-sms-ats-integration';

type Variant = 'home' | 'integrations' | 'ats';

const COPY: Record<Variant, { lead?: string; anchor: string }> = {
  home: {
    anchor: 'Business VoIP with WhatsApp, SMS & ATS Integration – Coming Soon',
  },
  integrations: {
    lead: 'Looking for integrated business calling?',
    anchor: 'Discover CallPilot Business VoIP + Automation',
  },
  ats: {
    lead: 'Coming soon: make and receive business calls through CallPilot, click to call directly from your ATS and automatically record call activity.',
    anchor: 'Learn about CallPilot Business VoIP',
  },
};

export default function VoipTeaser({ variant = 'ats' }: { variant?: Variant }) {
  const { lead, anchor } = COPY[variant];
  return (
    <p className="voip-teaser text-sm sm:text-base text-gray-600 my-4">
      {lead ? `${lead} ` : null}
      <Link
        href={VOIP_ARTICLE_PATH}
        className="font-semibold text-blue-600 hover:text-blue-800 underline transition-colors"
      >
        {anchor}
      </Link>
      {lead ? '.' : null}
    </p>
  );
}
