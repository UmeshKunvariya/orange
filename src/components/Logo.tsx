import Image from "next/image";
import { site } from "@/config/site";

/**
 * Official Orange Solutions lockup, cropped from the business card artwork.
 * Rendered at 2x the display size for crisp output on retina screens.
 */
export default function Logo({
  className = "",
  height = 36,
}: {
  className?: string;
  height?: number;
}) {
  // logo.png is 484 x 184
  const width = Math.round((484 / 184) * height);

  return (
    <Image
      src="/logo.png"
      alt={site.name}
      width={width}
      height={height}
      priority
      className={`h-9 w-auto ${className}`}
      sizes="(max-width: 640px) 130px, 160px"
    />
  );
}
