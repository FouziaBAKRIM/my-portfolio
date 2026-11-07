import { Children, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Scrolls its children in an endless loop and pauses on hover. The list is
 * rendered twice so the loop is seamless; the copy is inert, so screen readers
 * and keyboards skip it. With reduced motion it is a plain wrapped list.
 */
export function Marquee({
  children,
  seconds,
  className,
  itemClassName,
}: {
  children: ReactNode;
  /** Time for one full loop. Raise it when there is more content. */
  seconds: number;
  className?: string;
  /** Spacing goes here as right padding, not as a gap, or the loop jumps. */
  itemClassName: string;
}) {
  const items = Children.toArray(children);
  return (
    <div
      className={cn(
        'overflow-hidden mask-x-from-90% mask-x-to-100% motion-reduce:mask-none',
        className,
      )}
    >
      <ul
        className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:animate-none motion-reduce:flex-wrap"
        style={{ animationDuration: `${seconds}s` }}
      >
        {[false, true].map((copy) =>
          items.map((item, index) => (
            <li
              key={`${copy}-${index}`}
              inert={copy}
              className={cn(
                'flex',
                itemClassName,
                copy && 'motion-reduce:hidden',
              )}
            >
              {item}
            </li>
          )),
        )}
      </ul>
    </div>
  );
}
