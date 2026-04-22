// Shared GW psychedelic pattern overlay. Used on every hero so the pattern
// becomes the brand signature threading through the site.
import patternSvg from "../../assets/gw-pattern/gw-pattern.svg";

type Props = {
  /** 0..1 — keep low (0.15-0.3) on photo heroes so the pattern whispers. */
  opacity?: number;
  /** CSS blend mode. Default `overlay` gives pattern subtle tonal shift. */
  blendMode?: React.CSSProperties["mixBlendMode"];
  /** Set to true when the hero has a heavy bottom gradient and we only want
   *  the pattern visible in the top portion. */
  fadeBottom?: boolean;
  className?: string;
};

export function PatternOverlay({
  opacity = 0.22,
  blendMode = "overlay",
  fadeBottom = false,
  className = "",
}: Props) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `url(${patternSvg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity,
        mixBlendMode: blendMode,
        WebkitMaskImage: fadeBottom
          ? "linear-gradient(to bottom, #000 0%, #000 55%, transparent 100%)"
          : undefined,
        maskImage: fadeBottom
          ? "linear-gradient(to bottom, #000 0%, #000 55%, transparent 100%)"
          : undefined,
      }}
    />
  );
}
