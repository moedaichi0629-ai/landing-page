export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-40 pb-28 px-6 overflow-hidden"
    >
      {/* 薄いグラデーション背景 */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-accent-soft via-white to-white"
      />
      <div
        aria-hidden
        className="absolute -top-24 -right-24 -z-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="max-w-4xl mx-auto text-center">
        <p className="text-accent text-sm font-semibold tracking-wide mb-5">
          AI Developer
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight tracking-tight text-balance">
          日常や業務の
          <br className="sm:hidden" />
          「面倒」をAIで解決します。
        </h1>
        <p className="mt-7 text-muted text-lg leading-relaxed max-w-xl mx-auto text-balance">
          AI・Webアプリ・API連携を活用し、業務効率化ツールやホームページ制作を行っています。
          企画から設計・開発・公開まで一貫して対応します。
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#works"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-accent text-white font-medium shadow-[0_8px_24px_rgba(46,107,230,0.28)] hover:bg-accent-dark hover:-translate-y-0.5 transition-all duration-200 text-center"
          >
            制作実績を見る
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-border text-foreground font-medium hover:border-accent hover:text-accent transition-all duration-200 text-center"
          >
            無料で相談する
          </a>
        </div>
      </div>
    </section>
  );
}
