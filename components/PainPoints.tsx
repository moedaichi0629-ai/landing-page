import { painPoints } from "@/data/painPoints";
import RevealOnScroll from "./RevealOnScroll";

export default function PainPoints() {
  return (
    <section className="py-24 px-6 bg-surface-alt">
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
            こんなお悩みありませんか？
          </h2>
        </RevealOnScroll>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {painPoints.map((point, i) => (
            <RevealOnScroll key={point.text} delayMs={i * 60}>
              <div className="h-full flex items-center gap-4 bg-white rounded-2xl border border-border px-6 py-5 shadow-[0_1px_2px_rgba(20,24,31,0.04)] hover:shadow-[0_8px_20px_rgba(20,24,31,0.08)] hover:-translate-y-0.5 transition-all duration-200">
                <span className="text-2xl" aria-hidden>
                  {point.icon}
                </span>
                <p className="text-foreground font-medium">{point.text}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delayMs={200} className="mt-14 text-center">
          <p className="inline-block text-lg sm:text-xl font-bold text-accent bg-accent-soft rounded-full px-7 py-3">
            そのお悩み、AIで解決できます。
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
