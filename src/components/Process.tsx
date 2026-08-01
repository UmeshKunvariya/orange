import { process } from "@/config/site";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";

export default function Process() {
  return (
    <Section
      id="process"
      eyebrow="How we work"
      title="Four steps, no jargon"
      description="You always know what stage we're at, what's coming next, and what it will cost."
    >
      <div className="relative">
        {/* Connecting line, desktop only */}
        <div
          aria-hidden
          className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-brand-soft to-transparent lg:block"
        />

        <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {process.map((item, i) => (
            <Reveal key={item.step} delay={i * 90}>
              <li className="flex flex-col items-start lg:items-center lg:text-center">
                <span className="grid size-12 shrink-0 place-items-center rounded-full border border-line-warm bg-white font-display text-sm font-extrabold text-brand shadow-sm">
                  {item.step}
                </span>
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-body">
                  {item.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
