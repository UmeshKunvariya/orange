import type { IconName } from "@/config/site";

type Props = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
  "aria-hidden": true,
} as const;

/* ---------- solution icons (mirrors the business card set) ---------- */

export function VoiceIcon({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <rect x="9" y="2.5" width="6" height="10" rx="3" />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M9 21h6" />
    </svg>
  );
}

export function ChatIcon({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M20.5 12.2c0 3.9-3.8 7-8.5 7a9.8 9.8 0 0 1-2.8-.4L4 20.5l1.4-3.7a6.6 6.6 0 0 1-1.9-4.6c0-3.9 3.8-7 8.5-7s8.5 3.1 8.5 7Z" />
      <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
    </svg>
  );
}

export function CalendarIcon({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="16" rx="2.5" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  );
}

export function UsersIcon({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M18.5 10.5a2.4 2.4 0 0 0 0-4.6M20.5 19.2a4.6 4.6 0 0 0-2-3.4" />
    </svg>
  );
}

export function GrowthIcon({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M4 20h16" />
      <path d="M6.5 20v-5M11 20V9.5M15.5 20v-7.5M20 20V5.5" />
      <path d="M17 3h4v4" />
    </svg>
  );
}

export function HeadsetIcon({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="2.5" y="13.5" width="4" height="6" rx="1.8" />
      <rect x="17.5" y="13.5" width="4" height="6" rx="1.8" />
      <path d="M19.5 19.5V20a2 2 0 0 1-2 2H13" />
    </svg>
  );
}

export function BillingIcon({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M5.5 3h9L19 7.5V21l-2.2-1.3L14.6 21l-2.2-1.3L10.2 21 8 19.7 5.5 21V3Z" />
      <path d="M9 8h5M9 11h5M12.5 8c1.5 0 1.5 3 0 3H9l3.5 3.5" />
    </svg>
  );
}

export function AnalyticsIcon({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3a9 9 0 1 0 9 9h-9V3Z" />
      <path d="M15 3.6A9 9 0 0 1 20.4 9H15V3.6Z" />
    </svg>
  );
}

export function CodeIcon({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <rect x="2.5" y="4" width="19" height="14" rx="2.5" />
      <path d="M9 18v3h6v-3" />
      <path d="m10 8.5-2.2 2.2L10 13M14 8.5l2.2 2.2L14 13" />
    </svg>
  );
}

export function CloudIcon({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M7 19h10.5a4 4 0 0 0 .4-8 6 6 0 0 0-11.6-1.3A4 4 0 0 0 7 19Z" />
    </svg>
  );
}

/* ---------- value-prop icons ---------- */

export function ShieldIcon({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3 5 6v6c0 4.2 2.9 7.7 7 9 4.1-1.3 7-4.8 7-9V6l-7-3Z" />
      <path d="m9.2 12 2 2 3.6-3.8" />
    </svg>
  );
}

export function BoltIcon({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M13.5 2 4 13.5h6.5L9.5 22 20 10.5h-7L13.5 2Z" />
    </svg>
  );
}

export function TargetIcon({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M20.5 9.5A9 9 0 1 1 14.5 3.5" />
      <path d="M16.5 7.5a5 5 0 1 0 0 5.6" />
      <path d="M12 12l5.5-5.5M16.5 3v4h4" />
    </svg>
  );
}

export function TeamIcon({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <circle cx="9" cy="8.5" r="2.8" />
      <circle cx="17" cy="9.5" r="2.2" />
      <path d="M3.5 19.5a5.5 5.5 0 0 1 11 0M16 15.2a4.4 4.4 0 0 1 4.5 4.3" />
    </svg>
  );
}

/* ---------- utility icons ---------- */

export function ArrowRightIcon({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h13m-5.5-5.5L18 12l-5.5 5.5" />
    </svg>
  );
}

export function ExternalIcon({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M14 4h6v6M20 4l-8.5 8.5" />
      <path d="M18 14.5V19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 19V8a1.5 1.5 0 0 1 1.5-1.5H10" />
    </svg>
  );
}

export function CheckIcon({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="m6 9.5 6 6 6-6" />
    </svg>
  );
}

export function PhoneIcon({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M6.5 3.5h3l1.5 4-2 1.4a11.5 11.5 0 0 0 5.1 5.1l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export function PinIcon({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

/** WhatsApp glyph — solid fill, so it does not use the shared stroke props. */
export function WhatsAppIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23a8.2 8.2 0 0 1 5.82 2.41 8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.02 2.56c.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

const map = {
  voice: VoiceIcon,
  chat: ChatIcon,
  calendar: CalendarIcon,
  users: UsersIcon,
  growth: GrowthIcon,
  headset: HeadsetIcon,
  billing: BillingIcon,
  analytics: AnalyticsIcon,
  code: CodeIcon,
  cloud: CloudIcon,
  shield: ShieldIcon,
  bolt: BoltIcon,
  target: TargetIcon,
  team: TeamIcon,
} satisfies Record<IconName, (p: Props) => React.ReactElement>;

export function Icon({ name, className }: { name: IconName } & Props) {
  const Cmp = map[name];
  return <Cmp className={className} />;
}
