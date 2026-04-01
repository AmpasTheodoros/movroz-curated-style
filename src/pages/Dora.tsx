import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import Layout from "@/components/Layout";
import SectionReveal from "@/components/SectionReveal";
import doraPortrait from "@/assets/dora-portrait.jpg";
import doraEditorial from "@/assets/dora-editorial.jpg";

const Dora = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img src={doraEditorial} alt="Dora Sfouggara" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/50" />
        </motion.div>
        <div className="relative h-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-3 font-sans">The Muse</p>
            <h1 className="font-serif text-5xl md:text-7xl font-light text-foreground">Dora Sfouggara</h1>
          </motion.div>
        </div>
      </section>

      {/* Bio */}
      <section className="px-6 md:px-16 py-24 md:py-36">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <SectionReveal>
            <img
              src={doraPortrait}
              alt="Dora Portrait"
              loading="lazy"
              className="w-full max-w-md h-[500px] object-cover"
            />
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <div>
              <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-6 font-sans">Biography</p>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-8 leading-tight text-foreground">
                Where intuition meets intention
              </h2>
              <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                <p>
                  Dora Sfouggara is more than a face — she's the creative force behind MOVROZ. 
                  With an eye for the effortlessly bold and a philosophy rooted in personal expression, 
                  she transforms everyday dressing into an art form.
                </p>
                <p>
                  Her approach is simple: wear what makes you feel powerful. 
                  Every collection reflects her journey — from quiet mornings to unforgettable nights.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 md:px-16 py-24 md:py-36 bg-secondary/30">
        <SectionReveal>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-8 font-sans">Philosophy</p>
            <blockquote className="font-serif text-3xl md:text-4xl font-light leading-relaxed italic text-foreground">
              "I don't dress for others. I dress for the woman I'm becoming."
            </blockquote>
            <p className="mt-8 text-muted-foreground font-light">— Dora Sfouggara</p>
          </div>
        </SectionReveal>
      </section>

      {/* Social */}
      <section className="px-6 md:px-16 py-24 md:py-36">
        <SectionReveal>
          <div className="max-w-md mx-auto text-center">
            <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-6 font-sans">Daily Aesthetic</p>
            <h2 className="font-serif text-3xl font-light mb-8 text-foreground">Follow Dora</h2>
            <a
              href="#"
              className="inline-flex items-center gap-3 text-accent hover:text-foreground transition-colors duration-300"
            >
              <Instagram size={20} />
              <span className="text-sm tracking-[0.15em] uppercase font-sans">@dorasfouggara</span>
            </a>
          </div>
        </SectionReveal>
      </section>
    </Layout>
  );
};

export default Dora;
