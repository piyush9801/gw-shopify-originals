import { useEffect } from "react";

export function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F5F3EE] min-h-screen pt-32 pb-20 px-6 lg:px-12">
      <div className="max-w-[780px] mx-auto">
        <h1 className="font-['Optima',sans-serif] text-[32px] lg:text-[42px] tracking-[6px] uppercase text-[#1A1A1A] mb-4">
          Terms of Service
        </h1>
        <p className="font-['Inter',sans-serif] text-[13px] tracking-[1px] text-[#1A1A1A]/50 mb-12">
          Last updated: March 6, 2026
        </p>

        <div className="space-y-10">
          <Section title="Acceptance of Terms">
            <p>
              By accessing or using the GREENWRLD CO. website and purchasing our products, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
            </p>
          </Section>

          <Section title="Products & Availability">
            <p>
              All GREENWRLD pieces are one-of-a-kind, handmade from existing garments. Due to the nature of upcycled fashion, each item is unique and available in limited quantities. Once a piece is sold, it cannot be replicated. We reserve the right to limit quantities and discontinue any product at any time.
            </p>
          </Section>

          <Section title="Pricing & Payment">
            <p>
              All prices are listed in USD and are subject to change without notice. Payment must be completed at the time of purchase. We accept major credit cards, debit cards, and other payment methods as displayed at checkout.
            </p>
          </Section>

          <Section title="Shipping">
            <p>
              We ship to addresses within the United States and select international destinations. Shipping times and costs vary by location. Estimated delivery windows are provided at checkout but are not guaranteed. GREENWRLD CO. is not responsible for delays caused by carriers or customs.
            </p>
          </Section>

          <Section title="Returns & Exchanges">
            <p>
              Due to the one-of-a-kind nature of our products, all sales are final. We do not accept returns or exchanges unless an item arrives damaged or defective. If you receive a damaged item, please contact us within 48 hours of delivery with photos of the damage.
            </p>
          </Section>

          <Section title="Intellectual Property">
            <p>
              All content on this website — including text, images, graphics, logos, and designs — is the property of GREENWRLD CO. and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without prior written permission.
            </p>
          </Section>

          <Section title="User Conduct">
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Use our website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Submit false or misleading information</li>
            </ul>
          </Section>

          <Section title="Limitation of Liability">
            <p>
              GREENWRLD CO. shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or purchase of our products. Our total liability shall not exceed the amount you paid for the product giving rise to the claim.
            </p>
          </Section>

          <Section title="Modifications">
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website constitutes acceptance of any modified terms.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              For questions regarding these Terms of Service, please contact us at:
            </p>
            <p className="mt-2">
              <span className="tracking-[2px] uppercase text-[#525F47]">hello@greenwrld.co</span>
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-['Optima',sans-serif] text-[16px] lg:text-[18px] tracking-[3px] uppercase text-[#525F47] mb-4">
        {title}
      </h2>
      <div className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] text-[#1A1A1A]/75 leading-[1.7] space-y-3">
        {children}
      </div>
    </div>
  );
}
