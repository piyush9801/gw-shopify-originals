import { useEffect } from "react";
import { Link, useParams } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { stories } from "./stories";
import { HeroSwoosh } from "./HeroSwoosh";

export function StoryArticle() {
  const { slug } = useParams();
  const story = stories.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!story || story.kind !== "article") {
    return (
      <div className="bg-[#E8E6E0] min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center max-w-[500px]">
          <p className="font-['Optima',sans-serif] text-[11px] tracking-[4px] uppercase text-[#525F47]/60 mb-4">
            404
          </p>
          <h1 className="font-['Optima',sans-serif] text-[28px] lg:text-[36px] tracking-[4px] uppercase text-[#1A1A1A] mb-6">
            Story not found
          </h1>
          <Link
            to="/stories"
            className="inline-block font-['Optima',sans-serif] text-[12px] tracking-[3px] uppercase text-[#525F47] border-b border-[#525F47] pb-1"
          >
            ← Back to Stories
          </Link>
        </div>
      </div>
    );
  }

  const index = stories.findIndex((s) => s.slug === slug);
  const nextStory =
    stories
      .slice(index + 1)
      .find((s) => s.slug !== slug) ??
    stories.find((s) => s.slug !== slug);

  return (
    <div className="bg-[#E8E6E0]">
      {/* ─── Breadcrumb ─── */}
      <div className="pt-24 lg:pt-32 pb-4 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <nav className="font-['Optima',sans-serif] text-[11px] tracking-[3px] uppercase text-[#525F47]/60 flex items-center gap-2">
          <Link to="/stories" className="hover:text-[#1A1A1A] transition-colors">
            Stories
          </Link>
          <span>/</span>
          <span className="text-[#1A1A1A]/50">{story.chapter}</span>
        </nav>
      </div>

      {/* ─── Title + meta ─── */}
      <section className="px-6 lg:px-10 pt-4 pb-10 lg:pb-16">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="font-['Optima',sans-serif] text-[11px] tracking-[4px] uppercase text-[#525F47]/60 mb-5">
            {story.chapter} · {story.date}
          </p>
          <h1 className="font-['Optima',sans-serif] text-[36px] lg:text-[64px] tracking-[5px] lg:tracking-[8px] uppercase text-[#1A1A1A] leading-[1.1] mb-6">
            {story.title}
          </h1>
          <div className="w-[40px] h-px bg-[#C46A45] mx-auto" />
        </div>
      </section>

      {/* ─── Feature image (collage) with swoosh overlay ─── */}
      {story.featureImage && (
        <section className="px-6 lg:px-10 pb-14 lg:pb-20">
          <div className="max-w-[1400px] mx-auto relative">
            <ImageWithFallback
              src={story.featureImage}
              alt={story.title}
              className="block w-full h-auto"
            />
            <HeroSwoosh className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 w-[40%] h-auto opacity-85 drop-shadow-[0_4px_16px_rgba(26,26,26,0.25)]" />
          </div>
        </section>
      )}

      {/* ─── Body ─── */}
      <section className="px-6 pb-24 lg:pb-36">
        <div className="max-w-[680px] mx-auto space-y-6">
          {story.body?.map((para, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "font-['Optima',sans-serif] text-[18px] lg:text-[22px] leading-[1.7] tracking-[0.5px] text-[#1A1A1A]"
                  : "font-['Inter',sans-serif] text-[15px] lg:text-[16px] leading-[1.9] text-[#2C2C2C]/80"
              }
            >
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* ─── Divider + next story ─── */}
      {nextStory && (
        <section className="border-t border-[#C4CFC0]/40 py-16 lg:py-24 px-6 lg:px-10">
          <div className="max-w-[1100px] mx-auto">
            <p className="font-['Optima',sans-serif] text-[11px] tracking-[4px] uppercase text-[#525F47]/60 mb-6 text-center">
              Next
            </p>
            <Link
              to={
                nextStory.kind === "full"
                  ? "/story"
                  : `/stories/${nextStory.slug}`
              }
              className="group block"
            >
              <div className="relative overflow-hidden max-w-[720px] mx-auto">
                <ImageWithFallback
                  src={nextStory.tile}
                  alt={nextStory.title}
                  className="block w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="text-center mt-5 lg:mt-7">
                <p className="font-['Optima',sans-serif] text-[11px] tracking-[3px] uppercase text-[#525F47]/60 mb-2">
                  {nextStory.chapter}
                </p>
                <h3 className="font-['Optima',sans-serif] text-[22px] lg:text-[30px] tracking-[4px] uppercase text-[#1A1A1A] group-hover:text-[#525F47] transition-colors">
                  {nextStory.title}
                </h3>
              </div>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
