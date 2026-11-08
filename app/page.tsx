import portrait from '@/assets/portrait.png';
import { About } from '@/components/about';
import { BackToTop } from '@/components/back-to-top';
import { Contact } from '@/components/contact';
import { Education } from '@/components/education';
import { Experience } from '@/components/experience';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Motion } from '@/components/motion';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { profile, siteConfig } from '@/data';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: siteConfig.url,
  image: `${siteConfig.url}${portrait.src}`,
  jobTitle: profile.jobTitle,
  email: profile.email,
  homeLocation: profile.location,
  sameAs: [profile.linkedin, profile.github],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <Header />
      <main className="w-full">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Contact />
      <BackToTop />
      <Motion />
    </>
  );
}
