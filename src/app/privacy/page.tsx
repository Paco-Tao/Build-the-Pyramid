import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
const paragraphs = [
  "This site may receive standard server logs needed for security and reliability.",
  "Analytics or advertising are used only when the disclosure state shown by this site permits them.",
  "For privacy questions, contact corrections@buildthepyramid.wiki."
];
export const metadata: Metadata = { title: "Privacy", description: paragraphs[0], alternates: { canonical: `${siteConfig.domain}/privacy/` }, robots: { index: false, follow: true } };
export default function SystemPage() { return <main className="mx-auto grid w-full max-w-4xl gap-6 px-4 py-10 sm:py-14"><header className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-9"><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-pink-200">Build the Pyramid Wiki</p><h1 className="mt-3 text-4xl font-black text-white">Privacy</h1></header><section className="grid gap-4 rounded-3xl border border-white/10 bg-slate-950/45 p-6 sm:p-9">{paragraphs.map((paragraph, index) => index === 1 && paragraph.includes("@") ? <a key={index} href={`mailto:${paragraph}`} className="font-bold text-cyan-200 underline underline-offset-4">{paragraph}</a> : <p key={index} className="leading-8 text-white/78">{paragraph}</p>)}</section></main>; }
