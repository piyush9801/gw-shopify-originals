import { useEffect, useState } from "react";

export type HeroTune = {
  swooshTop: number;      // %
  swooshWidth: number;    // vw
  swooshMaxWidth: number; // px
  swooshOpacity: number;  // %
  heroObjectX: number;    // %
  heroObjectY: number;    // %
};

export const HERO_TUNE_DEFAULTS: HeroTune = {
  swooshTop: 52,
  swooshWidth: 27,
  swooshMaxWidth: 550,
  swooshOpacity: 100,
  heroObjectX: 100,
  heroObjectY: 64,
};

const STORAGE_KEY = "gw-hero-tune";

export function loadHeroTune(): HeroTune {
  if (typeof window === "undefined") return HERO_TUNE_DEFAULTS;
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return { ...HERO_TUNE_DEFAULTS, ...saved };
  } catch {
    return HERO_TUNE_DEFAULTS;
  }
}

function isEditMode(): boolean {
  if (typeof window === "undefined") return false;
  return new URLSearchParams(window.location.search).has("edit");
}

type Props = {
  tune: HeroTune;
  onChange: (next: HeroTune) => void;
};

export function HeroTuner({ tune, onChange }: Props) {
  const [open, setOpen] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(isEditMode());
  }, []);

  if (!visible) return null;

  const update = (key: keyof HeroTune, value: number) => {
    const next = { ...tune, [key]: value };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    onChange(next);
  };

  const reset = () => {
    localStorage.removeItem(STORAGE_KEY);
    onChange(HERO_TUNE_DEFAULTS);
  };

  const copy = () => {
    navigator.clipboard.writeText(JSON.stringify(tune, null, 2));
  };

  return (
    <div
      className="fixed bottom-4 right-4 z-[100] bg-white/95 backdrop-blur border border-black/10 rounded-lg shadow-xl text-[12px] text-[#1A1A1A] font-mono"
      style={{ width: open ? 280 : "auto" }}
    >
      <div className="flex items-center justify-between px-3 py-2 border-b border-black/10">
        <span className="font-semibold uppercase tracking-wider">Hero Tune</span>
        <button
          onClick={() => setOpen(!open)}
          className="px-2 py-0.5 hover:bg-black/5 rounded"
        >
          {open ? "—" : "+"}
        </button>
      </div>
      {open && (
        <div className="p-3 space-y-3">
          <Section label="Swoosh">
            <Slider label="Top" value={tune.swooshTop} min={0} max={100} step={1} unit="%" onChange={(v) => update("swooshTop", v)} />
            <Slider label="Width" value={tune.swooshWidth} min={20} max={100} step={1} unit="vw" onChange={(v) => update("swooshWidth", v)} />
            <Slider label="Max" value={tune.swooshMaxWidth} min={200} max={1200} step={10} unit="px" onChange={(v) => update("swooshMaxWidth", v)} />
            <Slider label="Opacity" value={tune.swooshOpacity} min={0} max={100} step={1} unit="%" onChange={(v) => update("swooshOpacity", v)} />
          </Section>
          <Section label="Hero image crop">
            <Slider label="X" value={tune.heroObjectX} min={0} max={100} step={1} unit="%" onChange={(v) => update("heroObjectX", v)} />
            <Slider label="Y" value={tune.heroObjectY} min={0} max={100} step={1} unit="%" onChange={(v) => update("heroObjectY", v)} />
          </Section>
          <div className="flex gap-2 pt-1">
            <button onClick={reset} className="flex-1 px-2 py-1.5 bg-black/5 hover:bg-black/10 rounded">Reset</button>
            <button onClick={copy} className="flex-1 px-2 py-1.5 bg-[#525F47] text-white hover:bg-[#3d4635] rounded">Copy JSON</button>
          </div>
        </div>
      )}
    </div>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[1.5px] text-black/50 mb-1.5">{label}</div>
      <div className="space-y-1.5">{children}</div>
    </div>
  );
}

function Slider({
  label, value, min, max, step, unit, onChange,
}: {
  label: string; value: number; min: number; max: number; step: number; unit: string;
  onChange: (v: number) => void;
}) {
  return (
    <label className="flex items-center gap-2">
      <span className="w-14 text-black/70">{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="flex-1 accent-[#525F47]"
      />
      <span className="w-14 text-right tabular-nums">{value}{unit}</span>
    </label>
  );
}
