import { works } from "@/data/works";
import WorkCard from "./WorkCard";
import RevealOnScroll from "./RevealOnScroll";

export default function Works() {
  return (
    <section id="works" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll className="text-center max-w-2xl mx-auto">
          <p className="text-accent text-sm font-semibold tracking-wide mb-3">
            Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            制作実績
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            「誰の」「どんな課題を」「どう解決するか」を大切に、
            企画から公開まで一人で手がけたツールです。
          </p>
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, i) => (
            <RevealOnScroll key={work.id} delayMs={(i % 3) * 80}>
              <WorkCard work={work} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
