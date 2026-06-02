import { useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode[];
  /** Tailwind classes for the desktop grid (md+). Default: 3 cols */
  desktopGridClass?: string;
};

/**
 * Mobile: horizontal scroll-snap carousel with dot indicator.
 * Desktop (md+): regular grid.
 */
export function Carousel({ children, desktopGridClass = "md:grid md:grid-cols-3 md:gap-6" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    const w = el.clientWidth;
    setActive(Math.min(children.length - 1, Math.max(0, Math.round(el.scrollLeft / (w * 0.88)))));
  };

  return (
    <div>
      <div
        ref={ref}
        onScroll={onScroll}
        className={`-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:overflow-visible md:px-0 md:gap-0 md:snap-none ${desktopGridClass}`}
      >
        {children.map((c, i) => (
          <div key={i} className="snap-center shrink-0 basis-[88%] md:basis-auto md:shrink md:w-auto">
            {c}
          </div>
        ))}
      </div>
      <div className="mt-5 flex justify-center gap-2 md:hidden" aria-hidden>
        {children.map((_, i) => (
          <span
            key={i}
            className={`h-2 rounded-full transition-all ${
              active === i ? "w-6 bg-[color:var(--primary)]" : "w-2 bg-border"
            }`}
          />
        ))}
      </div>
      <p className="mt-2 text-center text-xs text-muted-foreground md:hidden">← Glissez pour découvrir →</p>
    </div>
  );
}
