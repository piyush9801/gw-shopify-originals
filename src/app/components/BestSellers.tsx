import { Link } from "react-router";
import { ProductCard } from "./ProductCard";
import { products as catalog } from "./products";

// Featured 4 on the home page — first 4 from the catalog.
const featured = catalog.slice(0, 4);

export function BestSellers() {
  return (
    <section className="bg-[#E8E6E0] border-t border-[#C4CFC0] py-16 lg:py-24">
      <div className="text-center mb-10">
        <h2 className="font-['Optima',sans-serif] text-[24px] lg:text-[32px] tracking-[5px] lg:tracking-[6px] uppercase text-[#1A1A1A] mb-3">
          Current Pieces
        </h2>
      </div>

      <div className="max-w-[1260px] mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <Link key={product.slug} to={`/product/${product.slug}`} className="block">
              <ProductCard
                image={product.images[0]}
                name={product.name}
                price={product.price}
                badge={product.badge ?? undefined}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <Link
          to="/shop"
          className="inline-block bg-[#1A1A1A] px-16 py-4 font-['Optima',sans-serif] text-[13px] lg:text-[15px] tracking-[4px] uppercase text-white hover:bg-[#4A4841] transition-colors"
        >
          View All
        </Link>
      </div>
    </section>
  );
}
