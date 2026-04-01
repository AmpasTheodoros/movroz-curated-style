import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import SectionReveal from "@/components/SectionReveal";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-muted-foreground font-light">Product not found.</p>
        </div>
      </Layout>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <Layout>
      <section className="px-6 md:px-16 py-12 md:py-20">
        <Link to="/shop" className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors mb-12">
          <ArrowLeft size={14} />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden bg-secondary"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] md:h-[700px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            {product.tag && (
              <span className="text-[10px] tracking-[0.25em] uppercase text-accent mb-4 font-sans">
                {product.tag}
              </span>
            )}
            <h1 className="font-serif text-4xl md:text-5xl font-light mb-4 text-foreground">{product.name}</h1>
            <p className="text-xl text-muted-foreground font-light mb-8">{product.price}</p>
            
            {product.description && (
              <p className="text-muted-foreground font-light leading-relaxed mb-10 max-w-md font-serif italic text-lg">
                "{product.description}"
              </p>
            )}

            <Button className="rounded-none bg-foreground text-background hover:bg-accent hover:text-accent-foreground w-fit px-12 py-6 transition-all duration-500">
              <span className="text-xs tracking-[0.2em] uppercase">Add to Bag</span>
            </Button>

            <div className="mt-12 pt-8 border-t border-border/50">
              <p className="text-xs tracking-[0.2em] uppercase text-accent mb-2 font-sans">Styled by Dora</p>
              <p className="text-sm text-muted-foreground font-light">
                This piece is part of Dora's personal selection. Pair with confidence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related */}
      <section className="px-6 md:px-16 py-24 md:py-32">
        <SectionReveal>
          <h2 className="font-serif text-3xl font-light mb-12 text-foreground">You may also love</h2>
        </SectionReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
          {related.map((p, i) => (
            <SectionReveal key={p.id} delay={i * 0.1}>
              <ProductCard {...p} />
            </SectionReveal>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
