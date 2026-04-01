import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  tag?: string;
}

const ProductCard = ({ id, name, price, image, tag }: ProductCardProps) => {
  return (
    <Link to={`/shop/${id}`}>
      <motion.div
        className="group cursor-pointer"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="relative overflow-hidden bg-secondary aspect-[3/4] mb-4">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {tag && (
            <span className="absolute top-4 left-4 text-[10px] tracking-[0.2em] uppercase bg-accent text-accent-foreground px-3 py-1 font-sans">
              {tag}
            </span>
          )}
        </div>
        <h3 className="font-serif text-lg text-foreground/90 mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground font-light">{price}</p>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
