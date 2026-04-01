import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionReveal from "@/components/SectionReveal";
import product1 from "@/assets/product-1.jpg";
import doraEditorial from "@/assets/dora-editorial.jpg";
import product5 from "@/assets/product-5.jpg";

const collections = [
  {
    title: "Noir Essentials",
    subtitle: "The foundation of every wardrobe",
    image: product1,
    slug: "noir-essentials",
  },
  {
    title: "Dora's Edit",
    subtitle: "Personally curated by Dora Sfouggara",
    image: doraEditorial,
    slug: "doras-edit",
  },
  {
    title: "Soft Power",
    subtitle: "Where femininity meets strength",
    image: product5,
    slug: "soft-power",
  },
];

const Collections = () => {
  return (
    <Layout>
      <section className="px-6 md:px-16 py-20 md:py-28">
        <SectionReveal>
          <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-3 font-sans">Explore</p>
          <h1 className="font-serif text-5xl md:text-6xl font-light mb-16 text-foreground">Collections</h1>
        </SectionReveal>

        <div className="space-y-8">
          {collections.map((col, i) => (
            <SectionReveal key={col.slug} delay={i * 0.1}>
              <Link to="/shop" className="group block">
                <motion.div
                  whileHover={{ scale: 0.99 }}
                  transition={{ duration: 0.4 }}
                  className="relative h-[50vh] md:h-[60vh] overflow-hidden"
                >
                  <img
                    src={col.image}
                    alt={col.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/50 group-hover:bg-background/40 transition-colors duration-500" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
                    <p className="text-xs tracking-[0.25em] uppercase text-accent mb-2 font-sans">{col.subtitle}</p>
                    <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">{col.title}</h2>
                  </div>
                </motion.div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Collections;
