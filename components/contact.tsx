import { contact, contactChannels } from '@/data';
import { ScrollToTopButton } from '@/components/back-to-top';
import { CurrentYear } from '@/components/current-year';
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  SymbolIcon,
} from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';

function ChannelIcon({
  icon,
}: {
  icon: (typeof contactChannels)[number]['icon'];
}) {
  if (icon === 'email') return <MailIcon className="h-5 w-5" />;
  if (icon === 'linkedin') return <LinkedInIcon className="h-5 w-5" />;
  if (icon === 'github') return <GitHubIcon className="h-5 w-5" />;
  return <SymbolIcon name="location_on" className="text-[20px]" />;
}

export function Contact() {
  return (
    <footer id="contact" className="container-page pt-8 pb-6 lg:pt-12">
      <div className="rounded-[2rem] bg-navy p-6 text-cream sm:p-10 lg:p-14">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            dark
            eyebrow={contact.eyebrow}
            title={contact.title}
          />
          <div className="inline-flex items-center gap-2.5 self-start rounded-full border border-white/15 px-4 py-2 sm:self-auto">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-sage opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sage" />
            </span>
            <span className="text-xs font-medium">{contact.status}</span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {contactChannels.map((channel) => {
            const className =
              'group flex items-center gap-4 rounded-2xl border border-white/10 p-4 transition-colors duration-300 hover:border-sage hover:bg-white/5 sm:p-5';
            const body = (
              <>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sage transition-colors group-hover:bg-sage group-hover:text-navy">
                  <ChannelIcon icon={channel.icon} />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="font-mono text-[10px] font-semibold tracking-wider text-cream/60 uppercase">
                    {channel.label}
                  </span>
                  <span className="text-sm font-medium wrap-anywhere">
                    {channel.value}
                  </span>
                </span>
              </>
            );

            if (!channel.href) {
              return (
                <div key={channel.label} data-reveal className={className}>
                  {body}
                </div>
              );
            }

            return (
              <a
                key={channel.label}
                data-reveal
                href={channel.href}
                title={channel.title}
                target={channel.external ? '_blank' : undefined}
                rel={channel.external ? 'noopener noreferrer' : undefined}
                className={className}
              >
                {body}
              </a>
            );
          })}
        </div>

        <p className="mt-10 text-center font-serif text-base text-cream/70 italic sm:text-lg">
          {contact.closing}
        </p>
      </div>

      <div className="flex flex-col items-center justify-between gap-3 px-2 pt-6 text-xs text-charcoal/70 sm:flex-row">
        <span>
          © <CurrentYear buildYear={new Date().getFullYear()} />{' '}
          {contact.copyright}
        </span>
        <ScrollToTopButton className="flex cursor-pointer items-center gap-1 font-medium text-navy transition-colors hover:text-sage-dark">
          <span>{contact.backToTop}</span>
          <span className="text-sm">↑</span>
        </ScrollToTopButton>
      </div>
    </footer>
  );
}
