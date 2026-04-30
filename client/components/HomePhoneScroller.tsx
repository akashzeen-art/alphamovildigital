import { useEffect, useMemo, useState } from "react";

type HomePhoneSection = {
  id: string;
  label: string;
  color: string;
  icon: string;
  screenSrc?: string;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function HomePhoneScroller({
  sections,
  scrollRoot,
}: {
  sections: HomePhoneSection[];
  scrollRoot: HTMLElement | null;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionIds = useMemo(() => sections.map((s) => s.id), [sections]);

  useEffect(() => {
    if (!scrollRoot) return;
    if (sectionIds.length === 0) return;

    const els = sectionIds
      .map((id) => scrollRoot.querySelector<HTMLElement>(`[data-vm-home-section="${id}"]`))
      .filter(Boolean) as HTMLElement[];

    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (!visible?.target) return;
        const id = (visible.target as HTMLElement).getAttribute("data-vm-home-section");
        const idx = id ? sectionIds.indexOf(id) : -1;
        if (idx >= 0) setActiveIndex(idx);
      },
      { root: scrollRoot, threshold: [0.35, 0.5, 0.65, 0.8] },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [scrollRoot, sectionIds]);

  const idx = clamp(activeIndex, 0, Math.max(0, sections.length - 1));
  const active = sections[idx];

  const renderSlide = (s: HomePhoneSection, subtitle: string) => {
    const src = s.screenSrc;
    if (src) {
      return (
        <div className="w-full h-full relative">
          <img
            src={src}
            alt={s.label}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center p-4 sm:p-6">
            <h3 className="text-white text-base sm:text-lg font-bold font-saira mb-1">{s.label}</h3>
            <p className="text-white/90 text-[11px] sm:text-xs">{subtitle}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 sm:p-6">
        <div className="text-5xl sm:text-6xl mb-3 sm:mb-4 transition-transform duration-300" style={{ color: s.color }}>
          <i className={`fas ${s.icon}`} />
        </div>
        <h3 className="text-base sm:text-lg font-bold font-saira text-gray-900 mb-1">{s.label}</h3>
        <p className="text-[11px] sm:text-xs text-gray-500">{subtitle}</p>
      </div>
    );
  };

  return (
    <>
      {/* Mobile (fixed, centered) */}
      <div
        className="md:hidden fixed left-0 right-0 z-40 pointer-events-none"
        style={{ top: "var(--vm-header-h)" }}
      >
        <div className="mx-auto w-full max-w-sm px-4">
          <div className="vm-home-phone-frame pointer-events-auto">
            <div className="vm-home-phone-screen">
              <div
                className="vm-home-phone-screens"
                style={{ transform: `translate3d(0, ${-idx * 100}%, 0)` }}
              >
                {sections.map((s) => (
                  <div key={s.id} className="vm-home-phone-screen-slide">
                    {renderSlide(s, "Swipe-scroll preview")}
                  </div>
                ))}
              </div>
            </div>

            <img
              className="vm-home-phone-art"
              src="/vm-home/phone_frame.png"
              alt="Phone frame"
              loading="eager"
              draggable={false}
            />
          </div>

          <div className="mt-2 text-center text-[11px] text-gray-500">
            {active ? (
              <span>
                Viewing: <span className="font-semibold">{active.label}</span>
              </span>
            ) : null}
          </div>
        </div>
      </div>

      {/* Desktop/tablet (fixed left, vertically centered) */}
      <div className="hidden md:block fixed left-10 top-1/2 -translate-y-1/2 z-40 pointer-events-none">
        <div className="w-[320px]">
          <div className="vm-home-phone-frame pointer-events-auto">
            <div className="vm-home-phone-screen">
              <div
                className="vm-home-phone-screens"
                style={{ transform: `translate3d(0, ${-idx * 100}%, 0)` }}
              >
                {sections.map((s) => (
                  <div key={s.id} className="vm-home-phone-screen-slide">
                    {renderSlide(s, "Section preview")}
                  </div>
                ))}
              </div>
            </div>

            <img
              className="vm-home-phone-art"
              src="/vm-home/phone_frame.png"
              alt="Phone frame"
              loading="eager"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}

