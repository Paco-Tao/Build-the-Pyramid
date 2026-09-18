import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
const homepage = {
  "approvedAssets": [],
  "blocks": [
    {
      "classification": "action step",
      "semanticRole": "guide action",
      "text": "Carry blocks from the quarry to the pyramid."
    },
    {
      "classification": "requirement",
      "semanticRole": "guide starting state",
      "text": "You start out carrying just a single block."
    },
    {
      "classification": "action step",
      "semanticRole": "guide action",
      "text": "Benches build strength for carrying; treadmills build walk speed."
    },
    {
      "classification": "action step",
      "semanticRole": "guide action",
      "text": "Buy coin multipliers to boost gym training."
    },
    {
      "classification": "action step",
      "semanticRole": "guide action",
      "text": "Deliver early: every player fills the same counter."
    },
    {
      "classification": "action step",
      "semanticRole": "guide action",
      "text": "Check the gym ladder: 2x unlocks after 1 pyramid."
    },
    {
      "classification": "completion check",
      "semanticRole": "guide success state",
      "text": "You are finished when the pyramid is complete when the counter reaches its target."
    },
    {
      "classification": "action step",
      "semanticRole": "guide action",
      "text": "Know the first-pyramid scale: 171,700 blocks."
    }
  ],
  "navigation": [
    {
      "href": "/guide",
      "label": "Guide",
      "summary": "You are finished when your server completes the pyramid."
    },
    {
      "href": "/pharaoh",
      "label": "Pharaoh",
      "summary": "You are finished when you can justify your buy-or-skip choice."
    }
  ],
  "sources": [
    "Official Roblox game page. Last checked 2026-09-18.",
    "Verified video observation. Last checked 2026-09-18."
  ],
  "summary": "You are finished when only indexed page explaining the actual loop with the verified first-pyramid scale (171,700 blocks) plus the exact 2x-250x gym requirement ladder.",
  "task": "When a player arrives (often from the Roblox store page or the viral September 2026 gameplay video), understand what Build the Pyramid! is and how to start progressing: learn the quarry-to-pyramid delivery loop, what training does, and what to unlock next",
  "title": "Understand what Build the Pyramid! is and start playing: the loop, the gym requirement ladder, and where to go deeper",
  "visual": {
    "facts": [
      {
        "label": "Start out carrying just single block",
        "role": "guide starting state"
      },
      {
        "label": "Carry blocks from quarry to pyramid",
        "role": "guide action"
      },
      {
        "label": "Benches build strength for carrying; treadmills build walk speed",
        "role": "guide action"
      },
      {
        "label": "Coin purchases add instant blocks to pyramid",
        "role": "guide action"
      },
      {
        "label": "Boost gym training",
        "role": "guide action"
      },
      {
        "label": "Deliver early: every player fills same counter",
        "role": "guide action"
      },
      {
        "label": "Check gym ladder: 2x unlocks after 1 pyramid",
        "role": "guide action"
      },
      {
        "label": "Know first-pyramid scale: 171,700 blocks",
        "role": "guide action"
      },
      {
        "label": "Pyramid is complete when counter reaches its target",
        "role": "guide success state"
      }
    ],
    "fullDescription": "Editorial diagram. You start out carrying just a single block. Then Carry blocks from the quarry to the pyramid. Then Benches build strength for carrying; treadmills build walk speed. Then Coin purchases add instant blocks to the pyramid. Then Buy coin multipliers to boost gym training. Then Deliver early: every player fills the same counter. Then Check the gym ladder: 2x unlocks after 1 pyramid. Then Know the first-pyramid scale: 171,700 blocks. Then You are finished when the pyramid is complete when the counter reaches its target.",
    "informationGainDecision": "DISTINCT_SEQUENCE_SUMMARY",
    "label": "Editorial diagram",
    "strategy": "CLAIM_BOUND_RESPONSIVE_TIMELINE",
    "type": "EDITORIAL_DIAGRAM",
    "verifiedOperator": ""
  }
};

export const metadata: Metadata = { title: homepage.title, description: homepage.summary, alternates: { canonical: siteConfig.domain }, openGraph: { title: homepage.title, description: homepage.summary, url: siteConfig.domain } };

