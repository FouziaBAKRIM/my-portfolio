import { about } from '@/data';
import { SectionHeading } from '@/components/section-heading';

export function About() {
  return (
    <section id="about" className="container-page py-8 lg:py-12">
      <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-12 text-cream sm:px-10 lg:px-14 lg:py-16">
        <svg
          data-parallax="-60"
          className="pointer-events-none absolute -right-6 -bottom-6 h-64 w-64 text-sage opacity-15 lg:h-80 lg:w-80"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
          viewBox="0 0 120 120"
          aria-hidden="true"
        >
          <path d="M20,105 C40,85 65,60 100,20" />
          <path d="M50,75 C45,63 48,50 60,52 C71,54 65,69 50,75 Z" />
          <path d="M68,57 C75,45 87,46 86,57 C85,67 74,65 68,57 Z" />
          <path d="M38,87 C28,82 26,69 37,67 C47,65 47,79 38,87 Z" />
          <path d="M82,43 C91,31 103,33 101,44 C99,53 89,51 82,43 Z" />
          <path d="M26,98 C16,96 15,84 25,83 C34,82 33,94 26,98 Z" />
        </svg>
        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading dark eyebrow={about.eyebrow} title={about.title} />
            <blockquote
              data-reveal
              className="mt-8 border-l-2 border-sage pl-5 font-serif text-xl leading-snug text-sage italic lg:text-2xl"
            >
              {about.quote}
            </blockquote>
          </div>
          <div
            data-reveal
            className="space-y-5 text-base leading-relaxed text-cream/85"
          >
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
      </div>
    </section>
  );
}
