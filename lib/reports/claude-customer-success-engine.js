/**
 * The Claude Customer Success Engine: one router and eight agents that run the
 * customer success week in the background and leave every draft for review.
 * Lead magnet for the 9 Nov 2026 post (keyword ENGINE), modelled on the
 * "Grok Bot Content + Lead Engine" format. The Notion resource holds the same copy.
 */
const report = {
  "slug": "claude-customer-success-engine",
  "landingSlug": "claude-customer-success-engine",
  "notionUrl": "",
  "kind": "Free setup guide",
  "title": "The Claude Customer Success Engine",
  "cardDescription": "One router and eight Claude agents that watch every account, brief every call, plan every renewal and find your advocates, then leave every draft in one review queue. Skill files, schedules and approval rules included.",
  "headline": [
    "One router, eight agents,",
    "==every account covered=="
  ],
  "description": "A setup guide for a customer success engine built in Claude: a router that reads your CRM, product usage, tickets and chats, and eight agents that flag quiet accounts, brief calls, onboard, spot expansion, build QBRs, find advocates, plan renewals and brief product. Every Skill file, first prompt, schedule and approval rule is included.",
  "lead": "Doing customer success properly means watching every account, walking into every call with the full history, and having the renewal plan ready months early. This guide hands the first draft of all of it to Claude, and keeps every customer-facing word behind your approval.",
  "meta": [
    "Free setup guide",
    "1 router",
    "8 agents",
    "Runs in the background"
  ],
  "proof": [
    {
      "label": "Agents",
      "value": "8",
      "detail": "One job each, one account brain"
    },
    {
      "label": "Sources",
      "value": "4",
      "detail": "CRM, product usage, tickets, chats"
    },
    {
      "label": "First version",
      "value": "10 min",
      "detail": "Router plus one agent"
    }
  ],
  "cover": {
    "src": "/assets/claude_customer_success_engine.gif",
    "alt": "The Claude Customer Success Engine: one router and eight agents running a customer success week, with every draft waiting in an approval queue",
    "width": 1080,
    "height": 1350
  },
  "updated": "2026-11-09",
  "sections": [
    {
      "id": "read-this-first",
      "nav": "Read this first",
      "eyebrow": "Read this first",
      "heading": "A full-time job, ==before the first ticket==",
      "blocks": [
        {
          "type": "p",
          "text": "Hey, I'm Kevin Lau. I've spent 15+ years in post-sale at Marketo, Adobe, F5 and Freshworks. Along the way that meant turning post-sale into a $100M+ ARR expansion engine and driving $50M+ in pipeline through customer advocacy and proof."
        },
        {
          "type": "p",
          "text": "Doing customer success properly means watching every account for the signs it's going quiet, walking into every call with the full history, getting new customers to first value before they stall, and having the QBR, the renewal plan and the reference ask ready for every account that needs one."
        },
        {
          "type": "p",
          "text": "That's a full-time job before anyone answers a single ticket, and it's the work that slips first when the book gets bigger."
        },
        {
          "type": "p",
          "text": "So this guide sets up eight agents in Claude that do the first draft of all of it in the background. A router reads every signal first and decides what needs a human. The agents write the drafts. Everything lands in one review queue, and nothing reaches a customer until you approve it."
        },
        {
          "type": "p",
          "text": "By the end of this guide you'll have the router, the eight agents with their Skill files and first prompts, a weekly schedule, and the approval rules that keep the engine on your side of the line."
        },
        {
          "type": "callout",
          "tone": "accent",
          "emoji": "📬",
          "title": "Want the thinking behind the build?",
          "body": [
            "Every Thursday I publish The Customer Continuum: playbooks and POVs on adoption, retention, expansion and advocacy. [Subscribe free → kevinkennethlau.substack.com](https://kevinkennethlau.substack.com)"
          ]
        },
        {
          "type": "h3",
          "text": "What's Inside"
        },
        {
          "type": "list",
          "arrow": true,
          "items": [
            "**The 10-minute version**: the router and one agent, if you want to see it work today",
            "**Before you start**: access, the folder, and the four files every agent reads",
            "**How the engine works**: sources, router, agents, review queue",
            "**The eight agents at a glance**: what each one hands you and what needs your yes",
            "**The weekly rhythm**: which agent runs when",
            "**The router**: the Skill file that decides what needs a human",
            "**The eight agents**: Skill file, first prompt and schedule for each",
            "**Approval rules**: what to paste in before any draft gets near a customer",
            "**Week one**: what to check, and what usually goes wrong"
          ]
        },
        {
          "type": "callout",
          "tone": "light",
          "emoji": "✍️",
          "title": "A note on the writing.",
          "body": [
            "Sections 2, 3, 6, 7 and 8 hold setup steps, so they're written in plain, short sentences with one action each. It reads flat on purpose, because a setup step that can be read two ways is a step somebody gets wrong."
          ]
        }
      ]
    },
    {
      "id": "the-10-minute-version",
      "nav": "The 10-minute version",
      "eyebrow": "The 10-minute version",
      "heading": "See it work ==today==",
      "blocks": [
        {
          "type": "p",
          "text": "You don't need all eight agents to see the engine work. Start with the router and the scout."
        },
        {
          "type": "list",
          "ordered": true,
          "items": [
            "Export your accounts from your CRM as a CSV. Keep these columns: account, segment, ARR, renewal date, champion, seats on plan, seats used.",
            "Export the last 60 days of product usage per account, and the last 30 days of tickets.",
            "Open Claude and create a Project called **CS Engine**.",
            "Upload the three exports to the Project.",
            "Paste the router Skill from Section 7 into the Project instructions.",
            "Paste the scout's first prompt from Section 8.",
            "Read the list of flagged accounts. Check three of them against what you already know."
          ]
        },
        {
          "type": "p",
          "text": "If the scout flags an account you were already worried about, and one you weren't, the engine is worth building out. Then come back and do the full setup."
        }
      ]
    },
    {
      "id": "before-you-start",
      "nav": "Before you start",
      "eyebrow": "Before you start",
      "heading": "Access, the folder, ==four files==",
      "blocks": [
        {
          "type": "h4",
          "text": "Access"
        },
        {
          "type": "list",
          "arrow": true,
          "items": [
            "A paid Claude plan with Skills and scheduled tasks. The engine runs as a set of Skills inside one Claude workspace.",
            "Read access to your CRM, product analytics, help desk and chat tool. Use Claude's connector where one exists. Where it doesn't, drop a weekly CSV export into the inputs folder.",
            "Notion, or any shared board, for the review queue. Connect it so the agents can create a card per draft.",
            "Your calendar, connected read-only, so the briefer knows which calls are tomorrow.",
            "A yes from security and legal on which customer data can go into Claude. Agree this before anything runs."
          ]
        },
        {
          "type": "h4",
          "text": "The folder"
        },
        {
          "type": "p",
          "text": "Create one folder. Every agent reads from 00 Inputs and writes only to its own folder and to 09 Review."
        },
        {
          "type": "code",
          "label": "Folder structure",
          "pre": true,
          "text": "CS Engine/\n├── 00 Inputs/\n│   ├── exports/            weekly CSVs for any source without a connector\n│   ├── accounts.csv        one row per account\n│   ├── playbook.md         how you run customer success\n│   ├── voice.md            how your team writes to customers\n│   └── rules.md            the approval rules from Section 9\n├── 01 Signals/             the router's daily log\n├── 02 Briefs/              NOVA flags and REX call briefs\n├── 03 Onboarding/          IVY\n├── 04 Expansion/           KAI\n├── 05 QBRs/                SAGE\n├── 06 Advocacy/            LUNA\n├── 07 Renewals/            MAX\n├── 08 Voice of customer/   ORION\n└── 09 Review/              every draft waiting for your yes"
        },
        {
          "type": "h4",
          "text": "The four files every agent reads"
        },
        {
          "type": "table",
          "head": [
            "File",
            "What goes in it"
          ],
          "rows": [
            [
              "`accounts.csv`",
              "Account, segment, ARR, renewal date, CSM, champion, champion email, exec sponsor, seats on plan, seats used, onboarding stage, last QBR date, notes."
            ],
            [
              "`playbook.md`",
              "Your segments, your onboarding milestones, what counts as healthy, when a renewal plan starts, who approves discounts, and who owns each step."
            ],
            [
              "`voice.md`",
              "Three real emails your team sent that customers liked. Words you never use. How formal you are with executives versus admins."
            ],
            [
              "`rules.md`",
              "The approval rules from Section 9, pasted word for word."
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "warn",
          "emoji": "⚠️",
          "title": "The account brain is the engine.",
          "body": [
            "An agent with no context is a very confident stranger. If accounts.csv is stale or playbook.md is empty, every draft will sound generic. Spend your first hour here, not on the prompts."
          ]
        }
      ]
    },
    {
      "id": "how-the-engine-works",
      "nav": "How the engine works",
      "eyebrow": "How the engine works",
      "heading": "Sources, router, ==agents, review==",
      "blocks": [
        {
          "type": "list",
          "ordered": true,
          "items": [
            "**Sources.** Your CRM, product usage, help desk and chat tool. Each one produces signals: a usage drop, a ticket spike, a champion who left, a renewal date getting close, seats running out.",
            "**The router.** Reads every signal against your account brain and your playbook, and drops the noise before any agent wakes up. Most signals are noise. In a normal week the router should throw away well over 90% of them.",
            "**The agents.** Each one has one job and one folder. The router hands each signal that survives to exactly one agent.",
            "**The review queue.** Every draft becomes a card in 09 Review and on your board, with the account, the signal that triggered it, and the draft.",
            "**You.** You approve, edit or reject. Nothing reaches a customer, a CRM field or a teammate's inbox until you do."
          ]
        },
        {
          "type": "quote",
          "text": "One agent doing one task is a demo. Many agents coordinating is a system."
        },
        {
          "type": "p",
          "text": "The router is the part most setups skip. Without it, eight agents read the same signal, three of them write a draft about it, and the customer gets three emails from three well-meaning people. That's shipping your org chart instead of a customer experience, just faster."
        }
      ]
    },
    {
      "id": "agents-at-a-glance",
      "nav": "The eight agents at a glance",
      "eyebrow": "The eight agents at a glance",
      "heading": "Eight jobs, ==one queue==",
      "blocks": [
        {
          "type": "table",
          "head": [
            "Agent",
            "Its job",
            "What it hands you",
            "Needs your yes for"
          ],
          "rows": [
            [
              "**NOVA**, the scout",
              "Flags accounts going quiet",
              "A ranked list of accounts with the signal and the date behind each",
              "Nothing. It's read-only"
            ],
            [
              "**REX**, the briefer",
              "Briefs you before every call",
              "A one-page brief from the last 90 days",
              "Nothing. It's for you"
            ],
            [
              "**IVY**, the onboarding guide",
              "Nudges new accounts to first value",
              "The next milestone email for each new account",
              "Every email"
            ],
            [
              "**KAI**, the expansion spotter",
              "Spots seat and usage limits",
              "The account, the limit and the evidence, handed to the owner",
              "Every handoff"
            ],
            [
              "**SAGE**, the QBR builder",
              "Builds QBRs from outcomes",
              "A draft review built around results, not features",
              "Every deck"
            ],
            [
              "**LUNA**, the advocate finder",
              "Drafts the reference ask",
              "A PROP score and an ask, only for accounts at 70+",
              "Every ask"
            ],
            [
              "**MAX**, the renewal desk",
              "Plans every renewal 120 days out",
              "A renewal plan, and a save plan when an account is at risk",
              "Every plan and email"
            ],
            [
              "**ORION**, voice of customer",
              "Briefs product every month",
              "Feedback and tickets grouped by theme, with counts and quotes",
              "The monthly brief"
            ]
          ]
        }
      ]
    },
    {
      "id": "weekly-rhythm",
      "nav": "The weekly rhythm",
      "eyebrow": "The weekly rhythm",
      "heading": "Which agent runs ==when==",
      "blocks": [
        {
          "type": "p",
          "text": "Set each line as a scheduled task in Claude. Use your own time zone."
        },
        {
          "type": "table",
          "head": [
            "When",
            "What runs",
            "What's waiting for you"
          ],
          "rows": [
            [
              "Every weekday, 7:00",
              "Router sweep, then NOVA",
              "Today's flagged accounts"
            ],
            [
              "Every weekday, 16:00",
              "REX",
              "Briefs for tomorrow's customer calls"
            ],
            [
              "Monday, 8:00",
              "MAX, then KAI",
              "Renewals at 120, 90, 60 and 30 days, and expansion handoffs"
            ],
            [
              "Tuesday, 8:00",
              "IVY",
              "Milestone emails for every account in onboarding"
            ],
            [
              "Wednesday, 8:00",
              "LUNA",
              "PROP scores and reference asks"
            ],
            [
              "Thursday, 8:00",
              "SAGE",
              "Draft QBRs for every review in the next 14 days"
            ],
            [
              "Friday, 14:00",
              "ORION",
              "This week's feedback themes. On the first Friday of the month, the product brief"
            ]
          ]
        }
      ]
    },
    {
      "id": "the-router",
      "nav": "The router",
      "eyebrow": "The router",
      "heading": "Decide what ==needs a human==",
      "blocks": [
        {
          "type": "p",
          "text": "Save this as a Skill called `cs-router`. Every agent below starts from what the router hands it."
        },
        {
          "type": "code",
          "label": "SKILL.md: cs-router",
          "text": "---\nname: cs-router\ndescription: Reads every customer signal from the CRM, product usage, tickets and chats, drops the noise, and routes each signal that matters to exactly one customer success agent.\n---\n\nYou are the router for a customer success team. You read signals. You never write to a customer.\n\nBefore you start:\n1. Read 00 Inputs/accounts.csv, playbook.md and rules.md.\n2. Read the newest data from each source, or the newest file in 00 Inputs/exports.\n\nA signal counts only if it matches one of these:\n- Usage down 30% or more over 14 days, against the account's own prior 30 days.\n- The champion left, changed role, or their email bounced.\n- 3 or more tickets from one account in 7 days, any urgent ticket, or a satisfaction score of 2 or lower.\n- A renewal date at 120, 90, 60 or 30 days.\n- Seats used at 90% or more of plan, or a usage limit hit twice in 30 days.\n- An onboarding milestone reached, or missed by 7 days or more.\n- A customer call on the calendar for tomorrow.\n- Feedback, a survey comment or a feature request.\n\nDrop everything else. Also drop:\n- Signals from accounts marked churned or in legal hold.\n- A signal already routed for the same account in the last 7 days, unless it got worse.\n\nRoute each signal to exactly one agent:\n- Usage drop, champion change, ticket spike: NOVA.\n- Call tomorrow: REX.\n- Onboarding milestone: IVY.\n- Seats or limits: KAI.\n- QBR in the next 14 days: SAGE.\n- Renewal date: MAX.\n- Feedback and requests: ORION.\n- LUNA runs on its own weekly score. Do not route to LUNA.\n\nIf one account has signals for two agents, send it to the agent higher on this list and note the other signal.\n\nWrite one log per day to 01 Signals/YYYY-MM-DD.md:\n- Every signal kept: account, source, the data point, the date, the agent.\n- A count of signals dropped, by reason.\n- The share of signals dropped.\n\nNever guess a number. If a source is missing or stale by more than 7 days, say so at the top of the log and route nothing from it."
        }
      ]
    },
    {
      "id": "the-eight-agents",
      "nav": "The eight agents",
      "eyebrow": "The eight agents",
      "heading": "Skill file, first prompt, ==schedule==",
      "blocks": [
        {
          "type": "p",
          "text": "Save each one as its own Skill. Run the first prompt by hand once, read the output, fix your inputs, then turn on the schedule."
        },
        {
          "type": "card",
          "id": "agent-nova",
          "num": "01",
          "title": "NOVA, the scout",
          "summary": "Reads product usage, tickets, chats and the CRM, and flags the accounts going quiet",
          "blocks": [
            {
              "type": "p",
              "text": "Most churn shows up in the data long before the renewal call. Logins thin out, the champion stops opening emails, the same ticket comes back three times. NOVA's job is to put those accounts in front of you while there's still time to do something."
            },
            {
              "type": "code",
              "label": "SKILL.md: nova-scout",
              "text": "---\nname: nova-scout\ndescription: Turns the router's usage, champion and ticket signals into a ranked list of accounts that need a human this week.\n---\n\nYou are read-only. You never draft customer emails.\n\nFor each account the router sent you today:\n1. Pull the last 90 days for that account from accounts.csv, usage, tickets and chats.\n2. Write what changed, with the number and the date. Example: \"Weekly active users 41 → 24 between 6 and 20 Oct.\"\n3. Say what you think is behind it, and label it as a guess.\n4. Rate urgency: today, this week, or watch.\n\nRank by urgency, then by ARR.\n\nWrite one file to 02 Briefs/flags-YYYY-MM-DD.md and one card to 09 Review titled \"Flags: [date]\".\n\nRules:\n- Every claim needs a number and a date from a source.\n- Never write \"at risk\" without the signal that makes it so.\n- If the champion changed, say who replaced them if the CRM shows it. If it doesn't, write \"unknown\"."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "Run the router on the files in 00 Inputs, then run nova-scout on what it routes to you.\n\nShow me the ranked list, and the five accounts you almost flagged but didn't, with the reason."
            },
            {
              "type": "p",
              "text": "**Schedule:** every weekday at 7:00, right after the router."
            }
          ]
        },
        {
          "type": "card",
          "id": "agent-rex",
          "num": "02",
          "title": "REX, the briefer",
          "summary": "Builds a one-page brief before every customer call, from the last 90 days of history",
          "blocks": [
            {
              "type": "p",
              "text": "Nobody should walk into a customer call and ask a question the customer already answered in a ticket. REX reads the history so you don't have to scroll through it five minutes before the call."
            },
            {
              "type": "code",
              "label": "SKILL.md: rex-briefer",
              "text": "---\nname: rex-briefer\ndescription: Writes a one-page brief for every customer call on tomorrow's calendar.\n---\n\nFor each call tomorrow with a customer in accounts.csv, write one page with these headings:\n\n1. Who's on the call: name, role, how long they've been the contact.\n2. Where the account stands: ARR, renewal date, seats used against plan, onboarding stage.\n3. What happened in the last 90 days: usage trend, tickets and how they were resolved, anything they asked for.\n4. What they said they wanted to achieve, in their words if you have them.\n5. Open items we owe them.\n6. Three questions worth asking.\n7. One thing not to bring up, and why.\n\nKeep it to one page. Write to 02 Briefs/[account]-[date].md and add a card to 09 Review.\n\nNever invent a goal or a quote. If you don't have it, write \"not on file\" so the CSM knows to ask."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "Pick my next three customer calls from the calendar and write the brief for each. Flag anything in the history you think I've forgotten."
            },
            {
              "type": "p",
              "text": "**Schedule:** every weekday at 16:00, for the next day's calls."
            }
          ]
        },
        {
          "type": "card",
          "id": "agent-ivy",
          "num": "03",
          "title": "IVY, the onboarding guide",
          "summary": "Nudges new accounts toward first value, triggered by milestones, not calendar dates",
          "blocks": [
            {
              "type": "p",
              "text": "Calendar-based onboarding emails go out whether the customer is ready or not. IVY works off four milestones instead: Admin Setup Complete, First Value Achieved, Feature Depth Unlocked, and Outcome + Proof Captured. Each email is about the next one."
            },
            {
              "type": "code",
              "label": "SKILL.md: ivy-onboarding",
              "text": "---\nname: ivy-onboarding\ndescription: Drafts the next onboarding email for each new account, based on the milestone it just reached or missed.\n---\n\nMilestones, in order:\n1. Admin Setup Complete\n2. First Value Achieved\n3. Feature Depth Unlocked\n4. Outcome + Proof Captured\n\nThe definition of each milestone is in playbook.md. Use it exactly.\n\nFor each account in onboarding:\n- If it reached a milestone this week, draft a short email that names what they did and points to the next milestone with one specific step.\n- If it missed a milestone by 7 days or more, draft an offer of help: one step, one link, one time to talk.\n- If neither, do nothing.\n\nWrite in the voice in voice.md. Under 120 words. One ask per email.\n\nSave drafts to 03 Onboarding and add a card per draft to 09 Review. Never send."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "List every account in onboarding with its current milestone and how long it's been there. Then draft the emails for the ones that moved or stalled."
            },
            {
              "type": "p",
              "text": "**Schedule:** Tuesday at 8:00."
            }
          ]
        },
        {
          "type": "card",
          "id": "agent-kai",
          "num": "04",
          "title": "KAI, the expansion spotter",
          "summary": "Flags accounts hitting seat or usage limits and hands them to the owner without pitching anyone",
          "blocks": [
            {
              "type": "p",
              "text": "The best expansion conversations start from something the customer is already doing. KAI looks for accounts running out of room and hands the evidence to whoever owns the commercial conversation. It never writes to the customer."
            },
            {
              "type": "code",
              "label": "SKILL.md: kai-expansion",
              "text": "---\nname: kai-expansion\ndescription: Finds accounts close to their seat or usage limits and writes an internal handoff with the evidence.\n---\n\nYou never write to a customer. You write handoffs for the account owner.\n\nFor each account the router sent you:\n1. Show the limit and the trend: seats used against plan, or usage against the cap, for the last 90 days.\n2. Check the account is healthy: no open urgent ticket, no usage drop, no NOVA flag in 30 days. If it isn't healthy, stop and note why.\n3. Write the handoff: the account, the evidence, the renewal date, and the outcome the customer is getting today.\n\nSave to 04 Expansion and add a card to 09 Review.\n\nRules:\n- An unhealthy account is a save, not an expansion. Hand those to MAX.\n- Never suggest a price or a discount."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "Show me every account at 85% or more of its seats or usage cap. Split them into healthy and not healthy, and write handoffs for the healthy ones."
            },
            {
              "type": "p",
              "text": "**Schedule:** Monday at 8:00, after MAX."
            }
          ]
        },
        {
          "type": "card",
          "id": "agent-sage",
          "num": "05",
          "title": "SAGE, the QBR builder",
          "summary": "Builds the business review around the outcomes the customer actually got",
          "blocks": [
            {
              "type": "p",
              "text": "A QBR built around your roadmap is a product demo the customer has to sit through. SAGE builds it around their outcomes first, and only then what's next."
            },
            {
              "type": "code",
              "label": "SKILL.md: sage-qbr",
              "text": "---\nname: sage-qbr\ndescription: Drafts a quarterly business review for every account with a review in the next 14 days.\n---\n\nStructure, in this order:\n1. The goals they set with us, in their words.\n2. What they achieved against each goal, with numbers from usage and the CRM.\n3. What got in the way, including our tickets and delays.\n4. What we recommend for next quarter: three items, each tied to one of their goals.\n5. What we need from them.\n\nRules:\n- Lead with outcomes. Features appear only as the way to reach a goal.\n- Every number needs a source and a date range.\n- If a goal has no data behind it, say so on the slide. Don't fill it.\n- Keep it under 10 slides.\n\nSave the outline and speaker notes to 05 QBRs and add a card to 09 Review."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "Build the QBR for my next review. Before you write it, list every goal you found for this account and where you found it."
            },
            {
              "type": "p",
              "text": "**Schedule:** Thursday at 8:00, for reviews in the next 14 days."
            }
          ]
        },
        {
          "type": "card",
          "id": "agent-luna",
          "num": "06",
          "title": "LUNA, the advocate finder",
          "summary": "Scores advocacy readiness with the PROP model and drafts the reference ask only when it's earned",
          "blocks": [
            {
              "type": "p",
              "text": "The best advocates aren't always the biggest customers. They're the ones getting real outcomes who'd look smart telling the story. LUNA scores every account on PROP and only drafts an ask at 70 or above."
            },
            {
              "type": "code",
              "label": "SKILL.md: luna-advocacy",
              "text": "---\nname: luna-advocacy\ndescription: Scores every healthy account on PROP and drafts a reference or story ask for accounts scoring 70 or more.\n---\n\nPROP score, out of 100:\n- P, Product usage (40%): depth and consistency of use over 90 days.\n- R, Relationship strength (25%): champion engagement, exec sponsor, response times.\n- O, Outcomes achieved (25%): goals met, with numbers.\n- P, Persona fit (10%): how closely the champion matches the buyers you want to reach.\n\nShow the four sub-scores and the evidence for each.\n\nSkip accounts with a NOVA flag, an open urgent ticket, or a renewal inside 60 days.\n\nFor each account at 70 or above, draft one ask:\n- Pick the right size of ask: a review, a reference call, a quote, or a case study.\n- Lead with what's in it for them: recognition in front of their peers and their boss.\n- Never ask the same contact twice in 90 days.\n\nSave scores and drafts to 06 Advocacy and add a card per ask to 09 Review."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "Score my top 30 accounts by ARR on PROP. Show the full table, then draft asks for the ones at 70 or more."
            },
            {
              "type": "p",
              "text": "**Schedule:** Wednesday at 8:00."
            }
          ]
        },
        {
          "type": "card",
          "id": "agent-max",
          "num": "07",
          "title": "MAX, the renewal desk",
          "summary": "Starts every renewal plan 120 days out and drafts the save plan when an account is at risk",
          "blocks": [
            {
              "type": "p",
              "text": "A renewal that starts 30 days out is a negotiation. One that starts 120 days out is a plan. MAX makes sure every renewal gets the second kind."
            },
            {
              "type": "code",
              "label": "SKILL.md: max-renewals",
              "text": "---\nname: max-renewals\ndescription: Builds a renewal plan for every account at 120 days, updates it at 90, 60 and 30, and drafts a save plan when the account is at risk.\n---\n\nAt 120 days, write the renewal plan:\n1. Account, ARR, renewal date, decision maker, champion.\n2. The value delivered this term, with numbers.\n3. Risks: NOVA flags, tickets, usage trend, champion changes.\n4. Steps by date: value review, exec touchpoint, proposal, close.\n\nAt 90, 60 and 30 days, update the plan and list what changed.\n\nIf the account has a NOVA flag or usage down 30% or more, also write a save plan:\n- The most likely reason, labelled as a guess.\n- Three steps to address it, each with an owner and a date.\n- A draft email from the CSM to the champion asking for a conversation, not a renewal.\n\nRules:\n- Never mention price, discounts or contract terms in a customer draft.\n- Save to 07 Renewals and add a card per plan and per draft to 09 Review."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "List every renewal in the next 120 days with its stage. Write full plans for the three biggest, and a save plan for any account with a flag."
            },
            {
              "type": "p",
              "text": "**Schedule:** Monday at 8:00."
            }
          ]
        },
        {
          "type": "card",
          "id": "agent-orion",
          "num": "08",
          "title": "ORION, voice of customer",
          "summary": "Groups the feedback and tickets into one brief for product every month",
          "blocks": [
            {
              "type": "p",
              "text": "Product hears from the loudest customer, not the most common problem. ORION counts. It groups every ticket, survey comment and feature request by theme, so the monthly brief shows what came up, how often, and from how much ARR."
            },
            {
              "type": "code",
              "label": "SKILL.md: orion-voc",
              "text": "---\nname: orion-voc\ndescription: Groups customer feedback and tickets into themes every week, and writes a one-page brief for product every month.\n---\n\nEvery Friday:\n1. Read this week's tickets, survey comments, chats and feature requests.\n2. Group them into themes. Name each theme in the customer's words.\n3. For each theme: count, number of accounts, total ARR of those accounts, and two short quotes.\n4. Add to 08 Voice of customer/weekly-YYYY-MM-DD.md.\n\nOn the first Friday of the month, write the product brief:\n- The top 5 themes by ARR, with the trend against last month.\n- One theme that's growing fast even if it's small.\n- What customers said they'll do if it isn't fixed, only where they actually said it.\n\nRules:\n- Quote, don't paraphrase, and remove names and emails.\n- Never merge two themes to make one look bigger.\n- Add a card to 09 Review for the monthly brief."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "Group the last 30 days of tickets and feedback into themes. Show the table sorted by ARR, then write the product brief as if today were the first Friday of the month."
            },
            {
              "type": "p",
              "text": "**Schedule:** Friday at 14:00."
            }
          ]
        }
      ]
    },
    {
      "id": "approval-rules",
      "nav": "Approval rules",
      "eyebrow": "Approval rules",
      "heading": "Nothing ships ==without your yes==",
      "blocks": [
        {
          "type": "p",
          "text": "Paste this into 00 Inputs/rules.md and into the instructions of the Claude Project. Every Skill above tells the agent to read it first."
        },
        {
          "type": "code",
          "label": "rules.md",
          "text": "Approval rules for the customer success engine\n\n1. No agent sends anything to a customer. Agents write drafts. A person sends.\n2. No agent changes a CRM field, a ticket or a contract.\n3. Every draft goes to 09 Review with: the account, the signal that triggered it, the source and date of every number, and the draft.\n4. No draft mentions price, discounts, contract terms or legal commitments.\n5. No draft promises a feature, a date or a fix.\n6. One customer gets at most one draft per week from the whole engine. If two agents want to reach the same contact, the router keeps the more urgent one and notes the other.\n7. If data is missing, the agent writes \"not on file\". It never fills the gap.\n8. Customer names, emails and quotes stay inside the CS Engine folder and the review board.\n9. If an agent is unsure whether a rule applies, it stops and asks."
        },
        {
          "type": "callout",
          "tone": "light",
          "emoji": "🔒",
          "title": "Rule 6 is the one that matters most.",
          "body": [
            "Customers don't ghost programs. They ghost confusion. Eight agents writing to the same champion in one week is the fastest way to make a helpful system feel like spam."
          ]
        }
      ]
    },
    {
      "id": "week-one",
      "nav": "Week one",
      "eyebrow": "Week one",
      "heading": "What to check, ==what goes wrong==",
      "blocks": [
        {
          "type": "p",
          "text": "Run the engine by hand for the first week. Turn on the schedules in week two."
        },
        {
          "type": "table",
          "head": [
            "Check",
            "What usually goes wrong",
            "The fix"
          ],
          "rows": [
            [
              "Does the router drop most signals?",
              "It routes everything, and the queue fills with 60 cards",
              "Tighten the thresholds in the router Skill until it drops well over 90%"
            ],
            [
              "Are NOVA's flags real?",
              "Seasonal dips get flagged as risk",
              "Add your seasonal patterns to playbook.md"
            ],
            [
              "Do REX's briefs match what you know?",
              "Old contacts show up as the champion",
              "Clean the champion column in accounts.csv"
            ],
            [
              "Do IVY's emails sound like your team?",
              "They read like a template",
              "Add three more real emails to voice.md"
            ],
            [
              "Does LUNA ask the right people?",
              "It asks the biggest accounts, not the happiest",
              "Check the outcome evidence behind each PROP score"
            ],
            [
              "Are MAX's plans early enough?",
              "Renewal dates in the CRM are wrong",
              "Fix the dates before trusting the plans"
            ],
            [
              "Is the review queue manageable?",
              "You spend longer reviewing than writing",
              "Pause the agent with the lowest approval rate and run it by hand"
            ]
          ]
        },
        {
          "type": "p",
          "text": "If you approve less than half of what an agent drafts, pause its schedule and run it by hand until you know what you want from it."
        }
      ]
    },
    {
      "id": "whats-next",
      "nav": "What's next",
      "eyebrow": "What's next",
      "heading": "The next ==build==",
      "blocks": [
        {
          "type": "p",
          "text": "I publish the thinking behind builds like this every week in The Customer Continuum: the frameworks, the agent builds, and the post-sale patterns I've seen across Marketo, Adobe, F5 and Freshworks."
        },
        {
          "type": "p",
          "text": "**Subscribe free →** [kevinkennethlau.substack.com](https://kevinkennethlau.substack.com)"
        }
      ]
    },
    {
      "id": "want-help",
      "nav": "Want help?",
      "eyebrow": "Want help building this?",
      "heading": "Into ==your own org==",
      "blocks": [
        {
          "type": "p",
          "text": "Eight agents in your Claude account is the blueprint. The judgment is the hard part: what your org should build first, in what order, and whether the data and governance underneath are ready for it."
        },
        {
          "type": "p",
          "text": "If you want a scored read on that, it's called the **CLG Agentic Readiness Index**. A facilitated session across all seven pillars of your post-sale engine that tells you where you stand today and what you're ready to build, delivered as an executive readout presented live. You keep the findings whether or not we do anything after."
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
            "Your team is stuck in individual AI experimentation and ready for shared systems",
            "You're willing to fix the data and governance foundations, not just chase tools"
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
          "text": "P.S. If this helped, forward it to one customer success leader who's been asked to cover more accounts with the same team this year."
        }
      ]
    }
  ]
};

export default report;
