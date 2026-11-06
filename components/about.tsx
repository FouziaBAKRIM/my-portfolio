import { about } from '@/data';

export function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-navy px-6 pt-16 pb-24 text-cream lg:px-12 lg:pt-20 lg:pb-28"
    >
      <svg
        className="pointer-events-none absolute top-6 right-6 h-56 w-56 animate-botanical text-sage opacity-20 lg:top-12 lg:right-16 lg:h-72 lg:w-72"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M20,105 C40,85 65,60 100,20" />
        <path d="M50,75 C45,63 48,50 60,52 C71,54 65,69 50,75 Z" />
        <path d="M68,57 C75,45 87,46 86,57 C85,67 74,65 68,57 Z" />
        <path d="M38,87 C28,82 26,69 37,67 C47,65 47,79 38,87 Z" />
        <path d="M82,43 C91,31 103,33 101,44 C99,53 89,51 82,43 Z" />
        <path d="M26,98 C16,96 15,84 25,83 C34,82 33,94 26,98 Z" />
      </svg>
      <div className="reveal-on-scroll is-visible relative z-10 mx-auto flex max-w-4xl flex-col">
        <span className="mb-3 text-xs font-semibold tracking-[0.25em] text-sage uppercase">
          {about.eyebrow}
        </span>
        <h2 className="mb-8 font-serif text-3xl font-medium tracking-tight text-cream sm:text-4xl lg:text-5xl">
          {about.title}
        </h2>
        <blockquote className="my-6 border-l-2 border-sage pl-6 font-serif text-2xl leading-snug text-sage italic lg:text-3xl">
          {about.quote}
        </blockquote>
        <div className="space-y-6 pt-4 text-base leading-relaxed font-normal text-cream/85 sm:text-lg">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.map((part) => part.text).join('')}>
              {paragraph.map((part) =>
                part.emphasis ? (
                  <span key={part.text} className="font-medium text-sage">
                    {part.text}
                  </span>
                ) : (
                  <span key={part.text}>{part.text}</span>
                ),
              )}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
