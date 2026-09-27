// Inline stroke icons (decorative, aria-hidden). No icon library needed.
import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const svg = (p: P) => ({
  width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: 1.9, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
  "aria-hidden": true, focusable: false, ...p,
});

export const ArrowRight = (p: P) => <svg {...svg({ strokeWidth: 2.2, ...p })}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
export const Check = (p: P) => <svg {...svg({ strokeWidth: 2.6, ...p })}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>;
export const Phone = (p: P) => (
  <svg {...svg(p)}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>
);
export const Chat = (p: P) => <svg {...svg(p)}><path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.2A8.5 8.5 0 1 1 21 12z" /></svg>;
export const Sms = (p: P) => <svg {...svg(p)}><rect x="3" y="4" width="18" height="13" rx="2.5" /><path d="M8 21l3-4M7.5 10.5h.01M12 10.5h.01M16.5 10.5h.01" /></svg>;
export const Mail = (p: P) => <svg {...svg(p)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 6.5 8.5 6.5 8.5-6.5" /></svg>;
export const Route = (p: P) => <svg {...svg(p)}><circle cx="6" cy="19" r="2.5" /><circle cx="18" cy="5" r="2.5" /><path d="M8.5 19H15a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h6.5" /></svg>;
export const Bolt = (p: P) => <svg {...svg(p)}><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></svg>;
export const Headset = (p: P) => (
  <svg {...svg(p)}><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="13" width="4" height="6" rx="1.5" /><rect x="17" y="13" width="4" height="6" rx="1.5" /><path d="M19 19a3 3 0 0 1-3 3h-3" /></svg>
);
export const Clock = (p: P) => <svg {...svg(p)}><circle cx="12" cy="12" r="9.5" /><path d="M12 6.5V12l3.5 2" /></svg>;
export const Doc = (p: P) => <svg {...svg(p)}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></svg>;
export const Sync = (p: P) => <svg {...svg(p)}><path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4" /></svg>;
export const UserCheck = (p: P) => <svg {...svg(p)}><circle cx="9" cy="8" r="4" /><path d="M2 21a7 7 0 0 1 14 0M16 11l2 2 4-4" /></svg>;
export const Swap = (p: P) => <svg {...svg(p)}><path d="M7 4 3 8l4 4M3 8h14M17 20l4-4-4-4M21 16H7" /></svg>;
export const Wallet = (p: P) => <svg {...svg(p)}><rect x="3" y="6" width="18" height="14" rx="2.5" /><path d="M3 10h18M16 15h2" /></svg>;
export const Globe = (p: P) => <svg {...svg(p)}><circle cx="12" cy="12" r="9.5" /><path d="M2.5 12h19M12 2.5c2.6 2.8 3.9 6 3.9 9.5s-1.3 6.7-3.9 9.5c-2.6-2.8-3.9-6-3.9-9.5s1.3-6.7 3.9-9.5z" /></svg>;
export const Shield = (p: P) => <svg {...svg(p)}><path d="M12 2.5 4 5.5v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10v-6l-8-3z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></svg>;
export const Chart = (p: P) => <svg {...svg(p)}><path d="M3 3v18h18" /><path d="m7 15 4-4 3 3 5-6" /></svg>;
export const Brain = (p: P) => <svg {...svg(p)}><path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3h1V4z" /><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3h-1V4z" /></svg>;
export const Cpu = (p: P) => <svg {...svg(p)}><rect x="6" y="6" width="12" height="12" rx="2" /><rect x="9.5" y="9.5" width="5" height="5" rx="1" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" /></svg>;
export const Users = (p: P) => <svg {...svg(p)}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><path d="M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4-6" /></svg>;
export const Building = (p: P) => <svg {...svg(p)}><rect x="4" y="3" width="16" height="18" rx="1.5" /><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3" /></svg>;
export const Megaphone = (p: P) => <svg {...svg(p)}><path d="M3 11v2a2 2 0 0 0 2 2h2l5 4V5L7 9H5a2 2 0 0 0-2 2z" /><path d="M16 8a5 5 0 0 1 0 8M19 5a9 9 0 0 1 0 14" /></svg>;
export const LifeBuoy = (p: P) => <svg {...svg(p)}><circle cx="12" cy="12" r="9.5" /><circle cx="12" cy="12" r="4" /><path d="m5.3 5.3 3.9 3.9M14.8 14.8l3.9 3.9M18.7 5.3l-3.9 3.9M9.2 14.8l-3.9 3.9" /></svg>;
export const Calendar = (p: P) => <svg {...svg(p)}><rect x="3" y="4.5" width="18" height="16" rx="2" /><path d="M3 9.5h18M8 2.5v4M16 2.5v4" /></svg>;
export const House = (p: P) => <svg {...svg(p)}><path d="M3 11 12 3.5 21 11" /><path d="M5 9.5V20h14V9.5M10 20v-5h4v5" /></svg>;
export const Plus = (p: P) => <svg {...svg({ strokeWidth: 2.2, ...p })}><path d="M12 5v14M5 12h14" /></svg>;
export const Menu = (p: P) => <svg {...svg({ strokeWidth: 2.2, ...p })}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
export const Linkedin = (p: P) => <svg {...svg(p)}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" /></svg>;
export const Mark = (p: P) => (
  <svg viewBox="0 0 48 48" width={48} height={48} aria-hidden focusable={false} {...p}>
    <path d="M24 3 42 13.5v21L24 45 6 34.5v-21z" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinejoin="round" />
    <path d="M30.5 29.2v2.6a1.8 1.8 0 0 1-2 1.8 17.4 17.4 0 0 1-7.6-2.7 17.1 17.1 0 0 1-5.3-5.3 17.4 17.4 0 0 1-2.7-7.6 1.8 1.8 0 0 1 1.8-2h2.6a1.8 1.8 0 0 1 1.8 1.5c.1.8.3 1.6.6 2.4a1.8 1.8 0 0 1-.4 1.9l-1.1 1.1a14 14 0 0 0 5.3 5.3l1.1-1.1a1.8 1.8 0 0 1 1.9-.4c.8.3 1.6.5 2.4.6a1.8 1.8 0 0 1 1.6 1.8z" fill="currentColor" />
    <path d="M26 15.5v6M29 13.5v10M32 16.5v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
