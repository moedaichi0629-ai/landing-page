import { processSteps } from "@/data/process";
import RevealOnScroll from "./RevealOnScroll";

export default function Process() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll className="text-center max-w-2xl mx-auto">
          <p className="text-accent text-sm font-semibold tracking-wide mb-3">
            Flow
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            制作の流れ
          </h2>
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {processSteps.map((step, i) => (
            <RevealOnScroll key={step.number} delayMs={i * 80}>
              <div className="h-full flex flex-col items-center text-center gap-3 px-2">
                <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-accent-soft text-2xl">
                  <span aria-hidden>{step.icon}</span>
                  <span className="absolute -top-2 -right-2 flex items-center justify-center w-7 h-7 rounded-full bg-accent text-white text-[11px] font-bold tabular-nums">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-bold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
