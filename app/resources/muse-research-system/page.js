import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title:
    "The Muse Research System for Customer Marketing Teams — Kevin Lau",
  description:
    "A research system for customer marketing teams built on Meta's new AI agent: a weekly customer proof finder, a competitor watch, a buyer language dig, account briefs, a Monday summary and an inbox pass. Free playbook with every setup and prompt.",
};

const resource = {
  slug: "muse-research-system",
  eyebrow: "Free playbook",
  title: "The Muse Research System for Customer Marketing Teams",
  subtitle:
    "Meta's new AI agent can check your review pages every week and find customers saying stuff you could actually use. It isn't just a chatbot. It has its own browser, keeps working after you close the app, and asks before it does anything. So I turned it into a research system for customer marketing teams.",
  bullets: [
    "The customer proof finder: checks your review profiles and community every Monday and hands you the quote, link and role of every customer describing a specific result",
    "The competitor watch: checks pricing, careers pages and changelogs every Monday and only shows you what changed",
    "The buyer language dig: finds the phrases your market keeps using in communities and comment threads",
    "The account brief: one page on the company and people before every call, with sources",
    "The Monday summary: everything in one document instead of fourteen open tabs",
    "The inbox pass: sorts overnight emails and drafts the easy replies for you to approve",
  ],
  description:
    "Give it the boring work: checking the same pages every week, taking notes and keeping track of what changed. Start with the customer proof finder, save it as a recurring task, and you've got one new customer proof point every week without anyone digging for it. Every setup and prompt is in the playbook, and it's free.",
  format: "Playbook",
  coverEmoji: "🔎",
  coverImage: "/assets/customer-proof-agent.gif",
  coverImageAlt:
    "The customer proof agent checking review pages for customer quotes every week",
  coverAspectRatio: "1080 / 1350",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/The-Muse-Research-System-for-Customer-Marketing-Teams-35893aa14ae48374b2bb810538b72665?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
