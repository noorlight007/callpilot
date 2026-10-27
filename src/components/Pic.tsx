// WebP with PNG fallback. `base` is the path without extension; both
// `${base}.webp` and `${base}.png` must exist in /public. All pack images are
// 1440 x 810 (16:9); width/height reserve the space so nothing shifts on load.
type Props = {
  base: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export default function Pic({ base, alt, width = 1440, height = 810, priority = false, className, sizes }: Props) {
  return (
    <picture className={className}>
      <source srcSet={`${base}.webp`} type="image/webp" sizes={sizes} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${base}.png`}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        sizes={sizes}
        {...(priority ? ({ fetchpriority: "high" } as Record<string, string>) : {})}
      />
    </picture>
  );
}
