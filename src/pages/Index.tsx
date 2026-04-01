import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import SectionReveal from "@/components/SectionReveal";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dora.jpg";
import doraEditorial from "@/assets/dora-editorial.jpg";

const Index = () => {
  const featured = products.slice(0, 4);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src={heroImage}
            alt="MOVROZ Campaign"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/40" />
        </motion.div>

        <div className="relative h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs tracking-[0.35em] uppercase text-foreground/60 mb-4 font-sans">
              Clothes & Shoes
            </p>
            <h1 className="font-serif text-5xl md:text-8xl font-light leading-[0.95] mb-6 text-foreground">
              Wear the
              <br />
              <span className="italic text-accent">aesthetic</span>
            </h1>
            <Link to="/shop">
              <Button variant="outline" size="lg" className="group border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-all duration-500 rounded-none px-8">
                <span className="text-xs tracking-[0.2em] uppercase">Explore Collection</span>
                <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="px-6 md:px-16 py-24 md:py-36">
        <SectionReveal>
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-3 font-sans">Curated</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">Featured</h2>
            </div>
            <Link
              to="/shop"
              className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-accent transition-colors hidden md:block"
            >
              View All
            </Link>
          </div>
        </SectionReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {featured.map((product, i) => (
            <SectionReveal key={product.id} delay={i * 0.1}>
              <ProductCard {...product} />
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* From Dora */}
      <section className="px-6 md:px-16 py-24 md:py-36 bg-secondary/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <SectionReveal>
            <div className="overflow-hidden">
              <img
                src={doraEditorial}
                alt="Dora Sfouggara"
                loading="lazy"
                width={1200}
                height={800}
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="max-w-md">
              <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4 font-sans">From Dora</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 leading-tight text-foreground">
                "Fashion is the armor to survive the reality of everyday life."
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-8">
                Every piece in this collection has been personally selected and styled by Dora. 
                It's not about trends — it's about identity.
              </p>
              <Link to="/dora">
                <Button variant="ghost" className="group rounded-none px-0 text-accent hover:text-foreground hover:bg-transparent">
                  <span className="text-xs tracking-[0.2em] uppercase">Meet Dora</span>
                  <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="px-6 md:px-16 py-32 md:py-48">
        <SectionReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-8 font-sans">MOVROZ</p>
            <h2 className="font-serif text-3xl md:text-5xl font-light leading-relaxed text-foreground">
              We don't sell products.
              <br />
              <span className="italic text-accent">We sell aesthetic & identity.</span>
            </h2>
          </div>
        </SectionReveal>
      </section>

      {/* Newsletter */}
      <section className="px-6 md:px-16 py-24 md:py-32 bg-secondary/30">
        <SectionReveal>
          <div className="max-w-lg mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-4 text-foreground">Join the inner circle</h2>
            <p className="text-muted-foreground font-light text-sm mb-8">
              Be the first to know about new drops, exclusive pieces, and Dora's styling notes.
            </p>
            <form className="flex gap-0" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-background border border-border px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
              />
              <Button
                type="submit"
                className="rounded-none bg-foreground text-background hover:bg-accent hover:text-accent-foreground px-6 transition-all duration-300"
              >
                <span className="text-xs tracking-[0.15em] uppercase">Join</span>
              </Button>
            </form>
          </div>
        </SectionReveal>
      </section>
    </Layout>
  );
};

export default Index;
