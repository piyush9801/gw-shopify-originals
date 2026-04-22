import svgPaths from "./svg-tlby3ngfnt";
import imgOrganicParka from "figma:asset/ce8293e5e61ef0b7b9d62aaa8177b6bb6a2311f6.png";

function Layer() {
  return (
    <div className="absolute h-[2077.655px] left-[-505px] mix-blend-multiply top-[-650px] w-[2863.167px]" data-name="Layer_1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2863.17 2077.66">
        <g clipPath="url(#clip0_15_1851)" id="Layer_1" opacity="0.4" style={{ mixBlendMode: "multiply" }}>
          <path d={svgPaths.p270e1300} fill="var(--fill-0, #6D7B61)" id="Vector" />
          <path d={svgPaths.p1f868700} fill="var(--fill-0, #6D7B61)" id="Vector_2" />
          <path d={svgPaths.p3f73c570} fill="var(--fill-0, #6D7B61)" id="Vector_3" />
          <path d={svgPaths.p1142300} fill="var(--fill-0, #6D7B61)" id="Vector_4" />
          <path d={svgPaths.p2caa6f00} fill="var(--fill-0, #6D7B61)" id="Vector_5" />
          <path d={svgPaths.p10f24b80} fill="var(--fill-0, #6D7B61)" id="Vector_6" />
          <path d={svgPaths.p19e24e00} fill="var(--fill-0, #6D7B61)" id="Vector_7" />
          <path d={svgPaths.p2e7adf80} fill="var(--fill-0, #6D7B61)" id="Vector_8" />
          <path d={svgPaths.p10b3f9f0} fill="var(--fill-0, #6D7B61)" id="Vector_9" />
          <path d={svgPaths.p2ed96700} fill="var(--fill-0, #6D7B61)" id="Vector_10" />
          <path d={svgPaths.p17921d80} fill="var(--fill-0, #6D7B61)" id="Vector_11" />
          <path d={svgPaths.p10dbe580} fill="var(--fill-0, #6D7B61)" id="Vector_12" />
          <path d={svgPaths.pecb8600} fill="var(--fill-0, #6D7B61)" id="Vector_13" />
          <path d={svgPaths.p3c060900} fill="var(--fill-0, #6D7B61)" id="Vector_14" />
          <path d={svgPaths.p8ae4a00} fill="var(--fill-0, #6D7B61)" id="Vector_15" />
          <path d={svgPaths.p2784a500} fill="var(--fill-0, #6D7B61)" id="Vector_16" />
        </g>
        <defs>
          <clipPath id="clip0_15_1851">
            <rect fill="white" height="2077.66" width="2863.17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute bg-[#e8e6e0] h-[59.07px] left-[121px] top-[286.93px] w-[148.843px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[21.048px] justify-center leading-[0] left-[43.45px] not-italic text-[#1a1a1a] text-[17.653px] top-[29.54px] tracking-[3.1776px] uppercase w-[62.396px]">
        <p className="leading-[26.48px] whitespace-pre-wrap">Shop</p>
      </div>
    </div>
  );
}

function OrganicParka() {
  return (
    <div className="absolute inset-[0_-203px_-2px_876px]" data-name="Organic Parka">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[191.17%] left-[5.98%] max-w-none top-[-27.24%] w-[73.8%]" src={imgOrganicParka} />
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#616c57] relative size-full">
      <Layer />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Optima:Regular',sans-serif] h-[24.443px] justify-center leading-[0] left-[121px] not-italic text-[16.295px] text-white top-[174.22px] tracking-[2.9331px] uppercase w-[138.097px]">
        <p className="leading-[24.443px] whitespace-pre-wrap">New arrival</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Optima:Regular',sans-serif] h-[57.033px] justify-center leading-[0] left-[121px] not-italic text-[38.022px] text-white top-[225.82px] tracking-[6.844px] uppercase w-[499.289px]">
        <p className="leading-[57.033px] whitespace-pre-wrap">The Organic Parka</p>
      </div>
      <Link />
      <OrganicParka />
    </div>
  );
}