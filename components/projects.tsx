import { projects, projectsSection } from '@/data';
import { SymbolIcon } from '@/components/icons';
import Link from 'next/link';

export function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full border-b border-border-soft bg-cream px-6 pt-24 pb-28 lg:px-12"
    >
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="flex flex-col">
            <span className="mb-2 block font-mono text-[11px] font-semibold tracking-[0.25em] text-taupe uppercase">
              {projectsSection.eyebrow}
            </span>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              {projectsSection.title}
            </h2>
          </div>
          <Link
            href={projectsSection.inquireHref}
            className="mb-1 self-start font-mono text-xs font-bold tracking-wider text-charcoal/70 uppercase transition-colors hover:text-navy md:self-end"
          >
            {projectsSection.inquireLabel}
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.caseNumber}
              className="group flex flex-col justify-between rounded-2xl border border-taupe/25 bg-white p-7 shadow-editorial transition-all duration-300 hover:-translate-y-1 hover:shadow-editorial-hover"
            >
              <div className="flex flex-col">
                <div className="mb-4 flex items-center justify-between gap-2">
                  <span className="rounded-full border border-taupe/30 bg-cream px-3 py-1 font-mono text-[10px] font-bold text-charcoal/80 uppercase">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-charcoal/50">
                    {project.caseNumber}
                  </span>
                </div>
                <div className="relative mb-5 rounded-2xl bg-navy p-5 text-cream">
                  <span className="mb-2 block font-mono text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                    {project.metricEyebrow}
                  </span>
                  <div className="mb-6 font-serif text-2xl leading-tight font-bold text-white">
                    {project.metricTitle}
                  </div>
                  <div className="flex items-center justify-between border-t border-white/10 pt-3 font-mono text-[11px] text-cream/70">
                    <span>{project.metricNote}</span>
                    <span className="flex items-center gap-1.5">
                      <span
                        className={`h-1 w-1 rounded-full ${project.statusDotClassName}`}
                      />
                      {project.metricStatus}
                    </span>
                  </div>
                </div>
                <h3 className="mb-3 font-serif text-xl leading-snug font-bold text-navy transition-colors group-hover:text-navy-light">
                  {project.title}
                </h3>
                <p className="mb-6 text-xs leading-relaxed font-normal text-charcoal/75">
                  {project.description}
                </p>
                <div className="mb-6 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-taupe/25 bg-cream/70 px-2.5 py-1 text-[11px] font-medium text-charcoal"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-taupe/15 pt-4 text-xs">
                <span className="text-[11px] text-charcoal/60">
                  {project.footnote}
                </span>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-charcoal transition-colors hover:text-navy"
                >
                  <span>{project.linkLabel}</span>
                  <SymbolIcon name="north_east" className="text-[14px]" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
