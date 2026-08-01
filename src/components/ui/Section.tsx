import Reveal from "./Reveal";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
      <span aria-hidden className="h-px w-6 bg-brand-soft" />
      {children}
    </span>
  );
}

/**
 * Standard section shell: consistent vertical rhythm, optional alt background,
 * and a revealed eyebrow / heading / description block.
 */
export default function Section({
  id,
  eyebrow,
  title,
  description,
  alt = false,
  align = "center",
  className = "",
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  alt?: boolean;
  align?: "center" | "left";
  className?: string;
  children: React.ReactNode;
}) {
  const centered = align === "center";

  return (
    <section
      id={id}
      className={`scroll-mt-24 py-20 sm:py-28 ${
        alt ? "bg-canvas-alt" : "bg-canvas"
      } ${className}`}
    >
      <Container>
        {(eyebrow || title || description) && (
          <Reveal>
            <div
              className={`mb-14 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}
            >
              {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
              {title && (
                <h2 className="mt-4 text-3xl font-bold leading-[1.15] sm:text-4xl">
                  {title}
                </h2>
              )}
              {description && (
                <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">
                  {description}
                </p>
              )}
            </div>
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
