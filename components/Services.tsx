import { services } from "@/data/services";
import RevealOnScroll from "./RevealOnScroll";

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-surface-alt">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll className="text-center max-w-2xl mx-auto">
          <p className="text-accent text-sm font-semibold tracking-wide mb-3">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            サービス
          </h2>
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <RevealOnScroll key={service.title} delayMs={i * 80}>
              <div className="h-full bg-white rounded-3xl border border-border p-7 text-center hover:shadow-[0_16px_36px_rgba(20,24,31,0.10)] hover:-translate-y-1 transition-all duration-300">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent-soft text-2xl mb-5" aria-hidden>
                  {service.icon}
                </span>
                <h3 className="font-bold text-foreground">{service.title}</h3>
                <ul className="mt-4 flex flex-wrap justify-center gap-2">
                  {service.examples.map((example) => (
                    <li
                      key={example}
                      className="text-xs text-muted bg-surface-alt rounded-full px-3 py-1"
                    >
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
