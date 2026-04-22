import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import svgPaths from "../../imports/svg-z5ichkq5hv";
import { ShoppingBag, Menu, X } from "lucide-react";

function Logo({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 873.84 634.102">
      <g clipPath="url(#clip0_logo)">
        <path d={svgPaths.p3fc4af00} fill="currentColor" />
        <path d={svgPaths.p3f71d900} fill="currentColor" />
        <path d={svgPaths.pfec7000} fill="currentColor" />
        <path d={svgPaths.p3cfca00} fill="currentColor" />
        <path d={svgPaths.p1dd3e50} fill="currentColor" />
        <path d={svgPaths.p101cf300} fill="currentColor" />
        <path d={svgPaths.p17232e00} fill="currentColor" />
        <path d={svgPaths.p3fd8d900} fill="currentColor" />
        <path d={svgPaths.p210f480} fill="currentColor" />
        <path d={svgPaths.p18b1a9c0} fill="currentColor" />
        <path d={svgPaths.p248c4800} fill="currentColor" />
        <path d={svgPaths.p9ca2800} fill="currentColor" />
        <path d={svgPaths.p3cac2600} fill="currentColor" />
        <path d={svgPaths.p5bde670} fill="currentColor" />
        <path d={svgPaths.p5184aa0} fill="currentColor" />
        <path d={svgPaths.p13932300} fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_logo">
          <rect fill="white" height="634.102" width="873.84" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isShop = location.pathname === "/shop" && location.search === "";
  const isNewArrivals = location.pathname === "/shop" && new URLSearchParams(location.search).get("filter") === "new";
  const isStory =
    location.pathname === "/story" ||
    location.pathname === "/stories" ||
    location.pathname.startsWith("/stories/");
  const isSustainability = location.pathname === "/sustainability";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On pages with hero images (home, shop, story), start transparent; solid bg on scroll
  const showSolidBg = scrolled || (!isHome && !isShop && !isStory && !isSustainability);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolidBg
          ? "bg-[#E8E6E0] border-b border-[#C4CFC0] shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 lg:px-12 py-4 lg:py-5">
        {/* Nav Links — left on desktop */}
        <nav className={`hidden lg:flex items-center gap-6 font-['Optima',sans-serif] text-[13px] tracking-[2.5px] uppercase w-[480px] transition-colors duration-300 ${
          showSolidBg ? "text-[#1A1A1A]" : "text-white"
        }`}>
          <Link
            to="/shop"
            className={`transition-opacity pb-1 ${isShop ? "opacity-100 border-b border-current" : "opacity-70 hover:opacity-100"}`}
          >
            Shop
          </Link>
          <Link
            to="/shop?filter=new"
            className={`transition-opacity whitespace-nowrap pb-1 ${isNewArrivals ? "opacity-100 border-b border-current" : "opacity-70 hover:opacity-100"}`}
          >
            New Arrivals
          </Link>
          <Link
            to="/stories"
            className={`transition-opacity whitespace-nowrap pb-1 ${isStory ? "opacity-100 border-b border-current" : "opacity-70 hover:opacity-100"}`}
          >
            Stories
          </Link>
          <Link
            to="/sustainability"
            className={`transition-opacity whitespace-nowrap pb-1 ${isSustainability ? "opacity-100 border-b border-current" : "opacity-70 hover:opacity-100"}`}
          >
            Sustainability
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={26} className={showSolidBg ? "text-[#1A1A1A]" : "text-white"} />
          ) : (
            <Menu size={26} className={showSolidBg ? "text-[#1A1A1A]" : "text-white"} />
          )}
        </button>

        {/* Center Logo — all screens */}
        <div className="flex-1 flex justify-center">
          <Link to="/" className={`block transition-colors duration-300 ${showSolidBg ? "text-[#1A1A1A]" : "text-white"}`}>
            <Logo className="h-10 lg:h-14 w-auto" />
          </Link>
        </div>

        {/* Right — Cart */}
        <div className="flex items-center gap-2 cursor-pointer lg:w-[480px] justify-end">
          <ShoppingBag size={22} className={`transition-colors duration-300 ${showSolidBg ? "text-[#1A1A1A]" : "text-white"}`} />
          <span className={`font-['Optima',sans-serif] text-[14px] tracking-[1.98px] transition-colors duration-300 ${showSolidBg ? "text-[#1A1A1A]" : "text-white"}`}>0</span>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className={`lg:hidden px-6 pb-5 flex flex-col gap-4 font-['Optima',sans-serif] text-[14px] tracking-[2.52px] uppercase ${
          showSolidBg ? "text-[#1A1A1A]" : "text-white"
        }`}>
          <Link to="/shop" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
          <Link to="/shop?filter=new" onClick={() => setMobileMenuOpen(false)}>New Arrivals</Link>
          <Link to="/stories" onClick={() => setMobileMenuOpen(false)}>Stories</Link>
          <Link to="/sustainability" onClick={() => setMobileMenuOpen(false)}>Sustainability</Link>
        </nav>
      )}
    </header>
  );
}