import Image from "next/image";
import type { Work } from "@/data/works";

export default function WorkCard({ work }: { work: Work }) {
  return (
    <article className="group flex flex-col h-full bg-white rounded-3xl border border-border overflow-hidden shadow-[0_1px_2px_rgba(20,24,31,0.04)] hover:shadow-[0_16px_36px_rgba(20,24,31,0.10)] hover:-translate-y-1 transition-all duration-300">
      {/* ビジュアル */}
      <div className="relative h-40 bg-gradient-to-br from-accent-soft to-white overflow-hidden">
        {work.image ? (
          <Image
            src={work.image}
            alt={`${work.title}の画面`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <div className="h-full flex items-center justify-center">
            <span className="text-5xl" aria-hidden>
              {work.icon}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-7">
        <h3 className="text-lg font-bold text-foreground">{work.title}</h3>

        <p className="mt-3 text-sm text-muted leading-relaxed">
          {work.target}
          <br />
          {work.problem}
          <br />
          {work.solution}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-accent bg-accent-soft rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 pt-5 border-t border-border flex items-center gap-3 text-sm font-medium">
          {work.demoUrl ? (
            <a
              href={work.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2.5 rounded-full bg-accent text-white hover:bg-accent-dark transition-colors duration-200"
            >
              デモを見る
            </a>
          ) : (
            <span className="flex-1 text-center px-4 py-2.5 rounded-full bg-surface-alt text-muted">
              デモ準備中
            </span>
          )}
          <a
            href={work.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2.5 rounded-full border border-border text-foreground hover:border-accent hover:text-accent transition-colors duration-200"
          >
            GitHubを見る
          </a>
        </div>
      </div>
    </article>
  );
}
