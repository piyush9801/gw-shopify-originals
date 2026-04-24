import { useEffect } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { stories, featuredStory, secondaryStories } from "./stories";

function storyHref(slug: string, kind: "full" | "article") {
  return kind === "full" ? "/story" : `/stories/${slug}`;
}

export function StoriesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#E8E6E0]">
      {/* ─── Featured Story — full-width tile ─── */}
      <section className="pt-28 lg:pt-36 pb-14 lg:pb-24 px-6 lg:px-10">
        <div className="max-w-[960px] mx-auto">
          <Link
            to={storyHref(featuredStory.slug, featuredStory.kind)}
            className="group block"
          >
            <div className="mb-8 lg:mb-12 text-center max-w-[720px] mx-auto">
              <p className="font-['Optima',sans-serif] text-[11px] tracking-[4px] uppercase text-[#525F47]/60 mb-3">
                Featured · {featuredStory.chapter}
              </p>
              <h2 className="font-['Optima',sans-serif] text-[28px] lg:text-[40px] tracking-[4px] lg:tracking-[6px] uppercase text-[#1A1A1A] leading-[1.15] mb-4">
                {featuredStory.title}
              </h2>
              <p className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] leading-[1.85] text-[#2C2C2C]/70">
                {featuredStory.excerpt}
              </p>
            </div>
            <div className="relative overflow-hidden max-h-[60vh]">
              <ImageWithFallback
                src={featuredStory.tile}
                alt={featuredStory.title}
                className="block w-full h-full max-h-[60vh] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="mt-6 lg:mt-8 text-center">
              <span className="inline-block font-['Optima',sans-serif] text-[12px] tracking-[3px] uppercase text-[#525F47] border-b border-[#525F47] pb-1 group-hover:text-[#1A1A1A] group-hover:border-[#1A1A1A] transition-colors">
                Read the Story →
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ─── Secondary Stories Grid ─── */}
      {secondaryStories.length > 0 && (
        <section className="border-t border-[#C4CFC0]/40 py-14 lg:py-24 px-6 lg:px-10">
          <div className="max-w-[1400px] mx-auto">
            <p className="font-['Optima',sans-serif] text-[11px] tracking-[4px] uppercase text-[#525F47]/60 mb-10 text-center">
              More Stories
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
              {secondaryStories.map((story) => (
                <Link
                  key={story.slug}
                  to={storyHref(story.slug, story.kind)}
                  className="group block"
                >
                  <div className="relative overflow-hidden aspect-[5/4]">
                    <ImageWithFallback
                      src={story.tile}
                      alt={story.title}
                      className="block w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="mt-5 lg:mt-6">
                    <p className="font-['Optima',sans-serif] text-[11px] tracking-[3px] uppercase text-[#525F47]/60 mb-2">
                      {story.chapter} · {story.date}
                    </p>
                    <h3 className="font-['Optima',sans-serif] text-[20px] lg:text-[26px] tracking-[3px] lg:tracking-[4px] uppercase text-[#1A1A1A] leading-[1.2] mb-3">
                      {story.title}
                    </h3>
                    <p className="font-['Inter',sans-serif] text-[14px] leading-[1.8] text-[#2C2C2C]/70 mb-4">
                      {story.excerpt}
                    </p>
                    <span className="font-['Optima',sans-serif] text-[11px] tracking-[3px] uppercase text-[#525F47] group-hover:text-[#1A1A1A] transition-colors">
                      Read →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
