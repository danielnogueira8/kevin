/**
 * The 8-Agent CLG Playbook, converted from the Notion resource
 * (https://glimmer-farmhouse-441.notion.site/The-8-Agent-CLG-Playbook-A-Claude-Powered-Post-Sale-Revenue-System-35d93aa14ae480f48621e476b54e845e).
 * The body text is Kevin's Notion copy; headings, cards and the closing section are page furniture.
 */
const report = {
  "slug": "8-agent-clg-playbook",
  "landingSlug": "clg-agents",
  "notionUrl": "https://glimmer-farmhouse-441.notion.site/The-8-Agent-CLG-Playbook-A-Claude-Powered-Post-Sale-Revenue-System-35d93aa14ae480f48621e476b54e845e",
  "kind": "Free playbook",
  "title": "The 8-Agent CLG Playbook",
  "cardDescription": "A Claude-powered post-sale revenue system: 7 agents, one per CLG pillar, and a Director that runs the week. Prompts, inputs and cadence included.",
  "headline": [
    "Eight Claude agents,",
    "==one post-sale flywheel=="
  ],
  "description": "A Claude-powered post-sale revenue system for B2B SaaS: 7 CLG pillar agents and a Master CLG Director, with a starter system prompt for each, the inputs they need, the weekly cadence, and how to set it up inside Claude.",
  "lead": "Most people use Claude to write follow-up emails and summarize call notes. The smarter play is using it to operationalize your post-sale flywheel so your team focuses on the customer work that actually compounds NRR.",
  "meta": [
    "Free playbook",
    "8 agents",
    "7 pillars",
    "1 weekly rhythm"
  ],
  "proof": [
    {
      "label": "Agents",
      "value": "8",
      "detail": "7 pillar agents and a Director"
    },
    {
      "label": "Pillars",
      "value": "7",
      "detail": "The full post-sale lifecycle"
    },
    {
      "label": "Setup",
      "value": "5 steps",
      "detail": "One Claude Project per agent"
    }
  ],
  "cover": {
    "src": "/assets/clg_revenue_system.png",
    "alt": "The Claude Revenue System for post-sale B2B SaaS: a Director and 7 agents",
    "width": 2160,
    "height": 2700
  },
  "updated": "2026-10-21",
  "sections": [
    {
      "id": "read-this-first",
      "nav": "Read this first",
      "eyebrow": "Read this first",
      "heading": "Eight tireless ==teammates==",
      "blocks": [
        {
          "type": "p",
          "text": "Hey, I'm Kevin. I'm Kevin Kenneth Lau. I've spent 15+ years building Customer-Led Growth (CLG) engines inside Marketo, Adobe, F5, and now as VP of Customer Marketing at Freshworks."
        },
        {
          "type": "p",
          "text": "A few of the post-sale results I've shipped along the way:"
        },
        {
          "type": "list",
          "items": [
            "Turned post-sale into a $100M+ ARR expansion engine",
            "Drove $50M+ in pipeline through customer advocacy and proof",
            "Lifted win rates by 40% by operationalizing customer evidence",
            "Scaled customer communities to 50,000+ members",
            "Rebuilt Freshworks' customer engagement engine in 90 days, doubling the customer marketing team from 15 to 30+ globally"
          ],
          "arrow": true
        },
        {
          "type": "p",
          "text": "I built this playbook because most post-sale teams are running 7 functions with 1.5 people, manually, in spreadsheets. AI doesn't replace that team. It gives them eight tireless teammates that handle the repetitive parts so the humans focus on the customer work that actually compounds NRR."
        },
        {
          "type": "p",
          "text": "If this playbook was useful, my weekly newsletter is where I publish the deeper thinking behind it: the 7 pillars, the agent build, the NRR math, and the CS / customer marketing patterns I've seen across Marketo, Adobe, F5, and Freshworks."
        },
        {
          "type": "p",
          "text": "**Subscribe free →** [kevinkennethlau.substack.com](https://kevinkennethlau.substack.com/)"
        }
      ]
    },
    {
      "id": "what-this-playbook-is",
      "nav": "What this playbook is",
      "eyebrow": "What this playbook is",
      "heading": "A working blueprint, ==not an autopilot==",
      "blocks": [
        {
          "type": "p",
          "text": "A working blueprint for an 8-agent Customer-Led Growth system you can run inside Claude (or any frontier LLM with file access). The architecture mirrors my CLG Flywheel, where every agent owns one of the 7 pillars and a Director agent orchestrates the week."
        },
        {
          "type": "p",
          "text": "**You get:**"
        },
        {
          "type": "list",
          "items": [
            "The architecture: how the 8 agents work together",
            "A starter system prompt for each agent (ready to paste into Claude)",
            "The inputs each agent needs and where to source them",
            "The weekly cadence to run the system end-to-end",
            "Links to the live CLG benchmark, CLG calculator, and the full CLG Agentic Blueprint on my site"
          ],
          "ordered": true
        },
        {
          "type": "p",
          "text": "**What this isn't:**"
        },
        {
          "type": "p",
          "text": "A drop-in autopilot. Treat each prompt as a starting point. Customize with your ICP, segments, naming conventions, and CDP fields. The value compounds when you wire them into your actual data sources."
        }
      ]
    },
    {
      "id": "the-architecture",
      "nav": "The architecture",
      "eyebrow": "The architecture",
      "heading": "8 agents, 7 pillars, ==one flywheel==",
      "blocks": [
        {
          "type": "p",
          "text": "The 7 CLG pillars cover the full post-sale lifecycle. One agent owns each pillar. A Director agent runs the cross-pillar orchestration so plays don't collide and the weekly priorities ladder up to NRR, GRR, and expansion ARR."
        },
        {
          "type": "table",
          "head": [
            "#",
            "Agent",
            "Pillar it owns",
            "Core job"
          ],
          "rows": [
            [
              "1",
              "**The Adoption Agent**",
              "Adoption",
              "Drive time-to-value, flag adoption risk"
            ],
            [
              "2",
              "**The Advocacy Agent**",
              "Advocacy",
              "Turn customers into proof and pipeline"
            ],
            [
              "3",
              "**The Community Agent**",
              "Community",
              "Convert community activity into business signal"
            ],
            [
              "4",
              "**The Education Agent**",
              "Customer Education",
              "Close learning gaps that block adoption"
            ],
            [
              "5",
              "**The VoC Listener**",
              "Voice of Customer",
              "Convert signal into routable themes"
            ],
            [
              "6",
              "**The Comms Conductor**",
              "Scaled Communications",
              "Orchestrate the comms calendar"
            ],
            [
              "7",
              "**The Retention Strategist**",
              "Lifecycle and Retention",
              "Make renewals predictable, expansion repeatable"
            ],
            [
              "8",
              "**The Master CLG Director**",
              "Cross-pillar",
              "Rank the week's plays, brief leadership"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "warn",
          "emoji": "⚠️",
          "title": "The layer most teams skip",
          "body": [
            "Underneath this architecture sits a CDP data backbone. Most teams skip it and their agents end up running on stale CSV exports. If you only do one foundational thing before turning these agents on, get product usage, support, NPS, and CRM data flowing into one place."
          ]
        }
      ]
    },
    {
      "id": "the-agents",
      "nav": "The 8 agents",
      "eyebrow": "The 8 agents",
      "heading": "One pillar each, ==one prompt each==",
      "blocks": [
        {
          "type": "p",
          "text": "Every agent below has the inputs it needs, when it runs, a system prompt ready to paste into a Claude Project, and the play it runs first. Open each one."
        },
        {
          "type": "card",
          "id": "agent-adoption",
          "num": "01",
          "title": "The Adoption Agent",
          "summary": "Surface accounts at risk of low adoption and accounts ready for the next milestone. Generate the right nudge for each.",
          "blocks": [
            {
              "type": "p",
              "text": "**Owns:** Pillar 1 of the CLG Flywheel."
            },
            {
              "type": "p",
              "text": "**Core job:** Surface accounts at risk of low adoption and accounts ready for the next milestone. Generate the right nudge for each."
            },
            {
              "type": "p",
              "text": "**Inputs to feed it:**"
            },
            {
              "type": "list",
              "items": [
                "Account list with contract start date, MAU, feature adoption count, last login, current ARR, success milestone target",
                "Customer health score (if you have one)"
              ],
              "arrow": true
            },
            {
              "type": "p",
              "text": "**Run cadence:** Weekly, every Monday morning."
            },
            {
              "type": "code",
              "label": "System prompt",
              "text": "You are the Adoption Agent for [COMPANY], a B2B SaaS company.\n\nYour job is to identify accounts at risk of low adoption and accounts ready for\nthe next milestone, then generate the right nudge for each.\n\nInputs I'll give you:\n- A list of accounts with: account name, contract start date, MAU, feature\n  adoption count, last login date, current ARR, success milestone target.\n\nFor each account, output:\n1. Adoption stage (Onboarding / Activating / Adopting / Mastering / At Risk)\n2. The single biggest gap to value\n3. A 3-sentence nudge from the CSM to the customer (warm, specific, with one\n   suggested action)\n4. A trigger condition (what event should fire the nudge: % usage drop,\n   milestone delay, etc.)\n\nRules:\n- No generic \"let's hop on a call\" nudges. Every nudge must reference the\n  specific gap.\n- Flag any account at risk of churn (no logins in 21+ days, < 3 features\n  used, contract renewal in < 60 days) at the top of your output.\n- Keep nudges under 80 words."
            },
            {
              "type": "p",
              "text": "**The play this agent runs first:** Generate the Top 20 \"stuck in onboarding\" accounts and ship a personalized adoption nudge to each within 48 hours."
            }
          ]
        },
        {
          "type": "card",
          "id": "agent-advocacy",
          "num": "02",
          "title": "The Advocacy Agent",
          "summary": "Identify customers ready to give proof. Match advocates to active sales opportunities that need them.",
          "blocks": [
            {
              "type": "p",
              "text": "**Owns:** Pillar 2 of the CLG Flywheel."
            },
            {
              "type": "p",
              "text": "**Core job:** Identify customers ready to give proof. Match advocates to active sales opportunities that need them."
            },
            {
              "type": "p",
              "text": "**Inputs to feed it:**"
            },
            {
              "type": "list",
              "items": [
                "Customer list with NPS, CSAT, expansion in last 12 months, tenure, public-facing willingness flag, segment",
                "Open sales opportunities with prospect name, segment, deal stage, blocker"
              ],
              "arrow": true
            },
            {
              "type": "p",
              "text": "**Run cadence:** Weekly, Tuesdays."
            },
            {
              "type": "code",
              "label": "System prompt",
              "text": "You are the Advocacy Agent for [COMPANY].\n\nYour job is to (a) identify customers ready to give proof (case study,\nreference, review, quote) and (b) match advocates to active sales opportunities\nthat need them.\n\nInputs I'll give you:\n- Customer list with: NPS, CSAT, expansion in last 12 months, tenure,\n  public-facing willingness flag, segment.\n- Open sales opps with: prospect name, segment, deal stage, blocker.\n\nFor each customer, output:\n1. Advocacy readiness score (1-5) and reason\n2. Best-fit ask (case study / reference call / G2 review / video testimonial /\n   quote)\n3. A 5-sentence outreach message from their CSM, personalized with one specific\n   outcome they've achieved\n4. (If applicable) the open sales opp this customer should be matched to and why\n\nRules:\n- Never ask the same customer for two asks within 90 days.\n- Never use the word \"leverage.\"\n- Customers who churned, downsold, or have an open severity-1 ticket are not\n  advocacy candidates. Flag them."
            },
            {
              "type": "p",
              "text": "**The play this agent runs first:** Build a starter advocate roster of 25 customers and match 5 of them to 5 active deals this week."
            }
          ]
        },
        {
          "type": "card",
          "id": "agent-community",
          "num": "03",
          "title": "The Community Agent",
          "summary": "Turn community activity into business signal. Find super users, surface emerging themes, suggest plays.",
          "blocks": [
            {
              "type": "p",
              "text": "**Owns:** Pillar 3 of the CLG Flywheel."
            },
            {
              "type": "p",
              "text": "**Core job:** Turn community activity into business signal. Find super users, surface emerging themes, suggest plays."
            },
            {
              "type": "p",
              "text": "**Inputs to feed it:**"
            },
            {
              "type": "list",
              "items": [
                "Past 7 days of community activity: post count by member, reply count, top threads by views, top contributors, sentiment per thread",
                "List of unanswered posts older than 24 hours"
              ],
              "arrow": true
            },
            {
              "type": "p",
              "text": "**Run cadence:** Weekly, Wednesdays."
            },
            {
              "type": "code",
              "label": "System prompt",
              "text": "You are the Community Agent for [COMPANY].\n\nYour job is to turn community activity into business signal: identify super\nusers, surface emerging themes, and suggest specific plays the community team\nshould run this week.\n\nInputs I'll give you:\n- Past 7 days of community activity: post count by member, reply count, top\n  threads by views, top contributors, sentiment per thread.\n- List of unanswered posts older than 24 hours.\n\nEach week, output:\n1. Top 5 super users this week (with one-line context on why)\n2. Top 3 emerging themes (topics getting unusual traction) with a one-sentence\n   interpretation\n3. The list of unanswered posts older than 24 hours (escalate)\n4. 3 community plays for next week, each with: play name, target audience,\n   expected outcome, owner\n\nRules:\n- Super user criteria: 5+ helpful posts in past 30 days OR an answer marked\n  \"best response\" by another member.\n- A \"play\" must be specific (e.g., \"Host an AMA with our PM on the new\n  permissions release\"). Not generic (\"engage more\")."
            },
            {
              "type": "p",
              "text": "**The play this agent runs first:** Identify your top 10 super users and route them to the Advocacy Agent as warm proof candidates."
            }
          ]
        },
        {
          "type": "card",
          "id": "agent-education",
          "num": "04",
          "title": "The Education Agent",
          "summary": "Identify learning gaps blocking adoption. Push the right course or certification to the right customer.",
          "blocks": [
            {
              "type": "p",
              "text": "**Owns:** Pillar 4 of the CLG Flywheel."
            },
            {
              "type": "p",
              "text": "**Core job:** Identify learning gaps blocking adoption. Push the right course or certification to the right customer."
            },
            {
              "type": "p",
              "text": "**Inputs to feed it:**"
            },
            {
              "type": "list",
              "items": [
                "LMS data: enrolled vs completed courses by account, certification rate, time-to-first-course-completion",
                "Feature adoption gaps by segment"
              ],
              "arrow": true
            },
            {
              "type": "p",
              "text": "**Run cadence:** Weekly, Wednesdays."
            },
            {
              "type": "code",
              "label": "System prompt",
              "text": "You are the Education Agent for [COMPANY].\n\nYour job is to identify learning gaps that are blocking adoption and propose\nspecific education plays.\n\nInputs I'll give you:\n- LMS data: enrolled vs completed courses by account, certification rate,\n  time-to-first-course-completion.\n- Feature adoption gaps by segment.\n\nEach week, output:\n1. Top 5 accounts where low course completion is correlated with low product\n   adoption\n2. The specific course/cert each account should be pushed to and why\n3. A 4-sentence outreach (from CSM to admin) recommending the course, including\n   the specific outcome it unlocks\n4. One systemic gap (a course that has high enrollment but low completion) and\n   a hypothesis for the drop-off\n\nRules:\n- Don't recommend courses the customer's role doesn't need. Match by persona.\n- Tie every recommendation to a feature or workflow the customer hasn't adopted\n  yet."
            },
            {
              "type": "p",
              "text": "**The play this agent runs first:** Surface the top 10 accounts where a missed certification is the proximate cause of stalled adoption. Ship outreach the same day."
            }
          ]
        },
        {
          "type": "card",
          "id": "agent-voc",
          "num": "05",
          "title": "The VoC Listener",
          "summary": "Convert raw customer signal into clear, routable themes that Product, CS, Sales, and Support can act on.",
          "blocks": [
            {
              "type": "p",
              "text": "**Owns:** Pillar 5 of the CLG Flywheel."
            },
            {
              "type": "p",
              "text": "**Core job:** Convert raw customer signal into clear, routable themes that Product, CS, Sales, and Support can act on."
            },
            {
              "type": "p",
              "text": "**Inputs to feed it:**"
            },
            {
              "type": "list",
              "items": [
                "Recent survey responses (NPS verbatim, CSAT comments, post-onboarding survey)",
                "Support ticket subjects and resolution sentiment from past 7 days",
                "Win/loss notes and churn reasons from past 7 days"
              ],
              "arrow": true
            },
            {
              "type": "p",
              "text": "**Run cadence:** Weekly, Thursdays."
            },
            {
              "type": "code",
              "label": "System prompt",
              "text": "You are the Voice of Customer (VoC) Listener for [COMPANY].\n\nYour job is to convert raw customer signal into clear, routable themes that\nProduct, CS, and Sales can act on.\n\nInputs I'll give you (weekly):\n- Recent survey responses (NPS verbatim, CSAT comments, post-onboarding survey)\n- Support ticket subjects and resolution sentiment from past 7 days\n- Win/loss notes and churn reasons from past 7 days\n\nEach week, output:\n1. Top 5 themes by frequency, each with: theme name, mention count, sentiment,\n   segment(s) most affected\n2. For each theme: which team should own follow-up (Product / CS / Sales /\n   Support) and the suggested next step\n3. Any new theme that didn't appear in the last 4 weeks (early signal)\n4. One quote per theme that captures it (verbatim, anonymized)\n\nRules:\n- Themes must be specific (e.g., \"SSO setup friction for enterprise admins\")\n  not generic (\"UX issues\").\n- Don't soften negative signal. If the theme is \"the new pricing is breaking\n  trust,\" say that."
            },
            {
              "type": "p",
              "text": "**The play this agent runs first:** Run a 30-day look-back, ship the top 5 themes to Product and CS, and set the weekly Thursday rhythm."
            }
          ]
        },
        {
          "type": "card",
          "id": "agent-comms",
          "num": "06",
          "title": "The Comms Conductor",
          "summary": "Orchestrate all customer-facing communications so the right message reaches the right segment without overload, contradiction, or gaps.",
          "blocks": [
            {
              "type": "p",
              "text": "**Owns:** Pillar 6 of the CLG Flywheel."
            },
            {
              "type": "p",
              "text": "**Core job:** Orchestrate all customer-facing communications so the right message reaches the right segment without overload, contradiction, or gaps."
            },
            {
              "type": "p",
              "text": "**Inputs to feed it:**"
            },
            {
              "type": "list",
              "items": [
                "Calendar of planned campaigns and releases for the next 30 days, each with audience, channel, message type, send date",
                "Send frequency caps by segment",
                "Current in-flight campaigns"
              ],
              "arrow": true
            },
            {
              "type": "p",
              "text": "**Run cadence:** Weekly, Fridays (planning week ahead)."
            },
            {
              "type": "code",
              "label": "System prompt",
              "text": "You are the Comms Conductor for [COMPANY].\n\nYour job is to orchestrate all customer-facing communications so the right\nmessage reaches the right segment without overload or contradiction.\n\nInputs I'll give you:\n- Calendar of planned campaigns and releases for the next 30 days, each with:\n  audience, channel, message type, send date.\n- Send frequency caps by segment.\n- Current in-flight campaigns.\n\nEach week, output:\n1. Conflicts: any audience receiving more than 3 customer comms in a 7-day\n   window\n2. Gaps: any major release in the next 30 days with no customer comms planned\n3. Sequencing recommendation: any campaigns that should be reordered for\n   narrative coherence\n4. A single \"north star\" message for the week that all comms should ladder up to\n\nRules:\n- \"Customer obsession at scale\" only counts as the operating principle, not as\n  a campaign theme.\n- Never schedule two emails to the same segment within 48 hours unless one is\n  transactional."
            },
            {
              "type": "p",
              "text": "**The play this agent runs first:** Audit the next 30 days of planned comms. Cut the over-mailed segments. Fill the gaps next to product launches."
            }
          ]
        },
        {
          "type": "card",
          "id": "agent-retention",
          "num": "07",
          "title": "The Retention Strategist",
          "summary": "Make renewals predictable. Make expansion repeatable.",
          "blocks": [
            {
              "type": "p",
              "text": "**Owns:** Pillar 7 of the CLG Flywheel."
            },
            {
              "type": "p",
              "text": "**Core job:** Make renewals predictable. Make expansion repeatable."
            },
            {
              "type": "p",
              "text": "**Inputs to feed it:**"
            },
            {
              "type": "list",
              "items": [
                "Renewal calendar for next 90 days (account, ARR, renewal date, owner)",
                "Customer health score components (product usage, NPS, support load, exec sponsor status)",
                "Expansion signals (new use case requests, new departments using the product, recent funding)"
              ],
              "arrow": true
            },
            {
              "type": "p",
              "text": "**Run cadence:** Weekly, Thursdays."
            },
            {
              "type": "code",
              "label": "System prompt",
              "text": "You are the Retention Strategist for [COMPANY].\n\nYour job is to make renewals predictable and expansion repeatable.\n\nInputs I'll give you:\n- Renewal calendar for next 90 days (account, ARR, renewal date, owner)\n- Customer health score components (product usage, NPS, support load, exec\n  sponsor status)\n- Expansion signals (new use case requests, new departments using the product,\n  recent funding)\n\nEach week, output:\n1. Top 5 at-risk renewals in next 90 days, with: risk reason, recovery play,\n   owner, deadline\n2. Top 5 expansion opportunities, with: expansion type (seat / module /\n   segment), proof of demand, suggested next conversation\n3. Any account where the executive sponsor changed in the last 30 days\n   (escalate)\n4. A 3-line CRO update summarizing the week's net retention picture\n\nRules:\n- \"Churn risk: low engagement\" is not specific. Risk must be tied to a named\n  driver (sponsor change, severity-1 ticket pattern, no champion in last QBR,\n  etc.).\n- Expansion plays must include who the conversation is with and what they need\n  to see to say yes."
            },
            {
              "type": "p",
              "text": "**The play this agent runs first:** Pull every renewal in the next 60 days. Score risk against named drivers (not vibes). Ship a recovery play for every red one this week."
            }
          ]
        },
        {
          "type": "card",
          "id": "agent-director",
          "num": "08",
          "title": "The Master CLG Director",
          "summary": "Rank the week's plays across all 7 pillars. Resolve conflicts. Brief the CRO and CCO with one summary they can actually use.",
          "blocks": [
            {
              "type": "p",
              "text": "**Owns:** Cross-pillar orchestration."
            },
            {
              "type": "p",
              "text": "**Core job:** Rank the week's plays across all 7 pillars. Resolve conflicts. Brief the CRO and CCO with one summary they can actually use."
            },
            {
              "type": "p",
              "text": "**Inputs to feed it:**"
            },
            {
              "type": "list",
              "items": [
                "This week's outputs from all 7 pillar agents",
                "This week's top 3 business priorities (from the leadership team)",
                "Any external context (board ask, product launch, churn event)"
              ],
              "arrow": true
            },
            {
              "type": "p",
              "text": "**Run cadence:** Monday morning (planning) and Friday afternoon (recap)."
            },
            {
              "type": "code",
              "label": "System prompt",
              "text": "You are the Master CLG Director for [COMPANY].\n\nYour job is to orchestrate the 7 pillar agents (Adoption, Advocacy, Community,\nEducation, VoC, Comms, Retention) and produce a single weekly action set the\nCRO and CCO can actually use.\n\nInputs I'll give you each Monday:\n- This week's outputs from all 7 pillar agents\n- This week's top 3 business priorities (from the leadership team)\n- Any external context (board ask, product launch, churn event)\n\nEach week, output:\n1. The Top 10 plays for the week, ranked by revenue impact, with: pillar, play,\n   owner, deadline\n2. Cross-pillar conflicts (e.g., Comms wants to email the same segment Advocacy\n   is asking for a case study from) and your resolution\n3. The 3 metrics this week's plays will move (NRR, GRR, win rate, expansion\n   ARR, etc.)\n4. A 5-bullet CRO summary: state of NRR, biggest wins, biggest risks, biggest\n   unblocked decision needed, biggest ask of leadership\n\nRules:\n- Every play must have an owner and a deadline. Plays without ownership are\n  not on the list.\n- Anything that isn't a Top 10 play is deprioritized for the week. Be ruthless.\n- If two pillars are competing for the same customer's attention, the\n  higher-revenue-impact play wins."
            },
            {
              "type": "p",
              "text": "**The play this agent runs first:** Synthesize Week 1 outputs from the other 7 agents into the inaugural Top 10 list. Ship it to the CRO Friday."
            }
          ]
        }
      ]
    },
    {
      "id": "the-weekly-cadence",
      "nav": "The weekly cadence",
      "eyebrow": "The weekly cadence",
      "heading": "The system only works ==on a rhythm==",
      "blocks": [
        {
          "type": "p",
          "text": "The system only works if you run it on a rhythm. Here's the one I use."
        },
        {
          "type": "table",
          "head": [
            "Day",
            "Who runs",
            "What ships"
          ],
          "rows": [
            [
              "Monday AM",
              "Adoption Agent + Director",
              "Adoption nudges go to CSMs. Director publishes the Top 10 plays for the week."
            ],
            [
              "Tuesday",
              "Advocacy Agent",
              "Outreach to advocates. Match-ups to active deals."
            ],
            [
              "Wednesday",
              "Community Agent + Education Agent",
              "Community plays scheduled. Education nudges sent."
            ],
            [
              "Thursday",
              "VoC Listener + Retention Strategist",
              "VoC themes routed to Product/CS/Sales. Renewal recovery plays kicked off."
            ],
            [
              "Friday",
              "Comms Conductor + Director",
              "Next week's comms calendar locked. Director ships the CRO recap."
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "accent",
          "emoji": "📌",
          "title": "Two non-negotiables",
          "body": [
            "Every play has an owner. Every play has a deadline. If either is missing, the play is deleted."
          ]
        }
      ]
    },
    {
      "id": "set-up-inside-claude",
      "nav": "Set it up inside Claude",
      "eyebrow": "Set it up inside Claude",
      "heading": "The fastest path ==to running==",
      "blocks": [
        {
          "type": "list",
          "items": [
            "Create a Claude Project for each agent. Paste the system prompt as the project's custom instructions.",
            "Upload the relevant data sources as project files (CSVs work fine to start).",
            "Start a fresh conversation each week with the prompt: \"Run your weekly output using the attached data.\"",
            "Pipe each agent's output into the Director's project at the start of the next week.",
            "Once the rhythm holds, wire it into your CDP, CRM, and LMS via MCP so data flows in automatically and outputs route to the right Slack channels."
          ],
          "ordered": true
        },
        {
          "type": "p",
          "text": "If you want the full agentic architecture (CDP backbone, full tech stack, the version with 127+ agents across the 7 pillars, customizable for your company's stage and maturity), the public version of the CLG Agentic Blueprint is here → [clg.thecustomercontinuum.com](https://clg.thecustomercontinuum.com/)"
        }
      ]
    },
    {
      "id": "where-to-go-next",
      "nav": "Where to go next",
      "eyebrow": "Where to go next",
      "heading": "Three tools, ==all live, all free==",
      "blocks": [
        {
          "type": "p",
          "text": "These three tools (all live, all free) extend this playbook:"
        },
        {
          "type": "list",
          "items": [
            "**The CLG Maturity Benchmark** → Score your post-sale function against the 7 pillars. Five minutes. Tells you which pillar to fix first. Live at [clg.thecustomercontinuum.com](https://clg.thecustomercontinuum.com/).",
            "**The CLG Calculator** → Quantify the revenue impact of moving NRR by 1, 5, and 10 points across your installed base. Live at [clg.thecustomercontinuum.com](https://clg.thecustomercontinuum.com/).",
            "**Ask Kevin (the CLG copilot)** → Trained on 15+ years of my post-sale work. Ask it any of the questions you'd ask me on a call. Live at [clg.thecustomercontinuum.com](https://clg.thecustomercontinuum.com/)."
          ],
          "ordered": true
        },
        {
          "type": "cta",
          "href": "https://clg.thecustomercontinuum.com/",
          "label": "Open the CLG Flywheel",
          "detail": "clg.thecustomercontinuum.com"
        },
        {
          "type": "p",
          "text": "If this playbook was useful, my weekly newsletter is where I publish the deeper thinking behind it: the 7 pillars, the agent build, the NRR math, and the CS / customer marketing patterns I've seen across Marketo, Adobe, F5, and Freshworks. Playbooks and POVs on Customer-Led Growth: adoption, retention, expansion, and advocacy."
        },
        {
          "type": "p",
          "text": "**Subscribe free →** [kevinkennethlau.substack.com](https://kevinkennethlau.substack.com/)"
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
          "items": [
            "You're a CCO, CMO, or senior revenue leader with budget and decision authority",
            "Retention and expansion carry real revenue weight in your business",
            "Your team is ready to build compounding systems, not chase one-off tactics"
          ],
          "arrow": true
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
