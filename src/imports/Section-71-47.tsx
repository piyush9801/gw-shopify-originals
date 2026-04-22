import imgSection from "figma:asset/c3c8073cceb5a4b1af44a50b74769b046947a5c4.png";

export default function Section() {
  return (
    <div className="relative size-full" data-name="Section">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[107.36%] left-[-3.67%] max-w-none top-[-7.37%] w-[107.41%]" src={imgSection} />
      </div>
      <div className="absolute bg-gradient-to-b from-[52.744%] from-[rgba(0,0,0,0)] inset-0 to-[102.44%] to-black" data-name="Gradient" />
    </div>
  );
}