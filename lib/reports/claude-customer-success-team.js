/**
 * The Claude Customer Success Team, converted from the Notion setup guide
 * (https://glimmer-farmhouse-441.notion.site/The-Claude-Customer-Success-Team-7-Agents-One-Account-Brain-Setup-Guide-3de93aa14ae481b88cc7c8073053afe0).
 * The body text is Kevin's Notion copy; headings and cards are page furniture.
 */
const report = {
  "slug": "claude-customer-success-team",
  "landingSlug": "claude-customer-success-team",
  "notionUrl": "https://glimmer-farmhouse-441.notion.site/The-Claude-Customer-Success-Team-7-Agents-One-Account-Brain-Setup-Guide-3de93aa14ae481b88cc7c8073053afe0",
  "kind": "Free setup guide",
  "title": "The Claude Customer Success Team",
  "cardDescription": "A Head of Customer Success and 6 agents, all reading one shared account brain, so nobody explains the same account twice.",
  "headline": [
    "Seven Claude agents,",
    "==one account brain=="
  ],
  "description": "An entire Claude customer success team: a Head of Customer Success and 6 agents sharing one account brain, one voice and one set of rules. The folder, the setup, a day with the team, the decision queue and the rollout order.",
  "lead": "I built this because using AI to make yourself faster is the easy half. One person plus one tool is one faster person. Getting a whole CS team onto one system, with one memory and one set of rules, is the hard half. It's also the half that changes the numbers.",
  "meta": [
    "Free setup guide",
    "7 agent files",
    "2 commands",
    "1 account brain"
  ],
  "proof": [
    {
      "label": "Agents",
      "value": "7",
      "detail": "6 specialists and a Head of CS"
    },
    {
      "label": "Shared memory",
      "value": "1",
      "detail": "One account brain"
    },
    {
      "label": "Setup",
      "value": "~1 hr",
      "detail": "Then type /startwork"
    }
  ],
  "cover": {
    "src": "/assets/claude_agents.png",
    "alt": "Seven Claude agents, one account brain",
    "width": 1099,
    "height": 1431
  },
  "updated": "2026-09-17",
  "sections": [
    {
      "id": "read-this-first",
      "nav": "Read this first",
      "eyebrow": "Read this first",
      "heading": "A demo, ==or a system==",
      "blocks": [
        {
          "type": "p",
          "text": "Hey, I'm Kevin Lau."
        },
        {
          "type": "p",
          "text": "I've spent 15+ years building B2B revenue engines at Marketo, Adobe, F5, and now as VP of Customer Marketing at Freshworks. Along the way: $50M+ in pipeline through customer advocacy, a 40% lift in win rates, and post-sale turned into a $100M+ ARR expansion engine."
        },
        {
          "type": "p",
          "text": "Most companies treat post-sale like a support function. I turn it into a growth engine."
        },
        {
          "type": "quote",
          "text": "One agent doing one task is a demo. Many agents coordinating is a system."
        },
        {
          "type": "p",
          "text": "Every Thursday I publish the playbooks and POVs behind all of it: adoption, retention, expansion, and advocacy. 1,100+ operators read it."
        },
        {
          "type": "p",
          "text": "**Subscribe free →** [kevinkennethlau.substack.com](https://kevinkennethlau.substack.com/)"
        }
      ]
    },
    {
      "id": "download-the-team",
      "nav": "Download the team",
      "eyebrow": "Download the team",
      "heading": "One folder, ==the whole team==",
      "blocks": [
        {
          "type": "p",
          "text": "One folder: 7 agent files, 2 commands, and an empty account brain with templates."
        },
        {
          "type": "link",
          "href": "https://drive.google.com/drive/folders/1I2Hp61DFG_FWGR1SZFsMju3Q58eTCmwi?usp=drive_link",
          "title": "The Claude Customer Success Team",
          "detail": "Google Drive folder: 7 agent files, 2 commands and the account brain",
          "action": "Get it here"
        },
        {
          "type": "code",
          "text": ".claude/agents/      the 7 agent files\n.claude/commands/    /startwork and /handoff\nbrain/               the shared memory, with templates\n00-SETUP-GUIDE.md    this guide, in the folder",
          "label": "What's in the folder",
          "pre": true
        }
      ]
    },
    {
      "id": "the-team",
      "nav": "The team",
      "eyebrow": "The team",
      "heading": "Six agents and ==the one that runs them==",
      "blocks": [
        {
          "type": "table",
          "head": [
            "#",
            "Agent",
            "What it does",
            "When it runs",
            "What you get"
          ],
          "rows": [
            [
              "00",
              "**Head of Customer Success**",
              "Runs all six. Holds the decision queue.",
              "Every morning with `/startwork`, every evening with `/handoff`",
              "A morning brief, a live decision queue, an end-of-day handoff"
            ],
            [
              "01",
              "**Health Analyst**",
              "Watches for accounts going quiet and flags the ones worth a call this week.",
              "Every Monday, and when new usage, ticket or contact data lands",
              "A ranked list and the three accounts to call"
            ],
            [
              "02",
              "**Account Intelligence**",
              "Builds the brief on every account before anyone gets on a call.",
              "Before every customer meeting, and at every handover from sales",
              "A one-page brief before the call, filed notes after it"
            ],
            [
              "03",
              "**Advocacy Scout**",
              "Finds the happy customers ready to be a reference or a case study, and drafts the ask.",
              "Monthly, and whenever sales or marketing asks for a reference",
              "A shortlist with drafts, plus a \"do not ask\" list"
            ],
            [
              "04",
              "**Renewal Desk**",
              "Renewal and expansion emails written from the account brief, never from a template.",
              "At 120, 90, 60 and 30 days before each renewal",
              "A draft email per account, with the evidence behind it"
            ],
            [
              "05",
              "**Concierge**",
              "Drafts replies to customer emails, tickets and pushback, and hands the hot ones to you.",
              "Whenever you paste in a customer message",
              "A draft reply, or a five-line note for a human"
            ],
            [
              "06",
              "**Revenue Analyst**",
              "One-page weekly renewal report, behind a private link.",
              "Every Friday, and before any forecast meeting",
              "The full renewal table and a one-page leadership version"
            ]
          ]
        }
      ]
    },
    {
      "id": "how-the-shared-memory-works",
      "nav": "How the shared memory works",
      "eyebrow": "How the shared memory works",
      "heading": "One memory, one voice, ==one set of rules==",
      "blocks": [
        {
          "type": "p",
          "text": "Claude doesn't remember your accounts between sessions. So the team gets somewhere to look."
        },
        {
          "type": "code",
          "text": "brain/\n  company.md          what you sell, who buys it, what healthy looks like\n  voice.md            how your team writes to customers\n  rules.md            the rules every agent carries, plus your thresholds\n  accounts/           one file per account\n  people/             one file per customer contact who matters\n  signals-log.md      dated one-line signals, newest on top\n  decision-queue.md   everything waiting on a human\n  drafts/             emails and replies waiting for approval\n  handoffs/           one file per day\n  reports/            weekly renewal reports\n  archive/            nothing gets deleted, it moves here",
          "label": "brain/",
          "pre": true
        },
        {
          "type": "p",
          "text": "One memory means the Renewal Desk writes from the brief Account Intelligence built. One voice means every draft reads like your best CSM wrote it. One set of rules means no agent can decide on its own that today is the day it emails a customer."
        }
      ]
    },
    {
      "id": "setup",
      "nav": "Setup",
      "eyebrow": "Setup",
      "heading": "Setup, ==about an hour==",
      "blocks": [
        {
          "type": "list",
          "items": [
            "**Put the folder somewhere your team can reach.** A shared drive or a private repo.",
            "**Open it in Claude Code or Claude Cowork.** The seven agents and two commands are picked up from the `.claude` folder.",
            "**Fill in `brain/company.md`.** What you sell, your plans, who your customers are, what a healthy one looks like, what usually goes wrong and when. Twenty minutes, once.",
            "**Fill in `brain/voice.md`.** Paste in 5 to 10 real emails from your best CSM, then answer the five prompts underneath.",
            "**Read `brain/rules.md` and set your thresholds.** The defaults: an account is quiet after 45 days without two-way contact, urgent if that's inside 120 days of renewal, and nobody gets asked for a favour twice in 90 days.",
            "**Build your first five account files.** Ask Account Intelligence to build files for the five renewals closest to today. Paste in whatever you have. Expect a lot of UNKNOWNs. That list tells you what to go and find out.",
            "**Type `/startwork`.**"
          ],
          "ordered": true
        },
        {
          "type": "callout",
          "tone": "light",
          "emoji": "💡",
          "title": "No Claude Code?",
          "body": [
            "Create a Claude Project, paste the Head of Customer Success instructions into the Project instructions, add the brain files as Project knowledge, and paste in the other agents' instructions when you need them. You lose the automatic file writing. You keep the memory."
          ]
        }
      ]
    },
    {
      "id": "a-day-with-the-team",
      "nav": "A day with the team",
      "eyebrow": "A day with the team",
      "heading": "Tomorrow starts ==from the handoff==",
      "blocks": [
        {
          "type": "p",
          "text": "**Morning.** You type `/startwork`. The Head of CS reads yesterday's handoff and the decision queue, asks the Health Analyst for this week's flags, and asks Account Intelligence for a brief on each account you're meeting. You get one screen: today's calls, decisions waiting on you, promises due this week, renewals inside 90 days."
        },
        {
          "type": "p",
          "text": "**During the day.** A customer sends a sharp email. You paste it in. The Concierge reads the account file, sees a missed promise, and marks it hot. It doesn't draft a reply. It writes you five lines: what they said, what's behind it, what they want, what you promised, who should call them. It goes in the decision queue."
        },
        {
          "type": "p",
          "text": "**After a call.** You paste in the transcript. Account Intelligence files the dated lines into the account's history, promises and risks."
        },
        {
          "type": "p",
          "text": "**Evening.** You type `/handoff`. The Head of CS writes down what happened, what you approved, and what's still waiting, in under 25 lines. Tomorrow starts from there. So does anyone covering for you."
        }
      ]
    },
    {
      "id": "the-decision-queue",
      "nav": "The decision queue",
      "eyebrow": "The decision queue",
      "heading": "Nothing leaves it ==until a human answers==",
      "blocks": [
        {
          "type": "p",
          "text": "This is the part most teams skip. Every draft and every flag from every agent lands in one file as one line:"
        },
        {
          "type": "code",
          "text": "date · account · what · which agent · approve / edit / drop",
          "label": "One line per item",
          "pre": true
        },
        {
          "type": "p",
          "text": "Nothing leaves the queue until a human answers. The Head of CS can't approve on your behalf, and it can't let a draft skip the queue because it looks routine."
        },
        {
          "type": "p",
          "text": "**First, build trust. Then, add agents.** The queue is how the trust gets built. After a few weeks you'll know which agents you barely edit and which ones you rewrite every time. Fix the second group's brain files before you give them more to do."
        }
      ]
    },
    {
      "id": "the-rules",
      "nav": "The rules",
      "eyebrow": "The rules",
      "heading": "Five rules the agents ==can't override==",
      "blocks": [
        {
          "type": "p",
          "text": "These five are written into every agent file and into `brain/rules.md`."
        },
        {
          "type": "list",
          "items": [
            "**Nothing reaches a customer without a human approving it.** Agents draft. A person sends.",
            "**Never invent a number, a date, a quote or a customer detail.** If it isn't in the brain, it's UNKNOWN.",
            "**Never delete a file.** Old ones move to the archive with the date.",
            "**Never ask an at-risk account for a reference, a review or an upsell.** The Advocacy Scout and the Renewal Desk both check the Health Analyst's flags first.",
            "**When two files disagree, show both with their dates.** No agent picks one quietly."
          ],
          "ordered": true
        },
        {
          "type": "callout",
          "tone": "light",
          "emoji": "💡",
          "title": "Check your company's AI policy before you put customer data in.",
          "body": [
            "Use the plan your security team approved, and leave out anything a customer told you in confidence."
          ]
        }
      ]
    },
    {
      "id": "your-first-two-weeks",
      "nav": "Your first two weeks",
      "eyebrow": "Your first two weeks",
      "heading": "The ones that write to customers ==go last==",
      "blocks": [
        {
          "type": "list",
          "arrow": true,
          "items": [
            "**Week 1.** Run only the Head of CS, Account Intelligence and the Concierge. Get the account files and the daily rhythm working. Approve or edit everything by hand.",
            "**Week 2.** Switch on the Health Analyst and the Revenue Analyst. By now there's enough on file for their output to mean something.",
            "**After that.** Add the Renewal Desk and the Advocacy Scout. They write to customers, so they go last, once you trust the brain they're writing from."
          ]
        },
        {
          "type": "p",
          "text": "If an agent's output is wrong, the fix is almost always in the brain, not in the agent. A thin account file gives you a thin brief."
        },
        {
          "type": "quote",
          "text": "Agents do speed. Humans do taste."
        }
      ]
    },
    {
      "id": "what-i-actually-do",
      "nav": "What I actually do",
      "eyebrow": "What I actually do",
      "heading": "Outside of ==what I publish==",
      "blocks": [
        {
          "type": "p",
          "text": "Outside of what I publish, I work with a small number of B2B companies on their post-sale engine: retention, expansion, advocacy, and the systems that turn an installed base into real revenue."
        },
        {
          "type": "p",
          "text": "Most teams I talk to are stuck in the same place. Everyone is running their own prompts in their own tab, nothing compounds, and the customer base that should be the cheapest growth in the business is running on autopilot."
        },
        {
          "type": "p",
          "text": "The work starts with a scored read on where your post-sale engine actually stands across all seven pillars, and what you're ready to build next. It's delivered as an executive readout, presented live. You keep the findings either way."
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
          "text": "If that sounds like your situation, grab a time and we'll work out whether it's a fit. If it isn't, I'll tell you that on the call."
        },
        {
          "type": "cta",
          "href": "https://calendly.com/kevinklau",
          "label": "Book a fit call",
          "detail": "calendly.com/kevinklau"
        },
        {
          "type": "p",
          "text": "Or get the next build free in The Customer Continuum → [kevinkennethlau.substack.com](https://kevinkennethlau.substack.com/)"
        }
      ]
    }
  ]
};

export default report;
