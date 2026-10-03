import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { editorialPolicyNote, researchCheckedDate, sourceRegister } from "@/data/research";
import { Breadcrumbs, PageIntro } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `About ${siteConfig.name}`,
  description: `About ${siteConfig.name}: who maintains it, how every Build the Pyramid! fact is sourced and dated, which official links are verified, and how to send a correction.`,
  alternates: { canonical: `${siteConfig.domain}/about/` },
  openGraph: {
    type: "website",
    url: `${siteConfig.domain}/about/`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `About ${siteConfig.name}`,
    description: `About ${siteConfig.name}, its editorial process, verified official links, and correction path.`,
    images: ["/opengraph-image"]
  }
};

const officialLinks: Array<{ href: string; label: string; detail: string }> = [
  {
    href: "https://www.roblox.com/games/123720558354386/Build-the-Pyramid",
    label: "Roblox game page",
    detail:
      "The official place to play Build the Pyramid! (place 123720558354386). Its description sets out the whole loop: pick up blocks, carry them to the pyramid, work together with the server, train speed and strength, and complete pyramids to become stronger."
  },
  {
    href: "https://www.roblox.com/groups/907940218/Janitors-Studios",
    label: "Janitors Studios group",
    detail:
      "The studio's Roblox group (owner Ariex / ariex6000), also behind Clean the Manga Shop!. This is where studio updates and membership changes show up first."
  },
  {
    href: "https://discord.gg/9sksDM6r8M",
    label: "Studio Discord",
    detail:
      "Verified September 23, 2026: the invite resolves to the Janitors Studios server whose description names Build the Pyramid! (about 4,200 members). The studio posts update notes and code strings in its #updates and #announcements channels."
  }
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
      <PageIntro
        eyebrow="About us"
        title={`About This ${siteConfig.gameName} Resource`}
        description={`${siteConfig.name} is an independent Roblox fan resource for ${siteConfig.gameName} by Janitors Studios: a progression guide with a dated codes table, a full review of the Pharaoh pass, and a homepage that explains the game from zero — with every game fact sourced and dated.`}
      />

      <section className="mt-10 grid gap-4">
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">What this site covers</h2>
          <p className="mt-2 leading-7 text-white/68">
            Build the Pyramid! is a cooperative simulation game that launched on Roblox on September 3, 2026, where
            everyone in a 100-player server hauls blocks from a quarry to one shared pyramid counter. The site mirrors
            the questions that loop actually raises. The <Link className="text-cyan-200 underline underline-offset-4" href="/guide">progression guide</Link>{" "}
            explains the quarry-to-pyramid delivery order, the gym ladder (2x training after your first pyramid, up to
            the ADMIN 250x tier), the September 19/22/25 updates, and a codes table that names the exact Discord channel
            or video each string was published in. The <Link className="text-cyan-200 underline underline-offset-4" href="/pharaoh">Pharaoh page</Link>{" "}
            reviews the game&apos;s best-known Robux pass — officially &ldquo;2x pyramids and instafill.&rdquo; — including
            the two prices on record and a buy-or-skip decision path. The{" "}
            <Link className="text-cyan-200 underline underline-offset-4" href="/">homepage</Link> answers
            &ldquo;what is this game&rdquo; for players arriving from the Roblox store page or the viral September 2026
            gameplay video.
          </p>
        </article>

        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Author and editor profile</h2>
          <p className="mt-2 leading-7 text-white/68">
            The site is maintained by an independent Roblox guide editor who tracks {siteConfig.gameName} through the
            official Roblox page and store listing, the Janitors Studios group and Discord, dated community trackers and
            code roundups (BibiBox, GameRant), and credited gameplay videos that get frame-checked before any detail
            from them is used. The game&apos;s own update cadence drives the check schedule — the studio shipped patches
            on September 19, 22 and 25 within a week of launch, so pages are re-verified whenever the game ships new
            content, and every data page carries the date it was last checked so you can judge freshness yourself.
          </p>
        </article>

        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Editorial policy</h2>
          <p className="mt-2 leading-7 text-white/68">{editorialPolicyNote}</p>
          <p className="mt-3 leading-7 text-white/68">
            In practice: the Pharaoh page shows the September 2026 in-game price observation (120 Robux, base 140 struck
            through) and the tracker&apos;s October 3, 2026 listing (149 Robux) side by side instead of picking one;
            code rewards reported by independent lists are labeled as public claims because this site has not redeemed
            them; and the guide&apos;s codes table records where each string was posted, so a reader can re-check the
            original source. Rumored strings with no traceable source are left off the site entirely.
          </p>
        </article>

        <article className="content-card">
          <h2 className="text-xl font-bold text-white">How pages are updated</h2>
          <p className="mt-2 leading-7 text-white/68">
            The guide&apos;s codes table and update boundary are rechecked after every named studio update — new codes
            usually ship with updates, and claim-capped codes can run out without notice. The Pharaoh page&apos;s price
            and effect lines are re-verified against the in-game store when the game patches, because Robux prices and
            bundles change. Older observations are kept only when they help players avoid mistakes, and they stay dated:
            the September 18, 2026 video observations are still the source of the 171,700-block first-pyramid scale, and
            the page says so rather than quietly presenting them as this week&apos;s check.
          </p>
        </article>

        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Corrections</h2>
          <p className="mt-2 leading-7 text-white/68">
            If a page has an outdated code, a price that no longer matches the in-game store, or a missing source
            credit, use the <Link className="text-cyan-200 underline underline-offset-4" href="/contact">contact page</Link>{" "}
            with the page URL, the claim, and a reference that supports the correction. Corrections that check out are
            applied with a new checked date. The <Link className="text-cyan-200 underline underline-offset-4" href="/disclosure">disclosure page</Link>{" "}
            records the site&apos;s unofficial, fan-made status and advertising boundaries.
          </p>
        </article>

        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Independence</h2>
          <p className="mt-2 leading-7 text-white/68">
            This is an unofficial fan site. It is not affiliated with Janitors Studios or Roblox, and official support,
            purchases, moderation, and account issues belong on the official Roblox page and the studio&apos;s own
            channels listed below. Advertising on the site is limited to the formats disclosed on the disclosure page,
            and no advertising relationship changes what the data pages say.
          </p>
        </article>
      </section>

      <section aria-labelledby="official-links-heading" className="mt-10">
        <h2 id="official-links-heading" className="text-2xl font-extrabold text-white">
          Official {siteConfig.gameName} links (checked September 23, 2026)
        </h2>
        <p className="mt-2 leading-7 text-white/64">
          These are the only official surfaces for the game. Unofficial wikis and code sites — including this one — are
          not official channels.
        </p>
        <ul className="mt-4 grid gap-4">
          {officialLinks.map((link) => (
            <li key={link.href} className="content-card">
              <a
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
                className="text-lg font-bold text-cyan-200 underline underline-offset-4"
              >
                {link.label}
              </a>
              <p className="mt-2 leading-7 text-white/75">{link.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="sources-heading" className="mt-10">
        <h2 id="sources-heading" className="text-2xl font-extrabold text-white">
          Sources register
        </h2>
        <p className="mt-2 leading-7 text-white/64">
          Every source named across the site, with its type and the date it was checked. The site-wide reference check
          is dated {researchCheckedDate}; older observations keep their own earlier date.
        </p>
        <div className="mt-4 overflow-x-auto rounded-lg border border-white/10">
          <table className="w-full min-w-[640px] text-left">
            <thead className="bg-black/30">
              <tr>
                <th className="p-3 text-sm font-bold text-white">Source</th>
                <th className="p-3 text-sm font-bold text-white">Type</th>
                <th className="p-3 text-sm font-bold text-white">Checked</th>
              </tr>
            </thead>
            <tbody>
              {sourceRegister.map((source) => (
                <tr key={source.url} className="border-t border-white/10 align-top">
                  <td className="p-3">
                    <a
                      href={source.url}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="font-bold text-cyan-200 underline underline-offset-4"
                    >
                      {source.name}
                    </a>
                    <p className="mt-1 text-sm leading-6 text-white/60">{source.detail}</p>
                  </td>
                  <td className="p-3 text-sm text-white/70">{source.type}</td>
                  <td className="p-3 text-sm text-white/70">{source.checkedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
