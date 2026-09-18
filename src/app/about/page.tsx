import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
const paragraphs = [
  "Build the Pyramid Wiki helps players understand verified Build the Pyramid! tasks and tools.",
  "Build the Pyramid Wiki editorial publishes this site and separates verified facts from unknown or changing details.",
  "Build the Pyramid Wiki is an independent, unofficial fan resource for the Roblox game Build the Pyramid! (Janitors Studios). It is not affiliated with or endorsed by Janitors Studios or Roblox."
];
export const metadata: Metadata = { title: "About this site", description: paragraphs[0], alternates: { canonical: `${siteConfig.domain}/about/` }, robots: { index: true, follow: true } };
export default function SystemPage() { return <main className="mx-auto grid w-full max-w-4xl gap-6 px-4 py-10 sm:py-14"><header className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-9"><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-pink-200">Build the Pyramid Wiki</p><h1 className="mt-3 text-4xl font-black text-white">About this site</h1></header><section className="grid gap-4 rounded-3xl border border-white/10 bg-slate-950/45 p-6 sm:p-9">{paragraphs.map((paragraph, index) => index === 1 && paragraph.includes("@") ? <a key={index} href={`mailto:${paragraph}`} className="font-bold text-cyan-200 underline underline-offset-4">{paragraph}</a> : <p key={index} className="leading-8 text-white/78">{paragraph}</p>)}</section></main>; }
