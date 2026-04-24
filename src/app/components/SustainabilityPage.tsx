import { useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";

/* ─── bbagley photography set ─── */
import { bbagleySustain } from "./bbagleyImages";

/* ─── brand-shoot imagery ─── */
import sustainReworking from "../../assets/brand-shoot/sustain-reworking-v4.png";
import sustainChoosing from "../../assets/brand-shoot/sustain-choosing-v4.png";
import heroCollage from "../../assets/brand-shoot/story/story-break-1.png";
import { HeroSwoosh } from "./HeroSwoosh";

// Mix: documentary originals for authenticity (problem/craft beats),
// painted-mural treated for aspirational beats (method / choosing better).
const imgLeaves = bbagleySustain[0];            // original — nature break
const imgWaste = bbagleySustain[1];             // original — fast-fashion problem
const imgArtisan = bbagleySustain[2];           // original — hands / craft break
const imgCotton = bbagleySustain[3];            // original — raw materials break
const imgProduct2 = sustainReworking;           // treated — painted botanical
const imgEarthTones = sustainChoosing;          // treated — painted dusk-earth halo

/* ─── Full-bleed image break ─── */
function ImageBreak({ src, alt }: { src: string; alt: string }) {
  return (
    <section className="w-full h-[260px] lg:h-[440px] overflow-hidden">
      <ImageWithFallback
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </section>
  );
}

/* ============================================================
   1. HERO — confident typographic statement on forest green
   ============================================================ */
function Hero() {
  return (
    <section className="relative bg-[#DDD7CA] pt-24 lg:pt-32 pb-10 lg:pb-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-10 lg:mb-14">
          <p className="font-['Optima',sans-serif] text-[11px] lg:text-[12px] tracking-[5px] uppercase text-[#525F47]/60 mb-6">
            Our Approach
          </p>
          <h1 className="font-['Optima',sans-serif] text-[56px] lg:text-[104px] tracking-[8px] lg:tracking-[14px] uppercase text-[#1A1A1A] leading-[1.05]">
            Sustain<span className="text-[#525F47]">ability</span>
          </h1>
          <div className="w-[60px] h-px bg-[#C46A45] mx-auto mt-8" />
        </div>

        <div className="relative max-h-[70vh] overflow-hidden">
          <ImageWithFallback
            src={heroCollage}
            alt="Greenwrld sustainability collage"
            className="block w-full h-full max-h-[70vh] object-cover"
          />
          <HeroSwoosh className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 w-[36%] h-auto opacity-85 drop-shadow-[0_4px_16px_rgba(26,26,26,0.25)]" />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   2. WHY IT MATTERS — split manifesto: painted accent left, text right
   ============================================================ */
function WhyItMatters() {
  return (
    <section className="bg-[#E8E6E0] py-24 lg:py-36 px-6 lg:px-12">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
        {/* Left — oversized pull statement */}
        <div className="lg:col-span-5">
          <p className="font-['Optima',sans-serif] text-[11px] tracking-[5px] uppercase text-[#525F47]/60 mb-4">
            Why It Matters
          </p>
          <h2 className="font-['Optima',sans-serif] text-[32px] lg:text-[44px] tracking-[3px] lg:tracking-[4px] uppercase text-[#1A1A1A] leading-[1.15]">
            Fashion doesn&rsquo;t need to create <span className="text-[#525F47]">more waste</span> to create <span className="text-[#525F47]">something new.</span>
          </h2>
        </div>

        {/* Right — supporting copy */}
        <div className="lg:col-span-7 lg:pt-6">
          <p className="font-['Inter',sans-serif] text-[15px] lg:text-[17px] leading-[1.9] text-[#1A1A1A] mb-6 max-w-[560px]">
            Greenwrld was built around the idea that the clothes already exist.
            The materials, the textiles, the garments — they&rsquo;re here.
          </p>
          <p className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] leading-[1.9] text-[#1A1A1A]/65 max-w-[560px]">
            By working with garments that already exist, we focus on reducing
            textile waste while still allowing people to wear something bold and
            original.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. THE PROBLEM WITH FAST FASHION — Dark, impactful
   Split layout: stark stat-like text left, image right
   ============================================================ */
function FastFashion() {
  return (
    <section className="bg-[#1A1A1A]">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row">
        {/* Left — text, generous padding */}
        <div className="w-full lg:w-[55%] flex items-center px-8 lg:px-20 py-20 lg:py-32">
          <div className="max-w-[480px]">
            <p className="font-['Optima',sans-serif] text-[11px] tracking-[3px] uppercase text-[#8B9B7D]/50 mb-3">
              The Issue
            </p>
            <h2 className="font-['Optima',sans-serif] text-[24px] lg:text-[30px] tracking-[5px] lg:tracking-[6px] uppercase text-white leading-[1.2] mb-10">
              The Problem with{" "}
              <span className="text-[#8B9B7D]">Fast Fashion</span>
            </h2>

            <p className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] leading-[1.9] text-white/60 mb-6">
              The fashion industry produces enormous amounts of textile waste
              every year.
            </p>

            <p className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] leading-[1.9] text-white/60 mb-6">
              Millions of garments end up in landfills despite being wearable,
              repairable, or recyclable. Fast production cycles encourage
              constant consumption while leaving behind materials that could have
              been used again.
            </p>

            {/* Pull-out statement */}
            <div className="border-l-[2px] border-[#525F47] pl-6 mt-10">
              <p className="font-['Optima',sans-serif] text-[16px] lg:text-[18px] tracking-[2px] uppercase text-[#8B9B7D] leading-[1.6]">
                Greenwrld exists as an alternative approach.
              </p>
            </div>
          </div>
        </div>

        {/* Right — image */}
        <div className="w-full lg:w-[45%] h-[360px] lg:h-auto lg:min-h-[600px] overflow-hidden">
          <ImageWithFallback
            src={imgWaste}
            alt="Textile waste — the problem with fast fashion"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   4. REWORKING WHAT ALREADY EXISTS — Image left, text right
   Light section, staggered layout
   ============================================================ */
function Reworking() {
  return (
    <section className="bg-[#E8E6E0] py-20 lg:py-32 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        {/* Image with swoosh overlay */}
        <div className="w-full lg:w-[50%] flex-shrink-0 relative">
          <ImageWithFallback
            src={imgProduct2}
            alt="Reworked garment"
            className="w-full h-[360px] lg:h-[520px] object-cover"
          />
          <HeroSwoosh className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 w-[55%] h-auto opacity-85 drop-shadow-[0_4px_16px_rgba(26,26,26,0.25)]" />
        </div>

        {/* Text */}
        <div className="w-full lg:w-[50%] lg:pl-4">
          <p className="font-['Optima',sans-serif] text-[11px] tracking-[3px] uppercase text-[#525F47]/50 mb-3">
            Our Method
          </p>
          <h2 className="font-['Optima',sans-serif] text-[24px] lg:text-[30px] tracking-[5px] lg:tracking-[6px] uppercase text-[#1A1A1A] leading-[1.2] mb-10">
            Reworking What{" "}
            <span className="text-[#525F47]">Already Exists</span>
          </h2>

          <p className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] leading-[1.9] text-[#2C2C2C]/75 max-w-[440px] mb-6">
            Instead of manufacturing new garments from scratch, Greenwrld pieces
            are built using materials sourced secondhand.
          </p>
          <p className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] leading-[1.9] text-[#2C2C2C]/75 max-w-[440px] mb-6">
            Each item is reconstructed and redesigned, giving existing garments a
            second life rather than sending them to waste.
          </p>
          <p className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] leading-[1.9] text-[#2C2C2C]/75 max-w-[440px]">
            This process reduces demand for new materials while transforming
            clothing into something completely new.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   5. HANDMADE, NOT MASS PRODUCED — Centered manifesto-style
   With leaf watermark for visual weight
   ============================================================ */
function Handmade() {
  return (
    <section className="relative bg-[#E8E6E0] py-28 lg:py-40 overflow-hidden">
      <div className="relative z-10 max-w-[600px] mx-auto text-center px-6">
        <p className="font-['Optima',sans-serif] text-[11px] tracking-[3px] uppercase text-[#525F47]/50 mb-3">
          By Design
        </p>
        <h2 className="font-['Optima',sans-serif] text-[26px] lg:text-[34px] tracking-[5px] lg:tracking-[7px] uppercase text-[#1A1A1A] leading-[1.15] mb-12">
          <span className="text-[#525F47]">Handmade,</span> Not Mass Produced
        </h2>

        <p className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] leading-[1.9] text-[#2C2C2C]/75 mb-6">
          Because each garment is created through reconstruction, production is
          naturally limited.
        </p>
        <p className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] leading-[1.9] text-[#2C2C2C]/75 mb-6">
          Every piece is made by hand and built around the materials available at
          the time, which means each item carries its own character and history.
        </p>

        {/* Pull-quote line */}
        <div className="w-[40px] h-px bg-[#525F47]/25 mx-auto mt-10 mb-8" />

        <p className="font-['Optima',sans-serif] text-[15px] lg:text-[17px] tracking-[2px] uppercase text-[#525F47] leading-[1.7]">
          The result is clothing that feels personal, intentional, and unique.
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   6. CHOOSING BETTER — Dark section, image right, text left
   Mirrors the Fast Fashion section but reversed
   ============================================================ */
function ChoosingBetter() {
  return (
    <section className="bg-[#1A1A1A]">
      <div className="max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row">
        {/* Left — image */}
        <div className="w-full lg:w-[45%] h-[360px] lg:h-auto lg:min-h-[560px] overflow-hidden">
          <ImageWithFallback
            src={imgEarthTones}
            alt="Choosing sustainable clothing"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right — text */}
        <div className="w-full lg:w-[55%] flex items-center px-8 lg:px-20 py-20 lg:py-32">
          <div className="max-w-[480px]">
            <p className="font-['Optima',sans-serif] text-[11px] tracking-[3px] uppercase text-[#8B9B7D]/50 mb-3">
              Your Choice
            </p>
            <h2 className="font-['Optima',sans-serif] text-[24px] lg:text-[30px] tracking-[5px] lg:tracking-[6px] uppercase text-white leading-[1.2] mb-10">
              Choosing <span className="text-[#8B9B7D]">Better</span> Clothing
            </h2>

            <p className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] leading-[1.9] text-white/60 mb-6">
              Greenwrld encourages a different relationship with clothing.
            </p>
            <p className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] leading-[1.9] text-white/60 mb-6">
              Instead of disposable fashion, the goal is to create pieces people
              want to keep, wear, and value.
            </p>
            <p className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] leading-[1.9] text-white/60">
              By choosing garments designed to last and made with intention,
              consumers can help reduce waste while supporting independent design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   7. CLOSING — CTA to shop, keeps it actionable
   ============================================================ */
function ClosingCTA() {
  return (
    <section className="bg-[#E8E6E0] py-24 lg:py-36 px-6">
      <div className="max-w-[540px] mx-auto text-center">
        <p className="font-['Optima',sans-serif] text-[16px] lg:text-[18px] tracking-[2px] uppercase text-[#1A1A1A] leading-[1.7] mb-4">
          Wear something that was made to matter.
        </p>
        <p className="font-['Inter',sans-serif] text-[13px] lg:text-[14px] leading-[1.8] text-[#1A1A1A]/50 mb-10">
          Every purchase supports handmade production, reduces textile waste, and
          keeps existing materials in use.
        </p>
        <Link
          to="/shop"
          className="inline-block font-['Optima',sans-serif] text-[13px] tracking-[3px] uppercase bg-[#E8E6E0] text-[#1A1A1A] px-12 py-4 border border-[#1A1A1A]/20 hover:bg-white transition-colors"
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
export function SustainabilityPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* 1. Hero — typographic, no image */}
      <Hero />

      {/* 2. Why It Matters */}
      <WhyItMatters />

      {/* Image break */}
      <ImageBreak src={imgLeaves} alt="Nature" />

      {/* 3. The Problem with Fast Fashion (dark) */}
      <FastFashion />

      {/* Image break */}
      <ImageBreak src={imgCotton} alt="Raw materials" />

      {/* 4. Reworking What Already Exists */}
      <Reworking />

      {/* Image break */}
      <ImageBreak src={imgArtisan} alt="Artisan craftsmanship" />

      {/* 5. Handmade, Not Mass Produced */}
      <Handmade />

      {/* 6. Choosing Better Clothing (dark) */}
      <ChoosingBetter />

      {/* 7. Closing CTA */}
      <ClosingCTA />
    </>
  );
}
