import { skills } from '@/data';
import { Marquee } from '@/components/marquee';
import { SymbolIcon } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';

export function Skills() {
  return (
    <section id="skills" className="container-page py-8 lg:py-12">
      <div className="rounded-[2rem] bg-sage-pale p-6 sm:p-10 lg:p-14">
        <SectionHeading
          eyebrow={skills.eyebrow}
          title={skills.title}
          intro={skills.intro}
        />

        <div className="mt-10">
          <Marquee
            seconds={60}
            className="-my-8 py-8"
            itemClassName="w-[19rem] pr-5 motion-reduce:pb-5 sm:w-[22rem]"
          >
            {skills.groups.map((group) => (
              <div
                key={group.title}
                data-reveal
                className="flex w-full card flex-col p-6 sm:p-7"
              >
                <span className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-navy text-cream">
                  <SymbolIcon name={group.icon} className="text-[22px]" />
                </span>
                <h3 className="font-serif text-xl leading-snug font-medium text-navy sm:text-2xl">
                  {group.title}
                </h3>
                <p className="mt-3 mb-6 text-sm leading-relaxed text-charcoal/75">
                  {group.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {group.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        <div
          data-reveal
          className="mt-5 flex flex-col justify-between gap-6 rounded-3xl bg-navy p-6 text-cream sm:p-8 lg:flex-row lg:items-center lg:gap-12"
        >
          <div className="shrink-0 lg:max-w-xs">
            <span className="mb-2 block font-mono text-xs font-semibold tracking-[0.25em] text-sage uppercase">
              {skills.toolbox.eyebrow}
            </span>
            <h3 className="font-serif text-2xl font-medium tracking-tight">
              {skills.toolbox.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-cream/70">
              {skills.toolbox.intro}
            </p>
          </div>
          <Marquee
            seconds={35}
            className="min-w-0 flex-1"
            itemClassName="pr-2 motion-reduce:pb-2"
          >
            {skills.toolbox.tools.map((tool) => (
              <span
                key={tool.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-medium whitespace-nowrap transition-colors hover:border-sage"
              >
                <span className="font-mono text-xs font-bold text-sage">
                  {tool.mark}
                </span>
                <span>{tool.label}</span>
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
