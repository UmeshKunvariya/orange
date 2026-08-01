import { whatsappLink } from "@/config/site";
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

export default function WhatsAppButton({
  children = "Chat on WhatsApp",
  size = "md",
  variant = "solid",
  message,
  className = "",
}: {
  children?: React.ReactNode;
  size?: Size;
  variant?: Variant;
  message?: string;
  className?: string;
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5 ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <WhatsAppIcon className={iconSizes[size]} />
      {children}
    </a>
  );
}
