import type { Metadata } from "next";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/data/site";
import { gamePassTable, pharaohPriceObservations, researchCheckedDate } from "@/data/research";
import { Breadcrumbs } from "@/components/ui/content";

export const metadata: Metadata = {
  title: "The Pharaoh pass in Build the Pyramid!: effects, price, and the buy-or-skip call",
  description: "What the Pharaoh pass does in Build the Pyramid! (official effect: \"2x pyramids and instafill.\"), the two recorded prices (120 Robux observed September 2026; 149 listed October 3, 2026), how it compares with the gym passes, and when buying it makes sense.",
  alternates: { canonical: `${siteConfig.domain}/pharaoh/` },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: `${siteConfig.domain.replace(/[/]+$/, "")}/pharaoh/`,
    siteName: siteConfig.name,
    title: "The Pharaoh pass in Build the Pyramid!: effects, price, and the buy-or-skip call",
    description: "Pharaoh pass effects, both recorded prices, the pass ladder, and a buy-or-skip framework — sourced and dated.",
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Pharaoh pass in Build the Pyramid!: effects, price, and the buy-or-skip call",
    description: "Pharaoh pass effects, both recorded prices, the pass ladder, and a buy-or-skip framework — sourced and dated.",
    images: ["/opengraph-image"],
  },
};

const faqs = [
  {
    q: "What is the Pharaoh in Build the Pyramid!?",
    a: "Pharaoh is a Robux game pass, not a character, boss, or event. Buying it (store name: \"Unlock Pharaoh\") changes what your account can do in the pyramid loop — the store listing defines the full effect as \"2x pyramids and instafill.\" — and in September 2026 footage the buyer's avatar also took on a visibly grander look immediately after purchase."
  },
  {
    q: "How much does the Pharaoh pass cost?",
    a: "Two prices are on record. This site's frame check of September 2026 gameplay footage observed the pass at 120 Robux with the 140 base price struck through; the BibiBox tracker's store table checked October 3, 2026 lists 149 Robux. Prices have moved before, so the in-game store is the number to trust when you buy."
  },
  {
    q: "What does instafill do?",
    a: "Instafill lets a Pharaoh holder dump a huge batch of blocks into the shared pyramid in one action instead of carrying them one stack at a time. In the September 16, 2026 video, one instafill added 50,000+ blocks to the server's build at once — enough to visibly lag the server and nearly finish a pyramid on its own."
  },
  {
    q: "Is Pharaoh better than the gym-skip passes?",
    a: "They do different things. The gym passes (29-1,499 Robux) skip the pyramid-count requirement for a training tier, so they speed up your stats. Pharaoh doubles pyramid progress and adds instafill, so it speeds up the monuments themselves. The premium Sun God pass (1,200 Robux) is the stronger version of Pharaoh: \"4x pyramids, ultra-quick grab and ultra-quick place.\""
  },
  {
    q: "Can you get the Pharaoh pass for free?",
    a: "The store listing sells it for Robux, and no official free path has been announced. Free progression works fine without it — finishing pyramids the normal way unlocks the better gym tiers — so the pass is a speed choice, not a requirement."
  }
];

