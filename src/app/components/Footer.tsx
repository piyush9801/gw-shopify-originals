import svgPathsText from "../../imports/svg-p6f7tcci29";
import { Instagram } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="relative bg-[#221F1C] py-14 lg:py-20 px-6 lg:px-12 overflow-hidden">
      {/* Top — Logo only */}
      <div className="max-w-[1260px] mx-auto mb-12">
        <div className="w-[160px] lg:w-[200px] h-auto">
          <svg className="w-full h-auto" fill="none" viewBox="0 0 783 133">
            <g clipPath="url(#clip0_footer)">
              <path d={svgPathsText.p32b1f780} fill="#E8E6E0" />
              <path d={svgPathsText.p335ab500} fill="#E8E6E0" />
              <path d={svgPathsText.pda8d8c0} fill="#E8E6E0" />
              <path d={svgPathsText.p845bdf0} fill="#E8E6E0" />
              <path d={svgPathsText.p1fc2a780} fill="#E8E6E0" />
              <path d={svgPathsText.p25f7a200} fill="#E8E6E0" />
              <path d={svgPathsText.p2aa7eb00} fill="#E8E6E0" />
              <path d={svgPathsText.p9a7b380} fill="#E8E6E0" />
              <path d={svgPathsText.pcace980} fill="#E8E6E0" />
            </g>
            <defs>
              <clipPath id="clip0_footer">
                <rect fill="white" height="133" width="783" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      {/* Grid — Shop / About / Support / Social */}
      <div className="max-w-[1260px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Shop */}
        <div>
          <h4 className="font-['Optima',sans-serif] text-[13px] tracking-[2.5px] uppercase text-[#8B9B7D] mb-4">
            Shop
          </h4>
          <ul className="space-y-2">
            {["Shop All", "New Arrivals", "Sale", "Gift Cards"].map((item) => (
              <li key={item}>
                <a href="#" className="font-['Inter',sans-serif] text-[14px] text-[#E8E6E0]/80 hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="font-['Optima',sans-serif] text-[13px] tracking-[2.5px] uppercase text-[#8B9B7D] mb-4">
            About
          </h4>
          <ul className="space-y-2">
            <li>
              <Link to="/story" className="font-['Inter',sans-serif] text-[14px] text-[#E8E6E0]/80 hover:text-white transition-colors">
                Brand Story
              </Link>
            </li>
            <li>
              <Link to="/sustainability" className="font-['Inter',sans-serif] text-[14px] text-[#E8E6E0]/80 hover:text-white transition-colors">
                Sustainability
              </Link>
            </li>
            <li>
              <Link to="/faq#how-it-works" className="font-['Inter',sans-serif] text-[14px] text-[#E8E6E0]/80 hover:text-white transition-colors">
                How It Works
              </Link>
            </li>
            <li>
              <Link to="/faq" className="font-['Inter',sans-serif] text-[14px] text-[#E8E6E0]/80 hover:text-white transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-['Optima',sans-serif] text-[13px] tracking-[2.5px] uppercase text-[#8B9B7D] mb-4">
            Support
          </h4>
          <ul className="space-y-2">
            {[
              { label: "Shipping", to: "/faq#shipping" },
              { label: "Returns", to: "/faq#returns" },
              { label: "Size Guide", to: "/faq#size-guide" },
              { label: "Care Instructions", to: "/faq#care" },
              { label: "Contact", to: "/contact" },
            ].map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="font-['Inter',sans-serif] text-[14px] text-[#E8E6E0]/80 hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social — Instagram only */}
        <div>
          <h4 className="font-['Optima',sans-serif] text-[13px] tracking-[2.5px] uppercase text-[#8B9B7D] mb-4">
            Follow Us
          </h4>
          <div className="flex items-center gap-5">
            <a href="#" className="text-[#E8E6E0]/80 hover:text-white transition-colors">
              <Instagram size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-[1260px] mx-auto pt-8 border-t border-[#525F47]/40 flex flex-col lg:flex-row items-center justify-between gap-4">
        <p className="font-['Optima',sans-serif] text-[11px] tracking-[1.98px] uppercase text-[#C4CFC0]/60">
          &copy; 2026 Greenwrld Co. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <Link to="/privacy-policy" className="font-['Inter',sans-serif] text-[12px] text-[#C4CFC0]/60 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="font-['Inter',sans-serif] text-[12px] text-[#C4CFC0]/60 hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link to="/legal" className="font-['Inter',sans-serif] text-[12px] text-[#C4CFC0]/60 hover:text-white transition-colors">
            Legal
          </Link>
        </div>
      </div>
    </footer>
  );
}