import { ImageWithFallback } from "./figma/ImageWithFallback";
import { bbagleyCollab as imgCollab } from "./bbagleyImages";
import patternFlower from "../../assets/patterns/pattern-flower.png";

export function Collaboration() {
  return (
    <section className="relative bg-[#525F47] overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[520px] lg:min-h-[640px]">
        {/* Image — full bleed left half */}
        <div className="lg:w-[50%] relative">
          <div className="h-[400px] lg:h-full lg:absolute lg:inset-0">
            <ImageWithFallback
              src={imgCollab}
              alt="GREENWRLD backstage at fashion week"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Text — manifesto side with floral pattern (from Figma) */}
        <div className="lg:w-[50%] relative flex items-center px-8 lg:px-16 xl:px-24 py-16 lg:py-20">
          <img
            src={patternFlower}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          />

          <div className="relative z-10 max-w-[520px]">
            <h2 className="font-['Optima',sans-serif] text-[38px] lg:text-[56px] xl:text-[64px] tracking-[6px] lg:tracking-[8px] uppercase text-white leading-[1.1] mb-5">
              Slow
              <br />
              Fashion
            </h2>
            <p className="font-['Optima',sans-serif] text-[14px] lg:text-[16px] tracking-[3.5px] uppercase text-[#C4CFC0] mb-10">
              Built from what already exists
            </p>
            <a
              href="#"
              className="inline-block bg-[#E8E6E0] text-[#1A1A1A] px-12 py-4 font-['Optima',sans-serif] text-[13px] tracking-[3px] uppercase hover:bg-white transition-colors relative group/btn"
            >
              <span className="relative z-10">Learn More</span>
              <span className="absolute inset-0 bg-white scale-x-0 origin-left group-hover/btn:scale-x-100 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
