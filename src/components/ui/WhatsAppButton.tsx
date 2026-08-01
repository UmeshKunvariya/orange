import { CONTACT_ANCHOR, whatsappLink } from "@/config/site";
import { WhatsAppIcon } from "./Icons";

type Size = "sm" | "md" | "lg";
type Variant = "solid" | "outline";

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm gap-2",
  md: "px-5 py-3 text-sm gap-2.5",
  lg: "px-7 py-4 text-base gap-3",
};

const variants: Record<Variant, string> = {
  solid:
    "bg-brand text-white shadow-lg shadow-brand/20 hover:bg-brand-hover hover:shadow-xl hover:shadow-brand/25",
  outline:
    "bg-white text-ink border border-line-warm hover:border-brand hover:text-brand",
};

const iconSizes: Record<Size, string> = {
  sm: "size-4",
  md: "size-[18px]",
  lg: "size-5",
};

const buttonClasses = (size: Size, variant: Variant, className: string) =>
  `inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5 ${sizes[size]} ${variants[variant]} ${className}`;

/**
 * Opens WhatsApp for one specific number. `number` is required on purpose —
 * the numbers rank equally, so nothing may silently pick a default.
 */
export default function WhatsAppButton({
  number,
  children = "Chat on WhatsApp",
  size = "md",
  variant = "solid",
  message,
  className = "",
}: {
  number: string;
  children?: React.ReactNode;
  size?: Size;
  variant?: Variant;
  message?: string;
  className?: string;
}) {
  return (
    <a
      href={whatsappLink(number, message)}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClasses(size, variant, className)}
    >
      <WhatsAppIcon className={iconSizes[size]} />
      {children}
    </a>
  );
}

/**
 * Single call-to-action used where only one button fits (header, hero). It
 * scrolls to the contact section, which offers every number side by side,
 * rather than committing the visitor to one of them.
 */
export function ContactButton({
  children = "Get in touch",
  size = "md",
  variant = "solid",
  className = "",
  onNavigate,
}: {
  children?: React.ReactNode;
  size?: Size;
  variant?: Variant;
  className?: string;
  /** Only passed from client components (e.g. to close the mobile menu). */
  onNavigate?: () => void;
}) {
  return (
    <a
      href={CONTACT_ANCHOR}
      onClick={onNavigate}
      className={buttonClasses(size, variant, className)}
    >
      <WhatsAppIcon className={iconSizes[size]} />
      {children}
    </a>
  );
}
