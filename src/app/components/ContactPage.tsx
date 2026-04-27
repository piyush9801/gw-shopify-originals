import { useEffect, useState, type FormEvent } from "react";
import { Link } from "react-router";

type Subject = "Product" | "Order" | "Press" | "Other";

const SUBJECTS: Subject[] = ["Product", "Order", "Press", "Other"];

export function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState<Subject | "">("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-[#E8E6E0]">
      {/* ─── Hero band ─── */}
      <section className="relative pt-32 lg:pt-40 pb-14 lg:pb-20 px-6 lg:px-10 border-b border-[#1A1A1A]/10">
        <div className="max-w-[820px] mx-auto text-center">
          <p className="font-['Optima',sans-serif] text-[11px] lg:text-[12px] tracking-[5px] uppercase text-[#525F47]/60 mb-5">
            Contact Us
          </p>
          <h1 className="font-['Optima',sans-serif] text-[44px] lg:text-[72px] tracking-[6px] lg:tracking-[10px] uppercase text-[#1A1A1A] leading-[1.05]">
            Get In Touch
          </h1>
          <div className="w-[40px] h-px bg-[#C46A45] mx-auto mt-8" />
        </div>
      </section>

      {/* ─── Body — split: helper text left, form right ─── */}
      <section className="px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left — helper text */}
          <div className="lg:col-span-5">
            <p className="font-['Optima',sans-serif] text-[11px] tracking-[4px] uppercase text-[#525F47]/60 mb-4">
              Need Assistance?
            </p>
            <h2 className="font-['Optima',sans-serif] text-[28px] lg:text-[36px] tracking-[3px] lg:tracking-[5px] uppercase text-[#1A1A1A] leading-[1.15] mb-7">
              We Are Here<br />To Help
            </h2>
            <p className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] leading-[1.9] text-[#2C2C2C]/75 mb-5">
              If you have any questions, take a look at our{" "}
              <Link
                to="/faq"
                className="text-[#525F47] underline underline-offset-4 hover:text-[#1A1A1A] transition-colors"
              >
                FAQ
              </Link>
              .
            </p>
            <p className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] leading-[1.9] text-[#2C2C2C]/75 mb-10">
              Another request? Send us a message and we'll get back to you as
              soon as we can.
            </p>

            <div className="space-y-4 pt-6 border-t border-[#1A1A1A]/10">
              <div>
                <p className="font-['Optima',sans-serif] text-[10px] tracking-[3px] uppercase text-[#525F47]/60 mb-1">
                  Instagram
                </p>
                <a
                  href="https://instagram.com/greenwrld"
                  target="_blank"
                  rel="noreferrer"
                  className="font-['Inter',sans-serif] text-[14px] text-[#1A1A1A] hover:text-[#525F47] transition-colors"
                >
                  @greenwrld
                </a>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            {sent ? (
              <div className="bg-white border border-[#1A1A1A]/10 px-8 py-14 text-center">
                <p className="font-['Optima',sans-serif] text-[11px] tracking-[4px] uppercase text-[#525F47]/60 mb-4">
                  Message Received
                </p>
                <h3 className="font-['Optima',sans-serif] text-[22px] lg:text-[26px] tracking-[3px] lg:tracking-[5px] uppercase text-[#1A1A1A] leading-[1.2] mb-6">
                  Thank You
                </h3>
                <p className="font-['Inter',sans-serif] text-[14px] leading-[1.85] text-[#2C2C2C]/75 mb-8 max-w-[380px] mx-auto">
                  We've received your message and will reply within a couple of
                  days.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setName("");
                    setEmail("");
                    setSubject("");
                    setMessage("");
                  }}
                  className="font-['Optima',sans-serif] text-[12px] tracking-[3px] uppercase text-[#525F47] border-b border-[#525F47] pb-1 hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-colors"
                >
                  Send Another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Field label="Name" required>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-transparent border-b border-[#1A1A1A]/25 focus:border-[#525F47] outline-none py-2.5 font-['Inter',sans-serif] text-[15px] text-[#1A1A1A] transition-colors"
                  />
                </Field>

                <Field label="E-mail" required>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-transparent border-b border-[#1A1A1A]/25 focus:border-[#525F47] outline-none py-2.5 font-['Inter',sans-serif] text-[15px] text-[#1A1A1A] transition-colors"
                  />
                </Field>

                <Field label="Subject" required>
                  <div className="relative">
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value as Subject)}
                      required
                      className="w-full appearance-none bg-transparent border-b border-[#1A1A1A]/25 focus:border-[#525F47] outline-none py-2.5 pr-8 font-['Inter',sans-serif] text-[15px] text-[#1A1A1A] transition-colors cursor-pointer"
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      {SUBJECTS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <svg
                      className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="#1A1A1A"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Field>

                <Field label="Message" required>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                    className="w-full bg-transparent border-b border-[#1A1A1A]/25 focus:border-[#525F47] outline-none py-2.5 font-['Inter',sans-serif] text-[15px] text-[#1A1A1A] resize-none transition-colors"
                  />
                </Field>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full lg:w-auto inline-block bg-[#1A1A1A] text-white px-12 py-4 font-['Optima',sans-serif] text-[13px] tracking-[3px] uppercase hover:bg-[#525F47] transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="font-['Optima',sans-serif] text-[11px] tracking-[3px] uppercase text-[#525F47]/70 mb-1 block">
        {label}
        {required && <span className="text-[#C46A45] ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}
