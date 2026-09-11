import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "My GPT-6 Astra Revenue Team: 8 Agents Running This Afternoon — Kevin Lau",
  description:
    "GPT-6 Astra can use a browser and computer properly now. 8 agents for B2B revenue you can set up this afternoon: Competitor Watcher, Pipeline Reporter, Account Researcher, Lead Enricher, Content Repurposer, Deal Brief Builder, Advocate Finder, and Expansion Watcher. Free.",
};

const resource = {
  slug: "gpt6-astra-revenue-team",
  eyebrow: "Free access",
  title: "My GPT-6 Astra Revenue Team",
  subtitle:
    "GPT-6 Astra just dropped and it should be illegal for B2B marketing teams. It can use a browser and computer properly now. It can log into your tools, click around, grab what it needs, and put the finished work into your doc or spreadsheet. It can also follow the way you already work. Give it two examples you've finished before and it'll use the same format and writing style. You tell ChatGPT what you want done and it makes an agent for that job. Then you can schedule it to run on its own. So I made 8 for B2B revenue.",
  bullets: [
    "Competitor Watcher · checks competitor pricing pages, job posts, and launches every week and tells you what changed",
    "Pipeline Reporter · logs into your CRM, grabs the numbers, and puts together your Friday report",
    "Account Researcher · looks into the company and the people before every call and gives you the important stuff",
    "Lead Enricher · fills in missing info on new leads and tells you which ones are worth calling today",
    "Content Repurposer · takes one webinar and turns it into a month of posts that still sound like you",
    "Deal Brief Builder · goes through the account history, finds anything that could hurt the deal, and pulls together what you need before the call",
    "Advocate Finder · checks reviews and your community to find happy customers you could ask for a quote or case study",
    "Expansion Watcher · checks how customers are using the product and finds accounts that might be ready to spend more",
  ],
  description:
    "You set each one up by telling it what you want done. Run it once, check the work, and change anything it got wrong. If you want it to follow a certain format, give it two examples you've already finished. You can get all 8 running this afternoon.",
  format: "Agent system",
  coverEmoji: "🤖",
  coverImage: "/assets/astra.jpeg",
  coverImageAlt:
    "My GPT-6 Astra Revenue Team — 8 agents for B2B revenue running this afternoon",
  coverAspectRatio: "1086 / 1448",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/My-GPT-6-Astra-Revenue-Team-8-Agents-Running-This-Afternoon-68093aa14ae483b683fd81fc168b70ef?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
