import { site } from "@/config/site";
import { Container } from "./ui/Section";
import Reveal from "./ui/Reveal";
import WhatsAppButton from "./ui/WhatsAppButton";
import { PhoneIcon, PinIcon } from "./ui/Icons";

/** "+91 87580 59160" -> "+918758059160" for tel: links */
const telHref = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;

export default function CTA() {
  return (
    <section id="contact" className="scroll-mt-24 bg-canvas py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line-warm bg-gradient-to-br from-brand-tint via-canvas-alt to-white px-7 py-16 text-center sm:px-12 sm:py-20">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -right-16 -top-16 size-72 rounded-full bg-brand-soft/40 blur-3xl" />
              <div className="absolute -bottom-20 -left-10 size-64 rounded-full bg-brand-soft/30 blur-3xl" />
            </div>

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
              {site.slogan}
            </p>

            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold leading-[1.15] sm:text-4xl">
              Let&apos;s digitalize your business
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-body sm:text-lg">
              Tell us what slows your business down. We&apos;ll tell you honestly
              whether we can fix it, how long it takes and what it costs — no
              charge for the conversation.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppButton size="lg" className="w-full sm:w-auto">
                Message us on WhatsApp
              </WhatsAppButton>
              <a
                href={telHref(site.phones[0])}
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-line-warm bg-white px-7 py-4 text-base font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:text-brand sm:w-auto"
              >
                <PhoneIcon className="size-[18px]" />
                Call us
              </a>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-x-10 gap-y-4 border-t border-line-warm pt-8 sm:flex-row">
              <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                <span className="grid size-9 place-items-center rounded-lg bg-brand text-white">
                  <PhoneIcon className="size-[18px]" />
                </span>
                <span className="flex flex-col text-sm font-semibold text-ink">
                  {site.phones.map((phone) => (
                    <a
                      key={phone}
                      href={telHref(phone)}
                      className="transition-colors hover:text-brand"
                    >
                      {phone}
                    </a>
                  ))}
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                <span className="grid size-9 place-items-center rounded-lg bg-brand text-white">
                  <PinIcon className="size-[18px]" />
                </span>
                <span className="text-sm font-semibold text-ink">
                  {site.location}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
