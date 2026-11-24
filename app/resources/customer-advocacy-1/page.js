import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "The Ultimate Customer Advocacy Templates — Kevin Lau",
  description:
    "A free vault of 15 outreach templates to activate the case studies, references, and pipeline already sitting inside your customer base — the same system behind 500+ acts of advocacy a year.",
};

const resource = {
  slug: "customer-advocacy-1",
  eyebrow: "Free vault",
  title: "The Ultimate Customer Advocacy Templates",
  subtitle:
    "Your next case studies, references, and pipeline are already sitting inside your customer base. This free vault has 15 outreach templates to activate them. They're the templates behind 500+ acts of advocacy a year. Just select the ones you need and personalize them — takes about 30 seconds, and the lift compounds.",
  bullets: [
    "Qualification templates that surface customers ready to say yes",
    "Opening messages for warm and cold advocates that earn replies",
    "Transition messages that move from \"I'm in\" to a booked commitment",
    "Follow-up templates for every scenario — re-engagement and graceful exits",
    "Objection response frameworks for the two hesitations advocates raise most",
    "The system behind 500+ customer proof points a year",
    "The workflows behind growing the Freshworks community to 50,000 members",
    "Bonus: free access to the CLG microsite — benchmark, revenue impact calculator, and Ask Kevin",
  ],
  format: "Template vault",
  coverEmoji: "🗂️",
  coverImage: "/assets/customer-advocacy-1.png",
  coverImageAlt: "The Ultimate Customer Advocacy Templates cover",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/The-Ultimate-Customer-Advocacy-Templates-36493aa14ae481ef859cf32aa084d786?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
