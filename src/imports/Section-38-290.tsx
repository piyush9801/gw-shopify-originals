import imgSection from "figma:asset/22b9ae640fcd8f5e4f2b14c0fc292276fe3517df.png";

export default function Section() {
  return (
    <div className="relative size-full" data-name="Section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[-5.99%] max-w-none top-0 w-[111.99%]" src={imgSection} />
        </div>
        <div className="absolute bg-gradient-to-b from-[23.444%] from-[rgba(0,0,0,0)] inset-0 to-black" />
      </div>
      <div className="absolute h-[673px] left-0 right-0 top-0" data-name="Rectangle" />
    </div>
  );
}