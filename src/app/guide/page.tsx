import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
const authorityPage = {
  "assertions": [
    {
      "claim_id": "CLM-CLAIM-DCK-C-001",
      "rendered_component": "ordered-action-steps",
      "visible_text": "Carry blocks from the quarry to the pyramid."
    },
    {
      "claim_id": "CLM-CLAIM-DCK-C-002",
      "rendered_component": "verified-start-state",
      "visible_text": "You start out carrying just a single block."
    },
    {
      "claim_id": "CLM-CLAIM-DCK-C-003",
      "rendered_component": "ordered-action-steps",
      "visible_text": "Benches build strength for carrying; treadmills build walk speed."
    },
    {
      "claim_id": "CLM-CLAIM-DCK-C-005",
      "rendered_component": "approved-requirements",
      "visible_text": "The ADMIN gym is the 250x training tier."
    },
    {
      "claim_id": "CLM-CLAIM-DCK-C-008",
      "rendered_component": "ordered-action-steps",
      "visible_text": "Coin purchases add instant blocks to the pyramid."
    },
    {
      "claim_id": "CLM-CLAIM-DCK-C-009",
      "rendered_component": "location-cue",
      "visible_text": "Leaderboard tracks blocks placed, speed, strength, pyramids built."
    },
    {
      "claim_id": "CLM-CLAIM-DCK-C-012",
      "rendered_component": "location-cue",
      "visible_text": "Completed pyramids can be entered and contain themed rooms (pool party, treasury, throne figures)."
    },
    {
      "claim_id": "CLM-CLAIM-DCK-C-013",
      "rendered_component": "ordered-action-steps",
      "visible_text": "Late-game stats observed: speed 123, capacity 7,335."
    },
    {
      "claim_id": "CLM-CLAIM-DCK-C-014",
      "rendered_component": "location-cue",
      "visible_text": "Rank tags (APPRENTICE 0 pyramids, MASON) appear above player names."
    },
    {
      "claim_id": "CLM-CLAIM-DCK-C-015",
      "rendered_component": "ordered-action-steps",
      "visible_text": "Buy coin multipliers to boost gym training."
    },
    {
      "claim_id": "CLM-CLAIM-GUIDE-COMPLETION-CHECK-001",
      "rendered_component": "completion-check",
      "visible_text": "You know it worked when the server counter goes up after each delivery and a toast confirms each upgrade."
    },
    {
      "claim_id": "CLM-CLAIM-GUIDE-NEXT-001",
      "rendered_component": "next-step",
      "visible_text": "Next: check the gym ladder for your next unlock, decide on the Pharaoh pass, and revisit after updates."
    },
    {
      "claim_id": "CLM-CLAIM-GUIDE-RECOVERY-001",
      "rendered_component": "recovery-guidance",
      "visible_text": "If capacity is not growing you are training speed instead of strength - switch to the benches."
    },
    {
      "claim_id": "CLM-CLAIM-GUIDE-STEP-001",
      "rendered_component": "ordered-action-steps",
      "visible_text": "Gather blocks at the quarry and bring them to the build site."
    },
    {
      "claim_id": "CLM-CLAIM-GUIDE-STEP-002",
      "rendered_component": "ordered-action-steps",
      "visible_text": "Finish pyramids to access better gyms step by step."
    },
    {
      "claim_id": "CLM-CLAIM-GUIDE-STEP-003",
      "rendered_component": "ordered-action-steps",
      "visible_text": "Build up your muscles at the gym to carry heavier loads."
    },
    {
      "claim_id": "CLM-CLAIM-GUIDE-SUCCESS-001",
      "rendered_component": "verified-success-state",
      "visible_text": "You are finished when your server completes the pyramid."
    },
    {
      "claim_id": "CLM-CLAIM-GUIDE-VERSION-001",
      "rendered_component": "version-boundary",
      "visible_text": "All numbers were checked against the September 2026 version; prices and requirements can change after updates."
    }
  ],
  "contentBlocks": [
    {
      "classification": "action step",
      "publicText": "Carry blocks from the quarry to the pyramid."
    },
    {
      "classification": "requirement",
      "publicText": "You start out carrying just a single block."
    },
    {
      "classification": "action step",
      "publicText": "Benches build strength for carrying; treadmills build walk speed."
    },
    {
      "classification": "requirement",
      "publicText": "The ADMIN gym is the 250x training tier."
    },
    {
      "classification": "action step",
      "publicText": "Coin purchases add instant blocks to the pyramid."
    },
    {
      "classification": "player answer",
      "publicText": "Leaderboard tracks blocks placed, speed, strength, pyramids built."
    },
    {
      "classification": "player answer",
      "publicText": "Completed pyramids can be entered and contain themed rooms (pool party, treasury, throne figures)."
    },
    {
      "classification": "action step",
      "publicText": "Late-game stats observed: speed 123, capacity 7,335."
    },
    {
      "classification": "player answer",
      "publicText": "Rank tags (APPRENTICE 0 pyramids, MASON) appear above player names."
    },
    {
      "classification": "action step",
      "publicText": "Buy coin multipliers to boost gym training."
    },
    {
      "classification": "completion check",
      "publicText": "You know it worked when the server counter goes up after each delivery and a toast confirms each upgrade."
    },
    {
      "classification": "next step",
      "publicText": "Next: check the gym ladder for your next unlock, decide on the Pharaoh pass, and revisit after updates."
    },
    {
      "classification": "recovery guidance",
      "publicText": "If capacity is not growing you are training speed instead of strength - switch to the benches."
    },
    {
      "classification": "action step",
      "publicText": "Gather blocks at the quarry and bring them to the build site."
    },
    {
      "classification": "action step",
      "publicText": "Finish pyramids to access better gyms step by step."
    },
    {
      "classification": "action step",
      "publicText": "Build up your muscles at the gym to carry heavier loads."
    },
    {
      "classification": "completion check",
      "publicText": "You are finished when your server completes the pyramid."
    },
    {
      "classification": "version boundary",
      "publicText": "All numbers were checked against the September 2026 version; prices and requirements can change after updates."
    },
    {
      "classification": "source note",
      "publicText": "Official Roblox game page. Last checked 2026-09-18."
    },
    {
      "classification": "source note",
      "publicText": "Verified video observation. Last checked 2026-09-18."
    }
  ],
  "playerTask": "Progression guide: train and buy upgrades in a sensible order and check the dated codes status",
  "publicSummary": "You are finished when your server completes the pyramid.",
  "route": "/guide",
  "successState": "You are finished when your server completes the pyramid.",
  "title": "Progression guide: train and buy upgrades in a sensible order and check the dated codes status"
};
const approvedLinks: Array<{ href: string; label: string }> = [
  {
    "href": "/pharaoh",
    "label": "Pharaoh pass review"
  }
];
const approvedAssets: Array<{ assetId: string; src: string; alt: string }> = [];
const editorialVisuals: Array<{ assetId: string; src: string; alt: string; label: string }> = [];
const officialDestinations: Array<{ href: string; label: string }> = [];
const nextTaskSteps: string[] = [];
const currentStatusRows: Array<{ label: string; status: string; value: string; claimId: string; component: string }> = [];
export const metadata: Metadata = {
  title: "Progression guide: train and buy upgrades in a sensible order and check the dated codes status",
  description: "You are finished when your server completes the pyramid.",
  alternates: { canonical: `${siteConfig.domain}${authorityPage.route}` },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: `${siteConfig.domain.replace(/[/]+$/, "")}${authorityPage.route === "/" ? "/" : `${authorityPage.route}/`}`,
    siteName: siteConfig.name,
    title: "Progression guide: train and buy upgrades in a sensible order and check the dated codes status",
    description: "You are finished when your server completes the pyramid.",
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Progression guide: train and buy upgrades in a sensible order and check the dated codes status",
    description: "You are finished when your server completes the pyramid.",
    images: ["/opengraph-image"],
  },
};

