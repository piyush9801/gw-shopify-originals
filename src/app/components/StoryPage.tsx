import { useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";

/* ─── bbagley photography set ─── */
import { bbagley, bbagleyStoryExtras } from "./bbagleyImages";

/* ─── Torn-paper cutout collage assets (generated via Gemini) ─── */
import storyBreak1 from "../../assets/brand-shoot/story/story-break-1.png";
import storyBreak2 from "../../assets/brand-shoot/story/story-break-2.png";
import { bbagleyStoryHero as heroSunburst } from "./bbagleyImages";
import { HeroSwoosh } from "./HeroSwoosh";

// Story-scroll unique slots (no duplicates within this page)
const imgProduct1 = bbagley[26];

const imgDeconstructed = bbagleyStoryExtras[0];
const imgThriftPile = bbagleyStoryExtras[1];
const imgStitching = bbagleyStoryExtras[2];

/* ─── Torn-paper cutout break ───
   Uses a pre-rendered torn-paper collage PNG (generated via Gemini,
   same technique as MediaGrid v5 tiles). Photo already has the torn
   edges, soft shadow and cream backdrop baked in. */
function TornBreak({ src, alt }: { src: string; alt: string }) {
  return (
    <section className="bg-[#E8E6E0] overflow-hidden">
      <div className="max-w-[1400px] mx-auto max-h-[60vh]">
        <ImageWithFallback
          src={src}
          alt={alt}
          className="block w-full h-full max-h-[60vh] object-cover"
        />
      </div>
    </section>
  );
}

/* ─── Thin decorative divider ─── */
function Divider({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`flex items-center justify-center py-2 ${dark ? "bg-[#1A1A1A]" : "bg-[#E8E6E0]"}`}>
      <div className={`w-[40px] h-px ${dark ? "bg-white/20" : "bg-[#1A1A1A]/15"}`} />
    </div>
  );
}

/* ============================================================
   1. HERO — "THE WRLD"
   Cinematic full-bleed hero, stacked subtitle lines
   ============================================================ */
