import { useEffect } from "react";

export function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F5F3EE] min-h-screen pt-32 pb-20 px-6 lg:px-12">
      <div className="max-w-[780px] mx-auto">
        <h1 className="font-['Optima',sans-serif] text-[32px] lg:text-[42px] tracking-[6px] uppercase text-[#1A1A1A] mb-4">
          Privacy Policy
        </h1>
        <p className="font-['Inter',sans-serif] text-[13px] tracking-[1px] text-[#1A1A1A]/50 mb-12">
          Last updated: March 6, 2026
        </p>

        <div className="space-y-10">
          <Section title="Overview">
            <p>
              GREENWRLD CO. (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and purchase our products.
            </p>
          </Section>

          <Section title="Information We Collect">
            <p>We may collect personal information that you voluntarily provide when you:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Place an order or make a purchase</li>
              <li>Create an account on our website</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us with inquiries or feedback</li>
              <li>Participate in promotions or surveys</li>
            </ul>
            <p className="mt-3">
              This information may include your name, email address, shipping address, billing address, phone number, and payment information.
            </p>
          </Section>

          <Section title="How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Process and fulfill your orders</li>
              <li>Send order confirmations and shipping updates</li>
              <li>Respond to your questions and requests</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our website and product offerings</li>
              <li>Comply with legal obligations</li>
            </ul>
          </Section>

          <Section title="Cookies & Tracking">
            <p>
              Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can control cookie preferences through your browser settings.
            </p>
          </Section>

          <Section title="Third-Party Services">
            <p>
              We may share your information with third-party service providers who assist us in operating our website, processing payments, and delivering orders. These providers are contractually obligated to keep your information confidential and secure.
            </p>
          </Section>

          <Section title="Data Security">
            <p>
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="Your Rights">
            <p>
              Depending on your location, you may have the right to access, correct, delete, or restrict the processing of your personal data. To exercise these rights, please contact us at the email address below.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              If you have questions about this Privacy Policy, please contact us at:
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
