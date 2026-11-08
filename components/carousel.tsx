'use client';

import {
  Children,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from 'react';
import { carouselLabels } from '@/data';
import { cn } from '@/lib/utils';
import { SymbolIcon } from '@/components/icons';

// Slides per view are 1, 2, then 3 (see the basis classes on each slide), so
// the server already knows where every slide fits and controls cause no shift.
function controlsVisibility(count: number) {
  return cn(
    count <= 1 && 'hidden',
    count <= 2 && 'md:hidden',
    count <= 3 && 'lg:hidden',
  );
}

function stepOf(track: HTMLElement) {
  const [first, second] = Array.from(track.children) as HTMLElement[];
  return second ? second.offsetLeft - first.offsetLeft : track.clientWidth;
}

const arrowButton =
  'flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-navy/15 bg-white text-navy transition-colors hover:bg-navy hover:text-cream disabled:pointer-events-none disabled:opacity-35';

export function Carousel({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const slides = Children.toArray(children);
  const trackRef = useRef<HTMLUListElement>(null);
  const [position, setPosition] = useState({ index: 0, last: 0 });
  const hintId = useId();
  const liveId = useId();

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const step = stepOf(track);
      const index = step ? Math.round(track.scrollLeft / step) : 0;
      const last = step
        ? Math.max(
            0,
            Math.round((track.scrollWidth - track.clientWidth) / step),
          )
        : 0;
      setPosition((current) =>
        current.index === index && current.last === last
          ? current
          : { index, last },
      );
    };
    // The observer also fires once on observe, which takes the first reading.
    const observer = new ResizeObserver(update);
    observer.observe(track);
    track.addEventListener('scroll', update, { passive: true });
    return () => {
      observer.disconnect();
      track.removeEventListener('scroll', update);
    };
  }, []);

  // Smoothness comes from the track's motion-safe:scroll-smooth class.
  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const step = stepOf(track);
    if (!step) return;
    const last = Math.max(
      0,
      Math.round((track.scrollWidth - track.clientWidth) / step),
    );
    const next = Math.min(Math.max(index, 0), last);
    track.scrollTo({ left: next * step });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goTo(position.index - 1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      goTo(position.index + 1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      goTo(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      goTo(position.last);
    }
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      aria-describedby={hintId}
      tabIndex={0}
      onKeyDown={onKeyDown}
      className="rounded-[2rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage-dark"
    >
      <p id={hintId} className="sr-only">
        {carouselLabels.hint}
      </p>
      <p id={liveId} aria-live="polite" aria-atomic="true" className="sr-only">
        {carouselLabels.slide} {position.index + 1} {carouselLabels.of}{' '}
        {position.last + 1}
      </p>

      <ul
        ref={trackRef}
        className="-mx-3 -my-8 flex snap-x snap-mandatory scroll-px-3 [scrollbar-width:none] gap-5 overflow-x-auto overscroll-x-contain px-3 py-8 motion-safe:scroll-smooth [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide, index) => (
          <li
            key={index}
            aria-roledescription="slide"
            aria-label={`${index + 1} / ${slides.length}`}
            className="carousel-slide flex shrink-0 basis-[85%] snap-start *:w-full md:basis-[calc((100%-1.25rem)/2)] lg:basis-[calc((100%-2.5rem)/3)]"
          >
            {slide}
          </li>
        ))}
      </ul>

      <div
        className={cn(
          'mt-6 flex items-center justify-center gap-4',
          controlsVisibility(slides.length),
        )}
      >
        <button
          type="button"
          aria-label={carouselLabels.previous}
          disabled={position.index <= 0}
          onClick={() => goTo(position.index - 1)}
          className={arrowButton}
        >
          <SymbolIcon name="arrow_back" className="text-[18px]" />
        </button>
        <div className="flex items-center">
          {Array.from({ length: position.last + 1 }, (_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`${carouselLabels.goTo} ${index + 1}`}
              aria-current={index === position.index ? 'true' : undefined}
              onClick={() => goTo(index)}
              className="group flex h-8 cursor-pointer items-center px-1"
            >
              <span
                className={cn(
                  'block h-2 rounded-full transition-[width,background-color] duration-300',
                  index === position.index
                    ? 'w-6 bg-navy'
                    : 'w-2 bg-navy/25 group-hover:bg-navy/50',
                )}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          aria-label={carouselLabels.next}
          disabled={position.index >= position.last}
          onClick={() => goTo(position.index + 1)}
          className={arrowButton}
        >
          <SymbolIcon name="arrow_forward" className="text-[18px]" />
        </button>
      </div>
    </div>
  );
}
