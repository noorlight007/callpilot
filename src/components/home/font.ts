// Plus Jakarta Sans: the site typeface (homepage, book-a-demo, voip, inner pages),
// so the whole homepage uses one typeface. next/font self-hosts it, so there's no layout shift.
import { Plus_Jakarta_Sans } from "next/font/google";

export const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

/** Apply to the page root. */
export const fontClass = font.className;