export default function PharaohPage() {
  return (
    <main data-production-build-authority="v1" className="mx-auto w-full max-w-5xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Pharaoh", href: "/pharaoh" }]} />
      <FaqJsonLd items={faqs} />
      <Breadcrumbs items={[{ label: "Pharaoh", href: "/pharaoh" }]} />
      <header className="rounded-3xl border border-pink-300/20 bg-gradient-to-br from-pink-500/15 via-slate-950/80 to-cyan-400/10 p-6 shadow-2xl shadow-black/20 sm:p-9">
        <div className="text-sm font-extrabold uppercase tracking-[0.18em] text-pink-200">{siteConfig.gameName} game pass review</div>
        <h1 className="mt-3 max-w-4xl text-3xl font-black leading-tight text-white sm:text-5xl">The Pharaoh pass in Build the Pyramid!: effects, price, and the buy-or-skip call</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
          Pharaoh is Build the Pyramid!&apos;s best-known Robux game pass. The official listing defines it in four words
          — &ldquo;2x pyramids and instafill.&rdquo; — and those four words decide whether it fits how you play. This
          page collects everything on the record about it: the effects as listed, both recorded prices with their dates,
          what instafill looks like in a real server, and a decision path that ends with a justified buy or skip.
        </p>
        <p className="mt-4 max-w-3xl leading-7 text-emerald-100/90">
          <strong className="text-emerald-200">Quick answer:</strong> casual players on a fresh server lose nothing by
          skipping — free progression unlocks every gym tier on its own timetable. Daily players who keep finishing
          pyramids get the most from the doubled pyramid count and the one-click fills. Treat the pass as a speed
          purchase, check the current in-game price before buying, and never buy it for the stats alone.
        </p>
      </header>

      <section aria-labelledby="what-is-pharaoh-heading" className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
        <h2 id="what-is-pharaoh-heading" className="text-2xl font-black text-white">What the Pharaoh pass is</h2>
        <div className="mt-4 grid gap-4 leading-7 text-white/78">
          <p>
            In Build the Pyramid! — the September 2026 Roblox hit by Janitors Studios where a whole server hauls blocks
            to one shared pyramid — Pharaoh is the mid-tier paid pass in the store tab. It is not a boss you fight, a
            rank you earn, or an event: the store sells it once, per account, under the name &ldquo;Unlock
            Pharaoh&rdquo;. The store listing&apos;s complete effect text is &ldquo;2x pyramids and instafill.&rdquo;
          </p>
          <p>
            What that looks like in play comes from dated footage rather than the listing. In the September 16, 2026
            video this site frame-checked, the player who bought the pass announced &ldquo;I&apos;m no longer a
            pleb. I&apos;m a pharaoh&rdquo; as the 120 Robux charge went through, his avatar immediately took on a
            grander look, and the instafill button let him add more than 50,000 blocks to the shared build in a single
            action — &ldquo;that lags the server,&rdquo; he notes, before finishing the pyramid with a few more clicks.
            The pass, in short, turns the game&apos;s core loop from carrying to commanding.
          </p>
          <p>
            One caution the footage also shows: instafill is visible to the whole server. The blocks arrive in one
            dramatic dump on a counter everyone shares, so the purchase is as social as it is mechanical — and, at
            least in that September 2026 recording, big enough to make the server stutter.
          </p>
        </div>
      </section>

      <section aria-labelledby="pharaoh-price-heading" className="mt-8 rounded-3xl border border-cyan-300/25 bg-cyan-400/[0.07] p-6 sm:p-8">
        <h2 id="pharaoh-price-heading" className="text-2xl font-black text-cyan-100">Price on record: two dated observations</h2>
        <p className="mt-3 leading-7 text-white/75">
          Robux prices in this game move — the September footage caught a discount tag — so this page keeps both known
          prices instead of averaging them into one number that matches neither.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {pharaohPriceObservations.map((observation) => (
            <article key={observation.label} className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
              <h3 className="font-mono text-xl font-black text-amber-100">{observation.label}</h3>
              <p className="mt-2 text-sm leading-6 text-white/75">{observation.value}</p>
              <p className="mt-3 text-xs leading-5 text-white/50">Source: {observation.source}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="pharaoh-effects-heading" className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
        <h2 id="pharaoh-effects-heading" className="text-2xl font-black text-white">What &ldquo;2x pyramids and instafill&rdquo; means</h2>
        <div className="mt-4 grid gap-4 leading-7 text-white/78">
          <p>
            The instafill half needs no interpretation: it is the one-click bulk delivery demonstrated above. The 2x
            half is a multiplier on the game&apos;s progression currency. Finished pyramids are what gates the gym
            system — this site verified in September 2026 that the 2x gym tier opens after your first completed
            pyramid, with each further tier demanding more pyramids, up to the ADMIN gym&apos;s ceiling. A pass
            named &ldquo;2x pyramids&rdquo;, sold in that system, most plausibly makes each pyramid you finish count
            double toward those unlock requirements. That reading is ours, from the listing text plus the observed
            gate order; the store itself only says &ldquo;2x pyramids&rdquo;.
          </p>
          <p>
            The premium tier above Pharaoh supports that reading. The store&apos;s Sun God pass (1,200 Robux) is
            described as &ldquo;4x pyramids, ultra-quick grab and ultra-quick place.&rdquo; — the same two ideas
            (a pyramid multiplier plus delivery speed) at double the multiplier and a higher price. Pharaoh is the
            entry point of that family; Sun God is its ceiling.
          </p>
        </div>
      </section>

      <section aria-labelledby="pass-ladder-heading" className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
        <h2 id="pass-ladder-heading" className="text-2xl font-black text-white">Where Pharaoh sits in the pass ladder</h2>
        <p className="mt-3 leading-7 text-white/75">
          The store carries gym-skip passes alongside the two monument passes. Table checked {researchCheckedDate}
          against the BibiBox tracker&apos;s store table; prices are the listed ones and can change.
        </p>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[640px] text-left">
            <thead className="bg-slate-950/70">
              <tr>
                <th className="p-4">Pass</th>
                <th className="p-4">Listed price</th>
                <th className="p-4">Listed effect</th>
              </tr>
            </thead>
            <tbody>
              {gamePassTable.map((row) => (
                <tr key={row.pass} className={`border-t border-white/10 ${row.pass === "Unlock Pharaoh" ? "bg-cyan-400/[0.08]" : ""}`}>
                  <th scope="row" className="p-4 font-bold text-white">{row.pass}</th>
                  <td className="p-4 text-cyan-100">{row.price}</td>
                  <td className="p-4 leading-6 text-white/75">{row.effect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-6 text-white/60">
          Note the pattern in the gym rows: 29 Robux buys a skip of the 1-pyramid gate, while the ADMIN gym (1,499
          Robux) is the 250x training tier. Pharaoh at 149 Robux is priced like a gym pass but multiplies the
          monuments instead of skipping a gate — which is why the two kinds of passes do not directly substitute for
          each other.
        </p>
      </section>

      <section aria-labelledby="buy-or-skip-heading" className="mt-8 rounded-3xl border border-emerald-300/25 bg-emerald-400/10 p-6 sm:p-8">
        <h2 id="buy-or-skip-heading" className="text-2xl font-black text-emerald-100">The buy-or-skip decision, in four steps</h2>
        <ol className="mt-5 grid gap-4">
          {[
            "Play free first. The whole progression system works on the free path: finish a pyramid, unlock the 2x gym, keep climbing. You will know within one evening whether you like the loop enough to speed it up.",
            "Compare the price with your play frequency. The doubled pyramid count pays off per pyramid finished, so daily players compound the benefit and once-a-week players barely feel it. If you log in a few times a week or less, skip.",
            "Time the purchase to an active server. Instafill drops 50,000+ blocks into a shared counter, and the September 2026 footage shows it matters most when a server is mid-build and the counter is climbing. Buying it for an empty server wastes half the effect.",
            "Verify the price in the in-game store before paying. The two recorded prices (120 observed September 2026, 149 listed October 3, 2026) already disagree, which is normal for a game that patches weekly. If the in-game number differs from this page, the store is right."
          ].map((step, index) => (
            <li key={index} className="grid min-w-0 grid-cols-[2.5rem_1fr] items-start gap-4 rounded-2xl border border-white/10 bg-slate-950/45 p-5">
              <span aria-hidden="true" className="grid size-10 place-items-center rounded-full bg-emerald-400 font-black text-slate-950">{index + 1}</span>
              <p className="pt-1 leading-7 text-white/85">{step}</p>
            </li>
          ))}
        </ol>
        <p className="mt-5 leading-7 text-white/80">
          You decided right when you can say which half of &ldquo;2x pyramids and instafill.&rdquo; you are paying
          for, at a price you confirmed in the store today, for a play pattern that actually repeats.
        </p>
      </section>

      <section aria-labelledby="pharaoh-scope-heading" className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
        <h2 id="pharaoh-scope-heading" className="text-2xl font-black text-white">What this page does and does not claim</h2>
        <p className="mt-4 leading-7 text-white/75">
          Every effect, price, and scene described above traces to a named, dated source listed below. This site has
          not bought the pass and has no inside data, so the multiplier&apos;s exact in-game arithmetic is described
          as a reading of the official listing, not a measured constant — and if a future update rewords the listing,
          this page will follow the new wording with a new checked date.
        </p>
      </section>

      <section aria-labelledby="pharaoh-faq-heading" className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
        <h2 id="pharaoh-faq-heading" className="text-2xl font-black text-white">Pharaoh pass FAQ</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.q} className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
              <h3 className="font-black text-white">{faq.q}</h3>
              <p className="mt-2 text-sm leading-6 text-white/72">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="pharaoh-sources-heading" className="mt-8 rounded-3xl border border-white/10 p-6">
        <h2 id="pharaoh-sources-heading" className="text-2xl font-black text-white">Sources (all checked)</h2>
        <ul className="mt-4 grid gap-3 leading-7 text-white/70">
          <li>
            Official Build the Pyramid! store listing on the{" "}
            <a className="text-cyan-200 underline underline-offset-4" href="https://www.roblox.com/games/123720558354386/Build-the-Pyramid" target="_blank" rel="noopener noreferrer">Roblox game page</a>{" "}
            (place 123720558354386, Janitors Studios) — effect text &ldquo;2x pyramids and instafill.&rdquo; Checked October 3, 2026.
          </li>
          <li>
            Bax, &ldquo;I Can&apos;t leave Until The Pyramids are built&rdquo; (YouTube, September 16, 2026) —{" "}
            <a className="text-cyan-200 underline underline-offset-4" href="https://www.youtube.com/watch?v=DcKgIWvdbF0" target="_blank" rel="noopener noreferrer">watch the video</a>.
            Frame-checked by this site September 18, 2026: the 120 Robux price with the 140 base struck through, the purchase scene, the 50,000+ block instafill, and the server lag.
          </li>
          <li>
            BibiBox game tracker,{" "}
            <a className="text-cyan-200 underline underline-offset-4" href="https://bibibox.xyz/games/build-the-pyramid/" target="_blank" rel="noopener noreferrer">Build the Pyramid! page</a>{" "}
            — full pass table (Pharaoh 149 Robux; Sun God 1,200; gym skips 29-1,499). Checked October 3, 2026.
          </li>
          <li>
            This site&apos;s progression guide — the gym gate order (2x after one pyramid, ADMIN 250x ceiling) and update history.{" "}
            <a className="text-cyan-200 underline underline-offset-4" href="/guide">Open the guide</a>. Table checked September 30, 2026.
          </li>
        </ul>
      </section>
    </main>
  );
}
