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
