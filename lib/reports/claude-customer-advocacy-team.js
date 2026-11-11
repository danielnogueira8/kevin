/**
 * The Claude Customer Advocacy Team: six agents that take one customer story
 * from a call to a matched deal, with every claim checked before review.
 * Lead magnet for the 11 Nov 2026 post (keyword PROOF), modelled on the
 * "Grok Bot LinkedIn Team" format. The Notion resource holds the same copy.
 */
const report = {
  "slug": "claude-customer-advocacy-team",
  "landingSlug": "claude-customer-advocacy-team",
  "notionUrl": "https://app.notion.com/p/41593aa14ae48101824cdf2e4ac74061",
  "kind": "Free setup guide",
  "title": "The Claude Customer Advocacy Team",
  "cardDescription": "Six Claude agents that find the customer wins worth telling, write the case study, make the visuals, check every claim, ask for reviews and match references to open deals. Skill files, schedules and proof rules included.",
  "headline": [
    "Six agents, one job each,",
    "==every story checked=="
  ],
  "description": "A setup guide for a customer advocacy team built in Claude: a story scout, a case study writer, a designer, a proof checker, a review collector and a reference matcher, all working from one proof library. Every Skill file, first prompt, schedule and proof rule is included.",
  "lead": "Running advocacy by hand means weeks chasing one case study, another week on one approved quote, and reference requests from sales on a Friday afternoon. This guide hands the first draft of all of it to Claude, and keeps every customer-facing word behind a proof check and your approval.",
  "meta": [
    "Free setup guide",
    "6 agents",
    "1 proof library",
    "Nothing ships without your yes"
  ],
  "proof": [
    {
      "label": "Agents",
      "value": "6",
      "detail": "One job each, one proof library"
    },
    {
      "label": "Sources",
      "value": "4",
      "detail": "Calls, tickets, reviews, CRM"
    },
    {
      "label": "First version",
      "value": "12 min",
      "detail": "Scout plus writer"
    }
  ],
  "cover": {
    "src": "/assets/claude_customer_advocacy_team.gif",
    "alt": "The Claude Customer Advocacy Team: six agents around Claude taking one customer story from win to matched deal",
    "width": 1080,
    "height": 1350
  },
  "updated": "2026-11-11",
  "sections": [
    {
      "id": "read-this-first",
      "nav": "Read this first",
      "eyebrow": "Read this first",
      "heading": "Proof is a system, ==not a scramble==",
      "blocks": [
        {
          "type": "p",
          "text": "Hey, I'm Kevin Lau. I've spent 15+ years in post-sale at Marketo, Adobe, F5 and Freshworks. Along the way that meant driving $50M+ in pipeline through customer advocacy and proof, and increasing win rates by 40% by operationalizing customer proof and evidence."
        },
        {
          "type": "p",
          "text": "Running advocacy by hand usually looks like six weeks chasing one customer for a case study, another week getting a single quote approved, reference requests from sales landing on a Friday afternoon, and no clue which happy customers are actually ready to be asked."
        },
        {
          "type": "p",
          "text": "None of that is the hard part of advocacy. The hard part is the relationship. The rest is first drafts, formatting, checking and matching, and that's the work this guide hands to Claude."
        },
        {
          "type": "p",
          "text": "So the guide sets up six agents in Claude. Each one has one job. They pass one customer story down the line: the scout finds the win, the writer drafts it in the customer's words, the designer makes the visuals, the proof checker checks every claim, the review collector asks at the right moment, and the reference matcher puts the story in front of the deal it can move. Nothing reaches a customer unless the proof checker and you both sign off."
        },
        {
          "type": "quote",
          "text": "Programs fade. Proof compounds."
        },
        {
          "type": "p",
          "text": "By the end of this guide you'll have the six agents with their Skill files and first prompts, a proof library they all share, a weekly schedule, and the proof rules that keep every claim honest."
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
            "**The 12-minute version**: the scout and the writer, if you want to see it work today",
            "**Before you start**: access, the folder, and the five files every agent reads",
            "**One story, six hands**: how a win moves from a call to a matched deal",
            "**The six agents at a glance**: what each one hands you and what needs your yes",
            "**The weekly rhythm**: which agent runs when",
            "**The six agents**: Skill file, first prompt and schedule for each",
            "**Proof rules**: what to paste in before any draft gets near a customer",
            "**Week one**: what to check, and what usually goes wrong"
          ]
        },
        {
          "type": "callout",
          "tone": "light",
          "emoji": "✍️",
          "title": "A note on the writing.",
          "body": [
            "Sections 2, 3 and 7 hold setup steps, so they're written in plain, short sentences with one action each. It reads flat on purpose, because a setup step that can be read two ways is a step somebody gets wrong."
          ]
        }
      ]
    },
    {
      "id": "the-12-minute-version",
      "nav": "The 12-minute version",
      "eyebrow": "The 12-minute version",
      "heading": "See it work ==today==",
      "blocks": [
        {
          "type": "p",
          "text": "You don't need all six agents to see this work. Start with the scout and the writer."
        },
        {
          "type": "list",
          "ordered": true,
          "items": [
            "Export your accounts from your CRM as a CSV. Keep these columns: account, industry, segment, ARR, renewal date, champion, champion title.",
            "Pick three recent customer call transcripts where the customer talked about a result. Export them as text files.",
            "Open Claude and create a Project called **Advocacy Team**.",
            "Upload the CSV and the three transcripts to the Project.",
            "Paste the scout Skill from Section 7 into the Project instructions, then run its first prompt.",
            "Pick the strongest win it found. Paste the writer Skill and run its first prompt on that call.",
            "Read the draft. Check every number in it against the transcript."
          ]
        },
        {
          "type": "p",
          "text": "If the scout finds a win you'd forgotten about, and the draft sounds like the customer instead of a press release, the team is worth building out. Then come back and do the full setup."
        }
      ]
    },
    {
      "id": "before-you-start",
      "nav": "Before you start",
      "eyebrow": "Before you start",
      "heading": "Access, the folder, ==five files==",
      "blocks": [
        {
          "type": "h4",
          "text": "Access"
        },
        {
          "type": "list",
          "arrow": true,
          "items": [
            "A paid Claude plan with Skills and scheduled tasks. The team runs as a set of Skills inside one Claude workspace.",
            "Read access to your CRM, your call recorder, your help desk and your review profiles. Use Claude's connector where one exists. Where it doesn't, drop a weekly export into the inputs folder.",
            "Notion, or any shared board, for the review queue. Connect it so the agents can create a card per draft.",
            "Your brand kit: fonts, colors, logo files and one or two quote cards you already like.",
            "A yes from legal on how customer names, logos and quotes can be used, and what written permission looks like. Agree this before anything runs."
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
          "text": "Advocacy Team/\n├── 00 Inputs/\n│   ├── calls/              call transcripts, one file per call\n│   ├── exports/            weekly CSVs for any source without a connector\n│   ├── accounts.csv        one row per account\n│   ├── proof-library.csv   every approved story, quote and number\n│   ├── voice.md            how your customers and your team actually talk\n│   ├── brand.md            fonts, colors, logo rules, layouts\n│   └── rules.md            the proof rules from Section 8\n├── 01 Wins/                ARIA, the story scout\n├── 02 Stories/             THEO, the case study writer\n├── 03 Visuals/             MILO, the designer\n├── 04 Checked/             VERA, the proof checker\n├── 05 Reviews/             JADE, the review collector\n├── 06 Matches/             REID, the reference matcher\n└── 09 Review/              every draft waiting for your yes"
        },
        {
          "type": "h4",
          "text": "The five files every agent reads"
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
              "Account, industry, segment, region, ARR, renewal date, CSM, champion, champion title, champion email, exec sponsor, onboarding stage, last time they were asked for anything."
            ],
            [
              "`proof-library.csv`",
              "One row per approved asset: account, asset type, the quote or number, source and date, who approved it, permission on file (yes or no), expiry date, deals it's been used in."
            ],
            [
              "`voice.md`",
              "Three real customer quotes you love, three real emails your team sent that customers liked, and the words you never use."
            ],
            [
              "`brand.md`",
              "Fonts, hex colors, logo rules, and the layouts you use for quote cards, one-pagers and slides."
            ],
            [
              "`rules.md`",
              "The proof rules from Section 8, pasted word for word."
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "warn",
          "emoji": "⚠️",
          "title": "The proof library is the team.",
          "body": [
            "An agent with no context is a very confident stranger. If proof-library.csv is empty or out of date, the matcher has nothing to match and the checker has nothing to check against. Spend your first hour here, not on the prompts."
          ]
        }
      ]
    },
    {
      "id": "one-story-six-hands",
      "nav": "One story, six hands",
      "eyebrow": "One story, six hands",
      "heading": "From a call to ==a matched deal==",
      "blocks": [
        {
          "type": "list",
          "ordered": true,
          "items": [
            "**The win.** ARIA reads this week's calls, tickets, reviews and community threads, and flags the customer results worth telling. Each one gets a PROP score. Only wins at 70 or above move on.",
            "**The story.** THEO turns the call into a case study draft, a short version and three pull quotes, in the customer's own words.",
            "**The visuals.** MILO makes the quote cards, the one-pager and the slide in your brand.",
            "**The check.** VERA checks every number, quote and claim against the source, and checks that written permission is on file. Anything that fails goes back with the reason.",
            "**The review.** JADE asks happy customers for a public review right after a milestone, never right after a ticket.",
            "**The match.** REID reads your open deals and puts the right approved story in front of the deal it can move.",
            "**You.** You approve, edit or reject. Nothing reaches a customer, a prospect or a public page until you do."
          ]
        },
        {
          "type": "quote",
          "text": "One agent doing one task is a demo. Many agents coordinating is a system."
        },
        {
          "type": "p",
          "text": "The handoffs are the part that takes longest to get right. Each agent writes to its own folder, and the next one only picks up what the one before it marked as done. That's what stops three agents drafting three versions of the same story."
        }
      ]
    },
    {
      "id": "agents-at-a-glance",
      "nav": "The six agents at a glance",
      "eyebrow": "The six agents at a glance",
      "heading": "Six jobs, ==one queue==",
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
              "**ARIA**, the story scout",
              "Finds the wins worth telling",
              "A ranked list of wins with the source, the result and a PROP score",
              "Nothing. It's read-only"
            ],
            [
              "**THEO**, the case study writer",
              "Turns a call into a case study",
              "A full draft, a short version and three pull quotes",
              "Every draft"
            ],
            [
              "**MILO**, the designer",
              "Makes the proof visuals",
              "Quote cards, a one-pager and a slide in your brand",
              "Every visual"
            ],
            [
              "**VERA**, the proof checker",
              "Checks every claim",
              "A pass or fail per claim, with the source line",
              "Nothing. It's the gate"
            ],
            [
              "**JADE**, the review collector",
              "Asks for public reviews",
              "A review ask timed to a milestone",
              "Every ask"
            ],
            [
              "**REID**, the reference matcher",
              "Matches stories to deals",
              "The deal, the best-fit story and the reason",
              "Every reference request"
            ]
          ]
        },
        {
          "type": "p",
          "text": "VERA sits between every drafting agent and you. A draft that hasn't passed VERA never reaches 09 Review."
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
              "Monday, 8:00",
              "ARIA",
              "Last week's wins, ranked by PROP score"
            ],
            [
              "Monday, 14:00",
              "REID",
              "Open deals that need a reference this week, each with a matched story"
            ],
            [
              "Tuesday, 8:00",
              "THEO, then VERA",
              "Case study drafts for the wins you approved on Monday"
            ],
            [
              "Wednesday, 8:00",
              "MILO, then VERA",
              "Visuals for every story that passed the check"
            ],
            [
              "Thursday, 8:00",
              "JADE",
              "Review asks for customers who hit a milestone this week"
            ],
            [
              "Friday, 14:00",
              "VERA",
              "A sweep of the proof library: expired permissions and numbers older than 12 months"
            ]
          ]
        }
      ]
    },
    {
      "id": "the-six-agents",
      "nav": "The six agents",
      "eyebrow": "The six agents",
      "heading": "Skill file, first prompt, ==schedule==",
      "blocks": [
        {
          "type": "p",
          "text": "Save each one as its own Skill. Run the first prompt by hand once, read the output, fix your inputs, then turn on the schedule."
        },
        {
          "type": "card",
          "id": "agent-aria",
          "num": "01",
          "title": "ARIA, the story scout",
          "summary": "Reads calls, tickets, reviews and community threads, and flags the wins worth telling",
          "blocks": [
            {
              "type": "p",
              "text": "Most customer wins never become proof because nobody heard them. They're in a call recording, a ticket thank-you or a community reply. ARIA reads all of it every week and scores each win with the PROP model, so you only spend time on the ones that are ready."
            },
            {
              "type": "code",
              "label": "SKILL.md: aria-scout",
              "text": "---\nname: aria-scout\ndescription: Reads this week's customer calls, tickets, reviews and community threads, finds customer results worth turning into proof, and scores each one with PROP.\n---\n\nYou are read-only. You never write to a customer.\n\nBefore you start, read accounts.csv, proof-library.csv and rules.md.\n\nA win counts only if the customer stated a result in their own words. Examples:\n- a number that moved (time saved, cost cut, revenue added, seats grown)\n- a goal they said they reached\n- a before and after they described\n\nFor each win:\n1. Quote the exact line and give the source: file, call or ticket, date, and timestamp if there is one.\n2. Name the speaker and their title from accounts.csv.\n3. Score PROP out of 100:\n   - P, Product usage (40%): depth and consistency of use over 90 days.\n   - R, Relationship strength (25%): champion engagement, exec sponsor, response times.\n   - O, Outcomes achieved (25%): how clear and measurable the result is.\n   - P, Persona fit (10%): how closely the speaker matches the buyers you sell to.\n4. Check proof-library.csv. If this account already has a live story, say so.\n5. Check when this customer was last asked for anything. If it was in the last 60 days, say so.\n\nRank by PROP score. Pass only wins at 70 or above to 01 Wins/ready. List the rest under \"watch\" with the reason.\n\nWrite one file to 01 Wins/wins-YYYY-MM-DD.md and one card to 09 Review titled \"Wins: [date]\".\n\nNever round a number up. Never turn a feeling into a result."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "Run aria-scout on the last 7 days of calls, tickets and reviews.\n\nShow me the ranked list, and the three wins you almost passed but didn't, with the reason."
            },
            {
              "type": "p",
              "text": "**Schedule:** Monday at 8:00."
            }
          ]
        },
        {
          "type": "card",
          "id": "agent-theo",
          "num": "02",
          "title": "THEO, the case study writer",
          "summary": "Turns a customer call into a case study draft in the customer's own words",
          "blocks": [
            {
              "type": "p",
              "text": "A case study that sounds like your marketing team is a case study nobody believes. THEO builds the draft out of what the customer actually said on the call, and keeps your words to the connecting lines."
            },
            {
              "type": "code",
              "label": "SKILL.md: theo-writer",
              "text": "---\nname: theo-writer\ndescription: Turns an approved win and its call transcript into a case study draft, a short version and three pull quotes, in the customer's own words.\n---\n\nOnly work on wins in 01 Wins/ready that the user approved.\n\nRead the full transcript, accounts.csv, voice.md and rules.md first.\n\nWrite four things:\n1. A case study, 500 to 800 words, in this order: who they are, what wasn't working, why they chose to change, what they did, what changed (with the numbers), what's next.\n2. A short version, under 120 words, for a sales email or a slide.\n3. Three pull quotes, each copied word for word from the transcript, each under 30 words.\n4. A source list: every number and quote, with the file and timestamp it came from.\n\nRules:\n- At least half the case study is the customer's own words.\n- Never put words in the customer's mouth. If you tidy a quote, mark it [edited] and keep the original in the source list.\n- No adjectives the customer didn't use. No \"seamless\", \"game-changing\" or \"revolutionary\".\n- If a section has no evidence, write \"not on file\" and leave it.\n\nSave to 02 Stories/[account]/ and hand it to VERA. Never send."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "Write the case study for the top win in 01 Wins/ready. Before you write it, list every number and quote you plan to use and where each one is in the transcript."
            },
            {
              "type": "p",
              "text": "**Schedule:** Tuesday at 8:00, for wins approved on Monday."
            }
          ]
        },
        {
          "type": "card",
          "id": "agent-milo",
          "num": "03",
          "title": "MILO, the designer",
          "summary": "Makes the quote cards, one-pagers and slides for every story, in your brand",
          "blocks": [
            {
              "type": "p",
              "text": "A story that only lives in a document doesn't get used. Sales reaches for a slide, social needs a quote card, and the customer's own team wants a one-pager they can forward. MILO makes all three from the approved story."
            },
            {
              "type": "code",
              "label": "SKILL.md: milo-designer",
              "text": "---\nname: milo-designer\ndescription: Turns a story that passed the proof check into quote cards, a one-pager and a slide, in the brand defined in brand.md.\n---\n\nOnly work on stories in 04 Checked marked PASS.\n\nRead brand.md and the approved story first.\n\nMake:\n1. Three quote cards, 1080 x 1350, one per pull quote. Customer name, title and company logo only if permission is on file.\n2. A one-page summary: the problem, what they did, the result, one quote.\n3. One slide for a sales deck: the result as the headline, one quote, the logo.\n\nRules:\n- Use only the fonts and hex colors in brand.md.\n- Use quotes and numbers exactly as approved. Never shorten a quote without marking it.\n- No stock photos of people who aren't the customer.\n- If permission for the logo or name isn't on file, make an anonymous version and say so.\n\nSave to 03 Visuals/[account]/ and hand everything back to VERA for a final check."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "Make the quote cards, one-pager and slide for the newest story in 04 Checked. Show me the anonymous version too."
            },
            {
              "type": "p",
              "text": "**Schedule:** Wednesday at 8:00."
            }
          ]
        },
        {
          "type": "card",
          "id": "agent-vera",
          "num": "04",
          "title": "VERA, the proof checker",
          "summary": "Checks every draft for facts, numbers and customer sign-off before it reaches you",
          "blocks": [
            {
              "type": "p",
              "text": "One wrong number in a case study does more damage than ten case studies do good. VERA is the gate between every drafting agent and you. She doesn't make anything. She checks."
            },
            {
              "type": "code",
              "label": "SKILL.md: vera-checker",
              "text": "---\nname: vera-checker\ndescription: Checks every story, visual, review ask and reference match against its sources and the proof rules before it reaches the review queue.\n---\n\nYou never edit a draft. You pass it or fail it, with reasons.\n\nFor every draft handed to you:\n1. List every number, quote and claim in it.\n2. Find each one in the source: transcript, CRM, usage data or proof-library.csv. Quote the source line next to it.\n3. Mark each one PASS, FAIL or NOT FOUND.\n4. Check that written permission is on file for the customer's name, title, logo and quotes. Check the expiry date.\n5. Check the draft against every rule in rules.md.\n\nThe draft passes only if every claim is PASS, permission is on file, and no rule is broken.\n\nIf it passes, move it to 04 Checked marked PASS and add a card to 09 Review.\nIf it fails, send it back to the agent that wrote it, with the list of failures. Do not add it to 09 Review.\n\nOn Fridays, sweep proof-library.csv. Flag every asset with permission expiring in the next 30 days and every number older than 12 months."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "Check the newest draft in 02 Stories. Show me your claim table before your verdict."
            },
            {
              "type": "p",
              "text": "**Schedule:** after every THEO, MILO, JADE and REID run, plus a Friday sweep at 14:00."
            }
          ]
        },
        {
          "type": "card",
          "id": "agent-jade",
          "num": "05",
          "title": "JADE, the review collector",
          "summary": "Asks happy customers for a review right after a milestone, never right after a ticket",
          "blocks": [
            {
              "type": "p",
              "text": "When you ask matters more than how you ask. A review request the week after a painful ticket gets ignored or worse. JADE only asks customers who just reached something they'll be proud of, and never the same person twice in 90 days."
            },
            {
              "type": "code",
              "label": "SKILL.md: jade-reviews",
              "text": "---\nname: jade-reviews\ndescription: Drafts a review request for customers who reached a milestone this week, on the review site that matters most to your buyers.\n---\n\nAsk only if all of these are true:\n- The account reached a milestone this week: first value, a renewal, a goal they named, or a result ARIA found.\n- No ticket was opened by this contact in the last 14 days.\n- No ticket is open and urgent on the account.\n- This contact hasn't been asked for anything in the last 90 days.\n\nFor each customer who qualifies:\n1. Name the milestone in one line, in their terms.\n2. Ask for a review in one line, with the direct link.\n3. Thank them in one line. Nothing else.\n\nUnder 80 words. Written in voice.md. One ask per email. No gift cards or incentives unless the review site's rules allow them and rules.md says so.\n\nSave drafts to 05 Reviews and hand them to VERA. Never send."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "List every customer who hit a milestone in the last 14 days. Mark who qualifies for a review ask and who doesn't, with the reason. Then draft the asks."
            },
            {
              "type": "p",
              "text": "**Schedule:** Thursday at 8:00."
            }
          ]
        },
        {
          "type": "card",
          "id": "agent-reid",
          "num": "06",
          "title": "REID, the reference matcher",
          "summary": "Goes through your open deals and flags which advocate would move each one",
          "blocks": [
            {
              "type": "p",
              "text": "The best reference is the customer who looks most like the buyer. Same industry, same size, same problem. REID reads your pipeline and matches each deal to the approved story that fits it best, so sales stops asking for \"any reference\" on a Friday."
            },
            {
              "type": "code",
              "label": "SKILL.md: reid-matcher",
              "text": "---\nname: reid-matcher\ndescription: Matches open deals to the best-fit approved story or reference customer, and writes the handoff for the deal owner.\n---\n\nYou never contact a customer or a prospect. You write handoffs for the deal owner.\n\nFor each open deal past the discovery stage:\n1. Read the deal: industry, size, region, the problem they named, the stage, the competitor if known.\n2. Search proof-library.csv for approved assets with permission on file. Rank by: same industry, similar size, same problem, same competitor.\n3. Pick the best asset. Say why in one line.\n4. If a live reference call would help more than an asset, name the customer and check:\n   - their PROP score is 70 or above\n   - they haven't been asked for anything in the last 60 days\n   - they haven't done more than two reference calls this quarter\n5. If nothing fits, say so. Don't force a weak match.\n\nSave to 06 Matches/[deal].md and hand to VERA.\n\nNever promise a reference call. The user asks the customer, not you."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "Show me every open deal in the proposal stage or later. Match each one to an asset or a reference, and list the deals with no good match."
            },
            {
              "type": "p",
              "text": "**Schedule:** Monday at 14:00."
            }
          ]
        }
      ]
    },
    {
      "id": "proof-rules",
      "nav": "Proof rules",
      "eyebrow": "Proof rules",
      "heading": "Nothing ships ==without your yes==",
      "blocks": [
        {
          "type": "p",
          "text": "Paste this into 00 Inputs/rules.md and into the instructions of the Claude Project. Every Skill above tells the agent to read it first."
        },
        {
          "type": "code",
          "label": "rules.md",
          "text": "Proof rules for the customer advocacy team\n\n1. No agent sends anything to a customer, a prospect or a public page. Agents write drafts. A person sends.\n2. Every number, quote and claim has a source and a date. If there's no source, it doesn't go in.\n3. Never round a number up. Never turn a feeling into a result.\n4. Quotes are copied word for word. A tidied quote is marked [edited] and the original is kept.\n5. No customer name, title, logo or quote is used without written permission on file and in date.\n6. One customer gets at most one ask per 60 days from the whole team: a case study, a review or a reference call. Never more than two reference calls a quarter.\n7. No ask goes to a contact with a ticket opened in the last 14 days.\n8. No gifts or incentives for reviews unless the review site allows them.\n9. Every draft passes VERA before it reaches 09 Review.\n10. If an agent is unsure whether a rule applies, it stops and asks."
        },
        {
          "type": "callout",
          "tone": "light",
          "emoji": "🔒",
          "title": "Rule 6 is the one that matters most.",
          "body": [
            "It is easier to build a leaderboard than to earn a relationship. The fastest way to burn an advocate is to ask them for a case study, a review and two reference calls in the same month. The team works for the relationship, not the other way around."
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
          "text": "Run the team by hand for the first week. Turn on the schedules in week two."
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
              "Are ARIA's wins real results?",
              "It flags compliments as wins",
              "Tighten the definition of a win in the Skill: a number, a goal reached, or a before and after"
            ],
            [
              "Does ARIA pick the right customers?",
              "It picks the biggest accounts, not the happiest",
              "Check the outcome evidence behind each PROP score"
            ],
            [
              "Do THEO's drafts sound like the customer?",
              "They read like a press release",
              "Add three more real customer quotes to voice.md"
            ],
            [
              "Are MILO's visuals on brand?",
              "Wrong fonts, or a logo used without permission",
              "Fill in brand.md and the permission column in proof-library.csv"
            ],
            [
              "Does VERA fail anything?",
              "Everything passes on day one",
              "Hand it a draft with a wrong number on purpose and see if it catches it"
            ],
            [
              "Are REID's matches useful?",
              "It matches on industry and ignores the problem",
              "Add the problem the buyer named to every deal in the CRM"
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
          "text": "Six agents in your Claude account is the blueprint. The judgment is the hard part: what your org should build first, in what order, and whether the data and governance underneath are ready for it."
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
          "text": "P.S. If this helped, forward it to one customer marketer who's been asked for \"a reference by Friday\" one too many times."
        }
      ]
    }
  ]
};

export default report;