const FIRST_SCREEN = {
  valueProposition: "Build the Pyramid! help with the verified 171,700-block first-pyramid scale, the exact gym requirement ladder, and a sourced Pharaoh pass decision - checked September 2026.",
  coreAnswer: "Carry blocks from the quarry to the shared pyramid counter; train at benches to carry more and treadmills to walk faster; the whole server fills the first pyramid together.",
  successState: "You can explain and run the delivery loop and know your next progression goal (train stats, unlock the 2x gym after 1 pyramid).",
  officialGameUrl: "https://www.roblox.com/games/123720558354386/Build-the-Pyramid",
  contractSha256: "sha256:2305a9eb3cf315c90d0b7fdc6d744bd80ddc871ba8a1bec582893fc02268462f",
};

const playerNavigation: Array<{href: string; label: string; summary: string}> = homepage.navigation;
const approvedGameAssets: Array<{assetId: string; src: string; alt: string}> = homepage.approvedAssets;
export default function PublicHomepage() {
  const steps = homepage.blocks.filter((row) => row.classification === "action step");
  const starting = homepage.blocks.filter((row) => row.classification === "requirement");
  const completion = homepage.blocks.filter((row) => row.classification === "completion check");
  const supporting = homepage.blocks.filter((row) => [
  "supporting context"
].includes(row.semanticRole));
  const recovery = homepage.blocks.filter((row) => row.classification === "recovery guidance");
  const boundaries = homepage.blocks.filter((row) => row.classification === "version boundary");
  const nextSteps = homepage.blocks.filter((row) => row.classification === "next step");
  return <main data-home-engine-runtime="formal-v1" data-homepage-engine="FIRST_HOUR_ROUTE" className="mx-auto grid w-full max-w-6xl gap-7 px-4 py-8 sm:gap-8 sm:py-12">
    <section data-home-visual-role="identity-answer" data-home-mobile-order="1" data-hero-variant="v2" data-first-screen-answer data-homepage-contract-sha256={FIRST_SCREEN.contractSha256} className="overflow-hidden rounded-[2rem] border border-pink-300/20 bg-gradient-to-br from-fuchsia-500/20 via-slate-950 to-cyan-400/10 p-5 shadow-2xl shadow-black/25 sm:p-10">
      <div data-home-game-visual className="float-right ml-3 mb-2 sm:ml-6 sm:mb-4"><img src="/game-icon.png" alt="Official Build the Pyramid! store icon: an avatar kneels beside a sandstone block with a red arrow pointing to a glowing golden pyramid" width={160} height={160} className="float-right ml-3 mb-2 h-20 w-20 rounded-xl border border-white/15 sm:ml-6 sm:mb-4 sm:h-40 sm:w-40 sm:rounded-2xl" data-source-ref="source-roblox-001" data-source-url="https://thumbnails.roblox.com/v1/games/icons?universeIds=10765012427" data-source-page-url="https://www.roblox.com/games/123720558354386/Build-the-Pyramid" data-license-status="official-game-media" data-asset-sha256="14d65fd299723d9f7eb6218f8684d9eba6dc923b99a83b31fc3233c4ed407c23" /></div>
      <p data-home-game-identity className="text-xs font-extrabold uppercase tracking-[0.2em] text-pink-200 sm:text-sm">Build the Pyramid!</p>
      <h1 className="mt-2 max-w-3xl text-2xl font-black leading-tight text-white sm:mt-4 sm:max-w-4xl sm:text-6xl">{homepage.title}</h1>
      <p data-home-value-proposition className="mt-2 max-w-3xl text-sm leading-6 text-amber-100/90 sm:mt-4 sm:text-base sm:leading-7">{FIRST_SCREEN.valueProposition}</p>
      <p data-home-core-answer className="mt-2 max-w-3xl text-sm leading-6 text-white/82 sm:text-base sm:leading-7">{FIRST_SCREEN.coreAnswer}</p>
      <p data-home-player-task className="mt-2 max-w-3xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7">{homepage.task}</p>
      <p data-home-success-state className="mt-2 max-w-3xl text-sm leading-6 text-emerald-100/90 sm:text-base sm:leading-7"><strong className="text-emerald-200">Done when:</strong> {FIRST_SCREEN.successState}</p>
      <div className="mt-3 flex flex-wrap gap-2 sm:mt-5 sm:gap-3">
        <a data-home-primary-action href="#first-session-route" className="inline-flex min-h-10 items-center rounded-xl bg-amber-400 px-4 py-2 text-sm font-black text-slate-950 sm:min-h-11 sm:px-5 sm:py-3 sm:text-base">Start the first-session route</a>
        <a data-official-play-cta href={FIRST_SCREEN.officialGameUrl} rel="noopener noreferrer" target="_blank" className="inline-flex min-h-10 items-center rounded-xl bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950 sm:min-h-11 sm:px-5 sm:py-3 sm:text-base">Play on Roblox</a>
      </div>
    </section>

    <section data-home-visual-role="primary-engine" data-home-mobile-order="2" id="first-session-route" className="grid gap-7">
    {supporting.length ? <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-7"><h2 className="text-2xl font-black">Verified game context</h2><div className="mt-4 divide-y divide-white/10 rounded-2xl border border-white/10 bg-slate-950/45 px-4 sm:px-5">{supporting.map((row, index) => <p data-rendered-component={row.semanticRole === "tool formula" ? "verified-formula" : undefined} data-verified-formula-operator={row.semanticRole === "tool formula" ? homepage.visual.verifiedOperator : undefined} key={index} className="py-4 leading-7">{row.text}</p>)}</div></section> : null}
    {starting.length ? <section data-rendered-component="verified-start-state" className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"><h2 className="text-2xl font-black">Starting point</h2><div className="mt-4 grid gap-3">{starting.map((row, index) => <p key={index} className="rounded-xl bg-slate-950/60 p-4 leading-7">{row.text}</p>)}</div></section> : null}
    {steps.length ? <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"><h2 className="text-2xl font-black">First-session route</h2><ol className="mt-5 grid gap-4 sm:grid-cols-3">{steps.map((row, index) => <li data-rendered-component="ordered-action-steps" key={index} className="rounded-2xl border border-white/10 bg-slate-950/60 p-5"><span className="text-sm font-black text-pink-200">Step {index + 1}</span><p className="mt-2 leading-7">{row.text}</p></li>)}</ol></section> : null}
    {completion.length ? <section data-rendered-component="verified-success-state" className="rounded-3xl border border-emerald-300/25 bg-emerald-400/10 p-6"><h2 className="text-2xl font-black text-emerald-100">How to know it worked</h2><div className="mt-3 grid gap-3">{completion.map((row, index) => <p key={index} className="leading-7 text-white/80">{row.text}</p>)}</div></section> : null}
    <section data-rendered-component="homepage-contract" aria-labelledby="homepage-contract-heading" className="rounded-3xl border border-amber-300/25 bg-amber-300/[0.06] p-6 sm:p-7"><h2 id="homepage-contract-heading" className="text-2xl font-black text-amber-100">What this page answers</h2><p className="mt-3 leading-7 text-white/82">{homepage.task}</p><p className="mt-2 leading-7 text-white/70"><strong className="text-white">Done when:</strong> {FIRST_SCREEN.successState}</p></section>
    </section>

    <section data-home-visual-role="supporting-game-media" data-home-mobile-order="3" className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
      <h2 className="text-2xl font-black">Official game media</h2>
      <div className="mt-4 grid gap-5 sm:grid-cols-[auto_1fr] sm:items-start">
        <img src="/roblox-official-cover.png" alt="Official Build the Pyramid! store thumbnail: players climb a gold pyramid carrying stacks of blocks" width={420} height={420} className="h-44 w-44 rounded-2xl border border-white/15 object-cover" data-source-ref="source-roblox-001" data-source-url="https://thumbnails.roblox.com/v1/assets?assetIds=128108624428660" data-source-page-url="https://www.roblox.com/games/123720558354386/Build-the-Pyramid" data-license-status="official-game-media" data-asset-sha256="48b5892a521346d13cd0a45a19f55cba8556ef4d5e7b18120a4bb2cd1a11a861" />
        <p className="leading-7 text-white/75">{homepage.visual.fullDescription} Official promotional store media - not a gameplay UI screenshot. The editorial diagram above summarizes the verified sequence.</p>
      </div>
    </section>

    <section data-home-visual-role="supporting-details" data-home-mobile-order="4" className="grid gap-7">
    {playerNavigation.length ? <section data-home-route-summaries aria-labelledby="player-pages-heading" className="grid gap-4"><h2 id="player-pages-heading" className="text-2xl font-black">More {siteConfig.gameName} help</h2><nav aria-label="Player pages" className="grid gap-3 sm:grid-cols-2">{playerNavigation.map((link) => <a key={link.href} href={link.href} className="rounded-2xl border border-white/15 bg-white/[0.04] p-5 text-pink-100"><span className="font-black">{link.label}</span><span className="mt-2 block text-sm leading-6 text-white/65">{link.summary}</span></a>)}</nav></section> : null}
    {homepage.sources.length ? <section aria-label="Evidence checked" className="rounded-2xl border border-white/10 p-5"><h2 className="font-black">Evidence check</h2>{homepage.sources.map((note, index) => <p key={index} className="mt-2 text-sm leading-6 text-white/65">{note}</p>)}</section> : null}
    </section>
  </main>;
}
