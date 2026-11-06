import { education, educationSection } from '@/data';
import { SectionHeading } from '@/components/section-heading';
import { Timeline } from '@/components/timeline';

export function Education() {
  return (
    <section id="education" className="container-page py-8 lg:py-12">
      <div className="grid grid-cols-1 gap-10 rounded-[2rem] bg-sage-pale p-6 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-14">
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <SectionHeading
            eyebrow={educationSection.eyebrow}
            title={educationSection.title}
            intro={educationSection.intro}
          />
        </div>
        <div className="lg:col-span-8">
          <Timeline items={education} />
        </div>
      </div>
    </section>
  );
}
