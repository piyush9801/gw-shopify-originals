import { useState } from "react";
import { Link, useSearchParams } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import { bbagleyInstagram } from "./bbagleyImages";
import { products as productCatalog } from "./products";
import imgShopHero from "../../assets/brand-shoot/shoot-shop-hero-v4.png";
import imgNewArrivalsHero from "../../assets/brand-shoot/shoot-colorblock-v4.png";
import { PatternDivider } from "./PatternDivider";
import { HeroSwoosh } from "./HeroSwoosh";

/* ─── Product Data — derived from canonical catalog ─── */
const products = productCatalog.map((p) => ({
  id: p.id,
  slug: p.slug,
  image: p.images[0],
  name: p.name,
  price: p.price,
  badge: p.badge,
}));

/* ─── Instagram Images ─── */
const instagramImages = [
  { id: 1, src: bbagleyInstagram[0] },
  { id: 2, src: bbagleyInstagram[1] },
  { id: 3, src: bbagleyInstagram[2] },
  { id: 4, src: bbagleyInstagram[3] },
  { id: 5, src: bbagleyInstagram[4] },
];

type GridView = "large" | "small" | "list";

export function ShopPage() {
  const [gridView, setGridView] = useState<GridView>("large");
  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Best Selling");
  const [searchParams] = useSearchParams();

  const filter = searchParams.get("filter");
  const isNewArrivals = filter === "new";
  const displayedProducts = isNewArrivals
    ? products.filter((p) => p.badge === "New")
    : products;

  const sortOptions = ["Best Selling", "Alphabetically, A-Z", "Alphabetically, Z-A", "Price, Low to High", "Price, High to Low", "Date, Old to New", "Date, New to Old"];

  const gridCols = {
    large: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    small: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
    list: "grid-cols-1 lg:grid-cols-2",
  };

  return (
    <div className="bg-[#E8E6E0]">
      {/* ═══ Hero Banner ═══ */}
      <section className="relative w-full h-[70vh] lg:h-[80vh] flex flex-col items-center justify-end overflow-hidden pb-16">
        <img
          src={isNewArrivals ? imgNewArrivalsHero : imgShopHero}
          alt="GREENWRLD upcycled fashion collection"
          className="absolute inset-0 w-full h-full object-cover object-[50%_35%]"
        />
        {/* Brand swoosh + sparkles around the model — only on default shop hero */}
        {!isNewArrivals && (
          <HeroSwoosh className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[48vw] max-w-[420px] lg:max-w-[480px] h-auto mix-blend-screen opacity-90 drop-shadow-[0_2px_14px_rgba(0,0,0,0.3)]" />
        )}
        {/* Top fade — gives the GREENWRLD logo a darker backing so it reads cleanly over the subject */}
        <div className="absolute inset-x-0 top-0 h-[18%] bg-gradient-to-b from-black/35 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[23%] to-black" />
        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          {isNewArrivals && (
            <p className="font-['Optima',sans-serif] text-[11px] lg:text-[12px] tracking-[5px] uppercase text-[#C46A45] mb-3">
              Latest Drop
            </p>
          )}
          <h1 className="font-['Optima',sans-serif] text-[36px] lg:text-[56px] tracking-[6px] lg:tracking-[10px] uppercase text-white leading-[1.1] mb-5">
            {isNewArrivals ? "New Arrivals" : "Wear Something Different"}
          </h1>
          <p className="font-['Optima',sans-serif] text-[14px] lg:text-[16px] tracking-[3.5px] uppercase text-white/60">
            {isNewArrivals ? "Freshly reworked this week" : "Made from what already exists"}
          </p>
        </div>
      </section>

      {/* ═══ Toolbar ═══ */}
      <div className="sticky top-[68px] lg:top-[76px] z-40 bg-[#E8E6E0] border-b border-[#1A1A1A]/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-3.5 flex items-center justify-between">
          {/* Left — View Toggles */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setGridView("large")}
              className={`transition-opacity ${gridView === "large" ? "opacity-100" : "opacity-30 hover:opacity-50"}`}
              title="Large grid"
            >
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                <rect x="0.5" y="0.5" width="7" height="7" stroke="#1A1A1A" strokeWidth="1" />
                <rect x="9.5" y="0.5" width="7" height="7" stroke="#1A1A1A" strokeWidth="1" />
                <rect x="0.5" y="9.5" width="7" height="7" stroke="#1A1A1A" strokeWidth="1" />
                <rect x="9.5" y="9.5" width="7" height="7" stroke="#1A1A1A" strokeWidth="1" />
              </svg>
            </button>
            <button
              onClick={() => setGridView("small")}
              className={`transition-opacity ${gridView === "small" ? "opacity-100" : "opacity-30 hover:opacity-50"}`}
              title="Small grid"
            >
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                <rect x="0.5" y="0.5" width="4" height="4" stroke="#1A1A1A" strokeWidth="1" />
                <rect x="6.5" y="0.5" width="4" height="4" stroke="#1A1A1A" strokeWidth="1" />
                <rect x="12.5" y="0.5" width="4" height="4" stroke="#1A1A1A" strokeWidth="1" />
                <rect x="0.5" y="6.5" width="4" height="4" stroke="#1A1A1A" strokeWidth="1" />
                <rect x="6.5" y="6.5" width="4" height="4" stroke="#1A1A1A" strokeWidth="1" />
                <rect x="12.5" y="6.5" width="4" height="4" stroke="#1A1A1A" strokeWidth="1" />
                <rect x="0.5" y="12.5" width="4" height="4" stroke="#1A1A1A" strokeWidth="1" />
                <rect x="6.5" y="12.5" width="4" height="4" stroke="#1A1A1A" strokeWidth="1" />
                <rect x="12.5" y="12.5" width="4" height="4" stroke="#1A1A1A" strokeWidth="1" />
              </svg>
            </button>
            <button
              onClick={() => setGridView("list")}
              className={`transition-opacity ${gridView === "list" ? "opacity-100" : "opacity-30 hover:opacity-50"}`}
              title="List view"
            >
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                <line x1="0" y1="2" x2="17" y2="2" stroke="#1A1A1A" strokeWidth="1" />
                <line x1="0" y1="5.5" x2="17" y2="5.5" stroke="#1A1A1A" strokeWidth="1" />
                <line x1="0" y1="9" x2="17" y2="9" stroke="#1A1A1A" strokeWidth="1" />
                <line x1="0" y1="12.5" x2="17" y2="12.5" stroke="#1A1A1A" strokeWidth="1" />
                <line x1="0" y1="16" x2="17" y2="16" stroke="#1A1A1A" strokeWidth="1" />
              </svg>
            </button>
          </div>

          {/* Center — Product Count */}
          <span className="font-['Optima',sans-serif] text-[13px] tracking-[3px] uppercase text-[#4A4841]">
            {displayedProducts.length} {isNewArrivals ? "New" : "Products"}
            {isNewArrivals && (
              <Link
                to="/shop"
                className="ml-3 text-[11px] tracking-[2px] text-[#525F47] hover:text-[#1A1A1A] transition-colors normal-case"
              >
                ( clear )
              </Link>
            )}
          </span>

          {/* Right — Sort & Filter */}
          <div className="flex items-center gap-8">
            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-1.5 font-['Optima',sans-serif] text-[12px] tracking-[3px] uppercase text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors"
              >
                Sort By
                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" className={`transition-transform duration-200 ${sortOpen ? "rotate-180" : ""}`}>
                  <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {sortOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setSortOpen(false)} />
                  <div className="absolute right-0 top-full mt-1 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.1)] py-4 min-w-[260px] z-50">
                    {sortOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => { setSortBy(opt); setSortOpen(false); }}
                        className={`block w-full text-left px-7 py-2.5 font-['Optima',sans-serif] text-[15px] tracking-[0.5px] transition-colors ${
                          sortBy === opt
                            ? "text-[#1A1A1A]"
                            : "text-[#1A1A1A]/45 hover:text-[#1A1A1A]/70"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
            <button className="font-['Optima',sans-serif] text-[12px] tracking-[3px] uppercase text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors hidden lg:block">
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* ═══ Product Grid ═══ */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-20">
        <div className={`grid ${gridCols[gridView]} gap-x-5 gap-y-10`}>
          {displayedProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.slug}`} className="group cursor-pointer block">
              <div className={`relative bg-[#D4DDD1] overflow-hidden mb-4 ${
                gridView === "list" ? "aspect-[3/2]" : "aspect-square"
              }`}>
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-3 right-3 w-[42px] h-[42px] bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <line x1="7" y1="0" x2="7" y2="14" stroke="currentColor" strokeWidth="1.2" />
                    <line x1="0" y1="7" x2="14" y2="7" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </div>
                {product.badge && (
                  <div className="absolute top-2 left-2 bg-[#C4CFC0] px-2 py-0.5">
                    <span className="font-['Optima',sans-serif] text-[11px] tracking-[1.98px] uppercase text-[#525F47]">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>
              <p className="font-['Optima',sans-serif] text-[13px] tracking-[2.16px] uppercase text-[#1A1A1A] text-center">
                {product.name}
              </p>
              <div className="text-center mt-1">
                <span className="font-['Optima',sans-serif] text-[13px] tracking-[2.16px] text-[#8B9B7D]">
                  {product.price}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ═══ Discover Banner — Typography-led, no model shot ═══ */}
      <section className="relative w-full bg-[#525F47] overflow-hidden py-20 lg:py-28">
        <div className="relative z-10 max-w-[900px] mx-auto px-8 lg:px-16 text-center">
          <p className="font-['Optima',sans-serif] text-[12px] tracking-[4px] uppercase text-white/50 mb-4">
            Make It Yours
          </p>
          <h2 className="font-['Optima',sans-serif] text-[32px] lg:text-[48px] tracking-[6px] lg:tracking-[10px] uppercase text-white leading-[1.1] mb-4">
            Reworked<br />Then Reworked Again
          </h2>
          <p className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] tracking-[1.5px] text-white/60 mb-10">
            Altered. Adjusted. Made to fit you
          </p>
          <Link
            to="/shop"
            className="inline-block border border-white text-white px-10 py-3.5 font-['Optima',sans-serif] text-[13px] tracking-[3px] uppercase hover:bg-white hover:text-[#1A1A1A] transition-all duration-300"
          >
            Explore Options
          </Link>
        </div>
      </section>

      {/* ═══ Instagram / Social Feed ═══ */}
      <section className="relative bg-[#E8E6E0] pt-16 pb-10 overflow-hidden">
        <h3 className="relative font-['Optima',sans-serif] text-[20px] lg:text-[24px] tracking-[6px] uppercase text-[#1A1A1A] text-center mb-10">
          In the Wrld
        </h3>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-1">
          {instagramImages.map((img) => (
            <div key={img.id} className="aspect-square overflow-hidden group cursor-pointer">
              <ImageWithFallback
                src={img.src}
                alt="@GREENWRLD on Instagram"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}