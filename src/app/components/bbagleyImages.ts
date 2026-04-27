// Central registry for the bbagley photography assets — "as-delivered" set.
import img3121 from "../../assets/bbagley/bbagleyphotography-3121.jpg";
import img3122 from "../../assets/bbagley/bbagleyphotography-3122.jpg";
import img3123 from "../../assets/bbagley/bbagleyphotography-3123.jpg";
import img3124 from "../../assets/bbagley/bbagleyphotography-3124.jpg";
import img3125 from "../../assets/bbagley/bbagleyphotography-3125.jpg";
import img3126 from "../../assets/bbagley/bbagleyphotography-3126.jpg";
import img3127 from "../../assets/bbagley/bbagleyphotography-3127.jpg";
import img3128 from "../../assets/bbagley/bbagleyphotography-3128.jpg";
import img3129 from "../../assets/bbagley/bbagleyphotography-3129.jpg";
import img3130 from "../../assets/bbagley/bbagleyphotography-3130.jpg";
import img3131 from "../../assets/bbagley/bbagleyphotography-3131.jpg";
import img3132 from "../../assets/bbagley/bbagleyphotography-3132.jpg";
import img3133 from "../../assets/bbagley/bbagleyphotography-3133.jpg";
import img3134 from "../../assets/bbagley/bbagleyphotography-3134.jpg";
import img3135 from "../../assets/bbagley/bbagleyphotography-3135.jpg";
import img3136 from "../../assets/bbagley/bbagleyphotography-3136.jpg";
import img3137 from "../../assets/bbagley/bbagleyphotography-3137.jpg";
import img3138 from "../../assets/bbagley/bbagleyphotography-3138.jpg";
import img3139 from "../../assets/bbagley/bbagleyphotography-3139.jpg";
import img3140 from "../../assets/bbagley/bbagleyphotography-3140.jpg";
import img3141 from "../../assets/bbagley/bbagleyphotography-3141.jpg";
import img3142 from "../../assets/bbagley/bbagleyphotography-3142.jpg";
import img3143 from "../../assets/bbagley/bbagleyphotography-3143.jpg";
import img3144 from "../../assets/bbagley/bbagleyphotography-3144.jpg";
import img3145 from "../../assets/bbagley/bbagleyphotography-3145.jpg";
import img3146 from "../../assets/bbagley/bbagleyphotography-3146.jpg";
import img3147 from "../../assets/bbagley/bbagleyphotography-3147.jpg";
import img3148 from "../../assets/bbagley/bbagleyphotography-3148.jpg";

// New Brenna-edited shot (lavender Adidas sweatshirt, Tetons backdrop) — used as Shop hero.
import img4247 from "../../assets/bbagley/bbagleyphotography-4247.jpg";

export const bbagley: string[] = [
  img3121, img3122, img3123, img3124, img3125, img3126, img3127,
  img3128, img3129, img3130, img3131, img3132, img3133, img3134,
  img3135, img3136, img3137, img3138, img3139, img3140, img3141,
  img3142, img3143, img3144, img3145, img3146, img3147, img3148,
  // index 28 — Brenna-edited Tetons shot, used as Shop hero
  img4247,
];

// ─── Allocation plan (rebalanced 2026-04-27 per Maddy's feedback) ───
// Each photo appears at most twice across the front-line user flow
// (hero / banner / tile / editorial). Galleries and product detail
// pages may reuse photos — those are drill-down views.

// Home page
export const bbagleyHero = bbagley[21];           // 3142 — Home Hero (only here)
export const bbagleyBestSellers = [
  bbagley[1], bbagley[7], bbagley[5], bbagley[18], // 3122, 3128, 3126, 3139
];
export const bbagleyMediaGrid = [
  bbagley[6], bbagley[16], bbagley[25],            // 3127, 3137, 3146
];
export const bbagleyCollab = bbagley[19];          // 3140

// Shop page
export const bbagleyShopHero = bbagley[28];        // 4247 — NEW Brenna-edited Tetons shot
export const bbagleyShopHeroIndex = 28;
export const bbagleyInstagram = [
  bbagley[3], bbagley[10], bbagley[15], bbagley[22], bbagley[27],
];

// Story page (The Wrld)
export const bbagleyStoryHero = bbagley[20];       // 3141 — also used as the Wrld blog tile
export const bbagleyStoryProduct = bbagley[26];    // 3147 — Beginning section
export const bbagleyStoryExtras = [
  bbagley[17], bbagley[0], bbagley[8],             // 3138, 3121, 3129 — process steps
];

// Sustainability
export const bbagleySustain = [
  bbagley[12], bbagley[23], bbagley[4], bbagley[11], bbagley[9],
  // 3133, 3144, 3125, 3132, 3130 — image breaks (only first 4 are rendered)
];

// Product detail galleries — 4 visually distinct photos per product.
// These are drill-down views, so reuse with front-line is acceptable.
export const bbagleyGalleries: string[][] = [
  [bbagley[5],  bbagley[2],  bbagley[16], bbagley[22]],  // Midnights
  [bbagley[9],  bbagley[26], bbagley[13], bbagley[1]],   // 1989
  [bbagley[14], bbagley[7],  bbagley[21], bbagley[0]],   // Fearless
  [bbagley[18], bbagley[4],  bbagley[27], bbagley[11]],  // Reputation
  [bbagley[23], bbagley[10], bbagley[3],  bbagley[17]],  // Showgirl
  [bbagley[27], bbagley[8],  bbagley[20], bbagley[15]],  // Lover
];
