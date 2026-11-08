'use client';

import { useState } from 'react';
import type { Project } from '@/types';
import { projects, projectsSection } from '@/data';
import { Carousel } from '@/components/carousel';
import { ProjectDialog } from '@/components/project-dialog';
import { SymbolIcon } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';

function ProjectTags({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div className={className}>
      {project.tagGroups.map((group) => (
        <div key={group.label}>
          <span className="font-mono text-[10px] font-semibold tracking-[0.16em] text-navy/70 uppercase">
            {group.label}
          </span>
          <div className="mt-1 flex flex-wrap gap-1.5">
            {group.tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className="relative aspect-[16/9] overflow-hidden border-b border-navy/10 bg-navy">
      <div className="flex h-full items-center justify-center bg-navy">
        <SymbolIcon name={project.icon} className="text-5xl text-sage/80" />
      </div>
      <span className="absolute top-4 left-4 rounded-full bg-cream-light/90 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-[0.14em] text-navy uppercase backdrop-blur">
        {project.caseNumber}
      </span>
    </div>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

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
        {projects.map((project, index) => (
          <article
            key={project.caseNumber}
            data-reveal
            className="group flex card flex-col overflow-hidden"
          >
            <ProjectPreview project={project} />

            <div className="flex flex-1 flex-col p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-mono text-[11px] font-semibold tracking-[0.18em] text-sage-dark uppercase">
                  {project.category}
                </p>
                {index === 0 ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-sage-pale px-2.5 py-1 font-mono text-[10px] font-semibold tracking-[0.14em] text-sage-dark uppercase">
                    <SymbolIcon name="bar_chart" className="text-[12px]" />
                    {projectsSection.featuredBadge}
                  </span>
                ) : null}
              </div>
              <h3 className="mt-2 font-serif text-xl leading-snug font-medium text-balance text-navy">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
                {project.summary}
              </p>

              <ProjectTags project={project} className="mt-4 space-y-2.5" />

              <div className="mt-auto pt-5">
                <button
                  type="button"
                  aria-haspopup="dialog"
                  aria-label={`${projectsSection.viewCaseStudy}: ${project.title}`}
                  onClick={() => setSelected(project)}
                  className="group/button inline-flex w-full cursor-pointer items-center justify-between gap-2 rounded-xl border border-navy/10 bg-cream-light px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-navy/25 hover:bg-sage-pale/60"
                >
                  <span>{projectsSection.viewCaseStudy}</span>
                  <SymbolIcon
                    name="arrow_forward"
                    className="text-[16px] transition-transform duration-200 group-hover/button:translate-x-0.5"
                  />
                </button>
              </div>
            </div>
          </article>
        ))}
      </Carousel>

      {selected ? (
        <ProjectDialog project={selected} onClose={() => setSelected(null)} />
      ) : null}
    </section>
  );
}
