import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title:
    "The B2B Revenue Growth Playbook for Claude: 20 Agents — Kevin Lau",
  description:
    "20 Claude agents covering Target, Attract, Capture, Convert, and Expand — the full B2B revenue motion from finding the right buyers to growing the customers you already have. Free.",
};

const resource = {
  slug: "b2b-revenue-growth-playbook",
  eyebrow: "Free access",
  title: "The B2B Revenue Growth Playbook for Claude",
  subtitle:
    "20 Claude agents that help you find the right buyers, get their attention, close more deals, and grow the customers you already have. It covers Target, Attract, Capture, Convert, and Expand — instead of using Claude for random sales and marketing tasks, you have 20 agents covering the entire process from finding a buyer to growing the account after they become a customer.",
  bullets: [
    "Target — ICP Sharpener, Segment Sizer, Trigger Mapper, Competitor Gap Finder. Turns something broad like \"we sell to marketers\" into a specific group to target, sized, with the reasons they might be ready to buy.",
    "Attract — POV Builder, Content Multiplier, Hook Writer, Channel Picker. Turns one webinar or case study into a month of content that sounds like you, and where to post each piece.",
    "Capture — Offer Designer, Landing Page Builder, Lead Scorer, Attribution Untangler. Builds the offer and landing page, finds the leads most worth talking to, and shows which channels are actually bringing in customers.",
    "Convert — Objection Handler, Battlecard Builder, Reference Matcher, Win-Loss Analyst. Answers objections, finds the best customer proof for each deal, and goes through your last 10 lost deals to find out why you lost them.",
    "Expand — Adoption Watcher, Expansion Spotter, Advocate Scout, NRR Reporter. Goes through your customers and finds who might be ready to upgrade, add a product, or spend more with you.",
    "Every agent comes with the full prompt and a note on when you should and shouldn't use it.",
  ],
  description:
    "Nothing needs to connect to your CRM. You just run it in Claude.",
  format: "Playbook",
  coverEmoji: "📈",
  coverImage: "/assets/revenue-growth-playbook-for-claude.jpeg",
  coverImageAlt:
    "The B2B Revenue Growth Playbook for Claude — 20 agents across Target, Attract, Capture, Convert, Expand",
  coverAspectRatio: "1448 / 1086",
  downloadUrl:
    "https://drive.google.com/file/d/1rC_JlZhJy0ezlPs3CCI7-lA5fpt1YeSe/view?usp=sharing",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
