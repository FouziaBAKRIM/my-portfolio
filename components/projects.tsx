import Link from 'next/link';
import { projects, projectsSection } from '@/data';
import { Carousel } from '@/components/carousel';
import { SymbolIcon } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';

export function Projects() {
  return (
    <section id="projects" className="container-page py-12 lg:py-20">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <SectionHeading
          eyebrow={projectsSection.eyebrow}
          title={projectsSection.title}
        />
        <Link
          href={projectsSection.inquireHref}
          className="mb-2 self-start font-mono text-xs font-bold tracking-wider text-charcoal/70 uppercase transition-colors hover:text-navy md:self-end"
        >
          {projectsSection.inquireLabel}
        </Link>
      </div>
      <Carousel label={projectsSection.title}>
        {projects.map((project) => (
          <article
            key={project.caseNumber}
            data-reveal
            className="group relative flex card flex-col overflow-hidden"
          >
            <div className="flex min-h-60 flex-col bg-navy p-6 text-cream">
              <div className="flex items-start justify-between gap-4 font-mono text-[10px] font-semibold tracking-wider text-cream/60 uppercase">
                <span>{project.category}</span>
                <span className="shrink-0">{project.caseNumber}</span>
              </div>
              <div className="mt-auto pt-8">
                <span className="font-mono text-[10px] font-semibold tracking-wider text-sage uppercase">
                  {project.metricEyebrow}
                </span>
                <p className="mt-2 font-serif text-2xl leading-tight font-medium text-balance text-white sm:text-[1.75rem]">
                  {project.metricTitle}
                </p>
                <div className="mt-4 flex flex-wrap justify-between gap-x-4 gap-y-1 border-t border-white/15 pt-3 text-xs text-cream/70">
                  <span>{project.metricNote}</span>
                  <span>{project.metricStatus}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-serif text-xl leading-snug font-medium text-navy">
                {project.title}
              </h3>
              <p className="mt-3 mb-5 text-sm leading-relaxed text-charcoal/75">
                {project.description}
              </p>
              <div className="mb-6 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex items-center justify-between gap-4 border-t border-navy/10 pt-4">
                <span className="text-xs text-charcoal/65">
                  {project.footnote}
                </span>
                {/* The ::after stretches this link over the whole card. */}
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-navy after:absolute after:inset-0"
                >
                  <span>{project.linkLabel}</span>
                  <SymbolIcon
                    name="north_east"
                    className="text-[14px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </article>
        ))}
      </Carousel>
    </section>
  );
}
