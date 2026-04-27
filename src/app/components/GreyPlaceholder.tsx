import type { CSSProperties } from "react";

type Props = {
  className?: string;
  style?: CSSProperties;
  label?: string;
  // When true, renders a smaller, more subtle label suitable for tile/card use
  compact?: boolean;
};

/**
 * Neutral placeholder for imagery that hasn't been provided yet.
 * Used in place of AI/Gemini-generated assets — Maddy will replace these
 * with real photography (event shots, customer pics, etc.) before launch.
 */
export function GreyPlaceholder({
  className = "",
  style,
  label = "Image to be provided",
  compact = false,
}: Props) {
  return (
    <div
      className={`relative w-full h-full bg-[#D4D2CC] flex items-center justify-center overflow-hidden ${className}`}
      style={style}
    >
      {/* Subtle diagonal hatch so it reads as "intentional placeholder" not "broken image" */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #1A1A1A 0 1px, transparent 1px 14px)",
        }}
      />
      <div className="relative z-10 text-center px-6">
        <p
          className={`font-['Optima',sans-serif] uppercase text-[#1A1A1A]/45 ${
            compact
              ? "text-[10px] tracking-[2.5px]"
              : "text-[11px] lg:text-[12px] tracking-[4px]"
          }`}
        >
          {label}
        </p>
      </div>
    </div>
  );
}
