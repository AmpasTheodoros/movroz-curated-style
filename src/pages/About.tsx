import Layout from "@/components/Layout";
import SectionReveal from "@/components/SectionReveal";
import logo from "@/assets/movroz-logo.jpg";

const About = () => {
  return (
    <Layout>
      <section className="px-6 md:px-16 py-24 md:py-36">
        <SectionReveal>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4 font-sans">Our Story</p>
            <h1 className="font-serif text-5xl md:text-6xl font-light mb-16 text-foreground">About MOVROZ</h1>
          </div>
        </SectionReveal>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-16 items-start">
          <SectionReveal delay={0.1}>
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
              <p className="text-lg font-serif italic text-foreground/80">
                MOVROZ was born from a simple truth: what we wear is who we are becoming.
              </p>
              <p>
                Founded by Dora Sfouggara, MOVROZ exists at the intersection of fashion and art. 
                We don't follow trends — we curate a world. Every piece is chosen not just for how it looks, 
                but for how it makes you feel.
              </p>
              <p>
                The name MOVROZ carries the essence of movement and transformation. 
                Our logo, with its mirrored letters and pink and lavender accents, 
                represents the duality of strength and softness that defines our aesthetic.
              </p>
              <p>
                This is not a store. This is a curated experience — a place where fashion meets identity, 
                where every garment tells a story, and where you are invited to become the most 
                authentic version of yourself.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <img src={logo} alt="MOVROZ Logo" className="w-48 h-48 object-contain opacity-60" loading="lazy" />
          </SectionReveal>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 md:px-16 py-24 md:py-36 bg-secondary/30">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { title: "Curated", text: "Every piece is hand-selected. Nothing mass-produced, nothing ordinary." },
            { title: "Artistic", text: "Fashion as expression. We treat each collection as an editorial story." },
            { title: "Personal", text: "Driven by Dora's vision — authentic, bold, and unapologetically individual." },
          ].map((item, i) => (
            <SectionReveal key={item.title} delay={i * 0.1}>
              <div>
                <h3 className="font-serif text-2xl mb-4 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed text-sm">{item.text}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default About;
