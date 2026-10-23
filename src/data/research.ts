export const researchCheckedDate = "2026-10-23";

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
      "Dated code roundup (updated October 2, 2026) with redemption steps. Agreed with this site's guide table on FREECODE (500 Coins), WELCOME (500 Speed and 500 Strength) and SORRYFORUPDATEBUG (2,500 Coins); its UPDATE15 figure differed from one of the two independent lists, which the guide showed as a conflict. The article returned HTTP 404 at this site's October 6, 2026 check, so Radio Times and Beebom below are the roundups this site now checks.",
    checkedDate: "2026-10-03"
  },
  {
    name: "Radio Times — Build the Pyramid codes",
    type: "Editorial (code roundup)",
    url: "https://www.radiotimes.com/technology/gaming/build-the-pyramid-codes/",
    detail:
      "Code roundup published October 2, 2026. The October 14, 2026 revision led with PETS (NEW!, 25k Coins) and SORRYFORDELAY (50k Coins) as active and marked UPDATE15, SUNGOD, WELCOME, FREECODE, UPGRADES5K, UPANDCOMINGPC1 and DISCORD2K expired. The October 22, 2026 revision (published 10:01 UTC) adds the Halloween-drop strings HALLOWEEN (5k Candy Corn), Secretbat (1x Bat Pet), HAPPYHALLOWEEN (1x Skeleton Camel Pet), JACKVSZED (100k Coins + 100k Candy Corn), CURSEDSECRET (Witch's Pot Pet), SECRETSPHINX (100k Coins) and ARISUNA (100k Coins + 100k Candy Corn), lists WELCOME and FREECODE as active again, keeps PETS, SORRYFORDELAY, DEADBYMELOL and SORRYFORUPDATEBUG active, and marks UPDATE15, SUNGOD, UPGRADES5K, UPANDCOMINGPC1 and DISCORD2K expired. Checked October 23, 2026.",
    checkedDate: researchCheckedDate
  },
  {
    name: "Eurogamer — Build the Pyramid codes",
    type: "Editorial (code roundup)",
    url: "https://www.eurogamer.net/build-the-pyramid-codes",
    detail:
      "Code roundup published October 14, 2026 (09:21 UTC). Active as of 14 October 2026: PETS (NEW, 25,000 Coins), SORRYFORDELAY (50,000 Coins), SORRYFORUPDATEBUG (2,500 Coins), DEADBYMELOL (1 Coin); expired: SUNGOD, UPDATE15, UPGRADES5K, UPANDCOMINGPC1, DISCORD2K. Its game description also mentions hatched 'stat-boosting pets'. The October 23, 2026 check found the page unchanged from this October 14 revision.",
    checkedDate: researchCheckedDate
  },
  {
    name: "Pocket Tactics — Build the Pyramid codes",
    type: "Editorial (code roundup)",
    url: "https://www.pockettactics.com/build-the-pyramid-codes",
    detail:
      "Code roundup published September 23, 2026. The October 22, 2026 revision adds HALLOWEEN (5k candy corn) and still names PETS (reward unspecified), DEADBYMELOL (one coin), SUNGOD (25k coins), SORRYFORUPDATEBUG (2.5k coins), FREECODE (500 coins) and WELCOME (500 speed / 500 strength); it does not list SORRYFORDELAY, the pet strings, JACKVSZED, CURSEDSECRET or SECRETSPHINX, and still shows SUNGOD active. Corroborates PETS and HALLOWEEN as real strings. Checked October 23, 2026.",
    checkedDate: researchCheckedDate
  },
  {
    name: "Dexerto — Build the Pyramid codes",
    type: "Editorial (code roundup)",
    url: "https://www.dexerto.com/roblox/build-the-pyramid-codes-3411170",
    detail:
      "Code roundup published October 21, 2026 and updated October 22, 2026 after the game's Halloween update. Active: HALLOWEEN (5,000 Candy Corn), Secretbat (1 Bat Pet), HAPPYHALLOWEEN (1 Skeleton Camel Pet), JACKVSZED (100,000 Coins + 100,000 Candy Corns), CURSEDSECRET (Witch's Pot Pet), SECRETSPHINX (100,000 Coins), PETS (25,000 Coins), SORRYFORDELAY (50,000 Coins), DEADBYMELOL (1 Coin), SORRYFORUPDATEBUG (2,500 Coins), FREECODE (500 Coins), WELCOME (500 Speed / 500 Strength); expired: SUNGOD and UPDATE15. Checked October 23, 2026.",
    checkedDate: researchCheckedDate
  },
  {
    name: "Beebom — Build the Pyramid codes",
    type: "Editorial (code roundup)",
    url: "https://beebom.com/build-the-pyramid-codes/",
    detail:
      "Code roundup published October 5, 2026. The 'Updated: October 18, 2026' revision adds HALLOWEEN (5K Candy Corn) and SORRYFORDELAY (25K Coins) but still lists SUNGOD and UPDATE15 as active and only UPANDCOMINGPC1, UPGRADES5K and DISCORD2K expired — its expiry claims conflict with the October 21–22 Dexerto and Radio Times revisions, and the guide shows both sides per field. Checked October 23, 2026.",
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
