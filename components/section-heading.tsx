import { cn } from '@/lib/utils';

export function SectionHeading({
  eyebrow,
  title,
  intro,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  dark?: boolean;
}) {
  return (
    <div data-reveal>
      <span
        className={cn(
          'mb-3 block font-mono text-[11px] font-semibold tracking-[0.25em] uppercase',
          dark ? 'text-sage' : 'text-sage-dark',
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          'font-serif text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]',
          dark ? 'text-cream' : 'text-navy',
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-charcoal/75 sm:text-base">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
