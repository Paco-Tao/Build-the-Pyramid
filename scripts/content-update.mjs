import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
// Approved route manifest (projects/build-the-pyramid/approved_route_manifest.json):
// product routes /, /guide, /pharaoh; system routes /about, /contact, /disclosure, /privacy, /terms.
const requiredRoutes = [
  "/",
  "/guide",
  "/pharaoh",
  "/about",
  "/contact",
  "/disclosure",
  "/privacy",
  "/terms",
];

function pagePathFor(route) {
  return route === "/"
    ? join(root, "src", "app", "page.tsx")
    : join(root, "src", "app", route.slice(1), "page.tsx");
}

function readJson(path) {
  if (!existsSync(path)) return {};
  return JSON.parse(readFileSync(path, "utf8"));
}

const statusPath = join(root, "src", "data", "update-status.json");
const previous = readJson(statusPath);
const structuralCheckedAt = new Date().toISOString();
const missingRouteFiles = requiredRoutes.filter((route) => !existsSync(pagePathFor(route)));

const payload = {
  ...previous,
  gameSlug: "build-the-pyramid",
  status: missingRouteFiles.length ? "structural-fail" : "structural-pass",
  scope: "route-existence-only",
  contentUpdateVerified: false,
  structuralCheckedAt,
  checks: {
    requiredRoutes,
    missingRouteFiles
  },
  notes: [
    "Keep new page updates focused on player questions, current game details, and clear navigation."
  ]
};

mkdirSync(dirname(statusPath), { recursive: true });
writeFileSync(statusPath, `${JSON.stringify(payload, null, 2)}\n`);

if (missingRouteFiles.length) {
  console.error(`Content update baseline failed; missing route files: ${missingRouteFiles.join(", ")}`);
  process.exitCode = 1;
} else {
  console.log(`Structural route check passed for build-the-pyramid at ${structuralCheckedAt}; content freshness was not verified.`);
}
