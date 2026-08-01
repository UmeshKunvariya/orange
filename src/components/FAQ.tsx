import { faqs } from "@/config/site";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { ChevronDownIcon } from "./ui/Icons";

export default function FAQ() {
  return (
    <Section
      id="faq"
      eyebrow="Questions"
      title="Things people ask us first"
      description="Still unsure about something? Message us — we answer honestly, even if the answer is 'you don't need this yet'."
    >
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((faq, i) => (
          <Reveal key={faq.question} delay={i * 60}>
            <details className="group rounded-2xl border border-line-warm bg-white px-6 transition-colors hover:border-brand-soft">
              <summary className="flex items-center justify-between gap-4 py-5 text-left text-base font-semibold text-ink">
                {faq.question}
                <ChevronDownIcon className="faq-chevron size-5 shrink-0 text-brand transition-transform duration-300" />
              </summary>
              <p className="border-t border-line pb-5 pt-4 text-sm leading-relaxed text-body">
                {faq.answer}
              </p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