export default function AuthorizedPage() {
  const startRows = authorityPage.assertions.filter((row) => row.rendered_component === "verified-start-state");
  const actionRows = authorityPage.assertions.filter((row) => row.rendered_component === "ordered-action-steps");
  const successRows = authorityPage.assertions.filter((row) => row.rendered_component === "verified-success-state");
  const versionRows = authorityPage.assertions.filter((row) => row.rendered_component === "version-boundary");
  const primaryOwnedClaimIds: string[] = [];
  const detailRows = authorityPage.assertions.filter((row) => !["verified-start-state", "ordered-action-steps", "verified-success-state", "version-boundary"].includes(row.rendered_component) && !primaryOwnedClaimIds.includes(row.claim_id));
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: authorityPage.title,
    description: authorityPage.successState,
    url: `${siteConfig.domain.replace(/[/]+$/, "")}${authorityPage.route === "/" ? "/" : `${authorityPage.route}/`}`,
  };
  const assertionArticle = (row: (typeof authorityPage.assertions)[number], index: number) => <article key={`${row.rendered_component}-${index}`} data-rendered-component={row.rendered_component} className="rounded-2xl border border-white/10 bg-slate-950/45 p-5"><p className="leading-7 text-white/82">{row.visible_text}</p></article>;
  return <main data-production-build-authority="v1" data-renderer-family="guide" className="mx-auto grid w-full max-w-5xl min-w-0 gap-7 px-4 py-8 sm:py-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <header className="min-w-0 rounded-3xl border border-pink-300/20 bg-gradient-to-br from-pink-500/15 via-slate-950/80 to-cyan-400/10 p-6 shadow-2xl shadow-black/20 sm:p-9">
      <div className="text-sm font-extrabold uppercase tracking-[0.18em] text-pink-200">Build the Pyramid! guide</div>
      <h1 className="mt-3 max-w-4xl text-3xl font-black leading-tight text-white sm:text-5xl">{authorityPage.title}</h1>
      <p data-approved-success-state className="mt-5 max-w-3xl text-lg leading-8 text-white/80">{authorityPage.successState}</p>
    </header>
    {currentStatusRows.length ? <section data-current-status-answer data-rendered-component="current-answer" aria-labelledby="current-answer-heading" className="min-w-0 max-w-full rounded-3xl border border-cyan-300/25 bg-cyan-400/[0.07] p-5 sm:p-7"><h2 id="current-answer-heading" className="text-2xl font-black text-cyan-100">Current answer</h2><div tabIndex={0} aria-label="Scrollable current status table" className="mt-5 max-w-full overflow-x-auto rounded-2xl border border-white/10 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"><table className="w-full min-w-[640px] text-left"><thead className="bg-slate-950/70"><tr><th className="p-4">Destination or check</th><th className="p-4">Status</th><th className="p-4">What was verified</th></tr></thead><tbody>{currentStatusRows.map((row) => <tr key={row.label} data-claim-id={row.claimId || undefined} data-rendered-component={row.component} className="border-t border-white/10"><th scope="row" className="p-4 text-white">{row.label}</th><td className="p-4 font-bold text-cyan-100">{row.status}</td><td className="p-4 leading-7 text-white/75">{row.value}</td></tr>)}</tbody></table></div></section> : null}
    {versionRows.length ? <aside data-event-status-notice data-rendered-component="version-boundary" aria-labelledby="event-status-heading" className="rounded-3xl border border-amber-300/25 bg-amber-300/[0.07] p-5 sm:p-7"><h2 id="event-status-heading" className="text-2xl font-black text-amber-100">Event status and availability</h2><div className="mt-4 grid gap-3">{versionRows.map(assertionArticle)}</div></aside> : null}
    {startRows.length ? <section aria-labelledby="start-state-heading" className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-7"><h2 id="start-state-heading" className="text-2xl font-black text-white">Starting point</h2><div className="mt-4 grid gap-3">{startRows.map(assertionArticle)}</div></section> : null}
    {actionRows.length ? <section aria-labelledby="action-steps-heading" className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-7"><h2 id="action-steps-heading" className="text-2xl font-black text-white">Steps</h2><ol className="mt-5 grid gap-4">{actionRows.map((row, index) => <li key={`${row.rendered_component}-${index}`} data-rendered-component={row.rendered_component} className="grid min-w-0 grid-cols-[2.5rem_1fr] items-start gap-4 rounded-2xl border border-white/10 bg-slate-950/45 p-5"><span aria-hidden="true" className="grid size-10 place-items-center rounded-full bg-pink-400 font-black text-slate-950">{index + 1}</span><p className="pt-1 leading-7 text-white/85">{row.visible_text}</p></li>)}</ol></section> : null}
    {successRows.length ? <section aria-labelledby="success-state-heading" className="rounded-3xl border border-emerald-300/25 bg-emerald-400/10 p-5 sm:p-7"><h2 id="success-state-heading" className="text-2xl font-black text-emerald-100">Success state</h2><div className="mt-4 grid gap-3">{successRows.map(assertionArticle)}</div></section> : null}
    {detailRows.length ? <section aria-labelledby="verified-information-heading" className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-7"><h2 id="verified-information-heading" className="text-2xl font-black text-white">What the checked sources show</h2><div className="mt-4 grid gap-3 sm:grid-cols-2">{detailRows.map(assertionArticle)}</div></section> : null}
    {editorialVisuals.map((visual) => <figure key={visual.assetId} className="rounded-3xl border border-cyan-300/20 bg-cyan-400/[0.06] p-5 sm:p-7"><figcaption className="font-black text-cyan-100">{visual.label}</figcaption><img className="mt-4 h-auto w-full rounded-2xl" data-asset-id={visual.assetId} src={visual.src} alt={visual.alt} /><p className="mt-4 text-sm leading-6 text-white/65">This editorial diagram summarizes the verified sequence; it is not a gameplay screenshot.</p></figure>)}
    {approvedAssets.length ? <section aria-label="Game visuals" className="grid gap-4 sm:grid-cols-2">{approvedAssets.map((asset) => <img className="h-auto max-w-full rounded-2xl" data-asset-id={asset.assetId} key={asset.assetId} src={asset.src} alt={asset.alt} />)}</section> : null}
    {officialDestinations.length ? <section aria-labelledby="verified-roblox-destinations-heading" className="rounded-3xl border border-cyan-300/20 bg-cyan-400/[0.06] p-5 sm:p-7"><h2 id="verified-roblox-destinations-heading" className="text-2xl font-black text-cyan-100">Verified Roblox destinations</h2><div className="mt-5 flex flex-wrap gap-3">{officialDestinations.map((link) => <a key={link.href} href={link.href} rel="noopener noreferrer" target="_blank" className="rounded-xl bg-cyan-300 px-4 py-3 font-black text-slate-950 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-pink-300">{link.label}</a>)}</div></section> : null}
    {approvedLinks.length ? <nav aria-label="Continue by task" className="flex flex-wrap gap-3">{approvedLinks.map((link) => <a className="rounded-xl border border-white/15 px-4 py-3 font-bold text-pink-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300" key={link.href} href={link.href}>{link.label}</a>)}</nav> : null}
    {nextTaskSteps.length ? <section data-rendered-component="next-task-actions" aria-labelledby="next-task-actions-heading" className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-7"><h2 id="next-task-actions-heading" className="text-2xl font-black text-white">Use this page</h2><ol className="mt-4 grid gap-3">{nextTaskSteps.map((step, index) => <li key={step} className="grid grid-cols-[2.5rem_minmax(0,1fr)] items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/45 p-4"><span aria-hidden="true" className="grid size-9 place-items-center rounded-full bg-cyan-300 font-black text-slate-950">{index + 1}</span><p className="pt-1 leading-7 text-white/80">{step}</p></li>)}</ol></section> : null}
  </main>;
}
