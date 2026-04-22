import patternSwirl from "../../assets/patterns/pattern-swirl.png";

export function FeaturedBanner() {
  return (
    <section className="relative w-full bg-[#525F47] overflow-hidden">
      {/* Organic swirl pattern background (from Figma) */}
      <img
        src={patternSwirl}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />

      <div className="relative z-10 flex items-center justify-center py-16 lg:py-24 px-8">
        <div className="text-center">
          <h2 className="font-['Optima',sans-serif] text-[28px] lg:text-[42px] tracking-[6px] lg:tracking-[10px] uppercase text-white">
            Reworked. <span className="text-[#C4CFC0]">Reimagined</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
