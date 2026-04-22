// GraphicShowcase — compact lookbook band.
// Replaces the previous magazine-spread treatment which was too long and felt
// like a foreign art piece. Now a single horizontal band that introduces the
// graphic language used by BlogSection (linework portraits) and can grow if
// we add more graphic moments. One illustration, one line of copy, one CTA.
import { Link } from "react-router";
import patternSvg from "../../assets/gw-pattern/gw-pattern.svg";
import groupArt from "../../assets/bbagley-group/group-psychedelic-wide.png";

const OPTIMA = "'Optima', sans-serif";

export function GraphicShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#4b5443] text-[#E8E6E0]">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: `url(${patternSvg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "multiply",
        }}
      />

      <div className="relative max-w-[1260px] mx-auto px-6 lg:px-12 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left — the one unified group illustration, framed */}
          <figure className="lg:col-span-7 relative">
            <div className="border-[3px] border-[#E8E6E0]">
              <img
                src={groupArt}
                alt="GREENWRLD collective — psychedelic group illustration"
                className="block w-full h-auto"
              />
            </div>
          </figure>

          {/* Right — short copy block, matches site's standard type system */}
          <div className="lg:col-span-5" style={{ fontFamily: OPTIMA }}>
            <p className="text-[11px] tracking-[4px] uppercase text-[#E8E6E0]/65 mb-4">
              Spring 2026 Lookbook
            </p>
            <h2 className="text-[28px] lg:text-[40px] tracking-[6px] lg:tracking-[8px] uppercase text-[#E8E6E0] leading-[1.1] mb-5">
              A New Wrld
              <br />
              Of Color
            </h2>
            <p className="text-[14px] lg:text-[15px] leading-[1.55] text-[#E8E6E0]/85 tracking-[0.4px] mb-8 max-w-[380px]">
              Three friends. One mountain. Every piece one of one — reworked,
              rebuilt, never repeated.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-[#E8E6E0] text-[#1A1A1A] text-[12px] tracking-[3.5px] uppercase px-9 py-3.5 hover:bg-white transition-colors"
            >
              Enter the Drop
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
