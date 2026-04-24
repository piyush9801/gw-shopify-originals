import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { bbagleyMediaGrid } from "./bbagleyImages";
const [shoot1, shoot2, shoot3] = bbagleyMediaGrid;  // 3127, 3137, 3146

const cards = [
  {
    title: "Shop All",
    cta: "View All",
    image: shoot1,
    accent: "#525F47",
    href: "/shop",
  },
  {
    title: "New Arrivals",
    cta: "View New",
    image: shoot2,
    accent: "#8B9B7D",
    href: "/shop?filter=new",
  },
  {
    title: "Best Sellers",
    cta: "View Best Sellers",
    image: shoot3,
    accent: "#8B9B7D",
    href: "/shop",
  },
];

export function MediaGrid() {
  return (
    <section className="bg-[#E8E6E0] py-10">
      <div className="max-w-[1260px] mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card) => (
            <Link to={card.href} key={card.title} className="group cursor-pointer">
              <div className="relative overflow-hidden h-[280px] lg:h-[360px]">
                <ImageWithFallback
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.25)]" />
                {/* Color accent bar at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[4px]"
                  style={{ backgroundColor: card.accent }}
                />
                {/* Title + CTA inside image */}
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6 lg:p-8">
                  <h3 className="font-['Optima',sans-serif] text-[22px] lg:text-[26px] tracking-[5px] lg:tracking-[6px] uppercase text-white whitespace-nowrap mb-2">
                    {card.title}
                  </h3>
                  <span className="font-['Optima',sans-serif] text-[12px] tracking-[3px] uppercase text-white/70 group-hover:text-white transition-colors">
                    {card.cta} →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
