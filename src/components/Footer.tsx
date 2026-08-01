import {
  caseStudy,
  contacts,
  nav,
  site,
  solutions,
  telLink,
  whatsappLink,
  whatsappContacts,
} from "@/config/site";
import { Container } from "./ui/Section";
import Logo from "./Logo";
import { PhoneIcon, PinIcon, WhatsAppIcon } from "./ui/Icons";

export default function Footer() {
  return (
    <footer className="border-t border-line-warm bg-canvas-alt">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              {site.slogan}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-body">
              {site.tagline}. AI agents, booking systems, CRM &amp; ERP, websites
              and automation for businesses in {site.location} and beyond.
            </p>

            <div className="mt-5 space-y-2.5">
              {whatsappContacts.map((contact) => (
                <a
                  key={contact.intl}
                  href={whatsappLink(contact.intl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm font-semibold text-brand transition-colors hover:text-brand-hover"
                >
                  <WhatsAppIcon className="size-4" />
                  WhatsApp {contact.display}
                </a>
              ))}
              {contacts.map((contact) => (
                <a
                  key={contact.intl}
                  href={telLink(contact.intl)}
                  className="flex items-center gap-2.5 text-sm text-body transition-colors hover:text-brand"
                >
                  <PhoneIcon className="size-4 text-brand" />
                  Call {contact.display}
                </a>
              ))}
              <p className="flex items-center gap-2.5 text-sm text-body">
                <PinIcon className="size-4 text-brand" />
                {site.location}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold text-ink">Solutions</h2>
            <ul className="mt-4 space-y-2.5">
              {solutions.map((solution) => (
                <li key={solution.title}>
                  <a
                    href="#solutions"
                    className="text-sm text-body transition-colors hover:text-brand"
                  >
                    {solution.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-ink">Company</h2>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-body transition-colors hover:text-brand"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={caseStudy.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-body transition-colors hover:text-brand"
                >
                  {caseStudy.displayUrl}
                </a>
              </li>
              {site.email && (
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-sm text-body transition-colors hover:text-brand"
                  >
                    {site.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line-warm pt-7 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted">{site.location}, India</p>
        </div>
      </Container>
    </footer>
  );
}
