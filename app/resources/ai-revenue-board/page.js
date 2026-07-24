import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title:
    "The AI Revenue Board: 5 Claude Skills That Think Like B2B's Best Minds — Kevin Lau",
  description:
    "Seth Godin, April Dunford, Chris Walker, Nick Mehta, and Jason Lemkin — cloned into Claude Skills. Positioning, demand, retention, and metrics, on demand. Free.",
};

const resource = {
  slug: "ai-revenue-board",
  eyebrow: "Free Claude install",
  title: "Meet Your AI Revenue Board",
  subtitle:
    "I cloned 5 B2B revenue legends into Claude. Now they write the positioning, build the demand engine, and map the retention plan for me. Pick the advisor you need and get a full strategy breakdown in seconds.",
  bullets: [
    "Seth Godin — The Brand Strategist. Sharpens the story that makes people remember you, so you stop competing on price and features.",
    "April Dunford — The Positioning Strategist. Writes positioning so clear it's obvious why someone should pick you. Everything downstream converts better.",
    "Chris Walker — The Demand Strategist. Builds you a demand engine that creates real buyers, not more leads that were never going to close.",
    "Nick Mehta — The Retention Strategist. Builds the plan to keep customers longer and grow them, so your existing base becomes your cheapest growth.",
    "Jason Lemkin — The Metrics Advisor. Turns your messy numbers into the one metric your board cares about, and tells you straight if it's healthy.",
  ],
  format: "Install Guide",
  coverEmoji: "🧠",
  coverImage: "/assets/board.png",
  coverImageAlt: "The AI Revenue Board — 5 Claude Skills install guide cover",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/The-AI-Revenue-Board-5-Claude-Skills-That-Think-Like-B2B-s-Best-Minds-3a693aa14ae48054940cd79a0d59fbae?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
