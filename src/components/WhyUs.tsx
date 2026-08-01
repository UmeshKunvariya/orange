import { whyUs } from "@/config/site";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { Icon } from "./ui/Icons";

export default function WhyUs() {
  return (
    <Section
      id="why-us"
      alt
      eyebrow="Why Orange Solutions"
      title="Built to fit the business, not the other way around"
      description="We're a small team, which means you talk to the people actually building your project."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {whyUs.map((item, i) => (
          <Reveal key={item.title} delay={i * 80}>
            <div className="flex h-full flex-col items-start rounded-2xl border border-line-warm bg-white p-7 transition-all duration-300 hover:border-brand-soft hover:shadow-lg hover:shadow-brand/5">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-tint text-brand">
                <Icon name={item.icon} className="size-6" />
              </span>
              <h3 className="mt-5 text-base font-bold uppercase tracking-wide text-brand">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
