import type { FaqItem, LinkCard, SiteConfig, TierPreviewItem } from "@/types/site";
export const siteBrandMonogram = "BUI";
export const publishedRoutes = new Set<string>(["/", "/about", "/contact", "/disclosure", "/guide", "/pharaoh", "/privacy", "/terms"]);
export const siteConfig: SiteConfig = {
  "name": "Build the Pyramid Wiki",
  "domain": "https://buildthepyramid.wiki",
  "gameName": "Build the Pyramid!",
  "description": "You are finished when only indexed page explaining the actual loop with the verified first-pyramid scale (171,700 blocks) plus the exact 2x-250x gym requirement ladder.",
  "valueProposition": "When a player arrives (often from the Roblox store page or the viral September 2026 gameplay video), understand what Build the Pyramid! is and how to start progressing: learn the quarry-to-pyramid delivery loop, what training does, and what to unlock next",
  "shortDisclosure": "Build the Pyramid Wiki is an independent, unofficial fan resource for the Roblox game Build the Pyramid! (Janitors Studios). It is not affiliated with or endorsed by Janitors Studios or Roblox.",
  "lastUpdated": "2026-09-18",
  "freshnessLabel": "Sources checked",
  "keywords": [],
  "navGroups": [
    {
      "label": "Guide",
      "href": "/guide",
      "items": []
    },
    {
      "label": "Pharaoh",
      "href": "/pharaoh",
      "items": []
    }
  ]
};
export const heroActions: Array<{ label: string; href: string }> = [
  {
    "label": "Guide",
    "href": "/guide"
  },
  {
    "label": "Pharaoh",
    "href": "/pharaoh"
  }
];
export const siteInfoLinks: Array<{ href: string; label: string }> = [
  {
    "href": "/about",
    "label": "About this site"
  },
  {
    "href": "/contact",
    "label": "Contact and corrections"
  },
  {
    "href": "/disclosure",
    "label": "Affiliate disclosure"
  },
  {
    "href": "/privacy",
    "label": "Privacy"
  },
  {
    "href": "/terms",
    "label": "Terms of use"
  }
];
export const officialLinks: LinkCard[] = [];
export const faqs: { home: FaqItem[] } = { home: [] };
export const tierPreview: TierPreviewItem[] = [];
