import { useEffect } from "react";
import { useLocation, Link } from "react-router";
import { PRODUCT_COPY } from "./products";

type SubSection = {
  heading: string;
  body: string;
};

type Block =
  | string
  | { kind: "list"; items: string[] }
  | { kind: "subsections"; items: SubSection[] };

type Section = {
  id: string;
  eyebrow: string;
  title: string;
  body: Block[];
  pendingNote?: string;
};

const sections: Section[] = [
  {
    id: "how-it-works",
    eyebrow: "Start Here",
    title: "How It Works",
    body: [
      "Every Greenwrld piece is one of a kind — second-hand sourced, reworked by hand, and never reproduced. Here's how purchasing works.",
      {
        kind: "subsections",
        items: [
          {
            heading: "Set Price Drops",
            body: "Website releases are held every Sunday, and previews are shown on Instagram beforehand. All items are posted for a set price, and everything is first come, first serve. There is only one of each item — so you have to be ready and quick. Sizes are listed in each product description, though everything is pretty size-inclusive (XS–XXL).",
          },
          {
            heading: "Custom Orders",
            body: "Custom orders are available for a set price — you can personalize an item specifically for you. Custom orders have a longer wait period; please allow a couple of weeks. Place a custom order by DM on Instagram.",
          },
          {
            heading: "Payment",
            body: "All payments are processed through the website. Payment plans are available for US customers to make purchases more affordable.",
          },
          {
            heading: "Shipping",
            body: "We're located in the United States. International shipping is available for an extra fee.",
          },
        ],
      },
    ],
  },
  {
    id: "shipping",
    eyebrow: "Delivery",
    title: "Shipping",
    body: [PRODUCT_COPY.shipping],
  },
  {
    id: "returns",
    eyebrow: "Policy",
    title: "Returns",
    body: [
      "We do not offer returns. Because each piece is one-of-one and reworked by hand, please make sure you're confident before purchasing.",
      "If you're unhappy with your purchase in any way, DM us on Instagram and we'll try to figure something out.",
    ],
  },
  {
    id: "size-guide",
    eyebrow: "Fit",
    title: "Size Guide",
    body: [
      PRODUCT_COPY.sizing,
      {
        kind: "list",
        items: [
          "Each product page lists exact width × length measurements.",
          "If you want sizing adjusted on a specific piece, DM us on Instagram before ordering.",
          "Items are modeled on a size small — see Instagram for fit reference.",
        ],
      },
    ],
  },
  {
    id: "care",
    eyebrow: "Keep It Lasting",
    title: "Care Instructions",
    body: [
      PRODUCT_COPY.care,
      "Because every piece is hand-reconstructed from existing materials, gentle washing keeps the seams, patches, and detail work intact.",
    ],
  },
  {
    id: "contact",
    eyebrow: "Get In Touch",
    title: "Contact",
    body: [
      "The fastest way to reach us is on Instagram — for sizing questions, custom adjustments, drop notifications, or anything else.",
      "Instagram: @greenwrld",
    ],
    pendingNote: "Maddy: add an email address here if you'd like one listed alongside Instagram.",
  },
];

export function FAQPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.hash, location.pathname]);

  return (
    <div className="bg-[#E8E6E0]">
      {/* ─── Header ─── */}
      <section className="pt-28 lg:pt-36 pb-10 lg:pb-16 px-6 lg:px-10">
        <div className="max-w-[820px] mx-auto text-center">
          <p className="font-['Optima',sans-serif] text-[11px] lg:text-[12px] tracking-[5px] uppercase text-[#525F47]/60 mb-5">
            Help & Info
          </p>
          <h1 className="font-['Optima',sans-serif] text-[44px] lg:text-[72px] tracking-[6px] lg:tracking-[10px] uppercase text-[#1A1A1A] leading-[1.05] mb-6">
            FAQ
          </h1>
          <div className="w-[40px] h-px bg-[#C46A45] mx-auto mb-8" />
          <p className="font-['Inter',sans-serif] text-[14px] lg:text-[16px] leading-[1.85] text-[#2C2C2C]/70">
            Everything you need to know about how Greenwrld pieces are made,
            ordered, shipped, and cared for.
          </p>
        </div>
      </section>

      {/* ─── Quick links ─── */}
      <section className="px-6 lg:px-10 pb-10 lg:pb-14">
        <div className="max-w-[820px] mx-auto">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 border-y border-[#1A1A1A]/10 py-5">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="font-['Optima',sans-serif] text-[11px] lg:text-[12px] tracking-[3px] uppercase text-[#525F47] hover:text-[#1A1A1A] transition-colors"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── Sections ─── */}
      <section className="px-6 lg:px-10 pb-24 lg:pb-36">
        <div className="max-w-[820px] mx-auto space-y-16 lg:space-y-24">
          {sections.map((s) => (
            <article
              key={s.id}
              id={s.id}
              className="scroll-mt-28 lg:scroll-mt-32"
            >
              <p className="font-['Optima',sans-serif] text-[11px] tracking-[4px] uppercase text-[#525F47]/60 mb-3">
                {s.eyebrow}
              </p>
              <h2 className="font-['Optima',sans-serif] text-[26px] lg:text-[34px] tracking-[4px] lg:tracking-[6px] uppercase text-[#1A1A1A] leading-[1.15] mb-7">
                {s.title}
              </h2>
              <div className="space-y-5">
                {s.body.map((block, i) => {
                  if (typeof block === "string") {
                    return (
                      <p
                        key={i}
                        className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] leading-[1.9] text-[#2C2C2C]/80"
                      >
                        {block}
                      </p>
                    );
                  }
                  if (block.kind === "list") {
                    return (
                      <ul key={i} className="space-y-2.5 pl-1">
                        {block.items.map((item) => (
                          <li
                            key={item}
                            className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] leading-[1.8] text-[#2C2C2C]/75 pl-5 border-l-[2px] border-[#525F47]/30"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <div key={i} className="space-y-7 pt-2">
                      {block.items.map((sub) => (
                        <div key={sub.heading}>
                          <h3 className="font-['Optima',sans-serif] text-[15px] lg:text-[17px] tracking-[3px] uppercase text-[#525F47] mb-3">
                            {sub.heading}
                          </h3>
                          <p className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] leading-[1.9] text-[#2C2C2C]/80">
                            {sub.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
              {s.pendingNote && (
                <p className="mt-6 font-['Inter',sans-serif] text-[12px] leading-[1.7] text-[#C46A45]/80 italic">
                  ↳ {s.pendingNote}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ─── Footer CTA ─── */}
      <section className="bg-[#1A1A1A] py-20 lg:py-28 px-6">
        <div className="max-w-[560px] mx-auto text-center">
          <p className="font-['Optima',sans-serif] text-[11px] tracking-[3px] uppercase text-[#8B9B7D]/70 mb-3">
            Still have questions?
          </p>
          <h2 className="font-['Optima',sans-serif] text-[22px] lg:text-[28px] tracking-[5px] lg:tracking-[6px] uppercase text-white leading-[1.2] mb-8">
            Reach out on Instagram
          </h2>
          <Link
            to="/shop"
            className="inline-block bg-[#525F47] text-white px-10 py-3.5 font-['Optima',sans-serif] text-[12px] tracking-[3px] uppercase hover:bg-[#4b5443] transition-colors"
          >
            Back to Shop
          </Link>
        </div>
      </section>
    </div>
  );
}
