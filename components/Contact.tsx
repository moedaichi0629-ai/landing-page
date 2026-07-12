import RevealOnScroll from "./RevealOnScroll";

const EMAIL = "moedesign.1110@gmail.com";
const GITHUB_URL = "https://github.com/moedaichi0629-ai";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-surface-alt">
      <RevealOnScroll className="max-w-2xl mx-auto text-center">
        <p className="text-accent text-sm font-semibold tracking-wide mb-3">
          Contact
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
          お気軽にご相談ください
        </h2>
        <p className="mt-5 text-muted leading-relaxed">
          「AIを活用したい」「ホームページを作りたい」「こんなこともできる？」
          という段階でも大歓迎です。
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-accent text-white font-medium shadow-[0_8px_24px_rgba(46,107,230,0.28)] hover:bg-accent-dark hover:-translate-y-0.5 transition-all duration-200 text-center"
          >
            メールで相談する
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-border text-foreground font-medium hover:border-accent hover:text-accent transition-all duration-200 text-center"
          >
            GitHubを見る
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
}
