export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line/10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div className="flex flex-col gap-1">
          <span className="label-technical">HoloX Platform</span>
          <span className="text-xs text-text-muted">
            Engineering · AI · Software · Cybersecurity · Research
          </span>
        </div>
        <div className="flex gap-6 text-xs text-text-muted">
          <a href="/docs" className="hover:text-text-primary">
            Documentation
          </a>
          <a href="/contact" className="hover:text-text-primary">
            Contact
          </a>
          <a
            href="https://github.com/shiva211-bot/experiment"
            className="hover:text-text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
