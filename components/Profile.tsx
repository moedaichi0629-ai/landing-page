import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

const GITHUB_URL = "https://github.com/moedaichi0629-ai";

export default function Profile() {
  return (
    <section id="profile" className="py-28 px-6 bg-surface-alt">
      <div className="max-w-4xl mx-auto">
        <RevealOnScroll className="text-center max-w-2xl mx-auto">
          <p className="text-accent text-sm font-semibold tracking-wide mb-3">
            Profile
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            プロフィール
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delayMs={100}>
          <div className="mt-14 grid md:grid-cols-[auto_1fr] gap-10 items-center bg-white rounded-3xl border border-border p-8 sm:p-10">
            <div className="flex justify-center">
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-[0_12px_32px_rgba(46,107,230,0.28)]">
                <Image
                  src="/landing-page/profile.png"
                  alt="もえ"
                  fill
                  sizes="144px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground">もえ</h3>
              <p className="text-accent font-medium mt-1">AI Developer</p>

              <p className="mt-5 text-muted leading-relaxed">
                AIやAPI連携を活用し、日常や業務の「面倒」を解決するツールを開発しています。
                <br />
                業務効率化やWebアプリ開発を中心に、企画・設計・開発・公開まで一貫して対応しています。
                <br />
                「使いやすく、長く使えるサービス」を大切に、日々学習と開発を続けています。
              </p>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border text-foreground text-sm font-medium hover:border-accent hover:text-accent transition-colors duration-200"
              >
                <GitHubIcon className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.39-5.26 5.67.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}
