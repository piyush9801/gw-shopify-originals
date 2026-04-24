import { useState } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { stories } from "./stories";
import { TunerPanel, loadTune, type TuneConfig } from "./TunerPanel";

// Pull from the single source of truth — whatever's in stories.ts shows here.
const homeStories = stories.slice(0, 3);

function storyHref(slug: string, kind: "full" | "article") {
  return kind === "full" ? "/story" : `/stories/${slug}`;
}

const CARD_DEFAULTS: Record<string, TuneConfig> = {
  "the-wrld": { imageIndex: 0, cropX: 50, cropY: 17, swooshEnabled: false, swooshTop: 50, swooshWidth: 40, swooshMaxWidth: 500, swooshOpacity: 85 },
  "nyfw-runway": { imageIndex: 0, cropX: 50, cropY: 9, swooshEnabled: false, swooshTop: 50, swooshWidth: 40, swooshMaxWidth: 500, swooshOpacity: 85 },
  "nike-billie-goodwill": { imageIndex: 0, cropX: 50, cropY: 19, swooshEnabled: false, swooshTop: 50, swooshWidth: 40, swooshMaxWidth: 500, swooshOpacity: 85 },
};

// Each card gets its own tuner in a different corner so they don't overlap.
const TUNER_POSITIONS: Array<"tl" | "tr" | "bl"> = ["tl", "tr", "bl"];

export function BlogSection() {
  return (
    <section className="bg-[#E8E6E0] border-t border-[#C4CFC0] py-16 lg:py-24">
      <div className="text-center mb-14">
        <h2 className="font-['Optima',sans-serif] text-[28px] lg:text-[40px] tracking-[6px] lg:tracking-[10px] uppercase text-[#1A1A1A]">
          From Street to Runway
        </h2>
      </div>

      <div className="max-w-[1260px] mx-auto px-6 lg:px-0 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {homeStories.map((story, idx) => (
          <BlogCard
            key={story.slug}
            story={story}
            tunerPosition={TUNER_POSITIONS[idx]}
          />
        ))}
      </div>

      <div className="text-center mt-14">
        <Link
          to="/stories"
          className="inline-block font-['Optima',sans-serif] text-[12px] tracking-[3px] uppercase text-[#1A1A1A] border-b border-[#1A1A1A] pb-1 hover:text-[#525F47] hover:border-[#525F47] transition-colors"
        >
          View All Stories →
        </Link>
      </div>
    </section>
  );
}

type BlogCardProps = {
  story: (typeof stories)[number];
  tunerPosition: "tl" | "tr" | "bl" | "br";
};

function BlogCard({ story, tunerPosition }: BlogCardProps) {
  const storageKey = `gw-home-card-${story.slug}-tune`;
  const defaults = CARD_DEFAULTS[story.slug] ?? CARD_DEFAULTS["the-wrld"];
  const [tune, setTune] = useState(() => loadTune(storageKey, defaults));

  return (
    <div>
      <Link to={storyHref(story.slug, story.kind)} className="group cursor-pointer block">
        <div className="aspect-[4/3] overflow-hidden mb-5">
          <ImageWithFallback
            src={story.tile}
            alt={story.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ objectPosition: `${tune.cropX}% ${tune.cropY}%` }}
          />
        </div>
        <p className="font-['Optima',sans-serif] text-[11px] tracking-[3px] uppercase text-[#8B9B7D] mb-2">
          {story.chapter} · {story.date}
        </p>
        <h3 className="font-['Optima',sans-serif] text-[24px] lg:text-[28px] tracking-[4px] uppercase text-[#1A1A1A] leading-[1.15] mb-3 group-hover:text-[#525F47] transition-colors">
          {story.title}
        </h3>
        <p className="font-['Inter',sans-serif] text-[13px] leading-[1.7] text-[#2C2C2C]/70 mb-4">
          {story.excerpt}
        </p>
        <span className="font-['Optima',sans-serif] text-[11px] tracking-[3px] uppercase text-[#525F47] opacity-70 group-hover:opacity-100 transition-opacity">
          Read Story →
        </span>
      </Link>
      <TunerPanel
        title={`Card: ${story.title}`}
        storageKey={storageKey}
        supportsSwoosh={false}
        supportsImagePicker={false}
        tune={tune}
        onChange={setTune}
        position={tunerPosition}
      />
    </div>
  );
}
