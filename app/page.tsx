import type { FC } from "react";

// ── データ定義 ────────────────────────────────────────────────
const skills = [
  {
    icon: "💬",
    title: "チャットボット / LINE Bot開発",
    description:
      "LINE Messaging APIを使った会話型Botの設計・実装。写真整理や食事記録など、日常のやり取りをそのままツール化します。",
  },
  {
    icon: "🤖",
    title: "AI連携・業務自動化",
    description:
      "OpenAI API・Claude APIをアプリに組み込み、文章添削・画像解析・提案文生成など、AIに任せられる作業を自動化します。",
  },
  {
    icon: "🖥️",
    title: "Webアプリ開発",
    description:
      "Next.js / React / Streamlit / Flaskを用いて、アイデアを実際に触れるWebアプリとして形にします。",
  },
  {
    icon: "📊",
    title: "外部サービス連携",
    description:
      "Google Calendar・Drive・Sheets・Docsなど、既存のサービスとAPIで連携させ、手作業をなくす仕組みを構築します。",
  },
];

const stats = [
  { value: "10", label: "公開アプリ数" },
  { value: "2ヶ月", label: "開発期間" },
  { value: "6+", label: "対応技術スタック" },
];

const links = [{ label: "GitHub", href: "https://github.com/moedaichi0629-ai" }];

// ── コンポーネント ──────────────────────────────────────────────

const Navbar: FC = () => (
  <header className="fixed top-0 inset-x-0 z-50 bg-[#0f2447]/95 backdrop-blur-sm border-b border-white/10">
    <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <span className="text-white font-semibold text-lg tracking-wide">永田もえ</span>
      <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
        <a href="#skills" className="hover:text-white transition-colors">スキル</a>
        <a href="#stats" className="hover:text-white transition-colors">実績</a>
        <a href="#profile" className="hover:text-white transition-colors">プロフィール</a>
        <a
          href="mailto:moedesign.1110@gmail.com"
          className="ml-2 px-4 py-1.5 rounded-full border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all"
        >
          お問い合わせ
        </a>
      </nav>
    </div>
  </header>
);

const Hero: FC = () => (
  <section className="min-h-screen bg-[#0f2447] flex items-center">
    <div className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <p className="text-blue-400 text-sm font-medium tracking-widest uppercase">
          AI Automation Developer
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          日常の「面倒」を、<br />
          <span className="text-blue-400">AIで自動化する。</span>
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed max-w-md">
          LINEやGoogleサービスと連携したツールを中心に、副業としてAI活用アプリを個人開発しています。
          アイデアから公開まで、一人で形にします。
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#profile"
            className="px-8 py-3 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors"
          >
            プロフィールを見る
          </a>
          <a
            href="#stats"
            className="px-8 py-3 rounded-full border border-white/30 text-white hover:border-white transition-colors"
          >
            実績を確認する
          </a>
        </div>
      </div>

      {/* Avatar placeholder */}
      <div className="flex justify-center md:justify-end">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-[#1a3a6e] border border-white/10 flex items-center justify-center text-7xl">
          👤
        </div>
      </div>
    </div>
  </section>
);

const Skills: FC = () => (
  <section id="skills" className="py-24 bg-slate-50">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-blue-600 text-sm font-medium tracking-widest uppercase mb-3">What I Do</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f2447]">提供できること</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((s) => (
          <div
            key={s.title}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
          >
            <span className="text-4xl mb-4 block">{s.icon}</span>
            <h3 className="text-lg font-semibold text-[#0f2447] mb-2">{s.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Stats: FC = () => (
  <section id="stats" className="py-24 bg-[#0f2447]">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">Numbers</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">実績で語る</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-5xl font-bold text-blue-400 mb-2">{s.value}</p>
            <p className="text-slate-300 text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Profile: FC = () => (
  <section id="profile" className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-blue-600 text-sm font-medium tracking-widest uppercase mb-3">About</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f2447]">プロフィール</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Avatar */}
        <div className="flex justify-center">
          <div className="w-56 h-56 rounded-full bg-slate-100 border-4 border-blue-100 flex items-center justify-center text-7xl shadow-lg">
            👤
          </div>
        </div>
        {/* Bio */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-[#0f2447]">永田もえ</h3>
            <p className="text-blue-600 font-medium mt-1">AI活用ツール開発者</p>
          </div>
          <p className="text-slate-600 leading-relaxed">
            広島在住。本業のかたわら、副業としてAIを活用したツール開発に取り組んでいます。
            LINEやGoogleサービスと連携した自動化ツールを中心に、日常の「面倒」をなくすプロダクトを
            一つずつ形にしながら開発を続けています。
          </p>

          {/* Tech stack */}
          <div>
            <p className="text-sm font-medium text-slate-400 mb-3 uppercase tracking-wide">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {["Python", "TypeScript", "Next.js", "React", "Streamlit", "LINE API", "Google API", "OpenAI / Claude API"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full border border-[#0f2447] text-[#0f2447] text-sm font-medium hover:bg-[#0f2447] hover:text-white transition-all"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer: FC = () => (
  <footer className="bg-[#0a1a35] py-10">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="text-white font-semibold">永田もえ</span>
      <p className="text-slate-400 text-sm">© 2026 永田もえ. All rights reserved.</p>
      <a
        href="mailto:moedesign.1110@gmail.com"
        className="text-blue-400 text-sm hover:text-blue-300 transition-colors"
      >
        moedesign.1110@gmail.com
      </a>
    </div>
  </footer>
);

// ── ページ ─────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Stats />
        <Profile />
      </main>
      <Footer />
    </>
  );
}
