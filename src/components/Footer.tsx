import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <h3 className="font-serif text-2xl mb-6 text-foreground">MOVROZ</h3>
            <p className="text-muted-foreground font-light text-sm leading-relaxed max-w-xs">
              Clothes & Shoes — curated by Dora Sfouggara. Where fashion meets art.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6">Navigate</h4>
            <div className="flex flex-col gap-3">
              {["Shop", "Collections", "Dora", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-sm text-foreground/60 hover:text-accent transition-colors font-light"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-foreground/60 hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
            <p className="mt-6 text-xs text-muted-foreground font-light">
              © {new Date().getFullYear()} MOVROZ. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
