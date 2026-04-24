// Central registry for story/journal articles.
// To add a new story, append an entry here, drop the tile image into
// src/assets/brand-shoot/story/, and (optionally) create a full
// article page — short stories can all share StoryArticle.tsx.
import storyBreak1 from "../../assets/brand-shoot/story/story-break-1.png";
import storyNyfw from "../../assets/brand-shoot/story/story-nyfw.png";
import storyCollab from "../../assets/brand-shoot/story/story-collab.png";
import { bbagleyStoryHero as heroSunburst } from "./bbagleyImages";

export type Story = {
  slug: string;
  title: string;
  chapter: string;
  excerpt: string;
  date: string;
  tile: string;
  // "full" → dedicated page at /story (existing),
  // "article" → uses the StoryArticle template at /stories/:slug
  kind: "full" | "article";
  // Only for "article" kind
  body?: string[];
  featureImage?: string;
};

export const stories: Story[] = [
  {
    slug: "the-wrld",
    title: "The Wrld",
    chapter: "Brand Story",
    excerpt:
      "Greenwrld was built around the idea that clothing doesn't need to be newly manufactured to feel new.",
    date: "2024",
    tile: heroSunburst,
    kind: "full",
  },
  {
    slug: "nyfw-runway",
    title: "Ten Looks, One Week",
    chapter: "New York Fashion Week",
    excerpt:
      "A ten-look collection walked NYFW — each garment reworked by hand, no two the same.",
    date: "SS 2024",
    tile: storyNyfw,
    kind: "article",
    featureImage: storyNyfw,
    body: [
      "New York Fashion Week has never been about what's new. It's about what's now.",
      "For our first runway, we presented ten reworked looks — hoodies, jackets, and outerwear sourced secondhand and rebuilt by hand. No two pieces shared the same pattern, the same seams, or the same history.",
      "The brief was simple: show that slow fashion can hold its own on a runway. The collection closed with a reworked parka assembled from four separate source garments — the heaviest piece we've ever built.",
      "Stanley partnered with us on the post-show activation, reinforcing that sustainability isn't a side story — it's the center.",
    ],
  },
  {
    slug: "nike-billie-goodwill",
    title: "Billie × Nike at Goodwill",
    chapter: "Los Angeles",
    excerpt:
      "A sustainable showcase at Goodwill LA, built around reworked Nike archive pieces and Billie Eilish's vision.",
    date: "Fall 2023",
    tile: storyCollab,
    kind: "article",
    featureImage: storyCollab,
    body: [
      "Goodwill has been part of our sourcing story since day one. So when the opportunity came to showcase reworked pieces alongside Nike and Billie Eilish — at Goodwill in Los Angeles — it felt like everything converging at once.",
      "We built a capsule from Nike archive outerwear, deconstructing and rebuilding each piece by hand. The activation paired the finished garments with the source materials they came from, side by side.",
      "The message: every garment already exists. The work is in what you do with it.",
      "The pieces shown that day are one-of-one — they'll never be re-made, and they were never meant to be.",
    ],
  },
];

export const featuredStory = stories[0];
export const secondaryStories = stories.slice(1);
