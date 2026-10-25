/**
 * The Grok Bot Demand Gen Engine, converted from the Notion resource
 * (https://app.notion.com/p/40493aa14ae481769087c91c641b6672).
 * The body text is Kevin's Notion copy; headings, cards and the closing section are page furniture.
 */
const report = {
  "slug": "grok-demand-gen-engine",
  "landingSlug": "grok-demand-gen-engine",
  "notionUrl": "https://app.notion.com/p/40493aa14ae481769087c91c641b6672",
  "kind": "Free setup guide",
  "title": "The Grok Bot Demand Gen Engine",
  "cardDescription": "Six Grok bots that run overnight on Sunday and leave 15 emails, 9 LinkedIn ads and 3 landing pages in one folder by Monday morning. Descriptions, prompts, skills, routines and approval rules included.",
  "headline": [
    "Six bots, one folder,",
    "==a week of campaigns by Monday=="
  ],
  "description": "A setup guide for a demand gen team of six Grok bots: Scout, Planner, Copywriter, Proof Finder, Editor and Analyst. Each comes with the description to paste, the first prompt, the skill to save and the routine to schedule, plus the shared folder, the four input files, the group chat and the approval rules that keep anything from reaching a buyer without your yes.",
  "lead": "Most demand gen teams aren't short on ideas. They're short on hours. This guide hands the first draft of every campaign to six bots that run overnight, check every claim against your own facts, and wait for your yes before anything reaches a buyer.",
  "meta": [
    "Free setup guide",
    "6 bots",
    "1 shared folder",
    "Runs Sunday night"
  ],
  "proof": [
    {
      "label": "Bots",
      "value": "6",
      "detail": "One job each, one group chat"
    },
    {
      "label": "Overnight output",
      "value": "15 · 9 · 3",
      "detail": "Emails, LinkedIn ads and landing pages"
    },
    {
      "label": "Setup",
      "value": "10 min",
      "detail": "To see the first version work"
    }
  ],
  "cover": {
    "src": "/assets/grok_demand_gen_engine.gif",
    "alt": "My Grok Bot Demand Gen Engine: six bots that write a week of campaigns overnight",
    "width": 1080,
    "height": 1350
  },
  "updated": "2026-10-25",
  "sections": [
    {
      "id": "read-this-first",
      "nav": "Read this first",
      "eyebrow": "Read this first",
      "heading": "Short on hours, ==not ideas==",
      "blocks": [
        {
          "type": "p",
          "text": "Hey, I'm Kevin Lau. I've spent 15+ years building revenue engines on the customer side of B2B, at companies like Marketo and Adobe. Along the way that meant $50M+ in pipeline through customer advocacy, a 40% lift in win rates from putting customer proof in front of buyers, and post-sale turned into a $100M+ ARR expansion engine."
        },
        {
          "type": "p",
          "text": "Most demand gen teams I talk to aren't short on ideas. They're short on hours. One campaign means finding the accounts, writing a brief, drafting the emails and ads, building a landing page, hunting down a customer quote that legal will approve, checking every claim, and then trying to work out what actually turned into pipeline. That's a week or two of work before anything goes live."
        },
        {
          "type": "p",
          "text": "Grok Bot keeps working after you close the laptop, so you can hand the first draft of all of that to a team of bots that runs overnight and leaves everything in one folder by morning."
        },
        {
          "type": "p",
          "text": "In a normal week that's 3 campaigns, each with 5 emails, 3 LinkedIn ads and a landing page, so 15 emails, 9 ads and 3 landing pages waiting for review on Monday morning."
        },
        {
          "type": "p",
          "text": "By the end of this guide you'll have six bots, each with a description, a first prompt, a saved skill and a schedule, plus the templates they read from and the rules that stop anything reaching a buyer without your yes."
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
          "items": [
            "**The 10-minute version**: six bots and one message, if you want to see it work today",
            "**What you need before you start**: access, the shared folder, and the four files every bot reads",
            "**How Grok Bot works, in five parts**: bots, the shared computer, skills, routines and approvals",
            "**The six bots at a glance**: what each one hands you and what it needs your yes for",
            "**The overnight schedule**: Sunday night in, a week of campaigns out on Monday morning",
            "**The six bots**: description, first prompt, skill and routine for each",
            "**The group chat**: run the whole engine with one message",
            "**Approval rules**: what to paste in before any draft gets near a buyer",
            "**Week one**: what to check, and what usually goes wrong"
          ],
          "ordered": true
        },
        {
          "type": "callout",
          "tone": "light",
          "emoji": "✍️",
          "title": "A note on the writing.",
          "body": [
            "Sections 1, 2, 6 and 9 hold setup steps, so they're written in plain, short sentences with one action each. It reads flat on purpose, because a setup step that can be read two ways is a step somebody gets wrong."
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
          "text": "This gets all six bots talking to each other on a test campaign. Do the full setup in sections 2 to 8 before anything runs on a schedule."
        },
        {
          "type": "list",
          "items": [
            "Open the Grok Bot desktop app.",
            "Create six bots. Name them **Scout**, **Planner**, **Copywriter**, **Proof Finder**, **Editor** and **Analyst**.",
            "For each bot, paste the description from section 6 into the bot's profile and save it.",
            "Start a group chat called `Demand Gen` and add all six bots. A group chat holds up to six bots, so this fits exactly.",
            "Attach your company facts, one customer call transcript and a list of 10 target accounts.",
            "Send this message:"
          ],
          "ordered": true
        },
        {
          "type": "code",
          "label": "Test message",
          "text": "@Scout check these 10 accounts for a funding round, a new VP of Marketing or open jobs in the last 30 days. Keep the top 3.\n@Planner write one campaign brief for the best of the 3.\n@Copywriter draft the first email, one LinkedIn ad and the landing page hero for that brief.\n@Proof Finder find the strongest quote in the attached transcript and add it to each draft.\n@Editor check every claim against the company facts and cut the AI tells.\nPost everything here. Nothing gets sent or published."
        },
        {
          "type": "p",
          "text": "**Result:** One account, one brief and three checked drafts in about 10 minutes. You now know the bots can hand work to each other. The rest of this guide makes them do it every week without you in the chat."
        }
      ]
    },
    {
      "id": "before-you-start",
      "nav": "Before you start",
      "eyebrow": "What you need before you start",
      "heading": "Access, one folder, ==four files==",
      "blocks": [
        {
          "type": "p",
          "text": "Plans and features change. Check the [Grok Bot docs](https://docs.x.ai/grok-bot/overview) and the access page for your plan before you buy anything."
        },
        {
          "type": "h3",
          "text": "Confirm access"
        },
        {
          "type": "list",
          "items": [
            "Confirm that your plan includes Grok Bot. Check the access page for your Cursor or SuperGrok plan.",
            "Install the desktop app. Do all setup in this guide on the desktop app.",
            "Install the mobile app if you want to approve drafts away from your desk."
          ],
          "ordered": true
        },
        {
          "type": "p",
          "text": "Usage resets every week. Six bots that run once a week use far less of that allowance than six bots that run every night."
        },
        {
          "type": "h3",
          "text": "Make the shared folder"
        },
        {
          "type": "p",
          "text": "Every bot reads from and writes to one shared folder, so your team reviews everything in one place. Use a Google Drive folder your team can open. Connect Google Drive in **Connect apps**, or sign in to it on the bot computer."
        },
        {
          "type": "code",
          "label": "Folder structure",
          "text": "Demand Gen Engine/\n  00 Inputs/           company facts, ICP and signals, voice samples,\n                       signal exports, calls/, results/\n  01 Accounts/         the Scout's account briefs\n  02 Briefs/           the Planner's campaign briefs\n  03 Drafts/           the Copywriter's drafts, with proof added by the Proof Finder\n  04 Proof library/    every approved quote and result, with its source\n  05 Ready for review/ drafts the Editor passed. Your team starts here every morning.\n  06 Reports/          the Analyst's Friday report and notes for the Planner\n  _rules/              approval rules, run log",
          "pre": true
        },
        {
          "type": "p",
          "text": "Each bot writes only to its own folder. That one rule prevents most of the mess."
        },
        {
          "type": "h3",
          "text": "Fill in the four files every bot reads"
        },
        {
          "type": "p",
          "text": "Save each one in `00 Inputs`. Spend the most time on the first one. Every claim the bots make gets checked against it."
        },
        {
          "type": "h4",
          "text": "File 1: Company facts"
        },
        {
          "type": "code",
          "label": "Company facts",
          "text": "COMPANY FACTS\nThe only source the bots may use for claims about us.\n\nWhat we sell, in one sentence:\nWho it's for (role, company size, the situation that makes them a fit):\nWho it's not for:\nThe problems we solve, in the words buyers use on calls:\nPricing model, as shown publicly:\nCustomers we're allowed to name:\nResults we're allowed to quote, each with its source and date:\nOur top three competitors, and where each one is the better fit:\nOffers we can make (demo, audit, trial, workshop, content):\nWords we never use:\nWho signs our emails and ads:"
        },
        {
          "type": "h4",
          "text": "File 2: ICP and signals"
        },
        {
          "type": "code",
          "label": "ICP and signals",
          "text": "ICP AND SIGNALS\n\nCompany size (employees):\nIndustries:\nRegions:\nTech we work well with:\nTitles we sell to (buyer, champion, user):\n\nSignals that make an account worth a campaign, ranked:\n1. Raised a round in the last 60 days (stage: )\n2. Hired a new VP or Head of Marketing in the last 90 days\n3. Open jobs for roles our product helps: [list titles, e.g. SDR, demand gen manager, marketing ops]\n4. [Add your own: a launch, a new market, a competitor switch]\n\nDisqualifiers (skip the account if any is true):\n- Current customer or open opportunity in the CRM\n- Fewer than [ ] employees\n- [Add your own]"
        },
        {
          "type": "h4",
          "text": "File 3: Voice samples"
        },
        {
          "type": "p",
          "text": "Paste three emails, three LinkedIn posts and one landing page your team is proud of. Add one line on each: why it worked."
        },
        {
          "type": "h4",
          "text": "File 4: Exports, refreshed every week"
        },
        {
          "type": "list",
          "items": [
            "`signal exports/`: the latest export from whatever signal tool you already use, such as Sales Navigator saved-search alerts, Crunchbase or your intent tool",
            "`crm/`: open opportunities and current customers, so the Scout can skip them",
            "`calls/`: transcripts from the last 30 days of customer calls, from Gong, Zoom, Fathom or whatever you record with",
            "`results/`: last week's numbers per campaign: emails sent, replies, meetings booked, opportunities created, pipeline value, plus the LinkedIn Campaign Manager export for ad spend and clicks"
          ]
        },
        {
          "type": "callout",
          "tone": "warn",
          "emoji": "⚠️",
          "title": "Customer quotes need permission.",
          "body": [
            "Put a file called `approved-for-public-use.txt` in `calls/` listing the customers who agreed to be quoted publicly. The Proof Finder only uses quotes from that list in anything external. Everything else is marked internal only."
          ]
        }
      ]
    },
    {
      "id": "how-grok-bot-works",
      "nav": "How Grok Bot works",
      "eyebrow": "How Grok Bot works, in five parts",
      "heading": "Bots, skills, routines ==and brakes==",
      "blocks": [
        {
          "type": "list",
          "items": [
            "**A bot is a teammate with one job.** It has a name and a description. The description holds the rules that stay true every week. A message holds today's task. Put \"never use a quote from a customer who isn't on the approved list\" in a message and it's gone by next Monday. Put it in the description and it holds.",
            "**The computer is shared.** Bots use connected apps where they exist and a browser for everything else. All of your bots run on the same cloud computer and share its files, browser sessions and logins. xAI's docs say not to treat separate bots as a security boundary, so only sign in to what this team needs.",
            "**A skill is a saved process.** Once a bot has done a job well with you, ask it to save the process as a skill. In the desktop composer, type `/` to call a skill and `@` to mention a bot, a group or a routine. For browser work, you can also show the bot a task once with **Teach a task** (up to 10 minutes) and review the skill it drafts.",
            "**A routine is the calendar.** You ask the bot to create one in plain language, like \"every Sunday at 10:00 PM.\" Routines keep running while your laptop is closed. To manage them, click the bot's name at the top of the chat and open the **Details** tab, where you can pause, resume, test, edit or delete each one. A test run does real work, so test on copies of your data.",
            "**Approval rules are the brakes.** You write them in plain language, and the bot stops and asks you before anything on the list happens. Section 8 has the rules to paste."
          ],
          "arrow": true
        },
        {
          "type": "p",
          "text": "An agent with no context is a very confident stranger. Most of the work in this guide is the context: the four files, the descriptions and the rules."
        }
      ]
    },
    {
      "id": "bots-at-a-glance",
      "nav": "The six bots at a glance",
      "eyebrow": "The six bots at a glance",
      "heading": "What each one ==hands you==",
      "blocks": [
        {
          "type": "table",
          "head": [
            "Bot",
            "Its job",
            "What it hands you",
            "Reads from",
            "Needs your yes before"
          ],
          "rows": [
            [
              "**Scout**",
              "Find accounts worth a campaign this week",
              "A ranked list and a one-page brief per account, each signal with its date and source link",
              "ICP and signals, signal exports, CRM export, company websites",
              "Nothing. It only reads and drafts."
            ],
            [
              "**Planner**",
              "Turn accounts into campaigns",
              "Three one-page campaign briefs: angle, offer, channels, and the number each should move",
              "Account briefs, company facts, last Friday's planner notes",
              "Nothing. It only drafts."
            ],
            [
              "**Copywriter**",
              "Write the assets",
              "Per campaign: a 5-email sequence, 3 LinkedIn ads with 3 headlines each, and a landing page",
              "Campaign briefs, voice samples, company facts",
              "Nothing leaves the folder."
            ],
            [
              "**Proof Finder**",
              "Put customer proof in every asset",
              "A proof library with sources, and the best quote or result added to each draft",
              "Call transcripts, approved-for-public-use list, company facts",
              "Using any quote from a customer not on the approved list"
            ],
            [
              "**Editor**",
              "Make every draft safe to ship",
              "A pass or fail on every claim, AI tells cut, passed drafts moved to Ready for review",
              "Drafts, company facts, voice samples",
              "Nothing. It blocks, it doesn't send."
            ],
            [
              "**Analyst**",
              "Show what turned into pipeline",
              "A one-page Friday report and a notes file the Planner reads on Sunday",
              "Results exports, the campaign briefs",
              "Nothing. It only reads and reports."
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "accent",
          "emoji": "🖨️",
          "title": "This table is the part I'd print.",
          "body": [
            "I write about how demand gen and post-sale feed each other, and why your customers are your best campaign asset, every Thursday in The Customer Continuum. [Subscribe free → kevinkennethlau.substack.com](https://kevinkennethlau.substack.com)"
          ]
        }
      ]
    },
    {
      "id": "the-overnight-schedule",
      "nav": "The overnight schedule",
      "eyebrow": "The overnight schedule",
      "heading": "Sunday night in, ==Monday morning out==",
      "blocks": [
        {
          "type": "p",
          "text": "The engine runs once a week, overnight on Sunday, so you open 3 finished campaigns on Monday morning: 15 emails, 9 LinkedIn ads and 3 landing pages. Each bot runs after the one before it has had time to finish."
        },
        {
          "type": "table",
          "head": [
            "When (your time zone)",
            "Bot",
            "What happens"
          ],
          "rows": [
            [
              "Sunday 10:00 PM",
              "Scout",
              "Finds this week's accounts and writes a brief on each"
            ],
            [
              "Sunday 11:00 PM",
              "Planner",
              "Picks the best accounts and writes three campaign briefs"
            ],
            [
              "Monday 12:30 AM",
              "Copywriter",
              "Drafts every asset for each brief"
            ],
            [
              "Monday 2:00 AM",
              "Proof Finder",
              "Adds the strongest approved proof to each draft"
            ],
            [
              "Monday 3:30 AM",
              "Editor",
              "Checks every claim, cuts the AI tells, moves passed drafts to Ready for review"
            ],
            [
              "Monday 8:00 AM",
              "You",
              "Review `05 Ready for review`, approve, edit or send back"
            ],
            [
              "Friday 6:00 AM",
              "Analyst",
              "Reports what turned into meetings and pipeline, and writes the planner notes for Sunday"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Every bot checks its input folder first. If there's nothing new, it posts \"nothing to do\" and stops. That keeps a slow Sunday from turning into a pile of empty drafts."
        }
      ]
    },
    {
      "id": "the-six-bots",
      "nav": "The six bots",
      "eyebrow": "The six bots",
      "heading": "Five parts each, ==six times over==",
      "blocks": [
        {
          "type": "p",
          "text": "Each bot has five parts: the name, the description you paste, the first prompt you send, the skill you save, and the routine you schedule. The numbers in the descriptions are my starting points. Change them to match your sales cycle before you paste."
        },
        {
          "type": "p",
          "text": "**Caution:** A test run does real work. A bot can open websites, change files and use connected apps during a test. Use copies of your data for every first prompt in this section."
        },
        {
          "type": "p",
          "text": "**The procedure is the same for every bot.**"
        },
        {
          "type": "list",
          "items": [
            "Create a new bot.",
            "Open the bot profile.",
            "Enter the name from the bot below.",
            "Paste the description from the bot below.",
            "Save the profile.",
            "Send the first prompt from the bot below.",
            "Read the output. Correct anything wrong in the same conversation.",
            "Send this message: `Save the process we just used as a skill called [skill name].`",
            "Send the routine text from the bot below as a message.",
            "Click the bot's name at the top of the chat. Open the **Details** tab.",
            "Confirm the routine's schedule and time zone. Click **Test** once."
          ],
          "ordered": true
        },
        {
          "type": "p",
          "text": "**Result:** The bot has a profile, one saved skill and one routine."
        },
        {
          "type": "card",
          "id": "bot-scout",
          "num": "01",
          "title": "Scout",
          "summary": "Finds accounts that just raised, hired a new VP of Marketing or posted jobs your product helps with",
          "blocks": [
            {
              "type": "p",
              "text": "**Its job:** finds accounts that just raised, hired a new VP of Marketing or posted jobs your product helps with"
            },
            {
              "type": "p",
              "text": "Timing is the cheapest edge in demand gen. A new VP of Marketing has 90 days to show a plan, a company that just raised has budget it has to spend, and a company hiring three SDRs is telling you its pipeline target out loud. This bot finds those moments while they're still fresh."
            },
            {
              "type": "code",
              "label": "Description",
              "text": "You find accounts with a fresh buying signal and write a one-page brief on each.\n\nSignals, in order of weight:\n1. Raised a funding round in the last 60 days.\n2. Hired a new VP or Head of Marketing in the last 90 days.\n3. Posted open jobs for the roles listed in ICP and signals.\n\nWhere to look:\n- The latest file in 00 Inputs/signal exports.\n- Each account's own website: the newsroom or press page, the careers page, and the leadership or team page.\n- Public news about the account.\n\nRules that always apply:\n- Use only accounts that match ICP and signals. Skip every account on a disqualifier.\n- Skip every account in the CRM export that is a current customer or has an open opportunity.\n- Every signal needs a date and a source link. No date or no link means no signal.\n- Never guess a funding amount, a start date or a job count. If the source does not say it, write \"not stated\".\n- Do not log in to LinkedIn or scrape it. Use the signal exports for LinkedIn data.\n- Score each account: 3 points for a funding round, 3 for a new marketing leader, 1 for each relevant open job (max 3). Rank by score, then by how recent the newest signal is.\n- Write one brief per account in 01 Accounts: company, size, industry, every signal with date and link, who to target and why, and one sentence on why now.\n- Write only to 01 Accounts."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "Here are ICP and signals, the latest signal export and the CRM export.\n\nCheck every account in the signal export against your description.\n\nReturn one table: account, score, signals with dates, source links, and the reason it qualifies.\n\nWrite a brief for the top 10 accounts in 01 Accounts.\n\nList every account you skipped and the rule that skipped it."
            },
            {
              "type": "p",
              "text": "**Skill to save:** `Weekly Account Sweep`"
            },
            {
              "type": "p",
              "text": "**Routine:** \"Every Sunday at 10:00 PM in my time zone, run the Weekly Account Sweep on the newest file in 00 Inputs/signal exports. Write briefs for the top 10 new accounts only. If there is no new export, post 'nothing to do' and stop.\""
            }
          ]
        },
        {
          "type": "card",
          "id": "bot-planner",
          "num": "02",
          "title": "Planner",
          "summary": "Turns those accounts into a one-page campaign brief with the angle, the offer and the channels",
          "blocks": [
            {
              "type": "p",
              "text": "**Its job:** turns those accounts into a one-page campaign brief with the angle, the offer and the channels"
            },
            {
              "type": "p",
              "text": "Most campaigns fail in the brief, not in the copy. If the brief doesn't say who it's for, why now and what one number it should move, every asset after it is guessing. This bot groups accounts that share a moment and writes one brief per group."
            },
            {
              "type": "code",
              "label": "Description",
              "text": "You turn account briefs into campaign briefs.\n\nRules that always apply:\n- Read every new brief in 01 Accounts, plus the latest planner notes in 06 Reports.\n- Group accounts that share a signal and a problem. One group becomes one campaign.\n- Write 3 campaign briefs per week. If fewer than 3 groups are strong enough, write fewer and say why. Never write more than 3.\n- Apply every fix in the planner notes. Say which fix you applied.\n- Use only offers listed in company facts.\n- Write each brief to 02 Briefs, on one page, with exactly these parts:\n  1. Campaign name\n  2. Who it's for: the accounts and the titles\n  3. Why now: the shared signal\n  4. The angle: one sentence, in the buyer's words, from company facts or call transcripts\n  5. The offer: one offer, and why it fits this moment\n  6. Channels: email, LinkedIn ads, landing page, and anything else with a reason\n  7. Proof needed: the kind of customer result that would make this believable\n  8. The number it should move: meetings booked, and the target for 30 days\n- Write only to 02 Briefs."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "Here are this week's account briefs, company facts and the last planner notes.\n\nGroup the accounts and write 3 campaign briefs, following your description.\n\nAbove the briefs, give a table: campaign, accounts, signal, angle, offer, target meetings.\n\nTell me which accounts you left out and why."
            },
            {
              "type": "p",
              "text": "**Skill to save:** `Weekly Campaign Briefs`"
            },
            {
              "type": "p",
              "text": "**Routine:** \"Every Sunday at 11:00 PM in my time zone, run Weekly Campaign Briefs on the account briefs written since last week. Apply the latest planner notes. If there are no new account briefs, post 'nothing to do' and stop.\""
            },
            {
              "type": "code",
              "label": "The brief template, filled in",
              "text": "Campaign name: First 90 Days\nWho it's for: 4 Series B fintechs, 150 to 400 people. VP of Marketing, Head of Demand Gen.\nWhy now: each hired a new marketing leader in the last 90 days.\nThe angle: \"You have 90 days to show the board a pipeline plan.\"\nThe offer: a 30-minute pipeline teardown of their current funnel.\nChannels: 5-email sequence to the new leader, LinkedIn ads to the marketing team, one landing page.\nProof needed: a customer who added pipeline in their first quarter with us.\nThe number it should move: 6 meetings in 30 days."
            }
          ]
        },
        {
          "type": "card",
          "id": "bot-copywriter",
          "num": "03",
          "title": "Copywriter",
          "summary": "Writes the emails, LinkedIn ads and landing page in your brand's voice",
          "blocks": [
            {
              "type": "p",
              "text": "**Its job:** writes the emails, LinkedIn ads and landing page in your brand's voice"
            },
            {
              "type": "p",
              "text": "The voice samples do more work here than the prompt. Give it three emails you're proud of and it writes like your team. Give it nothing and it writes like every other AI email in your buyer's inbox."
            },
            {
              "type": "code",
              "label": "Description",
              "text": "You write campaign assets from campaign briefs, in our brand's voice.\n\nFor each new brief in 02 Briefs, write one file in 03 Drafts with:\n1. A 5-email sequence to the main title:\n   - Email 1: the \"why now\" signal and one question. Under 90 words.\n   - Email 2: the problem in the buyer's words and the offer. Under 110 words.\n   - Email 3: room for one customer result. Write [PROOF] where it goes. Under 110 words.\n   - Email 4: one objection from company facts, answered. Under 100 words.\n   - Email 5: a short close that makes saying no easy. Under 60 words.\n   - Two subject lines per email, under 6 words each.\n2. Three LinkedIn ads, one angle each. For every ad: intro text under 150 characters, 3 headlines under 70 characters, and the call to action.\n3. One landing page: hero headline, subhead, three sections, one [PROOF] block, the offer, one call to action, and a 3-question FAQ.\n\nRules that always apply:\n- Match the voice samples in 00 Inputs. Short sentences. Contractions. No jargon.\n- Use only claims, numbers and customer names from company facts.\n- Write [PROOF] wherever a customer result belongs. Never invent a quote or a result.\n- Never use the words listed under \"Words we never use\".\n- Write only to 03 Drafts."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "Here is one campaign brief, company facts and our voice samples.\n\nWrite the full set of assets from your description.\n\nBefore the drafts, list the three lines from the voice samples you matched most closely, and why."
            },
            {
              "type": "p",
              "text": "**Skill to save:** `Campaign Draft Set`"
            },
            {
              "type": "p",
              "text": "**Routine:** \"Every Monday at 12:30 AM in my time zone, run the Campaign Draft Set on every brief written in 02 Briefs since last week. If there are no new briefs, post 'nothing to do' and stop.\""
            }
          ]
        },
        {
          "type": "card",
          "id": "bot-proof-finder",
          "num": "04",
          "title": "Proof Finder",
          "summary": "Pulls the best customer quotes and results from your call recordings and adds them to every asset",
          "blocks": [
            {
              "type": "p",
              "text": "**Its job:** pulls the best customer quotes and results from your call recordings and adds them to every asset"
            },
            {
              "type": "p",
              "text": "This is the bot I'd build first if I could only build one. When I put customer proof in front of buyers at scale, win rates went up 40%. Most teams have that proof sitting in call recordings nobody has time to rewatch. This bot rewatches them, in text, every week."
            },
            {
              "type": "code",
              "label": "Description",
              "text": "You find customer proof in call transcripts and add it to every draft.\n\nStep 1. Build the proof library.\n- Read every new transcript in 00 Inputs/calls.\n- Pull every line where a customer describes a result, a before and after, or why they chose us.\n- Save each one in 04 Proof library with: the customer, their title, the exact quote, the transcript file name, the timestamp, the date, and the topic.\n- Tag each quote PUBLIC if the customer is on approved-for-public-use.txt. Tag everything else INTERNAL.\n- Results from company facts also go in the library, with their source.\n\nStep 2. Add proof to drafts.\n- For every new draft in 03 Drafts, replace each [PROOF] with the best PUBLIC quote or result for that campaign's angle.\n- Prefer a customer that looks like the campaign's accounts: same industry, size or situation.\n- Do not use the same quote twice in one campaign.\n- Under each proof, add a comment with the source file and timestamp, so the Editor can check it.\n\nRules that always apply:\n- Quote customers word for word. Only cut words at the start or end of a quote.\n- Never use an INTERNAL quote in a draft. If no PUBLIC proof fits, leave [PROOF] and write \"no approved proof for this angle\" next to it.\n- Never change a number in a result.\n- Write only to 04 Proof library and to [PROOF] spots in 03 Drafts."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "Here are 5 customer call transcripts, the approved-for-public-use list, company facts and one draft set.\n\nBuild the proof library from the transcripts, following your description.\n\nThen fill every [PROOF] in the draft set.\n\nReturn a table: [PROOF] spot, quote used, customer, source and timestamp. List any spot you left empty and why."
            },
            {
              "type": "p",
              "text": "**Skill to save:** `Proof Pass`"
            },
            {
              "type": "p",
              "text": "**Routine:** \"Every Monday at 2:00 AM in my time zone, run the Proof Pass on new transcripts and on every draft in 03 Drafts that still has a [PROOF] spot. If there is nothing new, post 'nothing to do' and stop.\""
            }
          ]
        },
        {
          "type": "callout",
          "tone": "accent",
          "emoji": "📬",
          "title": "Your best campaign asset already paid you.",
          "body": [
            "The customers on your approved list are the reason this bot works. If that list is short, that's a customer marketing problem before it's a demand gen one, and it's the one I spend most of my time on. More on that every Thursday in [The Customer Continuum](https://kevinkennethlau.substack.com)."
          ]
        },
        {
          "type": "card",
          "id": "bot-editor",
          "num": "05",
          "title": "Editor",
          "summary": "Checks every claim against your company facts and cuts the AI tells before your team sees a draft",
          "blocks": [
            {
              "type": "p",
              "text": "**Its job:** checks every claim against your company facts and cuts the AI tells before your team sees a draft"
            },
            {
              "type": "p",
              "text": "Your team shouldn't be the first line of defense against an invented stat. This bot reads every draft like a skeptical buyer and a careful lawyer at the same time, and it only moves a draft forward when every claim has a source."
            },
            {
              "type": "code",
              "label": "Description",
              "text": "You check every draft before my team sees it.\n\nStep 1. Check every claim.\n- List every number, result, customer name, product capability and comparison in the draft.\n- Mark each one PASS if company facts or the proof library supports it, with the source.\n- Mark each one FAIL if nothing supports it. Rewrite the line without the claim, or flag it [CONFIRM].\n- Check every quote word for word against its source transcript.\n\nStep 2. Cut the AI tells.\n- Remove every em dash. Use a comma or a period.\n- Remove these words and phrases: delve, unlock, leverage, game-changer, seamless, robust, elevate, supercharge, in today's fast-paced world, it's not just X it's Y, here's the thing, let's dive in.\n- Remove every sentence that only restates the one before it.\n- Keep the voice of the voice samples. Do not make it more formal.\n\nStep 3. Move the draft.\n- If every claim passes, move the file to 05 Ready for review.\n- If any claim is still [CONFIRM], move the file to 05 Ready for review with \"NEEDS A CHECK\" at the top and the list of claims to confirm.\n- Add a short note at the top of every file: claims checked, claims passed, lines changed.\n\nRules that always apply:\n- Never add a new claim.\n- Never send, post or publish anything.\n- Write only to 05 Ready for review and the run log."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "Here is one draft set with proof added, company facts and the proof library.\n\nRun all three steps from your description.\n\nReturn the claim table first: claim, PASS or FAIL, source. Then the edited draft."
            },
            {
              "type": "p",
              "text": "**Skill to save:** `Fact and Tell Check`"
            },
            {
              "type": "p",
              "text": "**Routine:** \"Every Monday at 3:30 AM in my time zone, run the Fact and Tell Check on every draft in 03 Drafts that the Proof Finder finished since last week. Post a one-line summary per campaign when done.\""
            }
          ]
        },
        {
          "type": "card",
          "id": "bot-analyst",
          "num": "06",
          "title": "Analyst",
          "summary": "Shows which campaigns turned into meetings and pipeline every Friday, and sends the planner what to fix",
          "blocks": [
            {
              "type": "p",
              "text": "**Its job:** shows which campaigns turned into meetings and pipeline every Friday, and sends the planner what to fix"
            },
            {
              "type": "p",
              "text": "Lead counts flatter the cheapest channel. I'd rather know which campaign turned into a meeting and which meeting turned into pipeline, because that's the only number the CFO is going to ask about. This bot closes the loop so next Sunday's plan is built on last week's results, not last week's opinions."
            },
            {
              "type": "code",
              "label": "Description",
              "text": "You report what turned into meetings and pipeline, and you tell the Planner what to change.\n\nEvery Friday:\n1. Read the newest files in 00 Inputs/results and every campaign brief from the last 4 weeks.\n2. For each campaign, show: emails sent, reply rate, meetings booked, opportunities created, pipeline value, LinkedIn ad spend, cost per meeting, and the target from its brief.\n3. Rank campaigns by pipeline value, not by replies or clicks.\n4. For each campaign, mark it KEEP, FIX or STOP, with one reason from the numbers.\n5. Write the one-page report to 06 Reports.\n6. Write a separate file called planner-notes.txt in 06 Reports with up to 3 fixes for Sunday's Planner. Each fix names the campaign, the change and the number behind it.\n\nRules that always apply:\n- Use only the numbers in the exports. Put the source file next to every number.\n- If a campaign has fewer than 20 emails sent or fewer than 1,000 ad impressions, mark it \"too early to call\". Do not mark it STOP.\n- Compare to the brief's target, not to other teams' benchmarks.\n- Never change a brief yourself. Only write planner notes.\n- Write only to 06 Reports."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "Here are last week's results exports and the campaign briefs from the last 4 weeks.\n\nBuild the Friday report and the planner notes from your description.\n\nAt the top of the report, write three sentences I could say in Monday's pipeline meeting, using only these numbers."
            },
            {
              "type": "p",
              "text": "**Skill to save:** `Friday Pipeline Report`"
            },
            {
              "type": "p",
              "text": "**Routine:** \"Every Friday at 6:00 AM in my time zone, run the Friday Pipeline Report on the newest results exports. Post the three sentences in the chat and save the full report and planner notes in 06 Reports.\""
            }
          ]
        },
        {
          "type": "callout",
          "tone": "accent",
          "emoji": "📅",
          "title": "Six bots is the build. Knowing which campaigns your customers can carry is the harder part.",
          "body": [
            "I work with a small number of B2B companies on the system behind that, starting with a scored read on where their customer engine stands. [Book a fit call → calendly.com/kevinklau](https://calendly.com/kevinklau)"
          ]
        }
      ]
    },
    {
      "id": "the-group-chat",
      "nav": "The group chat",
      "eyebrow": "The group chat",
      "heading": "Run the engine with ==one message==",
      "blocks": [
        {
          "type": "p",
          "text": "Once the routines run, you'll still want to steer the week by hand sometimes, like a launch, a big event or a quarter-end push. Put all six bots in one group chat so you can run the whole engine with one message."
        },
        {
          "type": "h3",
          "text": "Create the group chat"
        },
        {
          "type": "list",
          "items": [
            "Start a new group chat.",
            "Name the group chat `Demand Gen`.",
            "Add Scout, Planner, Copywriter, Proof Finder, Editor and Analyst.",
            "Send one message that mentions one bot with `@`. Ask a question inside that bot's job.",
            "Confirm that only the mentioned bot answers."
          ],
          "ordered": true
        },
        {
          "type": "h3",
          "text": "Run the week in one message"
        },
        {
          "type": "code",
          "label": "Group chat message",
          "text": "@Analyst post this week's three sentences and the planner notes.\n@Scout run the Weekly Account Sweep on the new export. Skip every account we ran a campaign for in the last 30 days.\n@Planner write 3 briefs from the new accounts. Apply the planner notes first.\n@Copywriter draft the full asset set for each brief.\n@Proof Finder fill every [PROOF] with approved proof only.\n@Editor run the Fact and Tell Check and move the passed drafts to 05 Ready for review.\nPost your results here when you finish. Nothing gets sent or published."
        },
        {
          "type": "p",
          "text": "The Scout line matters most. A campaign the same account saw last month reads as spam this month, and the bots only know that if you tell them."
        }
      ]
    },
    {
      "id": "approval-rules",
      "nav": "Approval rules",
      "eyebrow": "Approval rules",
      "heading": "Nothing reaches a buyer ==without your yes==",
      "blocks": [
        {
          "type": "p",
          "text": "xAI recommends requiring approval for sending, buying, deleting, publishing and changes to production systems. For a demand gen team, make it stricter. Write these rules in plain language in the desktop app's approval settings. The rules are stored per computer, so set them on every desktop you use."
        },
        {
          "type": "p",
          "text": "Paste these before any routine goes live:"
        },
        {
          "type": "code",
          "label": "Approval rules",
          "text": "Ask me before any email, message, ad or post reaches a person outside the company.\nAsk me before anything is published to our website, a landing page tool or an ad platform.\nAsk me before any campaign, budget or audience is created or changed in an ad platform.\nAsk me before any record is created, changed or deleted in the CRM.\nNever send an email from anyone's inbox.\nNever use a customer quote that is not on approved-for-public-use.txt in anything external.\nNever delete a file, a record or an email.\nNever buy anything, start a trial or accept terms of service.\nNever enter a password, a 2FA code or payment details. Hand me control of the computer instead."
        },
        {
          "type": "p",
          "text": "Then connect every app read-only for the first month. All six bots share every connection, so write access you add for one bot is write access all six have."
        },
        {
          "type": "p",
          "text": "**First, build trust. Then, add agents.** A wrong number in a cold email to a new VP of Marketing is the first impression they'll keep."
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
          "text": "Run these checks at the end of the first week."
        },
        {
          "type": "list",
          "items": [
            "Open each bot.",
            "Click the bot's name at the top of the chat. Open the **Details** tab.",
            "Read the run history. Confirm that every routine finished.",
            "Open `05 Ready for review`. Read one full campaign from start to finish.",
            "Confirm that every claim in the Editor's note has a source.",
            "Confirm that every quote in the drafts is on the approved list.",
            "Count the drafts you shipped with light edits. Compare that count with the drafts the bots produced."
          ],
          "ordered": true
        },
        {
          "type": "h3",
          "text": "What usually goes wrong"
        },
        {
          "type": "table",
          "head": [
            "What you see",
            "What it means",
            "The fix"
          ],
          "rows": [
            [
              "The Scout returns accounts that are already customers",
              "The CRM export is old",
              "Refresh the export every Friday. Add it to the Analyst's routine as a reminder."
            ],
            [
              "Every brief uses the same angle",
              "The angle comes from too few calls",
              "Add more transcripts to `calls/`, and paste three buyer phrases into company facts."
            ],
            [
              "The drafts sound like AI",
              "The voice samples are thin or generic",
              "Replace them with your three best-performing emails and say why each one worked."
            ],
            [
              "Lots of [PROOF] spots stay empty",
              "The approved list is short",
              "Ask five happy customers to approve a quote this month. That's a customer marketing job, and it's worth doing first."
            ],
            [
              "The Editor marks a true claim as FAIL",
              "The fact isn't in company facts",
              "Add it, with its source. Never tell the Editor to skip the check."
            ],
            [
              "The Analyst marks everything \"too early to call\"",
              "Campaigns are too small to judge in a week",
              "Judge on a rolling 4-week window, or send each campaign to more accounts."
            ],
            [
              "A routine starts before the last one finished",
              "The gaps are too short",
              "Add 30 minutes between routines, or have each bot post \"done\" in the group chat and start the next one from it."
            ]
          ]
        },
        {
          "type": "p",
          "text": "If your team ships less than half of what a bot produces, pause its routine and run it by hand until you know what you want from it."
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
          "text": "Outside of what I publish, I work with a small number of B2B companies on the engine behind their growth: retention, expansion, advocacy, and the systems that turn happy customers into pipeline."
        },
        {
          "type": "p",
          "text": "The work starts with a scored read on where your customer engine stands, and what you're ready to build next. It's delivered as an executive readout, presented live. You keep the findings either way."
        },
        {
          "type": "p",
          "text": "It tends to fit when:"
        },
        {
          "type": "list",
          "items": [
            "You're a CMO, CCO or senior revenue leader with budget and decision authority",
            "Your customers already drive part of your pipeline, and you want them to drive more of it",
            "Your team is ready to build systems that compound, not chase one-off tactics"
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
          "text": "Or get the next build free in The Customer Continuum → [kevinkennethlau.substack.com](https://kevinkennethlau.substack.com)"
        },
        {
          "type": "p",
          "text": "P.S. If this helped, forward it to one demand gen lead who's been asked for more pipeline with the same team this quarter."
        }
      ]
    }
  ]
};

export default report;
