import { experience, experienceSection } from '@/data';
import { SectionHeading } from '@/components/section-heading';
import { Timeline } from '@/components/timeline';

export function Experience() {
  return (
    <section
      id="experience"
      className="container-page grid grid-cols-1 gap-10 py-12 lg:grid-cols-12 lg:gap-12 lg:py-20"
    >
      <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
        <SectionHeading
          eyebrow={experienceSection.eyebrow}
          title={experienceSection.title}
          intro={experienceSection.intro}
        />
      </div>
      <div className="lg:col-span-8">
        <Timeline items={experience} />
      </div>
    </section>
  );
}
