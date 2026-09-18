import Link from "next/link";
import { officialLinks, siteConfig, siteInfoLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0c0f]">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-xl font-extrabold text-white">{siteConfig.name}</h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/62">{siteConfig.shortDisclosure}</p>
          </div>
          {siteConfig.navGroups.length > 0 ? <div>
            <h3 className="text-sm font-bold text-white">Core pages</h3>
            <div className="mt-3 grid gap-2 text-sm text-white/62">
              {siteConfig.navGroups.map((group) => (
                <Link key={group.href} href={group.href} className="hover:text-white">{group.label}</Link>
              ))}
            </div>
          </div> : null}
          {officialLinks.length > 0 ? <div>
            <h3 className="text-sm font-bold text-white">Sources</h3>
            <div className="mt-3 grid gap-2 text-sm text-white/62">
              {officialLinks.map((link) => (
                link.href.startsWith("/") ? (
                  <Link key={link.href} href={link.href} className="hover:text-white">
                    {link.title}
                  </Link>
                ) : (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="hover:text-white">
                    {link.title}
                  </a>
                )
              ))}
            </div>
          </div> : null}
          <div>
            <h3 className="text-sm font-bold text-white">Site info</h3>
            <div className="mt-3 grid gap-2 text-sm text-white/62">
              {siteInfoLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-white">{link.label}</Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-5 text-sm text-white/42">
          {siteConfig.domain.replace("https://", "")} is an unofficial fan-made Roblox resource.
        </div>
      </div>
    </footer>
  );
}
