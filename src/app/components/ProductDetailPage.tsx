import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronRight, Minus, Plus } from "lucide-react";
import { products, PRODUCT_COPY } from "./products";

/* ─── Accordion Item ─── */
function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-[#C4CFC0]/40">
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-['Optima',sans-serif] text-[13px] tracking-[2.5px] uppercase text-[#1A1A1A]">
          {title}
        </span>
        <span className="text-[#1A1A1A]/50 transition-transform duration-300">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] pb-6" : "max-h-0"
        }`}
      >
        <div className="font-['Inter',sans-serif] text-[14px] text-[#1A1A1A]/70 leading-[1.7]">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ─── */
export function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug) || products[0];
  const sizes =
    product.fitSizes === "XS-XXL"
      ? ["XS", "S", "M", "L", "XL", "XXL"]
      : ["XS", "S", "M", "L", "XL"];
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedImage(0);
    setSelectedSize(null);
    setQuantity(1);
  }, [slug]);

  const otherProducts = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <div className="bg-[#F5F3EE] pt-24 lg:pt-28">
      {/* ─── Breadcrumb ─── */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-4">
        <nav className="flex items-center gap-2 font-['Inter',sans-serif] text-[12px] tracking-[1px] text-[#1A1A1A]/40">
          <Link to="/" className="hover:text-[#1A1A1A]/70 transition-colors">
            Home
          </Link>
          <ChevronRight size={10} />
          <Link to="/shop" className="hover:text-[#1A1A1A]/70 transition-colors">
            Shop
          </Link>
          <ChevronRight size={10} />
          <span className="text-[#1A1A1A]/70">{product.name}</span>
        </nav>
      </div>

      {/* ═══ Product Top: Gallery + Info ═══ */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* ─── Left: Gallery ─── */}
          <div className="flex-1 flex gap-4">
            {/* Thumbnail Nav — desktop only */}
            <div className="hidden lg:flex flex-col gap-3 w-[72px] shrink-0">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-[72px] h-[72px] overflow-hidden border-2 transition-all ${
                    selectedImage === i
                      ? "border-[#525F47]"
                      : "border-transparent hover:border-[#C4CFC0]/50"
                  }`}
                >
                  <ImageWithFallback
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Images */}
            <div ref={galleryRef} className="flex-1 space-y-3">
              {product.images.map((img, i) => (
                <div
                  key={i}
                  className="bg-[#D4DDD1] aspect-square overflow-hidden"
                >
                  <ImageWithFallback
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ─── Right: Product Info (Sticky) ─── */}
          <div className="lg:w-[440px] shrink-0">
            <div className="lg:sticky lg:top-28">
              {/* Badge */}
              {product.badge && (
                <div className="inline-block bg-[#C4CFC0] px-3 py-1 mb-4">
                  <span className="font-['Optima',sans-serif] text-[11px] tracking-[1.98px] uppercase text-[#525F47]">
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Name */}
              <h1 className="font-['Optima',sans-serif] text-[22px] lg:text-[26px] tracking-[4px] uppercase text-[#1A1A1A] leading-[1.3] mb-3">
                {product.name}
              </h1>

              {/* Price */}
              <p className="font-['Optima',sans-serif] text-[18px] tracking-[3px] text-[#8B9B7D] mb-6">
                {product.price}
              </p>

              {/* Separator */}
              <div className="border-t border-[#C4CFC0]/40 mb-6" />

              {/* Description — matches real site format */}
              <div className="font-['Inter',sans-serif] text-[14px] text-[#1A1A1A]/75 leading-[1.8] mb-8">
                <p>Fits {product.fitSizes}</p>
                <p>{product.dimensions}</p>
              </div>

              {/* Size Selector */}
              <div className="mb-6">
                <p className="font-['Inter',sans-serif] text-[13px] text-[#1A1A1A]/60 mb-3">
                  Size:{" "}
                  <span className="text-[#1A1A1A]">
                    {selectedSize || "Select"}
                  </span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-[52px] h-[42px] border text-[13px] tracking-[1px] font-['Optima',sans-serif] uppercase transition-all ${
                        selectedSize === size
                          ? "border-[#1A1A1A] bg-[#1A1A1A] text-white"
                          : "border-[#C4CFC0]/60 text-[#1A1A1A]/70 hover:border-[#1A1A1A]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <p className="font-['Inter',sans-serif] text-[13px] text-[#1A1A1A]/60 mb-3">
                  Quantity
                </p>
                <div className="inline-flex items-center border border-[#C4CFC0]/60">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-[42px] h-[42px] flex items-center justify-center text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-[42px] text-center font-['Optima',sans-serif] text-[14px] text-[#1A1A1A]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-[42px] h-[42px] flex items-center justify-center text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button className="w-full h-[48px] border border-[#525F47] text-[#525F47] font-['Optima',sans-serif] text-[13px] tracking-[3px] uppercase hover:bg-[#525F47] hover:text-white transition-all duration-300 mb-3">
                Add to Cart
              </button>

              {/* Buy It Now */}
              <button className="w-full h-[48px] bg-[#1A1A1A] text-white font-['Optima',sans-serif] text-[13px] tracking-[3px] uppercase hover:bg-[#333] transition-all duration-300 mb-8">
                Buy It Now
              </button>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Upcycled", "Handmade", "One of One", "Slow Fashion"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="border border-[#C4CFC0]/40 px-3 py-1.5 font-['Inter',sans-serif] text-[11px] tracking-[1px] text-[#8B9B7D]"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              {/* Accordions — copy matches real greenwrld-co.com product page */}
              <div className="border-b border-[#C4CFC0]/40">
                <Accordion title="Materials" defaultOpen>
                  <p>{PRODUCT_COPY.materials}</p>
                </Accordion>
                <Accordion title="Sizing">
                  <p>{PRODUCT_COPY.sizing}</p>
                </Accordion>
                <Accordion title="Care Instructions">
                  <p>{PRODUCT_COPY.care}</p>
                </Accordion>
                <Accordion title="Shipping & Returns">
                  <p>{PRODUCT_COPY.shipping}</p>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ Marquee Section — "REWORKED WITH INTENTION" ═══ */}
      <div className="relative border-y border-[#C4CFC0]/30 bg-[#E8E6E0] overflow-hidden py-8">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="font-['Optima',sans-serif] text-[60px] lg:text-[80px] tracking-[12px] uppercase text-[#525F47]/20 mx-4">
                Reworked with Intention
              </span>
              <span className="font-['Optima',sans-serif] text-[60px] lg:text-[80px] tracking-[12px] uppercase text-[#525F47]/20 mx-4">
                ·
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ Testimonial / Quote ═══ */}
      <section className="relative bg-[#1A1A1A] py-24 lg:py-36 overflow-hidden">
        <div className="relative z-10 max-w-[740px] mx-auto px-8 text-center">
          {/* Oversized opening quote mark — painted feel */}
          <div
            aria-hidden
            className="font-['Optima',sans-serif] text-[72px] lg:text-[96px] leading-none text-[#8B9B7D]/40 mb-2 select-none"
          >
            &ldquo;
          </div>

          <p className="font-['Optima',sans-serif] text-[20px] lg:text-[26px] text-white leading-[1.6] tracking-[0.5px] mb-10 italic">
            Every piece I make starts with something that already exists.
            I&rsquo;m not creating from scratch — I&rsquo;m giving garments a
            second chance to become something they were never meant to be.
          </p>

          {/* Thin rule divider with center dot — signature brand pattern */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="w-[40px] h-px bg-white/20" />
            <span className="w-[6px] h-[6px] rounded-full bg-[#8B9B7D]" />
            <span className="w-[40px] h-px bg-white/20" />
          </div>

          <div className="w-[54px] h-[54px] rounded-full bg-[#525F47] mx-auto mb-4 flex items-center justify-center ring-1 ring-[#8B9B7D]/30 ring-offset-[3px] ring-offset-[#1A1A1A]">
            <span className="font-['Optima',sans-serif] text-[16px] text-white tracking-[1px]">
              LS
            </span>
          </div>
          <p className="font-['Optima',sans-serif] text-[13px] tracking-[4px] uppercase text-white">
            Lisa Sahagun
          </p>
          <p className="font-['Optima',sans-serif] text-[10px] tracking-[3px] uppercase text-[#8B9B7D]/70 mt-2">
            Founder &middot; GREENWRLD
          </p>
        </div>
      </section>

      {/* ═══ You May Also Like ═══ */}
      <section className="bg-[#E8E6E0] py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="font-['Optima',sans-serif] text-[20px] lg:text-[24px] tracking-[6px] uppercase text-[#1A1A1A] text-center mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 gap-y-10">
            {otherProducts.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.slug}`}
                className="group cursor-pointer block"
              >
                <div className="relative bg-[#D4DDD1] aspect-square overflow-hidden mb-4">
                  <ImageWithFallback
                    src={p.images[0]}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {p.badge && (
                    <div className="absolute top-2 left-2 bg-[#C4CFC0] px-2 py-0.5">
                      <span className="font-['Optima',sans-serif] text-[11px] tracking-[1.98px] uppercase text-[#525F47]">
                        {p.badge}
                      </span>
                    </div>
                  )}
                </div>
                <p className="font-['Optima',sans-serif] text-[13px] tracking-[2.16px] uppercase text-[#1A1A1A] text-center">
                  {p.name}
                </p>
                <p className="font-['Optima',sans-serif] text-[13px] tracking-[2.16px] text-[#8B9B7D] text-center mt-1">
                  {p.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Marquee Keyframes (injected once) ─── */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
