import { useState } from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import SectionReveal from "@/components/SectionReveal";
import { products } from "@/data/products";

const filters = ["All", "Dora's Picks", "Limited", "New"];

const Shop = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? products
    : activeFilter === "Dora's Picks"
    ? products.filter((p) => p.tag === "Dora's Pick")
    : products.filter((p) => p.tag === activeFilter);

  return (
    <Layout>
      <section className="px-6 md:px-16 py-20 md:py-28">
        <SectionReveal>
          <div className="mb-16">
            <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-3 font-sans">Collection</p>
            <h1 className="font-serif text-5xl md:text-6xl font-light text-foreground">Shop</h1>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="flex gap-6 mb-16 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-xs tracking-[0.2em] uppercase font-sans whitespace-nowrap transition-colors duration-300 pb-1 border-b ${
                  activeFilter === filter
                    ? "text-accent border-accent"
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
          {filtered.map((product, i) => (
            <SectionReveal key={product.id} delay={i * 0.08}>
              <ProductCard {...product} />
            </SectionReveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20 font-light">No items found.</p>
        )}
      </section>
    </Layout>
  );
};

export default Shop;
