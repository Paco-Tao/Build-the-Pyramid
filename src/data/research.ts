export const researchCheckedDate = "2026-10-03";

export const editorialPolicyNote = `Every game fact on this site carries the source it came from and the date that source was checked. Facts come from four kinds of surfaces only: the official Roblox game page and store listing, the studio's own channels (the Janitors Studios group and Discord), dated community trackers and code roundups, and credited gameplay videos that this site has frame-checked. When two sources disagree, both claims are shown with their dates instead of averaging them. Numbers this site could not source are left off the site rather than guessed.`;

export type SourceRegisterEntry = {
  name: string;
  type: string;
  url: string;
  detail: string;
  checkedDate: string;
};

export const sourceRegister: SourceRegisterEntry[] = [
  {
    name: "Official Build the Pyramid! Roblox game page",
    type: "Primary (official)",
    url: "https://www.roblox.com/games/123720558354386/Build-the-Pyramid",
    detail:
      "Place 123720558354386 by Janitors Studios. Source for the official description (carry blocks to the pyramid, train speed and strength, complete pyramids to become stronger), the platform list, and the store tab where the Pharaoh and Sun God passes are sold.",
    checkedDate: researchCheckedDate
  },
  {
    name: "Janitors Studios Roblox group",
    type: "Primary (official)",
    url: "https://www.roblox.com/groups/907940218/Janitors-Studios",
    detail:
      "The studio behind Build the Pyramid! (owner Ariex / ariex6000), also known for Clean the Manga Shop!. Establishes who builds and updates the game.",
    checkedDate: "2026-09-23"
  },
  {
    name: "Janitors Studios Discord",
    type: "Primary (official)",
    url: "https://discord.gg/9sksDM6r8M",
    detail:
      "The invite resolves to the studio's server (about 4,200 members at the September 23, 2026 check). Update notes and code strings are posted in its #updates and #announcements channels, which is where this site's guide dates each code string.",
    checkedDate: "2026-09-23"
  },
  {
    name: "Bax — I Can't leave Until The Pyramids are built (YouTube)",
    type: "Community (gameplay video, frame-checked)",
    url: "https://www.youtube.com/watch?v=DcKgIWvdbF0",
    detail:
      "Uploaded September 16, 2026 by Bax (Baxtrix); frame-checked by this site on September 18, 2026. Source of the 171,700-block first-pyramid scale, the Pharaoh pass price observation (120 Robux with a struck-through 140), the instafill demonstration that added 50,000+ blocks at once, the ADMIN gym 250x label, late-game stats (speed 123, capacity 7,335), and the rooms inside a finished pyramid.",
    checkedDate: "2026-09-18"
  },
  {
    name: "BibiBox — Build the Pyramid! game tracker",
    type: "Community (stat tracker)",
    url: "https://bibibox.xyz/games/build-the-pyramid/",
    detail:
      "Tracks the game's public stats and store table: creation date September 3, 2026, visit and favorite totals, 95% rating, 100-player servers, and the full game-pass list (Pharaoh listed at 149 Robux, Sun God at 1,200, gym unlocks from 29 to 1,499).",
    checkedDate: researchCheckedDate
  },
  {
    name: "GameRant — Build the Pyramid codes",
    type: "Editorial (code roundup)",
    url: "https://gamerant.com/build-the-pyramid-codes/",
    detail:
      "Dated code roundup (updated October 2, 2026) with redemption steps. Agrees with this site's guide table on FREECODE (500 Coins), WELCOME (500 Speed and 500 Strength) and SORRYFORUPDATEBUG (2,500 Coins); its UPDATE15 figure differs from one of the two independent lists, which the guide shows as a conflict.",
    checkedDate: researchCheckedDate
  }
];

export type PharaohFactCard = {
  label: string;
  value: string;
  source: string;
};

export const pharaohPriceObservations: PharaohFactCard[] = [
  {
    label: "120 Robux (base 140 struck through)",
    value:
      "Observed by this site in September 2026 gameplay footage: the in-game store showed the Pharaoh pass at 120 Robux with the 140 base price struck through. The video creator says the price out loud after buying.",
    source: "Bax gameplay video, uploaded September 16, 2026; frame-checked September 18, 2026"
  },
  {
    label: "149 Robux (listed)",
    value:
      "The community tracker's store table lists Unlock Pharaoh at 149 Robux with the effect text '2x pyramids and instafill.' — the same effect wording as the official listing.",
    source: "BibiBox game tracker, checked October 3, 2026"
  }
];

export type PassTableRow = {
  pass: string;
  price: string;
  effect: string;
};

export const gamePassTable: PassTableRow[] = [
  { pass: "Unlock 2x Gym", price: "29 Robux", effect: "Skips the 1-pyramid requirement for the 2x gym tier" },
  { pass: "Unlock 5x Gym", price: "99 Robux", effect: "Skips the 3-pyramid requirement" },
  { pass: "Unlock Pharaoh", price: "149 Robux", effect: "\"2x pyramids and instafill.\"" },
  { pass: "Unlock 10x Gym", price: "199 Robux", effect: "Skips the 8-pyramid requirement" },
  { pass: "Unlock 25x Gym", price: "399 Robux", effect: "Skips the 15-pyramid requirement" },
  { pass: "Unlock 50x Gym", price: "699 Robux", effect: "Skips the 25-pyramid requirement" },
  { pass: "Unlock 75x Gym", price: "899 Robux", effect: "Skips the 50-pyramid requirement" },
  { pass: "Unlock 100x Gym", price: "1,099 Robux", effect: "Skips the 100-pyramid requirement" },
  { pass: "Sun God", price: "1,200 Robux", effect: "\"4x pyramids, ultra-quick grab and ultra-quick place.\"" },
  { pass: "Unlock ADMIN Gym", price: "1,499 Robux", effect: "Unlocks the ADMIN gym, the 250x training tier" }
];
