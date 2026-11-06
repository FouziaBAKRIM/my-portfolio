import Image from 'next/image';
import Link from 'next/link';
import portrait from '@/assets/portrait.png';
import { hero, profile } from '@/data';
import { MailIcon, SymbolIcon } from '@/components/icons';

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-cream px-6 pt-16 pb-28 lg:px-12 lg:pt-28 lg:pb-36"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 animate-float rounded-full bg-sage-pale/60 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-20 h-80 w-80 animate-float rounded-full bg-sage/20 blur-2xl [animation-duration:9s]" />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col items-start lg:col-span-7">
          <span className="fade-slide-up mb-4 block text-xs font-semibold tracking-[0.25em] text-sage-dark uppercase delay-100">
            {hero.eyebrow}
          </span>
          <h1 className="fade-slide-up mb-3 font-serif text-5xl leading-[1.08] font-medium tracking-tight text-navy delay-200 sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="fade-slide-up mb-6 font-serif text-2xl font-normal text-navy/85 italic delay-300 lg:text-3xl">
            {profile.jobTitle}
          </p>
          <p className="fade-slide-up mb-8 max-w-xl text-lg leading-relaxed font-normal text-navy/80 delay-400 lg:text-xl">
            {hero.summary}
          </p>
          <div className="fade-slide-up mb-10 flex flex-wrap items-center gap-4 delay-500">
            <Link
              href={hero.primaryCta.href}
              className="group inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-cream shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-light hover:shadow-lg"
            >
              <span>{hero.primaryCta.label}</span>
              <SymbolIcon
                name="arrow_forward"
                className="text-[18px] transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-navy/30 bg-cream-light px-7 py-3.5 text-sm font-semibold text-navy transition-all duration-300 hover:border-navy hover:bg-cream hover:shadow-xs"
            >
              <MailIcon className="h-4 w-4 text-sage-dark" />
              <span>{hero.secondaryCta.label}</span>
            </Link>
          </div>
          <div className="fade-slide-up flex w-full max-w-md items-center gap-6 border-t border-navy/15 pt-4 delay-600">
            <span className="text-xs font-medium tracking-widest text-navy/60 uppercase">
              {hero.followLabel}
            </span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium text-navy transition-colors hover:text-sage-dark"
            >
              <SymbolIcon
                name="link"
                className="text-[18px] transition-transform duration-300 group-hover:scale-110"
              />
              <span>{hero.linkedinLabel}</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium text-navy transition-colors hover:text-sage-dark"
            >
              <SymbolIcon
                name="code"
                className="text-[18px] transition-transform duration-300 group-hover:scale-110"
              />
              <span>{hero.githubLabel}</span>
            </a>
          </div>
        </div>

        <div className="fade-slide-up relative flex justify-center delay-300 lg:col-span-5 lg:justify-end">
          <div className="relative w-full max-w-md">
            <svg
              className="pointer-events-none absolute -top-12 -left-12 h-64 w-64 -rotate-12 transform animate-float text-sage-pale opacity-75 [animation-duration:10s]"
              fill="currentColor"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.1,73.1,42.2C64.8,55.3,53.8,66.9,40.4,73.7C27.1,80.5,13.5,82.4,-0.4,83.1C-14.4,83.8,-28.7,83.2,-41.8,76.5C-54.8,69.8,-66.6,57,-74.6,42.5C-82.6,28,-86.8,14,-85.7,0.6C-84.7,-12.7,-78.3,-25.5,-70.1,-38.3C-61.9,-51.1,-51.9,-64,-39.2,-72C-26.6,-80,-13.3,-83.1,0.9,-84.6C15.1,-86.2,30.6,-83.7,44.7,-76.4Z"
                transform="translate(100 100)"
              />
            </svg>
            <div className="pointer-events-none absolute -inset-4 rotate-3 transform animate-float rounded-[42%_58%_70%_30%/45%_45%_55%_55%] bg-sage/50 shadow-xs transition-transform duration-700 [animation-duration:8s] sm:-inset-6" />
            <div className="pointer-events-none absolute -inset-2 -rotate-2 transform rounded-[55%_45%_35%_65%/52%_58%_42%_48%] bg-navy/10 sm:-inset-3" />
            <div className="group relative z-10 aspect-[4/5] overflow-hidden rounded-2xl border-2 border-navy/20 bg-cream shadow-xl">
              <Image
                src={portrait}
                alt={profile.imageAlt}
                fill
                preload
                placeholder="blur"
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <svg
              className="pointer-events-none absolute -right-8 -bottom-8 z-20 h-28 w-28 animate-botanical text-sage-dark opacity-60"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.3"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M15,85 C28,68 45,50 82,18" />
              <path d="M45,50 C40,42 41,32 50,33 C58,34 54,45 45,50 Z" />
              <path d="M58,37 C64,28 73,28 73,36 C73,43 64,42 58,37 Z" />
              <path d="M32,63 C23,60 21,50 29,48 C37,46 38,57 32,63 Z" />
              <path d="M22,76 C14,75 14,64 21,63 C28,62 27,72 22,76 Z" />
              <path d="M68,26 C75,17 84,18 83,26 C82,33 74,31 68,26 Z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 z-20 w-full overflow-hidden leading-none">
        <svg
          className="relative block h-14 w-full text-navy sm:h-20 lg:h-28"
          preserveAspectRatio="none"
          viewBox="0 0 1440 140"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0,32 C240,110 480,20 720,70 C960,120 1200,45 1440,75 L1440,140 L0,140 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
