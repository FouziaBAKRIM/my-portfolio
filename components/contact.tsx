import { contact, contactChannels } from '@/data';
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  SymbolIcon,
} from '@/components/icons';
import { ScrollToTopButton } from '@/components/back-to-top';

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
    <footer
      id="contact"
      className="relative w-full overflow-hidden bg-sage-pale px-6 pt-8 pb-16 lg:px-12"
    >
      <div className="pointer-events-none -mt-8 mb-10 w-full overflow-hidden leading-none">
        <svg
          className="relative block h-12 w-full text-cream sm:h-16 lg:h-20"
          preserveAspectRatio="none"
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0,0 C320,80 720,110 1080,45 C1240,15 1380,30 1440,40 L1440,0 L0,0 Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-navy p-8 shadow-2xl sm:p-10 md:p-14">
          <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-navy/80 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-taupe/10 blur-3xl" />
          <div className="pointer-events-none absolute top-1/2 left-1/3 h-96 w-96 rounded-full bg-white/[0.02] blur-2xl" />

          <div className="relative z-10 mb-10 flex flex-col justify-between gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
            <div>
              <span className="mb-2 block font-mono text-[11px] font-semibold tracking-[0.25em] text-taupe uppercase">
                {contact.eyebrow}
              </span>
              <h2 className="font-serif text-3xl leading-tight font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                {contact.title}
              </h2>
            </div>
            <div className="inline-flex items-center gap-2.5 self-start rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xs sm:self-auto">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-xs font-semibold tracking-wider text-taupe uppercase">
                {contact.status}
              </span>
            </div>
          </div>

          <div className="relative z-10 my-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactChannels.map((channel) => {
              const className =
                'group flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-taupe hover:bg-white/10';
              const body = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-taupe/20 bg-navy text-taupe transition-colors group-hover:bg-taupe/30 group-hover:text-white">
                    <ChannelIcon icon={channel.icon} />
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="font-mono text-[10px] font-semibold tracking-wider text-taupe uppercase">
                      {channel.label}
                    </span>
                    <span className="truncate text-xs font-medium text-cream transition-colors group-hover:text-white sm:text-sm">
                      {channel.value}
                    </span>
                  </span>
                </>
              );

              if (!channel.href) {
                return (
                  <div key={channel.label} className={className}>
                    {body}
                  </div>
                );
              }

              return (
                <a
                  key={channel.label}
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

          <div className="relative z-10 mb-6 py-4 text-center">
            <p className="font-serif text-base tracking-wide text-taupe italic sm:text-lg">
              {contact.closing}
            </p>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-cream/70 sm:flex-row">
            <div>
              <span>{contact.copyright}</span>
            </div>
            <div>
              <ScrollToTopButton className="flex cursor-pointer items-center gap-1 font-medium text-taupe outline-hidden transition-colors hover:text-white">
                <span>{contact.backToTop}</span>
                <span className="text-sm">↑</span>
              </ScrollToTopButton>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
