import { techStack } from "@/data/techStack";
import RevealOnScroll from "./RevealOnScroll";

export default function TechStack() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll className="text-center max-w-2xl mx-auto">
          <p className="text-accent text-sm font-semibold tracking-wide mb-3">
            Tech Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            技術スタック
          </h2>
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((group, i) => (
            <RevealOnScroll key={group.category} delayMs={i * 60}>
              <div className="h-full bg-white rounded-3xl border border-border p-6">
                <p className="text-xs font-semibold tracking-wide uppercase text-muted mb-4">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm font-medium text-foreground bg-surface-alt border border-border rounded-full px-4 py-1.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
