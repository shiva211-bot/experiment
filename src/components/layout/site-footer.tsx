export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© 2026 HoloX Platform</p>
        <div className="flex gap-5">
          <a href="/docs" className="hover:text-white">Documentation</a>
          <a href="/contact" className="hover:text-white">Contact</a>
          <a href="https://github.com/shiva211-bot/experiment" className="hover:text-white">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
