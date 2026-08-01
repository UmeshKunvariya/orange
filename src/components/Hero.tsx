import Image from "next/image";
import { caseStudy, focusAreas, site } from "@/config/site";
import { Container } from "./ui/Section";
import Reveal from "./ui/Reveal";
import WhatsAppButton from "./ui/WhatsAppButton";
import { ArrowRightIcon } from "./ui/Icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Warm gradient mesh — hero only */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 size-[38rem] -translate-x-1/2 rounded-full bg-brand-tint blur-3xl" />
        <div className="absolute -right-24 top-24 size-80 rounded-full bg-brand-soft/40 blur-3xl" />
        <div className="absolute -left-20 top-56 size-72 rounded-full bg-brand-tint blur-3xl" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Image
              src="/mark.png"
              alt=""
              width={158}
              height={180}
              priority
              className="mx-auto h-16 w-auto sm:h-20"
            />
          </Reveal>

          <Reveal delay={60}>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-ink sm:text-base">
              Automate. <span className="text-brand">Innovate.</span> Elevate.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] sm:text-5xl md:text-6xl">
              AI solutions for{" "}
              <span className="relative inline-block text-brand">
                every business
                <svg
                  aria-hidden
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-brand-soft"
                >
                  <path
                    d="M2 8c60-6 150-7 296-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={190}>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-body">
              We build the AI agents, booking systems, CRMs, websites and
              automations that take your business off paper and online — designed
              around the way you already work.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppButton size="lg" className="w-full sm:w-auto">
                Start a conversation
              </WhatsAppButton>
              <a
                href="#work"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-line-warm bg-white px-7 py-4 text-base font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:text-brand sm:w-auto"
              >
                See our work
                <ArrowRightIcon className="size-[18px] transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
              {focusAreas.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line-warm bg-white/70 px-3.5 py-1.5 text-xs font-medium text-body"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={380}>
            <p className="mt-8 text-sm text-muted">
              Based in {site.location} — trusted by businesses including{" "}
              <a
                href={caseStudy.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-body underline decoration-brand-soft decoration-2 underline-offset-4 transition-colors hover:text-brand"
              >
                {caseStudy.client}
              </a>
              .
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
