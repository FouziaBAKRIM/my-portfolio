import { experience, experienceSection } from '@/data';
import { Timeline } from '@/components/timeline';

export function Experience() {
  return (
    <section
      id="experience"
      className="w-full border-b border-border-soft bg-cream px-6 py-28 text-charcoal lg:px-12"
    >
      <div className="mx-auto flex max-w-5xl flex-col">
        <div className="reveal-on-scroll is-visible mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-2 block font-mono text-[11px] font-semibold tracking-[0.25em] text-taupe uppercase">
            {experienceSection.eyebrow}
          </span>
          <h2 className="mb-3 font-serif text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            {experienceSection.title}
          </h2>
          <p className="text-xs leading-relaxed font-normal text-charcoal/70 sm:text-sm">
            {experienceSection.intro}
          </p>
        </div>
        <Timeline
          items={experience}
          spacingClassName="space-y-12 sm:space-y-14"
        />
      </div>
    </section>
  );
}
