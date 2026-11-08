import { projects, projectsSection } from '@/data';
import { Carousel } from '@/components/carousel';
import { SymbolIcon } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';

const fieldKeys = ['context', 'role', 'dataset', 'approach', 'result'] as const;

export function Projects() {
  return (
    <section id="projects" className="container-page py-12 lg:py-20">
      <div className="mb-10">
        <SectionHeading
          eyebrow={projectsSection.eyebrow}
          title={projectsSection.title}
          intro={projectsSection.intro}
        />
      </div>
      <Carousel label={projectsSection.title}>
        {projects.map((project) => (
          <article
            key={project.caseNumber}
            data-reveal
            className="group flex card flex-col overflow-hidden"
          >
            <div className="flex flex-col gap-4 bg-navy p-6 text-cream">
              <div className="flex items-start justify-between gap-4 font-mono text-xs font-semibold tracking-wider text-cream/70 uppercase">
                <span>{project.category}</span>
                <span className="shrink-0">{project.caseNumber}</span>
              </div>
              <h3 className="font-serif text-2xl leading-tight font-medium text-balance text-white">
                {project.title}
              </h3>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <dl className="space-y-4">
                {fieldKeys.map((key) => (
                  <div key={key}>
                    <dt className="font-mono text-xs font-semibold tracking-wider text-sage-dark uppercase">
                      {projectsSection.fieldLabels[key]}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-charcoal/80">
                      {project[key]}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6">
                <h4 className="font-mono text-xs font-semibold tracking-wider text-sage-dark uppercase">
                  {projectsSection.fieldLabels.tools}
                </h4>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-navy/10 pt-4">
                {project.links.map((link) => {
                  const external = link.href.startsWith('http');
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-navy transition-colors hover:text-sage-dark"
                    >
                      <span>{link.label}</span>
                      <SymbolIcon
                        name="north_east"
                        className="text-[14px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </article>
        ))}
      </Carousel>
    </section>
  );
}
