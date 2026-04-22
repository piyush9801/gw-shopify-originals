import { useEffect } from "react";
import { Link } from "react-router";

export function LegalPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F5F3EE] min-h-screen pt-32 pb-20 px-6 lg:px-12">
      <div className="max-w-[780px] mx-auto">
        <h1 className="font-['Optima',sans-serif] text-[32px] lg:text-[42px] tracking-[6px] uppercase text-[#1A1A1A] mb-4">
          Legal
        </h1>
        <p className="font-['Inter',sans-serif] text-[13px] tracking-[1px] text-[#1A1A1A]/50 mb-12">
          Last updated: March 6, 2026
        </p>

        <div className="space-y-10">
          {/* Quick links to other legal pages */}
          <div className="bg-[#E8E6E0]/60 p-8">
            <h2 className="font-['Optima',sans-serif] text-[16px] lg:text-[18px] tracking-[3px] uppercase text-[#525F47] mb-5">
              Legal Documents
            </h2>
            <div className="space-y-3">
              <Link
                to="/privacy-policy"
                className="block font-['Inter',sans-serif] text-[14px] lg:text-[15px] text-[#1A1A1A]/75 hover:text-[#525F47] transition-colors underline underline-offset-4"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="block font-['Inter',sans-serif] text-[14px] lg:text-[15px] text-[#1A1A1A]/75 hover:text-[#525F47] transition-colors underline underline-offset-4"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          <Section title="Company Information">
            <p>
              GREENWRLD CO. is a sustainable fashion brand specializing in upcycled, one-of-a-kind garments. Each piece is handmade from existing garments, reworked and reimagined into something new.
            </p>
          </Section>

          <Section title="Trademark Notice">
            <p>
              GREENWRLD&trade; and the GREENWRLD logo are trademarks of GREENWRLD CO. All other trademarks, service marks, and trade names referenced on this website are the property of their respective owners.
            </p>
          </Section>

          <Section title="Copyright Notice">
            <p>
              &copy; 2026 GREENWRLD CO. All rights reserved. All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and data compilations, is the property of GREENWRLD CO. or its content suppliers and is protected by United States and international copyright laws.
            </p>
          </Section>

          <Section title="Disclaimer">
            <p>
              The information provided on this website is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability of the website or the information, products, or services contained on the website.
            </p>
          </Section>

          <Section title="Governing Law">
            <p>
              These terms and any disputes arising from your use of this website shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
            </p>
          </Section>

          <Section title="Accessibility">
            <p>
              GREENWRLD CO. is committed to ensuring that our website is accessible to all users, including those with disabilities. We continuously work to improve the accessibility of our site and welcome feedback. If you encounter any accessibility issues, please contact us.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              For any legal inquiries, please contact us at:
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
