import Image from 'next/image';
import Link from 'next/link';
import portrait from '@/assets/portrait.png';
import { contact, hero, profile } from '@/data';
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  SymbolIcon,
} from '@/components/icons';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        data-parallax="120"
        className="pointer-events-none absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-radial from-sage-pale to-transparent to-70%"
      />
      <div className="relative container-page grid grid-cols-1 items-center gap-14 pt-14 pb-16 lg:grid-cols-12 lg:gap-16 lg:pt-20 lg:pb-24">
        <div className="flex flex-col items-start lg:col-span-7">
          <span className="fade-slide-up mb-4 block font-mono text-xs font-semibold tracking-[0.25em] text-sage-dark uppercase">
            {hero.eyebrow}
          </span>
          <h1 className="fade-slide-up mb-3 font-serif text-5xl leading-[1.05] font-medium tracking-tight text-navy delay-100 sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="fade-slide-up mb-6 font-serif text-2xl text-navy/85 italic delay-100 lg:text-3xl">
            {profile.jobTitle}
          </p>
          <p className="fade-slide-up mb-8 max-w-xl text-lg leading-relaxed text-navy/80 delay-200">
            {hero.summary}
          </p>
          <div className="fade-slide-up mb-10 flex flex-wrap items-center gap-3 delay-300">
            <Link
              href={hero.primaryCta.href}
              className="group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-cream transition-colors duration-300 hover:bg-navy-light"
            >
              <span>{hero.primaryCta.label}</span>
              <SymbolIcon
                name="arrow_forward"
                className="text-[18px] transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-6 py-3.5 text-sm font-semibold text-navy transition-colors duration-300 hover:border-navy hover:bg-white"
            >
              <MailIcon className="h-4 w-4 text-sage-dark" />
              <span>{hero.secondaryCta.label}</span>
            </Link>
          </div>
          <div className="fade-slide-up flex flex-wrap items-center gap-x-6 gap-y-2 delay-400">
            <span className="text-xs font-medium tracking-widest text-navy/70 uppercase">
              {hero.followLabel}
            </span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-navy transition-colors hover:text-sage-dark"
            >
              <LinkedInIcon className="h-4 w-4" />
              <span>{hero.linkedinLabel}</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-navy transition-colors hover:text-sage-dark"
            >
              <GitHubIcon className="h-4 w-4" />
              <span>{hero.githubLabel}</span>
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:mr-0 lg:max-w-md">
          <div
            data-parallax="-40"
            className="pointer-events-none absolute -inset-3 rotate-3 rounded-[2.5rem] bg-sage/50"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-cream shadow-editorial-hover">
            <Image
              src={portrait}
              alt={profile.imageAlt}
              fill
              preload
              placeholder="blur"
              sizes="(min-width: 448px) 28rem, 100vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-center gap-2.5 rounded-full bg-cream-light/95 px-4 py-2.5 text-xs font-medium text-navy shadow-editorial">
              <span className="h-2 w-2 shrink-0 rounded-full bg-sage-dark" />
              <span>{contact.status}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
