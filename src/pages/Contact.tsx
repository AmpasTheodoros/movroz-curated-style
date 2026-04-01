import Layout from "@/components/Layout";
import SectionReveal from "@/components/SectionReveal";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <section className="px-6 md:px-16 py-24 md:py-36">
        <div className="max-w-2xl mx-auto">
          <SectionReveal>
            <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4 font-sans">Get in Touch</p>
            <h1 className="font-serif text-5xl md:text-6xl font-light mb-8 text-foreground">Contact</h1>
            <p className="text-muted-foreground font-light mb-16 leading-relaxed">
              For inquiries, collaborations, or just to say hello — we'd love to hear from you.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block font-sans">Name</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-border py-3 text-foreground font-light focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block font-sans">Email</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-border py-3 text-foreground font-light focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block font-sans">Message</label>
                <textarea
                  rows={5}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground font-light focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <Button
                type="submit"
                className="rounded-none bg-foreground text-background hover:bg-accent hover:text-accent-foreground px-10 py-5 transition-all duration-500 mt-4"
              >
                <span className="text-xs tracking-[0.2em] uppercase">Send</span>
              </Button>
            </form>
          </SectionReveal>

          <SectionReveal delay={0.25}>
            <div className="mt-20 pt-12 border-t border-border/50">
              <a href="#" className="inline-flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                <Instagram size={18} />
                <span className="text-sm font-sans">@movroz</span>
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
