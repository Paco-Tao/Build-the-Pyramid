import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
const paragraphs = [
  "Use this fan resource as general gameplay information and verify changing details in the game.",
  "Roblox and the game creators retain their respective names, marks, and official support responsibilities.",
  "Questions about these terms may be sent to corrections@buildthepyramid.wiki."
];
export const metadata: Metadata = { title: "Terms of use", description: paragraphs[0], alternates: { canonical: `${siteConfig.domain}/terms/` }, robots: { index: false, follow: true } };
export default function SystemPage() { return <main className="mx-auto grid w-full max-w-4xl gap-6 px-4 py-10 sm:py-14"><header className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-9"><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-pink-200">Build the Pyramid Wiki</p><h1 className="mt-3 text-4xl font-black text-white">Terms of use</h1></header><section className="grid gap-4 rounded-3xl border border-white/10 bg-slate-950/45 p-6 sm:p-9">{paragraphs.map((paragraph, index) => index === 1 && paragraph.includes("@") ? <a key={index} href={`mailto:${paragraph}`} className="font-bold text-cyan-200 underline underline-offset-4">{paragraph}</a> : <p key={index} className="leading-8 text-white/78">{paragraph}</p>)}</section></main>; }
