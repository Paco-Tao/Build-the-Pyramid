"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { gameConfig } from "@/data/game.config";
import { siteBrandMonogram, siteConfig } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:var(--bg)]/92 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl min-w-0 items-center justify-between gap-4 px-4">
        <Link href="/" className="flex min-w-0 flex-1 items-center gap-3 lg:flex-none" data-site-brand-intent="text-monogram" onClick={() => setMobileOpen(false)}>
          <span className="site-brand-mark" aria-hidden="true">{siteBrandMonogram}</span>
          <span className="truncate text-lg font-extrabold text-white">{siteConfig.name}</span>
        </Link>

        {siteConfig.navGroups.length > 0 ? <nav className="desktop-primary-nav items-center gap-1" aria-label="Primary navigation" data-primary-nav data-primary-nav-max-items="7">
          {siteConfig.navGroups.map((group) => {
            const isActive = pathname === group.href || (group.href !== "/" && pathname.startsWith(`${group.href}/`));

            return (
              <div key={group.label} className="group relative" data-primary-nav-group>
                <Link
                  href={group.href}
                  className={`nav-link ${group.href === "/tier-list" ? "nav-link-featured" : ""} ${isActive ? "nav-link-active" : ""}`}
                  data-nav-destination={group.href}
                >
                  {group.label}
                </Link>
                {group.items.length > 0 ? (
                  <div className="invisible absolute right-0 top-full w-64 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="rounded-lg border border-white/10 bg-[#111113] p-2 shadow-2xl">
                      {group.items.map((item) => (
                        <Link key={item.href} href={item.href} data-nav-destination={item.href} className="block rounded-md px-3 py-2 text-sm text-white/72 hover:bg-white/10 hover:text-white">
                          <strong className="block text-white">{item.label}</strong>
                          <span className="mt-1 block text-xs text-white/50">{item.description}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav> : null}

        <div className="desktop-header-actions items-center gap-2">
          <a href={gameConfig.dataSources.officialGameUrl} target="_blank" rel="noreferrer" className="button-primary button-small" data-official-play-cta>
            Play on Roblox
          </a>
        </div>

        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-site-nav"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          className="mobile-nav-toggle"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span aria-hidden="true">{mobileOpen ? "x" : "="}</span>
        </button>
      </div>

      {mobileOpen ? (
        <nav id="mobile-site-nav" className="mobile-site-nav border-t border-white/10 bg-[#111113]" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-7xl gap-3 px-4 py-4">
            <a
              href={gameConfig.dataSources.officialGameUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
              className="button-primary button-small"
              data-official-play-cta
            >
              Play on Roblox
            </a>
            {siteConfig.navGroups.map((group) => (
              <div key={group.label} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                <Link
                  href={group.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block font-bold text-white ${group.href === "/tier-list" ? "nav-link-featured rounded-md px-3 py-2" : ""}`}
                  data-nav-destination={group.href}
                >
                  {group.label}
                </Link>
                {group.items.length > 0 ? (
                  <div className="mt-3 grid gap-2">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-md bg-black/25 px-3 py-2 text-sm text-white/70"
                        data-nav-destination={item.href}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
