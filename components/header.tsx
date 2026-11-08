'use client';

import { useEffect, useState } from 'react';
import { cv, hero, navLinks, profile } from '@/data';
import { cn } from '@/lib/utils';
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  SymbolIcon,
} from '@/components/icons';
import { CvViewer } from '@/components/cv-viewer';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // The active section is whichever one crosses a line 40% down the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: '-40% 0px -60% 0px' },
    );
    document
      .querySelectorAll('section[id], footer[id]')
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header id="main-header" className="sticky top-0 z-50 px-4 pt-3 sm:px-6">
      <div
        className={cn(
          'mx-auto max-w-6xl rounded-[1.75rem] border border-white/80 bg-cream-light/75 shadow-editorial backdrop-blur-xl transition-all duration-300',
          scrolled && 'border-navy/10 bg-cream-light/92 shadow-editorial-hover',
        )}
      >
        <div className="flex h-16 items-center justify-between gap-3 px-3 sm:px-4">
          <a
            href="#home"
            className="group flex min-w-0 items-center gap-2.5"
            onClick={() => setMenuOpen(false)}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy font-serif text-sm font-semibold tracking-wider text-cream shadow-xs ring-4 ring-sage-pale/70 transition-transform duration-300 group-hover:scale-105">
              {profile.monogram}
            </span>
            <span className="hidden truncate font-serif text-lg leading-none font-semibold tracking-tight text-navy sm:inline">
              {profile.name}
            </span>
          </a>

          <nav
            aria-label="Page sections"
            className="hidden items-center rounded-full bg-navy/[0.045] p-1 lg:flex"
          >
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const active = activeId === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'true' : undefined}
                  className={cn(
                    'rounded-full px-3 py-1.5 text-[13px] tracking-tight transition-all duration-200',
                    active
                      ? 'bg-cream-light font-semibold text-navy shadow-xs'
                      : 'font-medium text-navy/75 hover:text-navy',
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="hidden items-center xl:flex">
              <a
                aria-label="Send Email"
                title="Email Fouzia"
                href={`mailto:${profile.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-full text-navy/70 transition-colors duration-200 hover:bg-sage-pale/80 hover:text-navy"
              >
                <MailIcon className="h-4 w-4" />
              </a>
              <a
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full text-navy/70 transition-colors duration-200 hover:bg-sage-pale/80 hover:text-navy"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                aria-label="GitHub Profile"
                title="GitHub Profile"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full text-navy/70 transition-colors duration-200 hover:bg-sage-pale/80 hover:text-navy"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
            </div>
            {/* A real link, so the PDF still opens before or without JavaScript. */}
            <a
              href={cv.file}
              onClick={(event) => {
                event.preventDefault();
                setMenuOpen(false);
                setCvOpen(true);
              }}
              className="inline-flex items-center gap-1.5 rounded-full bg-navy px-3.5 py-2 text-sm font-medium text-cream shadow-xs transition-all duration-300 hover:bg-navy-light hover:shadow-md sm:px-4"
            >
              <span className="hidden sm:inline">{hero.cvLabel}</span>
              <span className="sm:hidden">CV</span>
              <SymbolIcon name="arrow_forward" className="text-[16px]" />
            </a>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full text-navy transition-colors hover:bg-sage-pale/80 lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((open) => !open)}
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
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h10" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <nav
          id="mobile-nav"
          aria-label="Page sections"
          className={cn(
            'grid grid-cols-2 gap-1 px-3 pb-3 lg:hidden',
            menuOpen ? 'grid' : 'hidden',
          )}
        >
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const active = activeId === id;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={active ? 'true' : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  setMenuOpen(false);
                  const target = document.getElementById(id);
                  window.setTimeout(() => {
                    target?.scrollIntoView();
                    history.pushState(null, '', link.href);
                  }, 40);
                }}
                className={cn(
                  'rounded-2xl px-4 py-3 text-sm transition-colors',
                  active
                    ? 'bg-sage-pale font-semibold text-navy'
                    : 'font-medium text-navy/75 hover:bg-navy/[0.04] hover:text-navy',
                )}
              >
                {link.label}
              </a>
            );
          })}
          <div className="col-span-2 mt-1 flex items-center justify-center gap-1 border-t border-navy/8 pt-2 xl:hidden">
            <a
              aria-label="Send Email"
              href={`mailto:${profile.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-full text-navy/75 hover:bg-sage-pale/80 hover:text-navy"
            >
              <MailIcon className="h-4 w-4" />
            </a>
            <a
              aria-label="LinkedIn Profile"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full text-navy/75 hover:bg-sage-pale/80 hover:text-navy"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              aria-label="GitHub Profile"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full text-navy/75 hover:bg-sage-pale/80 hover:text-navy"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
          </div>
        </nav>
      </div>
      {cvOpen ? <CvViewer onClose={() => setCvOpen(false)} /> : null}
    </header>
  );
}
