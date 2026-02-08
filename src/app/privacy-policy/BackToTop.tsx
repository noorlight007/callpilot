"use client";

export default function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="inline-flex items-center gap-2 text-sm text-body hover:text-headline transition-colors"
    >
      <span className="inline-block">↑</span>
      Back to top
    </button>
  );
}
