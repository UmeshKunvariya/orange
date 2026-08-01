import { site, solutions } from "@/config/site";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { Icon } from "./ui/Icons";

export default function Services() {
  return (
    <Section
      id="solutions"
      eyebrow="Our solutions"
      title={site.promise}
      description="Ten ways we take the manual work off your team — pick the one that's slowing you down most, or let us help you find it."
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {solutions.map((solution, i) => (
          <Reveal key={solution.title} delay={(i % 5) * 60}>
            <article className="group flex h-full flex-col items-center rounded-2xl border border-line-warm bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-soft hover:shadow-xl hover:shadow-brand/5">
              <div className="grid size-14 shrink-0 place-items-center rounded-full bg-brand-tint text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                <Icon name={solution.icon} className="size-6" />
              </div>

              <h3 className="mt-4 text-sm font-bold uppercase tracking-wide">
                {solution.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                {solution.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
