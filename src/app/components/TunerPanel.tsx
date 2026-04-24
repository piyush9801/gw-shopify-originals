import { useEffect, useState } from "react";
import { bbagley } from "./bbagleyImages";

export type TuneConfig = {
  imageIndex: number;      // 0-27 → bbagley[imageIndex]
  cropX: number;           // %
  cropY: number;           // %
  swooshEnabled: boolean;
  swooshTop: number;       // %
  swooshWidth: number;     // vw
  swooshMaxWidth: number;  // px
  swooshOpacity: number;   // %
};

export function loadTune(storageKey: string, defaults: TuneConfig): TuneConfig {
  if (typeof window === "undefined") return defaults;
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    return { ...defaults, ...saved };
  } catch {
    return defaults;
  }
}

function isEditMode(): boolean {
  if (typeof window === "undefined") return false;
  return new URLSearchParams(window.location.search).has("edit");
}

const IMAGE_LABELS = Array.from({ length: 28 }, (_, i) => `3${121 + i}`);

type Props = {
  title: string;
  storageKey: string;
  supportsSwoosh: boolean;
  tune: TuneConfig;
  onChange: (next: TuneConfig) => void;
};

export function TunerPanel({ title, storageKey, supportsSwoosh, tune, onChange }: Props) {
  const [open, setOpen] = useState(true);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(isEditMode());
  }, []);

  if (!visible) return null;

  const update = <K extends keyof TuneConfig>(key: K, value: TuneConfig[K]) => {
    const next = { ...tune, [key]: value };
    localStorage.setItem(storageKey, JSON.stringify(next));
    onChange(next);
  };

  const reset = () => {
    localStorage.removeItem(storageKey);
    window.location.reload();
  };

  const copy = () => {
    navigator.clipboard.writeText(JSON.stringify(tune, null, 2));
  };

  return (
    <div
      className="fixed bottom-4 right-4 z-[100] bg-white/95 backdrop-blur border border-black/10 rounded-lg shadow-xl text-[12px] text-[#1A1A1A] font-mono"
      style={{ width: open ? 300 : "auto" }}
    >
      <div className="flex items-center justify-between px-3 py-2 border-b border-black/10">
        <span className="font-semibold uppercase tracking-wider text-[10px]">{title}</span>
        <button
          onClick={() => setOpen(!open)}
          className="px-2 py-0.5 hover:bg-black/5 rounded"
        >
          {open ? "—" : "+"}
        </button>
      </div>
      {open && (
        <div className="p-3 space-y-3 max-h-[80vh] overflow-auto">
          <Section label="Image">
            <div className="flex items-center gap-2">
              <img
                src={bbagley[tune.imageIndex]}
                alt=""
                className="w-12 h-12 object-cover rounded border border-black/10"
              />
              <div className="flex-1">
                <div className="text-black/70">{IMAGE_LABELS[tune.imageIndex]}</div>
                <button
                  onClick={() => setPickerOpen(!pickerOpen)}
                  className="text-[11px] text-[#525F47] hover:text-[#1A1A1A] underline"
                >
                  {pickerOpen ? "Close picker" : "Pick image"}
                </button>
              </div>
            </div>
            {pickerOpen && (
              <div className="mt-2 grid grid-cols-5 gap-1 p-2 bg-black/5 rounded max-h-[200px] overflow-auto">
                {bbagley.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      update("imageIndex", i);
                      setPickerOpen(false);
                    }}
                    className={`relative aspect-square overflow-hidden rounded border-2 transition-all ${
                      i === tune.imageIndex ? "border-[#525F47]" : "border-transparent hover:border-black/20"
                    }`}
                    title={IMAGE_LABELS[i]}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </Section>

          <Section label="Crop">
            <Slider label="X" value={tune.cropX} min={0} max={100} step={1} unit="%" onChange={(v) => update("cropX", v)} />
            <Slider label="Y" value={tune.cropY} min={0} max={100} step={1} unit="%" onChange={(v) => update("cropY", v)} />
          </Section>

          {supportsSwoosh && (
            <Section label="Swoosh">
              <label className="flex items-center gap-2 mb-1">
                <input
                  type="checkbox"
                  checked={tune.swooshEnabled}
                  onChange={(e) => update("swooshEnabled", e.target.checked)}
                  className="accent-[#525F47]"
                />
                <span className="text-black/70">Enabled</span>
              </label>
              {tune.swooshEnabled && (
                <>
                  <Slider label="Top" value={tune.swooshTop} min={0} max={100} step={1} unit="%" onChange={(v) => update("swooshTop", v)} />
                  <Slider label="Width" value={tune.swooshWidth} min={20} max={100} step={1} unit="vw" onChange={(v) => update("swooshWidth", v)} />
                  <Slider label="Max" value={tune.swooshMaxWidth} min={200} max={1200} step={10} unit="px" onChange={(v) => update("swooshMaxWidth", v)} />
                  <Slider label="Opacity" value={tune.swooshOpacity} min={0} max={100} step={1} unit="%" onChange={(v) => update("swooshOpacity", v)} />
                </>
              )}
            </Section>
          )}

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
