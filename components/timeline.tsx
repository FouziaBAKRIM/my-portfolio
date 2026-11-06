import type { TimelineItem } from '@/types';
import { cn } from '@/lib/utils';

export function Timeline({
  items,
  spacingClassName,
}: {
  items: TimelineItem[];
  spacingClassName: string;
}) {
  return (
    <div className="relative">
      <div className="absolute top-6 bottom-6 left-[180px] hidden w-px bg-taupe/40 md:block" />
      <div className="absolute top-6 bottom-6 left-4 w-px bg-taupe/40 md:hidden" />
      <div className={spacingClassName}>
        {items.map((item) => (
          <div
            key={`${item.date}-${item.title}`}
            className="reveal-on-scroll is-visible group relative flex flex-col items-start gap-6 pl-10 md:flex-row md:gap-12 md:pl-0"
          >
            <div className="shrink-0 pt-1 md:w-[156px] md:text-right">
              <span className="font-mono text-[11px] font-bold tracking-wider text-charcoal/70 uppercase">
                {item.date}
              </span>
            </div>
            <div className="absolute top-2.5 left-2.5 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-white bg-navy transition-transform group-hover:scale-110 md:left-[176px]" />
            <div className="flex-1 rounded-2xl border border-taupe/25 bg-white p-7 shadow-editorial transition-all duration-300 hover:-translate-y-0.5 hover:shadow-editorial-hover sm:p-8">
              <div
                className={cn(
                  'flex items-start justify-between gap-4',
                  item.summary ? 'mb-2' : 'mb-4',
                )}
              >
                <div>
                  <h3 className="font-serif text-xl leading-snug font-bold text-navy sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-charcoal/70 sm:text-sm">
                    {item.organization}
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-taupe/30 bg-cream/70 px-3 py-1 font-mono text-[10px] font-bold tracking-wider text-charcoal/80 uppercase">
                  {item.badge}
                </span>
              </div>
              {item.points ? (
                <ul className="mb-6 space-y-2.5 text-xs leading-relaxed text-charcoal/80 sm:text-sm">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span className="mt-0.5 text-base leading-none text-navy">
                        •
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {item.summary ? (
                <p className="pt-2 text-xs leading-relaxed text-charcoal/75">
                  {item.summary}
                </p>
              ) : null}
              {item.tags ? (
                <div className="flex flex-wrap gap-2 border-t border-taupe/15 pt-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-taupe/25 bg-cream/70 px-2.5 py-1 font-mono text-[11px] font-medium text-charcoal"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
