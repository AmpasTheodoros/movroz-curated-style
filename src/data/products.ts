import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  tag?: string;
  description?: string;
  category?: string;
}

export const products: Product[] = [
  {
    id: "noir-dress",
    name: "Noir Elegance Dress",
    price: "€289",
    image: product1,
    tag: "Dora's Pick",
    description: "A timeless silhouette in deep black, designed for the woman who commands every room.",
    category: "Dresses",
  },
  {
    id: "silk-blouse",
    name: "Ivory Silk Blouse",
    price: "€185",
    image: product2,
    description: "Pure silk meets effortless grace. A staple reimagined with modern proportions.",
    category: "Tops",
  },
  {
    id: "midnight-heels",
    name: "Midnight Stilettos",
    price: "€245",
    image: product3,
    tag: "Limited",
    description: "Sculptural heels that blur the line between fashion and art.",
    category: "Shoes",
  },
  {
    id: "charcoal-blazer",
    name: "Structured Blazer",
    price: "€320",
    image: product4,
    tag: "New",
    description: "Architectural lines meet Italian tailoring in this statement blazer.",
    category: "Outerwear",
  },
  {
    id: "mauve-tote",
    name: "Mauve Leather Tote",
    price: "€210",
    image: product5,
    tag: "Dora's Pick",
    description: "Handcrafted leather in our signature mauve. A daily companion with soul.",
    category: "Accessories",
  },
];
