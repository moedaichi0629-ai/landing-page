const GITHUB_URL = "https://github.com/moedaichi0629-ai";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">© 2026 Moe</p>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 text-sm hover:text-white transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
