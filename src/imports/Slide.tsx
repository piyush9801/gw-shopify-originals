function Container() {
  return <div className="absolute h-[1080px] left-0 top-0 w-[1920px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1920 1080\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-96.15 61.3 -108.98 -170.93 820.5 504)\\'><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(220,235,207,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(184,214,158,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />;
}

function Paragraph() {
  return (
    <div className="absolute h-[18px] left-[96px] opacity-60 top-[96px] w-[227.32px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[12px] text-white top-px tracking-[3.6px]">GRADIENT APPLICATIONS</p>
    </div>
  );
}

function GreenWrldPresentation() {
  return (
    <div className="h-[1080px] overflow-clip relative shrink-0 w-full" data-name="GreenWrldPresentation">
      <Container />
      <Paragraph />
    </div>
  );
}

export default function Slide() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start overflow-clip relative rounded-[10px] size-full" data-name="Slide">
      <GreenWrldPresentation />
    </div>
  );
}