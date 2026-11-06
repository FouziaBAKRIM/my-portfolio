import type { TimelineItem } from '@/types';

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative pl-7 sm:pl-9">
      <div
        data-line
        className="absolute top-2 bottom-2 left-[5px] w-px origin-top bg-navy/25"
      />
      <ol className="space-y-5">
        {items.map((item) => (
          <li
            key={`${item.date}-${item.title}`}
            data-reveal
            className="relative"
          >
            <span className="absolute top-8 -left-7 h-[11px] w-[11px] rounded-full bg-navy ring-4 ring-sage-pale sm:-left-9" />
            <div className="card p-6 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                <span className="font-mono text-[11px] font-semibold tracking-wider text-sage-dark uppercase">
                  {item.date}
                </span>
                <span className="chip">{item.badge}</span>
              </div>
              <h3 className="mt-3 font-serif text-xl leading-snug font-medium text-navy sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-charcoal/70">
                {item.organization}
              </p>
              {item.points ? (
                <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-relaxed text-charcoal/80 marker:text-sage-dark">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}
              {item.summary ? (
                <p className="mt-4 text-sm leading-relaxed text-charcoal/75">
                  {item.summary}
                </p>
              ) : null}
              {item.tags ? (
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
