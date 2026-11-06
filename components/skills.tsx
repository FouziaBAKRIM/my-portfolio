import { skills } from '@/data';
import { cn } from '@/lib/utils';
import { SymbolIcon } from '@/components/icons';

export function Skills() {
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
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-taupe/30 bg-white text-charcoal shadow-xs outline-hidden transition-all hover:bg-navy hover:text-white"
              >
                <SymbolIcon name="arrow_back" className="text-[18px]" />
              </button>
              <button
                type="button"
                aria-label={skills.nextLabel}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-taupe/30 bg-white text-charcoal shadow-xs outline-hidden transition-all hover:bg-navy hover:text-white"
              >
                <SymbolIcon name="arrow_forward" className="text-[18px]" />
              </button>
            </div>
          </div>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {skills.groups.map((group) => (
            <div
              key={group.title}
              className="group flex flex-col justify-between rounded-2xl border border-taupe/25 bg-white p-8 shadow-editorial transition-all duration-300 hover:-translate-y-1 hover:shadow-editorial-hover"
            >
              <div>
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-taupe/30 bg-cream text-lg text-charcoal">
                  {group.icon === 'brackets' ? (
                    <span className="font-mono text-sm font-bold">{'</>'}</span>
                  ) : null}
                  {group.icon === 'chart' ? <span>📊</span> : null}
                  {group.icon === 'database' ? (
                    <SymbolIcon
                      name="database"
                      className="text-[22px] text-navy"
                    />
                  ) : null}
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

        <div className="mb-12 flex items-center justify-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-navy" />
          <span className="h-2 w-2 rounded-full bg-taupe/50" />
          <span className="h-2 w-2 rounded-full bg-taupe/50" />
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
