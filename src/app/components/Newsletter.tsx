import { useState } from "react";
import patternNewsletter from "../../assets/patterns/pattern-newsletter.png";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="relative bg-[#8B9B7D] py-20 lg:py-28 px-6 lg:px-12 overflow-hidden">
      {/* Organic swirl pattern background (from Figma) */}
      <img
        src={patternNewsletter}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />

      <div className="max-w-[600px] mx-auto text-center relative z-20">
        <h2 className="font-['Optima',sans-serif] text-[28px] lg:text-[38px] tracking-[5px] lg:tracking-[7px] uppercase text-[#2C3526] mb-4">
          Be First <span className="text-white">to the Drop</span>
        </h2>
        <p className="font-['Inter',sans-serif] text-[14px] leading-[24px] text-[#2C3526]/70 mb-10">
          New releases. Limited pieces
        </p>

        {submitted ? (
          <p className="font-['Inter',sans-serif] text-[14px] tracking-[2.16px] uppercase text-[#2C3526]">
            You're in. Welcome.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-[480px] mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your e-mail"
              required
              className="flex-1 bg-[#7A8A6C]/40 border border-[#2C3526]/30 px-5 py-3.5 font-['Inter',sans-serif] text-[14px] tracking-[1.5px] text-[#2C3526] placeholder-[#2C3526]/50 outline-none focus:border-[#2C3526] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#E8E6E0] text-[#2C3526] px-12 py-4 font-['Optima',sans-serif] text-[13px] tracking-[3px] uppercase hover:bg-white transition-colors"
            >
              Get Access
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
