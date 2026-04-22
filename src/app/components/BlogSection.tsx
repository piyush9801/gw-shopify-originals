import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import shootMatisse from "../../assets/brand-shoot/shoot-matisse-v4.png";
import shootSunburst from "../../assets/brand-shoot/shoot-sunburst-v4.png";
import shootColorblock from "../../assets/brand-shoot/shoot-colorblock-v4.png";

// Each editorial maps to an existing story page — no new routes needed.
const editorials = [
  {
    label: "Editorial 01",
    title: "Wild Growth",
    image: shootMatisse,
    href: "/story", // Featured brand story (The Wrld)
  },
  {
    label: "Editorial 02",
    title: "Radiate",
    image: shootSunburst,
    href: "/stories/nyfw-runway",
  },
  {
    label: "Editorial 03",
    title: "Split Field",
    image: shootColorblock,
    href: "/stories/nike-billie-goodwill",
  },
];

export function BlogSection() {
  return (
    <section className="bg-[#E8E6E0] border-t border-[#C4CFC0] py-16 lg:py-24">
      <div className="text-center mb-14">
        <h2 className="font-['Optima',sans-serif] text-[28px] lg:text-[40px] tracking-[6px] lg:tracking-[10px] uppercase text-[#1A1A1A]">
          From Street to Runway
        </h2>
      </div>

      <div className="max-w-[1260px] mx-auto px-6 lg:px-0 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {editorials.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className="group cursor-pointer block"
          >
            <div className="aspect-[4/3] overflow-hidden mb-5">
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="font-['Optima',sans-serif] text-[11px] tracking-[3px] uppercase text-[#8B9B7D] mb-2">
              {item.label}
            </p>
            <h3 className="font-['Optima',sans-serif] text-[24px] lg:text-[28px] tracking-[4px] uppercase text-[#1A1A1A] leading-[1.15] mb-3 group-hover:text-[#525F47] transition-colors">
              {item.title}
            </h3>
            <span className="font-['Optima',sans-serif] text-[11px] tracking-[3px] uppercase text-[#525F47] opacity-70 group-hover:opacity-100 transition-opacity">
              Read Story →
            </span>
          </Link>
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
