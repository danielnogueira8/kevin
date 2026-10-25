import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "The Grok Bot Demand Gen Engine — Kevin Lau",
  description:
    "Six Grok Bot bots that find the right accounts, write the emails, LinkedIn ads and landing page, pull customer proof, check every claim and report what turned into pipeline, overnight. Full setup guide, free.",
};

const resource = {
  slug: "grok-demand-gen-engine",
  eyebrow: "Free access",
  title: "The Grok Bot Demand Gen Engine",
  subtitle:
    "Between finding the right accounts, writing the emails and ads, building the landing page, pulling customer proof and checking what turned into pipeline, one campaign can take a marketing team a week or two to get out the door. So I set up 6 bots in Grok Bot that do all of it overnight and drop the finished drafts into one shared folder.",
  bullets: [
    "The signal scout: finds accounts that just raised, hired a new VP of Marketing or posted jobs your product helps with.",
    "The planner: turns those accounts into a one-page campaign brief with the angle, the offer and the channels.",
    "The copywriter: writes the emails, LinkedIn ads and landing page in your brand's voice.",
    "The proof finder: pulls the best customer quotes and results from your call recordings and adds them to every asset.",
    "The editor: checks every claim against your company facts and cuts the AI tells before you ever see a draft.",
    "The analyst: shows which campaigns turned into meetings and pipeline every Friday, and sends the planner what to fix.",
  ],
  description:
    "All you have to do is review them in the morning and approve the ones that are ready. You can copy these little guys in under 10 minutes.",
  format: "Setup guide",
  coverEmoji: "🤖",
  coverImage: "/assets/grok_demand_gen_engine.gif",
  coverImageAlt:
    "The Grok Bot Demand Gen Engine: six bots that write 15 emails, 9 LinkedIn ads and 3 landing pages overnight",
  coverAspectRatio: "1080 / 1350",
  downloadUrl: "/guides/grok-demand-gen-engine",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
