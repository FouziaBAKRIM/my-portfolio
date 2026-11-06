'use client';

import { useEffect } from 'react';

/**
 * Scroll animation, driven by data attributes on server-rendered markup:
 * - data-reveal: fades up once when scrolled into view
 * - data-parallax="<px>": drifts by that distance across the viewport
 * - data-line: grows from its origin as it scrolls through the viewport
 *
 * GSAP loads after hydration in its own chunk, so it never blocks first paint.
 * Nothing is hidden by CSS, so the page is complete if JavaScript never runs.
 */
export function Motion() {
  useEffect(() => {
    let cancelled = false;
    let revert: (() => void) | undefined;

    void Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);

        const media = gsap.matchMedia();
        media.add('(prefers-reduced-motion: no-preference)', () => {
          // Content already on screen stays put, so loading GSAP never flashes it.
          const pending = gsap.utils
            .toArray<HTMLElement>('[data-reveal]')
            .filter(
              (el) => el.getBoundingClientRect().top > window.innerHeight,
            );

          // Opacity, not visibility: hidden links must stay reachable by keyboard.
          gsap.set(pending, { opacity: 0, y: 28 });
          ScrollTrigger.batch(pending, {
            start: 'top 90%',
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.08,
                clearProps: 'opacity,transform',
              }),
          });

          gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
            gsap.to(el, {
              y: Number(el.dataset.parallax),
              ease: 'none',
              scrollTrigger: {
                trigger: el,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            });
          });

          gsap.utils.toArray<HTMLElement>('[data-line]').forEach((el) => {
            gsap.from(el, {
              scaleY: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                end: 'bottom 60%',
                scrub: true,
              },
            });
          });
        });
        revert = () => media.revert();
      },
    );

    return () => {
      cancelled = true;
      revert?.();
    };
  }, []);

  return null;
}
