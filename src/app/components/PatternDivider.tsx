// Structural pattern divider — a full-bleed ribbon of the GW pattern used
// BETWEEN sections as a visual beat, not ON TOP of photos. The pattern here
// reads at full strength (no opacity, no blend hack) because it sits on its
// own real estate. This is the GW brand's signature "stamp" moment.
import patternSvg from "../../assets/gw-pattern/gw-pattern.svg";

type Props = {
  /** Height in CSS (e.g. "80px", "12vh"). Default 96px — a thin graphic beat. */
  height?: string;
  /** "dark" (default): #4b5443 base.  "light": cream base with green pattern. */
  tone?: "dark" | "light";
  /** Optional centered stamp text, like a marquee tagline. */
  label?: string;
  className?: string;
};

export function PatternDivider({
  height = "96px",
  tone = "dark",
  label,
  className = "",
}: Props) {
  const bg = tone === "dark" ? "#4b5443" : "#E8E6E0";
  const label_color = tone === "dark" ? "#E8E6E0" : "#1A1A1A";
  return (
    <div
      aria-hidden={!label}
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        height,
        backgroundColor: bg,
        backgroundImage: `url(${patternSvg})`,
        backgroundRepeat: "repeat-x",
        backgroundSize: "auto 100%",
        backgroundPosition: "center",
      }}
    >
      {label && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="px-6 py-2 bg-[color:inherit]"
            style={{
              fontFamily: "'Optima', sans-serif",
              fontSize: "12px",
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: label_color,
              backgroundColor: bg,
            }}
          >
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
