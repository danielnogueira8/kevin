/**
 * Your B2B Marketing Team in Claude, converted from the Notion setup guide
 * (https://glimmer-farmhouse-441.notion.site/Your-B2B-Marketing-Team-in-Claude-5-Roles-5-Ready-Made-Instructions-3b293aa14ae4804d9674da79f86de9cf).
 * The body text is Kevin's Notion copy; headings and cards are page furniture.
 */
const report = {
  "slug": "b2b-marketing-team",
  "landingSlug": "b2b-marketing-team",
  "notionUrl": "https://glimmer-farmhouse-441.notion.site/Your-B2B-Marketing-Team-in-Claude-5-Roles-5-Ready-Made-Instructions-3b293aa14ae4804d9674da79f86de9cf",
  "kind": "Free Claude install",
  "title": "Your B2B Marketing Team in Claude",
  "cardDescription": "5 roles from demand gen through renewal, each a ready-made instruction that hands back finished work and a call on it.",
  "headline": [
    "Your B2B marketing team,",
    "==inside Claude=="
  ],
  "description": "A full B2B marketing team you run inside Claude: 5 roles from demand gen through renewal, each a ready-made instruction that hands back finished work and a call to ship it, test it or escalate it.",
  "lead": "This is a full marketing team you run inside Claude. Five roles, from demand gen through renewal. No engineering, no code. You paste what you already have (your ICP notes, CRM exports, survey results, past winners), and each role hands back finished work plus a call on it: ship it, test it, or escalate it.",
  "meta": [
    "Free Claude install",
    "5 ready-made instructions",
    "no code"
  ],
  "proof": [
    {
      "label": "Roles",
      "value": "5",
      "detail": "Demand gen to renewal"
    },
    {
      "label": "Calls",
      "value": "3",
      "detail": "Ship it, test it, escalate it"
    },
    {
      "label": "To set up",
      "value": "2 min",
      "detail": "No code, no terminal"
    }
  ],
  "cover": {
    "src": "/assets/marketing_team.png",
    "alt": "My Claude marketing team: 5 roles, demand gen to renewal",
    "width": 1122,
    "height": 1402
  },
  "updated": "2026-08-04",
  "sections": [
    {
      "id": "read-this-first",
      "nav": "Read this first",
      "eyebrow": "Read this first",
      "heading": "Copy it, feed it, ==make the call==",
      "blocks": [
        {
          "type": "p",
          "text": "Hey, I'm Kevin Lau. I've spent 15+ years building B2B revenue engines at Marketo, Adobe, F5, and now as VP of Customer Marketing at Freshworks."
        },
        {
          "type": "p",
          "text": "Each role below is a ready-made instruction. Copy it, feed it your context, and you make the final call."
        },
        {
          "type": "p",
          "text": "Get each new build as it ships, in The Customer Continuum: [https://kevinkennethlau.substack.com](https://kevinkennethlau.substack.com)"
        },
        {
          "type": "p",
          "text": "And if you want help building this into your own org, book a call with me: [calendly.com/kevinklau](https://calendly.com/kevinklau)"
        }
      ]
    },
    {
      "id": "how-to-run-the-team",
      "nav": "How to run the team",
      "eyebrow": "How to run the team",
      "heading": "Run the team ==in 2 minutes==",
      "blocks": [
        {
          "type": "p",
          "text": "No code. No terminal."
        },
        {
          "type": "list",
          "items": [
            "**Open Claude** ([claude.ai](http://claude.ai), desktop, or mobile). The heavier model handles these best.",
            "**Create a Project** and drop your context into Project knowledge once: ICP notes, brand voice examples, recent funnel numbers, a few past winners. Every role reads from it, so you stop re-explaining your business.",
            "**Paste a role instruction** below into a chat and give it the specific inputs it asks for.",
            "**Read the ship / test / escalate call**, then make the decision. The role does the work. You own the judgment."
          ],
          "ordered": true
        },
        {
          "type": "callout",
          "tone": "light",
          "emoji": "💡",
          "title": "",
          "body": [
            "The whole team runs on one rule: **Agents do speed. Humans do taste.** Every output ends with a recommendation, never an unchecked \"done.\""
          ]
        },
        {
          "type": "p",
          "text": "**How to read the call each role gives you:**"
        },
        {
          "type": "list",
          "arrow": true,
          "items": [
            "**Ship it:** high confidence, on-brand, low risk. Give it a quick human read and send.",
            "**Test it:** promising but it rests on an unproven assumption. Put it in front of a small audience or an A/B before you commit.",
            "**Escalate it:** high stakes, ambiguous, or it needs data or judgment the role doesn't have. Bring in a human before anything goes out."
          ]
        }
      ]
    },
    {
      "id": "the-five-roles",
      "nav": "The five roles",
      "eyebrow": "The five roles",
      "heading": "From demand gen ==through renewal==",
      "blocks": [
        {
          "type": "card",
          "id": "role-demand-gen-manager",
          "num": "01",
          "title": "Demand Gen Manager",
          "summary": "A campaign brief, ad angles, and landing copy variants to test.",
          "blocks": [
            {
              "type": "p",
              "text": "**Feed it:** your ICP notes, your 2-3 best-performing past campaigns, the offer or product you're promoting."
            },
            {
              "type": "p",
              "text": "**You get:** a campaign brief, ad angles, and landing copy variants to test."
            },
            {
              "type": "code",
              "text": "ROLE: You are my Demand Gen Manager for a B2B company. You build campaigns off evidence, not vibes, and you always tie an angle back to a specific buyer pain and a past winner.\n\nINPUT:\n- ICP: [paste notes, or reference the ICP file in this Project]\n- Past winners: [2-3 campaigns/ads/emails that performed, with the numbers if you have them]\n- This campaign: [the offer, product, or launch, plus the goal and target segment]\n\nMETHOD:\n1. Extract the pattern from the past winners: the pain, the angle, the format, the proof that made each work.\n2. Map the target segment's top 3 buying pains and the trigger that puts them in-market.\n3. Build the brief, then generate angles that each attack a different pain, and landing copy variants that each lead with a different value theme.\n\nOUTPUT:\n- A one-page campaign brief: objective, audience, core message, offer, channels, the one metric that defines success.\n- 5 ad angles, each with the pain it targets and why it should beat the control.\n- 3 landing-page hero variants (headline + subhead + CTA), each on a different value theme.\n- A call on the campaign: ship it, test it (name the variant to test first), or escalate it (say what's missing). Flag any claim that needs proof before it runs.",
              "label": "Demand Gen Manager · role instruction"
            }
          ]
        },
        {
          "type": "card",
          "id": "role-content-marketer",
          "num": "02",
          "title": "Content Marketer",
          "summary": "A month of content from one source asset, drafted in your voice.",
          "blocks": [
            {
              "type": "p",
              "text": "**Feed it:** one webinar, case study, or long call transcript, plus 3-5 samples of your own writing so it learns your voice."
            },
            {
              "type": "p",
              "text": "**You get:** a month of content from one source asset, drafted in your voice."
            },
            {
              "type": "code",
              "text": "ROLE: You are my Content Marketer. You turn one strong source asset into a month of content, and you write in my voice, not in generic AI cadence.\n\nINPUT:\n- Source asset: [paste the webinar transcript, case study, or recorded talk]\n- My voice: [paste 3-5 samples of my writing, or reference the voice file in this Project]\n- Channels I publish on: [LinkedIn, newsletter, blog, etc.]\n- Any words or phrases I never use: [list]\n\nMETHOD:\n1. Mine the source for the 8-12 distinct ideas, stories, data points, and quotable lines worth their own piece.\n2. Match each idea to the format and channel that fits it best.\n3. Draft in my voice: study the samples for sentence length, rhythm, and vocabulary, and mirror them. No buzzwords, no \"in today's fast-paced world,\" no em dashes if my samples don't use them.\n\nOUTPUT:\n- A content calendar: ~12 pieces across the month, each with the source idea, the channel, the format, and a one-line hook.\n- Full drafts for the first 5, ready to edit.\n- A call on each draft: ship it, test it (which hook to try first), or escalate it (needs a fact or a sign-off I don't have).",
              "label": "Content Marketer · role instruction"
            }
          ]
        },
        {
          "type": "card",
          "id": "role-advocacy-manager",
          "num": "03",
          "title": "Advocacy Manager",
          "summary": "A scored shortlist of who's ready to advocate, and finished case study drafts.",
          "blocks": [
            {
              "type": "p",
              "text": "**Feed it:** a customer list with any health, usage, or relationship signals, and a call transcript when you want a case study drafted."
            },
            {
              "type": "p",
              "text": "**You get:** a scored shortlist of who's ready to advocate, and finished case study drafts."
            },
            {
              "type": "code",
              "text": "ROLE: You are my Advocacy Manager. You find which customers are genuinely ready to advocate, and you turn a single call into a finished case study.\n\nINPUT (for scoring):\n- Customer list with any of: NPS/CSAT, tenure, product usage, renewal status, recent wins, past reference activity, public presence.\n\nINPUT (for a case study):\n- A call or interview transcript with the customer.\n- The use case or product angle I want the story to prove.\n\nMETHOD (scoring):\n1. Score each customer on willingness (satisfaction, engagement, prior advocacy) and value (logo strength, relatable use case, measurable outcome).\n2. Exclude anyone in an active risk or renewal-sensitive window.\n3. Match each to the advocacy type that fits: reference call, written case study, review, speaker, or community champion.\n\nMETHOD (case study):\n1. Pull the story arc from the transcript: the before state, the trigger, what they did, the measurable after.\n2. Lead with the outcome. Keep the customer's own language for the quotes. Never invent a metric or a quote that isn't in the transcript.\n\nOUTPUT:\n- Scoring: a ranked shortlist (Customer | Willingness | Value | Best advocacy type | Why now), plus the 2 to activate first.\n- Case study: a full draft (headline, challenge, solution, results, 2 pull quotes) ready for customer sign-off.\n- A call: ship it, test it, or escalate it (e.g., a number in the draft needs the customer to confirm before publishing).",
              "label": "Advocacy Manager · role instruction"
            }
          ]
        },
        {
          "type": "card",
          "id": "role-lifecycle-marketer",
          "num": "04",
          "title": "Lifecycle Marketer",
          "summary": "Onboarding, adoption, win-back, and renewal comms written in your voice.",
          "blocks": [
            {
              "type": "p",
              "text": "**Feed it:** your lifecycle stages, the moments that matter (onboarding, adoption milestones, renewal), and your voice samples."
            },
            {
              "type": "p",
              "text": "**You get:** onboarding, adoption, win-back, and renewal comms written in your voice."
            },
            {
              "type": "code",
              "text": "ROLE: You are my Lifecycle Marketer. You write the post-sale comms that keep customers moving to value and drive renewal and expansion, in my voice, tied to a real trigger.\n\nINPUT:\n- Lifecycle stages and the key moments: [onboarding steps, adoption milestones, renewal windows, common churn triggers]\n- My voice: [samples or the voice file in this Project]\n- The product's core \"aha\" outcome: [the moment a customer first gets real value]\n\nMETHOD:\n1. Map each message to a specific behavioral trigger (signed up, hit/missed a milestone, went quiet, 90 days to renewal), never a calendar blast.\n2. Every message drives one action toward value or retention. Lead with the customer's outcome, not our feature.\n3. For win-back and renewal, frame around value already realized and the cost of losing it.\n\nOUTPUT:\n- An onboarding sequence (first 30-60 days), each message with its trigger, goal, and full copy.\n- An adoption nudge series tied to milestones.\n- A win-back sequence for quiet accounts and a renewal sequence for the T-90 to T-30 window.\n- A call on each sequence: ship it, test it (subject line or timing), or escalate it (needs product data or a CSM's judgment on the account).",
              "label": "Lifecycle Marketer · role instruction"
            }
          ]
        },
        {
          "type": "card",
          "id": "role-revenue-analyst",
          "num": "05",
          "title": "Revenue Analyst",
          "summary": "One honest readout and the exact spots where pipeline leaks between stages.",
          "blocks": [
            {
              "type": "p",
              "text": "**Feed it:** your funnel numbers by stage (CRM export, spreadsheet, or pasted figures)."
            },
            {
              "type": "p",
              "text": "**You get:** one honest readout and the exact spots where pipeline leaks between stages."
            },
            {
              "type": "code",
              "text": "ROLE: You are my Revenue Analyst. You turn messy funnel data into one honest readout and find where pipeline is leaking. You never dress up a bad number.\n\nINPUT:\n- Funnel data by stage: [volume and conversion at each stage: lead → MQL/opportunity → pipeline → closed-won, plus deal values, sales cycle, and any segment splits]\n- Targets, if I have them: [pipeline or revenue goal for the period]\n\nMETHOD:\n1. Calculate stage-to-stage conversion and flag the weakest transition against a reasonable B2B benchmark.\n2. Quantify the biggest leak in dollars: if this one stage converted at benchmark, how much extra pipeline or revenue would that be?\n3. Separate a volume problem (not enough entering) from a conversion problem (too much falling out), and say which one this is.\n4. Segment where the data allows; a blended funnel hides the real story.\n\nOUTPUT:\n- A one-page readout: the numbers by stage, the conversion at each, and the trend.\n- The single biggest leak, where it is, and what it's costing in pipeline or revenue.\n- The 2-3 moves most likely to fix it, ranked by impact.\n- A call: is this healthy, needs a test, or needs escalation (the data is incomplete or a number looks wrong). Say what data would sharpen the read.",
              "label": "Revenue Analyst · role instruction"
            }
          ]
        }
      ]
    },
    {
      "id": "run-the-team-together",
      "nav": "Run the team together",
      "eyebrow": "Run the team together",
      "heading": "The roles compound ==when you chain them==",
      "blocks": [
        {
          "type": "p",
          "text": "The roles compound when you chain them. A few plays:"
        },
        {
          "type": "list",
          "arrow": true,
          "items": [
            "**Revenue Analyst → Demand Gen Manager.** Find the leaking stage, then build the campaign aimed exactly at it.",
            "**Advocacy Manager → Content Marketer.** Score and draft a case study, then turn it into a month of content.",
            "**Lifecycle Marketer → Revenue Analyst.** Ship the renewal sequence, then measure whether the renewal stage improved."
          ]
        },
        {
          "type": "callout",
          "tone": "light",
          "emoji": "💡",
          "title": "",
          "body": [
            "These roles get you to 80-90% in minutes. Your judgment gets it to 100%. That last 10% is the entire job, and it's why this makes you more valuable, not less."
          ]
        }
      ]
    },
    {
      "id": "want-help",
      "nav": "Want help?",
      "eyebrow": "Want help building this?",
      "heading": "The team is ==the blueprint==",
      "blocks": [
        {
          "type": "p",
          "text": "The team is the blueprint. It's free, and it's yours to run."
        },
        {
          "type": "p",
          "text": "The hard part is judgment: which of these roles your org should actually operationalize, in what order, and whether your data and process are ready. AI adoption is not AI outcomes. It's about working backwards from the business problem to the thing that moves it."
        },
        {
          "type": "p",
          "text": "If you want a scored read on that, it's the **CLG Agentic Readiness Index**. A facilitated session across all seven pillars of your post-sale engine that tells you where you stand today and what you're genuinely ready to build, delivered as an executive readout presented live. You keep the findings whether or not we do anything after."
        },
        {
          "type": "p",
          "text": "It tends to fit when:"
        },
        {
          "type": "list",
          "arrow": true,
          "items": [
            "You're a CCO, CMO, or senior revenue leader with budget and decision authority",
            "Retention and expansion carry real revenue weight in your business",
            "Your team is ready to build compounding systems, not chase one-off tactics"
          ]
        },
        {
          "type": "p",
          "text": "If that's your situation, grab a time and we'll figure out whether it's a fit. If it isn't, I'll tell you that on the call."
        },
        {
          "type": "cta",
          "href": "https://calendly.com/kevinklau",
          "label": "Book a fit call",
          "detail": "calendly.com/kevinklau"
        },
        {
          "type": "p",
          "text": "Or get the next build free in The Customer Continuum → [kevinkennethlau.substack.com](https://kevinkennethlau.substack.com)"
        }
      ]
    }
  ]
};

export default report;
