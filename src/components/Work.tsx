import { caseStudy } from "@/config/site";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { CheckIcon, ExternalIcon } from "./ui/Icons";

export default function Work() {
  return (
    <Section
      id="work"
      alt
      eyebrow="Our work"
      title="A dealership, moved online"
      description="Here is one business we digitalized — what they were dealing with, and what we built for them."
    >
      <Reveal>
        <article className="overflow-hidden rounded-3xl border border-line-warm bg-white shadow-xl shadow-brand/5">
          {/* Browser chrome mock */}
          <div className="flex items-center gap-2 border-b border-line bg-canvas-alt px-5 py-3.5">
            <span aria-hidden className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-brand-soft" />
              <span className="size-2.5 rounded-full bg-line-warm" />
              <span className="size-2.5 rounded-full bg-line-warm" />
            </span>
            <span className="ml-2 truncate rounded-md bg-white px-3 py-1 text-xs text-muted">
              {caseStudy.displayUrl}
            </span>
            <span className="ml-auto inline-flex items-center gap-1.5 text-xs font-semibold text-brand">
              <span
                aria-hidden
                className="size-1.5 rounded-full bg-brand"
              />
              Live
            </span>
          </div>

          <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-5 lg:gap-14">
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                {caseStudy.industry}
              </p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                {caseStudy.client}
              </h3>

              <p className="mt-5 text-sm font-semibold text-ink">The challenge</p>
              <p className="mt-2 text-sm leading-relaxed text-body">
                {caseStudy.challenge}
              </p>

              <p className="mt-6 text-sm font-semibold text-ink">The outcome</p>
              <p className="mt-2 text-sm leading-relaxed text-body">
                {caseStudy.outcome}
              </p>

              <a
                href={caseStudy.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand"
              >
                Visit {caseStudy.displayUrl}
                <ExternalIcon className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            <div className="lg:col-span-3">
              <p className="text-sm font-semibold text-ink">What we built</p>
              <ul className="mt-4 space-y-3.5">
                {caseStudy.built.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-body">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-tint text-brand">
                      <CheckIcon className="size-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <dl className="mt-8 grid grid-cols-3 gap-4 rounded-2xl bg-canvas-alt p-5">
                {caseStudy.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block font-display text-2xl font-extrabold text-brand">
                        {stat.value}
                      </span>
                      <span className="mt-1 block text-xs text-body">
                        {stat.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </article>
      </Reveal>

      <Reveal delay={120}>
        <p className="mt-10 text-center text-sm text-muted">
          Your business could be next.{" "}
          <a
            href="#contact"
            className="font-semibold text-brand underline decoration-brand-soft decoration-2 underline-offset-4"
          >
            Tell us what you need
          </a>
          .
        </p>
      </Reveal>
    </Section>
  );
}
