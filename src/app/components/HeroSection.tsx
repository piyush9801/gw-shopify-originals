import { useState } from "react";
import { Link } from "react-router";
import { HeroSwoosh } from "./HeroSwoosh";
import { bbagleyHero } from "./bbagleyImages";
import { HeroTuner, loadHeroTune } from "./HeroTuner";

export function HeroSection() {
  const [tune, setTune] = useState(loadHeroTune);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-end overflow-hidden pb-16 bg-[#E8E6E0]">
      {/* Full-bleed photography — bbagley 3142 (client-chosen front) */}
      <img
        src={bbagleyHero}
        alt="GREENWRLD upcycled fashion"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: `${tune.heroObjectX}% ${tune.heroObjectY}%` }}
      />

      {/* Brand swoosh + sparkles around the model */}
      <HeroSwoosh
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto drop-shadow-[0_2px_14px_rgba(0,0,0,0.3)] z-[5]"
        style={{
          top: `${tune.swooshTop}%`,
          width: `${tune.swooshWidth}vw`,
          maxWidth: `${tune.swooshMaxWidth}px`,
          opacity: tune.swooshOpacity / 100,
        }}
      />

      {/* Top gradient — makes nav links readable over the cream-collage top */}
      <div className="absolute inset-x-0 top-0 h-[160px] bg-gradient-to-b from-black/55 via-black/20 to-transparent pointer-events-none z-[15]" />

      {/* Soft fade at the bottom so the CTA reads on both cream and forest backgrounds */}
      <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-transparent via-black/30 to-black/70" />

      <div className="relative z-10 text-center px-6 flex flex-col items-center">
        <p className="font-['Optima',sans-serif] text-[14px] lg:text-[16px] tracking-[3px] uppercase text-white/85 mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          Handmade from existing garments.
        </p>
        <p className="font-['Optima',sans-serif] text-[14px] lg:text-[16px] tracking-[3px] uppercase text-white mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          Never reproduced. Always reimagined.
        </p>
        <Link
          to="/shop"
          className="bg-[#E8E6E0] text-[#1A1A1A] font-['Optima',sans-serif] text-[13px] tracking-[3px] uppercase px-12 py-4 hover:bg-white transition-colors"
        >
          Shop Now
        </Link>
      </div>

      <HeroTuner tune={tune} onChange={setTune} />
    </section>
  );
}
