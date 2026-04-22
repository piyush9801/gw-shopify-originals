import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  badge?: string;
}

export function ProductCard({ image, name, price, badge }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative bg-[#D4DDD1] aspect-square overflow-hidden mb-4">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {badge && (
          <div className="absolute top-2 left-2 bg-[#C4CFC0] px-2 py-0.5">
            <span className="font-['Optima',sans-serif] text-[11px] tracking-[1.98px] uppercase text-[#525F47]">
              {badge}
            </span>
          </div>
        )}
      </div>
      <p className="font-['Optima',sans-serif] text-[13px] tracking-[2.16px] uppercase text-[#1A1A1A] text-center">
        {name}
      </p>
      <p className="font-['Optima',sans-serif] text-[13px] tracking-[2.16px] uppercase text-[#8B9B7D] text-center mt-1">
        {price}
      </p>
    </div>
  );
}
