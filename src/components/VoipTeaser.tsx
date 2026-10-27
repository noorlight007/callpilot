// components/VoipTeaser.tsx
// Small internal link to the VoIP Lines coming-soon page (no prices).
// Used on the integrations hub and each ATS page.

import Link from 'next/link';

export const VOIP_PATH = '/voip';

type Variant = 'home' | 'integrations' | 'ats';

const COPY: Record<Variant, { lead?: string; anchor: string }> = {
  home: { anchor: 'VoIP Lines (Coming Soon)' },
  integrations: { lead: 'Looking for integrated business calling?', anchor: 'VoIP Lines (Coming Soon)' },
  ats: { anchor: 'VoIP Lines (Coming Soon)' },
};

export default function VoipTeaser({ variant = 'ats' }: { variant?: Variant }) {
  const { lead, anchor } = COPY[variant];
  return (
    <p className="voip-teaser text-sm sm:text-base text-gray-600 my-4">
      {lead ? `${lead} ` : null}
      <Link href={VOIP_PATH} className="font-semibold text-blue-600 hover:text-blue-800 underline transition-colors">
        {anchor}
      </Link>
      {lead ? '.' : null}
    </p>
  );
}
