import { education, educationSection } from '@/data';
import { Timeline } from '@/components/timeline';

export function Education() {
  return (
    <section
      id="education"
      className="w-full border-t border-b border-border-soft bg-sage-pale px-6 py-24 lg:px-12"
    >
      <div className="mx-auto flex max-w-5xl flex-col">
        <div className="reveal-on-scroll is-visible mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-2 block font-mono text-[11px] font-semibold tracking-[0.25em] text-charcoal/60 uppercase">
            {educationSection.eyebrow}
          </span>
          <h2 className="mb-3 font-serif text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            {educationSection.title}
          </h2>
          <p className="text-xs leading-relaxed font-normal text-charcoal/70 sm:text-sm">
            {educationSection.intro}
          </p>
        </div>
        <Timeline
          items={education}
          spacingClassName="space-y-8 sm:space-y-10"
        />
      </div>
    </section>
  );
}
