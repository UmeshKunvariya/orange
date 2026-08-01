/**
 * Single source of truth for all site content.
 * Edit this file to update the website — no component changes needed.
 *
 * Brand details (logo, tagline, slogans, phone numbers, solution list) are
 * taken from the official Orange Solutions business card.
 */

// WhatsApp target: country code + number, no "+", no spaces, no leading zero.
// Currently the first number from the business card (+91 87580 59160).
export const WHATSAPP_NUMBER = "918758059160";

// Message pre-filled in WhatsApp when someone taps a chat button.
const WHATSAPP_MESSAGE =
  "Hi Orange Solutions! I'd like to discuss an AI solution for my business.";

export const whatsappLink = (message: string = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const site = {
  name: "Orange Solutions",
  nameParts: { first: "Orange", second: "Solutions" },
  tagline: "AI Solutions for Every Business",
  slogan: "Automate. Innovate. Elevate.",
  promise: "Smart solutions. Stronger businesses.",
  description:
    "Orange Solutions builds AI voice agents, chatbots, booking systems, CRM & ERP, websites and automation that help businesses run smarter. Based in Junagadh, Gujarat.",
  url: "https://orange-solutions.vercel.app",
  location: "Junagadh, Gujarat",
  email: "", // optional — leave empty to hide the email link
  phones: ["+91 87580 59160", "+91 96645 46860"],
} as const;

export const nav = [
  { label: "Solutions", href: "#solutions" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Why us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
] as const;

/** Four focus areas from the front of the business card. */
export const focusAreas = [
  "AI Automation",
  "Customer Engagement",
  "Business Growth",
  "Operations Management",
] as const;

export type IconName =
  | "voice"
  | "chat"
  | "calendar"
  | "users"
  | "growth"
  | "headset"
  | "billing"
  | "analytics"
  | "code"
  | "cloud"
  | "shield"
  | "bolt"
  | "target"
  | "team";

/** The ten solutions listed on the back of the business card. */
export const solutions: {
  icon: IconName;
  title: string;
  description: string;
}[] = [
  {
    icon: "voice",
    title: "AI Voice Agents",
    description:
      "Intelligent voice agents that handle calls and customer queries, day or night.",
  },
  {
    icon: "chat",
    title: "AI Chatbots",
    description:
      "Smart chatbots for WhatsApp, your website and social media.",
  },
  {
    icon: "calendar",
    title: "Booking Solutions",
    description:
      "AI-powered booking and appointment management your customers can use 24/7.",
  },
  {
    icon: "users",
    title: "CRM & ERP",
    description:
      "Manage customers, leads, tasks and invoices in one place.",
  },
  {
    icon: "growth",
    title: "Sales & Lead Management",
    description:
      "Capture leads, follow up automatically and close more deals.",
  },
  {
    icon: "headset",
    title: "Customer Support",
    description:
      "24/7 AI support that delights your customers and saves your team hours.",
  },
  {
    icon: "billing",
    title: "Billing & Payments",
    description:
      "Automated billing, invoices and secure payment tracking.",
  },
  {
    icon: "analytics",
    title: "Analytics & Reports",
    description:
      "Real-time insights and reports to grow your business smarter.",
  },
  {
    icon: "code",
    title: "Website & App Development",
    description:
      "Modern websites and apps that properly represent your brand.",
  },
  {
    icon: "cloud",
    title: "Cloud & IT Management",
    description:
      "Secure, scalable and reliable cloud and IT infrastructure.",
  },
];

export const caseStudy = {
  client: "AutoClub Junagadh",
  industry: "Second-hand car dealership",
  url: "https://autoclubjunagadh.in",
  displayUrl: "autoclubjunagadh.in",
  challenge:
    "Their entire inventory lived in notebooks and phone galleries. Buyers had no way to browse cars before visiting, and every enquiry meant repeating the same details over the phone.",
  built: [
    "A public website where every car is listed with photos, pricing and full specifications",
    "An inventory system to add, update and mark vehicles as sold in seconds",
    "A direct enquiry flow so interested buyers reach the dealer instantly",
    "A mobile-first layout, since almost every buyer browses on a phone",
  ],
  outcome:
    "The dealership now has a professional online presence customers can browse any time, and managing stock takes minutes instead of hours.",
  stats: [
    { value: "24/7", label: "Online showroom" },
    { value: "100%", label: "Mobile-first" },
    { value: "Live", label: "In production" },
  ],
};

export const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We sit with you and understand how your business runs today — and where the time is going.",
  },
  {
    step: "02",
    title: "Design & Plan",
    description:
      "You see the layout and the plan before a single line of code is written. No surprises.",
  },
  {
    step: "03",
    title: "Build & Test",
    description:
      "We build it, test it on real devices, and walk you through it until it fits your workflow.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "We take it live, train your team, and stay available for changes as you grow.",
  },
];

/** The four pillars from the footer of the business card. */
export const whyUs: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "shield",
    title: "Reliable",
    description:
      "Secure and dependable solutions you can trust to run your business on.",
  },
  {
    icon: "bolt",
    title: "Efficient",
    description:
      "We automate the repetitive work and give you back valuable time.",
  },
  {
    icon: "target",
    title: "Scalable",
    description:
      "Solutions that grow with your business instead of holding it back.",
  },
  {
    icon: "team",
    title: "Dedicated Support",
    description:
      "We're with you at every step of your journey — not just until launch.",
  },
];

export const faqs = [
  {
    question: "How long does a project take?",
    answer:
      "A business website typically takes 1–2 weeks. AI agents, booking systems and CRM/ERP builds take longer depending on complexity — usually 3–6 weeks. We give you a clear timeline before starting.",
  },
  {
    question: "How much does it cost?",
    answer:
      "It depends entirely on what you need, so we don't quote blindly. Message us on WhatsApp with a short description of your business and we'll give you an honest, fixed quote — free of charge.",
  },
  {
    question: "Is AI actually useful for a small business?",
    answer:
      "It is when it's pointed at the right problem. Missed calls, repeated WhatsApp questions, manual follow-ups and appointment juggling are exactly the tasks AI handles well. If AI isn't the right fit for your situation, we'll tell you that instead of selling it to you.",
  },
  {
    question: "Do you handle the domain and hosting?",
    answer:
      "Yes. We can register your domain, set up hosting and manage the technical side end to end, so you only deal with one team. You stay the owner of everything.",
  },
  {
    question: "I already have a website. Can you improve it?",
    answer:
      "Absolutely. We regularly redesign outdated sites, make them mobile-friendly and faster, or add new functionality like chatbots, booking and inventory management to an existing site.",
  },
  {
    question: "Will my team know how to use it?",
    answer:
      "We design for people who aren't technical, and we walk your team through the system after launch. If something is confusing, that's our problem to fix — not yours to learn around.",
  },
];
