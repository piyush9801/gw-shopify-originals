// Central registry for the 28 bbagley photography assets — "as-delivered" set.
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

export const bbagley: string[] = [
  img3121, img3122, img3123, img3124, img3125, img3126, img3127,
  img3128, img3129, img3130, img3131, img3132, img3133, img3134,
  img3135, img3136, img3137, img3138, img3139, img3140, img3141,
  img3142, img3143, img3144, img3145, img3146, img3147, img3148,
];

// ─── Allocation plan (client feedback, 2026-04-24) ───
// Chosen FRONT:          3142 [21] — landscape, 1989 sweatshirt, dynamic pose
// Re-emphasized (prime): 3127 [6], 3137 [16], 3141 [20]
// Small-picture callout: 3146 [25]
// Non-chosen fronts highlighted elsewhere: 3122 [1], 3128 [7], 3145 [24]
// Photo index = (photo number - 3121). e.g. 3142 → bbagley[21].

// Home page
export const bbagleyHero = bbagley[21];          // 3142 — front-page hero
export const bbagleyBestSellers = [
  bbagley[1], bbagley[7], bbagley[24], bbagley[20], // 3122, 3128, 3145, 3141
];
export const bbagleyMediaGrid = [
  bbagley[6], bbagley[16], bbagley[25],             // 3127, 3137, 3146
];
export const bbagleyCollab = bbagley[19];        // 3140
export const bbagleyBlog = [
  bbagley[6], bbagley[16], bbagley[20],             // 3127, 3137, 3141
];

// Shop page
export const bbagleyShopHero = bbagley[24];      // 3145
export const bbagleyProducts = [
  bbagley[5], bbagley[9], bbagley[14], bbagley[18], bbagley[23], bbagley[27],
];
export const bbagleyInstagram = [
  bbagley[3], bbagley[10], bbagley[25], bbagley[16], bbagley[22],
];

// Story page
export const bbagleyStoryHero = bbagley[20];     // 3141
export const bbagleyStoryExtras = [
  bbagley[6], bbagley[16], bbagley[25],             // 3127, 3137, 3146
];

// Sustainability
export const bbagleyParka = bbagley[7];          // 3128
export const bbagleySustain = [
  bbagley[1], bbagley[12], bbagley[19], bbagley[11], bbagley[24],
];

// Product detail galleries — 4 visually distinct photos per product
// Each gallery pulls from spread-out indices to avoid burst duplicates.
export const bbagleyGalleries: string[][] = [
  [bbagley[5],  bbagley[2],  bbagley[16], bbagley[22]],  // Midnights
  [bbagley[9],  bbagley[26], bbagley[13], bbagley[1]],   // 1989
  [bbagley[14], bbagley[7],  bbagley[21], bbagley[0]],   // Fearless
  [bbagley[18], bbagley[4],  bbagley[27], bbagley[11]],  // Reputation
  [bbagley[23], bbagley[10], bbagley[3],  bbagley[17]],  // Showgirl
  [bbagley[27], bbagley[8],  bbagley[20], bbagley[15]],  // Lover
];
