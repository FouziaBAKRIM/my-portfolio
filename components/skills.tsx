'use client';

import { useEffect, useState } from 'react';
import { skills } from '@/data';
import type { SkillGroup } from '@/types';
import { cn } from '@/lib/utils';
import { SymbolIcon } from '@/components/icons';

const cardGap = '1.5rem';

function cardsPerView(width: number) {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
}

function SkillIcon({ icon }: { icon: SkillGroup['icon'] }) {
  if (icon === 'brackets') {
    return <span className="font-mono text-sm font-bold">{'</>'}</span>;
  }
  if (icon === 'chart') return <span>📊</span>;
  if (icon === 'database') {
    return <SymbolIcon name="database" className="text-[22px] text-navy" />;
  }
  if (icon === 'model') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-[22px] w-[22px] text-navy"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <circle cx="6" cy="7" r="2.2" />
        <circle cx="17" cy="6" r="2.2" />
        <circle cx="12" cy="17" r="2.2" />
        <path d="M8 8.2 10.4 15M15.2 7.6 13.4 15" />
      </svg>
    );
  }
  if (icon === 'shield') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-[22px] w-[22px] text-navy"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3.5 19 6.2v5.3c0 4.2-2.8 7.2-7 8.9-4.2-1.7-7-4.7-7-8.9V6.2L12 3.5Z" />
        <path d="m9 12 2 2 4-4.2" />
      </svg>
    );
  }
  return <SymbolIcon name="code" className="text-[22px] text-navy" />;
}

export function Skills() {
  const groups = skills.groups;
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const update = () => setPerView(cardsPerView(window.innerWidth));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = Math.max(0, groups.length - perView);
  const slide = Math.min(index, maxIndex);
  const cardWidth = `calc((100% - ${perView - 1} * ${cardGap}) / ${perView})`;

  const goTo = (next: number) => {
    const last = Math.max(0, groups.length - perView);
    setIndex((next + last + 1) % (last + 1));
  };

  return (
    <section
      id="skills"
      className="w-full border-t border-b border-border-soft bg-sage-pale px-6 py-28 lg:px-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <div>
            <span className="mb-2 block text-xs font-semibold tracking-[0.25em] text-charcoal/60 uppercase">
              {skills.eyebrow}
            </span>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              {skills.title}
            </h2>
          </div>
          <div className="flex items-center gap-6 md:max-w-md md:text-right">
            <p className="text-left text-xs leading-relaxed font-normal text-charcoal/70 sm:text-sm md:text-right">
              {skills.intro}
            </p>
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                aria-label={skills.previousLabel}
                onClick={() => goTo(slide - 1)}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-taupe/30 bg-white text-charcoal shadow-xs outline-hidden transition-all hover:bg-navy hover:text-white"
              >
                <SymbolIcon name="arrow_back" className="text-[18px]" />
              </button>
              <button
                type="button"
                aria-label={skills.nextLabel}
                onClick={() => goTo(slide + 1)}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-taupe/30 bg-white text-charcoal shadow-xs outline-hidden transition-all hover:bg-navy hover:text-white"
              >
                <SymbolIcon name="arrow_forward" className="text-[18px]" />
              </button>
            </div>
          </div>
        </div>

        <div className="mb-10 overflow-hidden py-2">
          <div
            className="flex items-stretch transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] motion-reduce:transition-none"
            style={{
              gap: cardGap,
              transform: `translateX(calc(${slide} * -1 * (${cardWidth} + ${cardGap})))`,
            }}
          >
            {groups.map((group) => (
              <div
                key={group.title}
                className="group flex flex-col justify-between rounded-2xl border border-taupe/25 bg-white p-8 shadow-editorial transition-all duration-300 hover:-translate-y-1 hover:shadow-editorial-hover"
                style={{ flex: `0 0 ${cardWidth}` }}
              >
                <div>
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-taupe/30 bg-cream text-lg text-charcoal">
                    <SkillIcon icon={group.icon} />
                  </div>
                  <h3 className="mb-4 font-serif text-2xl leading-snug font-bold tracking-tight text-navy">
                    {group.title}
                  </h3>
                  <p className="mb-8 text-sm leading-relaxed text-charcoal/75">
                    {group.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 border-t border-taupe/15 pt-6">
                  {group.tags.map((tag) => (
                    <span
                      key={tag}
                      className={cn(
                        'rounded-lg border border-taupe/25 bg-cream/70 text-xs font-medium text-charcoal',
                        group.tagClassName,
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }, (_, dot) => {
            const active = dot === slide;
            return (
              <button
                key={dot}
                type="button"
                aria-label={`Show capability ${dot + 1}`}
                aria-current={active ? 'true' : undefined}
                onClick={() => goTo(dot)}
                className={cn(
                  'rounded-full transition-all duration-300',
                  active
                    ? 'h-2.5 w-2.5 bg-navy'
                    : 'h-2 w-2 bg-taupe/50 hover:bg-taupe',
                )}
              />
            );
          })}
        </div>

        <div className="flex flex-col justify-between gap-8 rounded-2xl border border-white/10 bg-charcoal p-7 text-cream shadow-editorial sm:p-9 lg:flex-row lg:items-center">
          <div className="max-w-md">
            <span className="mb-2 block font-mono text-[11px] font-semibold tracking-[0.25em] text-taupe uppercase">
              {skills.toolbox.eyebrow}
            </span>
            <h3 className="mb-2 font-serif text-2xl font-bold tracking-tight text-cream sm:text-3xl">
              {skills.toolbox.title}
            </h3>
            <p className="text-xs leading-relaxed font-normal text-cream/70 sm:text-sm">
              {skills.toolbox.intro}
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            {skills.toolbox.rows.map((row) => (
              <div
                key={row.map((tool) => tool.label).join('-')}
                className="flex flex-wrap items-center gap-2 sm:gap-2.5"
              >
                {row.map((tool) => (
                  <div
                    key={tool.label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-navy px-3.5 py-1.5 text-xs font-medium text-cream transition-colors hover:border-sage"
                  >
                    <span className={tool.markClassName}>{tool.mark}</span>
                    <span>{tool.label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