function Hero() {
  return (
    <section className="relative bg-[#E8E6E0] pt-24 lg:pt-32 pb-12 lg:pb-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Title */}
        <div className="text-center mb-10 lg:mb-14">
          <h1 className="font-['Optima',sans-serif] text-[52px] lg:text-[80px] tracking-[12px] lg:tracking-[20px] uppercase text-[#1A1A1A] leading-[1]">
            <span className="text-[#8B9B7D]">THE</span> WRLD
          </h1>

          <div className="mt-6 lg:mt-8 flex flex-col items-center gap-2 lg:gap-3">
            <p className="font-['Inter',sans-serif] text-[13px] lg:text-[14px] tracking-[2.5px] text-[#1A1A1A]/60 uppercase">
              Handmade from existing garments.
            </p>
            <p className="font-['Inter',sans-serif] text-[13px] lg:text-[14px] tracking-[2.5px] text-[#1A1A1A]/60 uppercase">
              Reworked to be different.
            </p>
          </div>
        </div>

        {/* Collage with swoosh overlay */}
        <div className="relative max-h-[65vh] overflow-hidden">
          <ImageWithFallback
            src={heroSunburst}
            alt="Greenwrld reworked garment collage"
            className="block w-full h-full max-h-[65vh] object-cover"
          />
          <HeroSwoosh className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 w-[40%] h-auto opacity-85 drop-shadow-[0_4px_16px_rgba(26,26,26,0.25)]" />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   2. INTRO — Centered narrow column, typographic focus
   Pulls the opening paragraph out as a refined statement
   ============================================================ */
function Intro() {
  return (
    <section className="bg-[#E8E6E0] py-24 lg:py-36 px-6">
      <div className="max-w-[580px] mx-auto text-center">
        <p className="font-['Optima',sans-serif] text-[17px] lg:text-[19px] leading-[1.8] tracking-[1px] text-[#1A1A1A] mb-8">
          Greenwrld was built around the idea that clothing doesn&rsquo;t need
          to be newly manufactured to feel new.
        </p>
        <p className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] leading-[1.9] text-[#1A1A1A]/60">
          Each piece begins with something that already exists and is
          transformed into something entirely different.
        </p>

        <Divider />

        <p className="font-['Inter',sans-serif] text-[13px] tracking-[2px] uppercase text-[#525F47] mt-6">
          No mass production. No duplicates.
        </p>
        <p className="font-['Inter',sans-serif] text-[13px] tracking-[1px] text-[#1A1A1A]/50 mt-2">
          Just reconstructed garments designed to be worn again in a new way.
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   3. THE BEGINNING — Image left, short paragraphs right
   ============================================================ */
function TheBeginning() {
  return (
    <section className="bg-[#E8E6E0] py-20 lg:py-32 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        {/* Image */}
        <div className="w-full lg:w-[50%] flex-shrink-0">
          <ImageWithFallback
            src={imgProduct1}
            alt="Greenwrld early experiments"
            className="w-full h-[380px] lg:h-[560px] object-cover"
            style={{ objectPosition: "center 22%" }}
          />
        </div>

        {/* Text — narrow column for scanability */}
        <div className="w-full lg:w-[50%] lg:pl-4">
          <p className="font-['Optima',sans-serif] text-[11px] tracking-[3px] uppercase text-[#525F47]/50 mb-3">
            Chapter 01
          </p>
          <h2 className="font-['Optima',sans-serif] text-[28px] lg:text-[34px] tracking-[5px] lg:tracking-[7px] uppercase text-[#1A1A1A] leading-[1.15] mb-10">
            <span className="text-[#525F47]">The</span> Beginning
          </h2>

          <p className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] leading-[1.85] text-[#2C2C2C]/75 max-w-[440px] mb-6">
            Greenwrld started as a creative outlet and quickly became a passion
            project built around sustainability and individuality.
          </p>
          <p className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] leading-[1.85] text-[#2C2C2C]/75 max-w-[440px] mb-6">
            By reworking garments sourced secondhand, the goal was simple: show
            that clothing already in circulation can be redesigned into something
            bold, expressive, and completely new.
          </p>
          <p className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] leading-[1.85] text-[#2C2C2C]/75 max-w-[440px]">
            What began as experimentation with deconstruction and reconstruction
            evolved into a brand centered around one-of-a-kind pieces and
            thoughtful design.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   4. MADE AGAIN — Large typographic pull-quote + leaf watermark
   Center-stage section that feels like a brand manifesto
   ============================================================ */
function MadeAgain() {
  return (
    <section className="relative bg-[#E8E6E0] py-28 lg:py-44 overflow-hidden">
      <div className="relative z-10 max-w-[620px] mx-auto text-center px-6">
        <p className="font-['Optima',sans-serif] text-[11px] tracking-[3px] uppercase text-[#525F47]/50 mb-3">
          Chapter 02
        </p>
        <h2 className="font-['Optima',sans-serif] text-[40px] lg:text-[58px] tracking-[8px] lg:tracking-[12px] uppercase text-[#1A1A1A] leading-[1.1] mb-12">
          <span className="text-[#525F47]">Made</span> Again
        </h2>

        <p className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] leading-[1.9] text-[#2C2C2C]/75 mb-6">
          Each Greenwrld garment begins with an existing piece of clothing.
        </p>
        <p className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] leading-[1.9] text-[#2C2C2C]/75 mb-6">
          The garment is taken apart, reworked, and reconstructed by hand.
          Through that process, familiar materials become something entirely new.
        </p>
        <p className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] leading-[1.9] text-[#2C2C2C]/75">
          No two pieces are exactly the same, and each design reflects the
          process of rebuilding rather than manufacturing.
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   5. THE PROCESS — Dark section with numbered steps
   Visual hierarchy through numbers, keeping text light
   ============================================================ */
function TheProcess() {
  const steps = [
    {
      num: "01",
      title: "Source",
      text: "Garments are sourced secondhand — surplus hoodies, jackets, and outerwear that already exist in the world.",
      img: imgThriftPile,
    },
    {
      num: "02",
      title: "Deconstruct",
      text: "Each garment is carefully taken apart by hand. Seams are opened, panels separated, and materials assessed for their potential.",
      img: imgStitching,
    },
    {
      num: "03",
      title: "Rebuild",
      text: "The deconstructed materials are rebuilt using a combination of original fabric and new design elements. Every stitch is done by hand.",
      img: imgDeconstructed,
    },
  ];

  return (
    <section className="bg-[#1A1A1A] py-24 lg:py-36 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="font-['Optima',sans-serif] text-[11px] tracking-[3px] uppercase text-[#8B9B7D]/50 mb-3">
            Chapter 03
          </p>
          <h2 className="font-['Optima',sans-serif] text-[28px] lg:text-[34px] tracking-[5px] lg:tracking-[7px] uppercase text-white leading-[1.15]">
            <span className="text-[#8B9B7D]">The</span> Process
          </h2>
          <p className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] leading-[1.9] text-white/50 mt-6 max-w-[480px] mx-auto">
            Every piece is created through a hands-on reconstruction process.
          </p>
        </div>

        {/* Process steps */}
        <div className="flex flex-col gap-20 lg:gap-32">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-10 lg:gap-16 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-[50%] flex-shrink-0">
                <ImageWithFallback
                  src={step.img}
                  alt={step.title}
                  className="w-full h-[300px] lg:h-[420px] object-cover"
                  style={{ objectPosition: "center 30%" }}
                />
              </div>

              {/* Text */}
              <div className="w-full lg:w-[50%]">
                <span className="font-['Optima',sans-serif] text-[48px] lg:text-[64px] tracking-[4px] text-[#525F47]/20 leading-[1]">
                  {step.num}
                </span>
                <h3 className="font-['Optima',sans-serif] text-[22px] lg:text-[26px] tracking-[4px] uppercase text-white mt-2 mb-5">
                  {step.title}
                </h3>
                <p className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] leading-[1.85] text-white/60 max-w-[420px]">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing note */}
        <div className="text-center mt-20 lg:mt-28">
          <div className="w-[40px] h-px bg-white/15 mx-auto mb-8" />
          <p className="font-['Optima',sans-serif] text-[15px] lg:text-[17px] tracking-[3px] uppercase text-[#8B9B7D] max-w-[460px] mx-auto leading-[1.7]">
            Because the process relies on existing garments, each finished piece
            is naturally limited and unique.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   6. MOMENTS — Clean highlights list with side image
   ============================================================ */
function Moments() {
  const highlights = [
    "Collaboration with Nike and Billie Eilish for a sustainable showcase at Goodwill in Los Angeles",
    "New York Fashion Week runway presentation featuring a 10-look collection",
    "Collaboration with Stanley during NYFW",
    "Urban Outfitters Title Nine anniversary collaboration",
    "Capsule collection featured at Flying Solo in New York",
    "Vendor presence at ComplexCon alongside brands like Nike, Adidas, and BAPE",
  ];

  return (
    <section className="bg-[#E8E6E0] py-20 lg:py-32 px-6">
      <div className="max-w-[780px] mx-auto text-center">
        <p className="font-['Optima',sans-serif] text-[11px] tracking-[3px] uppercase text-[#525F47]/50 mb-3">
          Chapter 04
        </p>
        <h2 className="font-['Optima',sans-serif] text-[28px] lg:text-[34px] tracking-[5px] lg:tracking-[7px] uppercase text-[#1A1A1A] leading-[1.15] mb-6">
          <span className="text-[#525F47]">Mo</span>ments
        </h2>
        <p className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] leading-[1.85] text-[#2C2C2C]/75 mb-12">
          Greenwrld has grown through a series of collaborations, events, and
          cultural moments.
        </p>

        <ul className="space-y-5 mb-12 text-left">
          {highlights.map((item) => (
            <li
              key={item}
              className="font-['Inter',sans-serif] text-[13px] lg:text-[14px] leading-[1.7] text-[#2C2C2C]/70 pl-5 border-l-[2px] border-[#525F47]/40"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="w-[40px] h-px bg-[#1A1A1A]/10 mx-auto mb-6" />

        <p className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] leading-[1.85] text-[#2C2C2C]/75">
          Greenwrld pieces have also been worn by artists and public figures
          including Billie Eilish, Noah Schnapp, Post Malone, and Ronnie 2K.
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   MARQUEE — "Reworked. Reimagined. One of one."
   ============================================================ */
function Marquee() {
  return (
    <section className="bg-[#E8E6E0] border-t border-[#C4CFC0]/30 py-8 lg:py-12 overflow-hidden">
      <div className="flex whitespace-nowrap animate-[storyMarquee_22s_linear_infinite]">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="font-['Optima',sans-serif] text-[48px] lg:text-[80px] tracking-[8px] lg:tracking-[14px] uppercase text-[#8B9B7D] mx-6 shrink-0"
          >
            Reworked. Reimagined. One of one.
          </span>
        ))}
      </div>
      <style>{`
        @keyframes storyMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

/* ============================================================
   CLOSING CTA — Shop link
   ============================================================ */
function ClosingCTA() {
  return (
    <section className="bg-[#1A1A1A] py-24 lg:py-36 px-6">
      <div className="max-w-[560px] mx-auto text-center">
        <h2 className="font-['Optima',sans-serif] text-[26px] lg:text-[32px] tracking-[6px] lg:tracking-[8px] uppercase text-white leading-[1.2] mb-6">
          <span className="text-[#8B9B7D]">One of</span> a Kind
        </h2>
        <p className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] leading-[1.9] text-white/55 mb-10">
          Every piece starts with something that already exists and becomes
          something that can never be replicated.
        </p>
        <Link
          to="/shop"
          className="inline-block font-['Optima',sans-serif] text-[12px] tracking-[2.5px] uppercase bg-[#525F47] text-white px-10 py-4 hover:bg-[#4b5443] transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}

/* ============================================================
   PAGE EXPORT
   ============================================================ */
export function StoryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Intro statement */}
      <Intro />

      {/* Torn-paper cutout break */}
      <TornBreak src={storyBreak1} alt="Reworked garment cutout" />

      {/* 3. The Beginning */}
      <TheBeginning />

      {/* 4. Made Again */}
      <MadeAgain />

      {/* 5. The Process (dark) */}
      <TheProcess />

      {/* 6. Moments */}
      <Moments />

      {/* Marquee */}
      <Marquee />

      {/* Closing CTA */}
      <ClosingCTA />
    </>
  );
}
