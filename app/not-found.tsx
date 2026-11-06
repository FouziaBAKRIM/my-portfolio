import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center text-charcoal">
      <p className="text-xs font-semibold tracking-[0.25em] text-sage-dark uppercase">
        404
      </p>
      <h1 className="mt-3 font-serif text-4xl font-medium text-navy sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-navy/80">
        This address does not match a page on the portfolio.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:bg-navy-light"
      >
        Back to the portfolio
      </Link>
    </main>
  );
}
