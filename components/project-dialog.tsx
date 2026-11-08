'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import type { Project } from '@/types';
import { projectsSection } from '@/data';
import { SymbolIcon } from '@/components/icons';

const fieldKeys = ['context', 'role', 'dataset', 'approach', 'result'] as const;

export function ProjectDialog({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    // No close() in cleanup: under StrictMode its late close event would call
    // onClose and shut the modal right after it opened.
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="project-dialog-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) dialogRef.current?.close();
      }}
      className="m-auto h-[92dvh] max-h-none w-[min(56rem,calc(100vw-1.5rem))] max-w-none overflow-hidden rounded-3xl bg-cream-light shadow-editorial-hover backdrop:bg-navy/60 motion-safe:transition-[opacity,translate] motion-safe:duration-300 starting:translate-y-4 starting:opacity-0"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between gap-3 border-b border-navy/10 px-4 py-3 sm:px-6">
          <span className="font-mono text-xs font-semibold tracking-[0.18em] text-sage-dark uppercase">
            {project.caseNumber}
          </span>
          <button
            type="button"
            aria-label={projectsSection.closeLabel}
            onClick={() => dialogRef.current?.close()}
            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-navy transition-colors hover:bg-sage-pale"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          {project.image ? (
            <div className="relative aspect-[16/9] w-full border-b border-navy/10 bg-navy">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                sizes="(min-width: 896px) 56rem, calc(100vw - 1.5rem)"
                className="object-cover"
              />
            </div>
          ) : null}

          <div className="p-5 sm:p-7">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-sage-dark uppercase">
              {project.category}
            </p>
            <h2
              id="project-dialog-title"
              className="mt-2 font-serif text-2xl font-medium tracking-tight text-balance text-navy sm:text-3xl"
            >
              {project.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-charcoal/80 sm:text-base">
              {project.summary}
            </p>

            <div className="mt-7 border-t border-navy/10 pt-6">
              <p className="font-mono text-xs font-semibold tracking-[0.18em] text-sage-dark uppercase">
                {projectsSection.detailsLabel}
              </p>
              <dl className="mt-4 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {fieldKeys.map((key) => (
                  <div
                    key={key}
                    className={
                      key === 'result'
                        ? 'rounded-2xl bg-sage-pale/60 p-4 sm:col-span-2'
                        : undefined
                    }
                  >
                    <dt className="font-mono text-[11px] font-semibold tracking-[0.16em] text-navy/70 uppercase">
                      {projectsSection.fieldLabels[key]}
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-charcoal/80">
                      {project[key]}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-7 border-t border-navy/10 pt-6">
              <p className="font-mono text-xs font-semibold tracking-[0.18em] text-sage-dark uppercase">
                {projectsSection.fieldLabels.tools}
              </p>
              <div className="mt-3 space-y-3">
                {project.tagGroups.map((group) => (
                  <div
                    key={group.label}
                    className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-4"
                  >
                    <span className="w-24 shrink-0 font-mono text-[11px] font-semibold tracking-[0.16em] text-navy/70 uppercase">
                      {group.label}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {group.tags.map((tag) => (
                        <span key={tag} className="chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-navy/10 pt-5">
              {project.links.map((link) => {
                const external = link.href.startsWith('http');
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    onClick={() => {
                      if (!external) dialogRef.current?.close();
                    }}
                    className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-navy-light"
                  >
                    <span>{link.label}</span>
                    <SymbolIcon
                      name={external ? 'north_east' : 'arrow_forward'}
                      className="text-[16px]"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
