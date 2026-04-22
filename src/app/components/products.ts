// Real Greenwrld catalog — scraped from greenwrld-co.com (Buy It Now collection).
// Each product has exactly 2 real photos: front flat-lay + back view on hanger.
// No lifestyle fillers — this matches the real site.
import pSoMuch from "../../assets/products/so-much-of-this-world-is-above-us.jpg";
import pSoMuchBack from "../../assets/products/so-much-of-this-world-is-above-us-back.jpg";
import pMacMiller from "../../assets/products/mac-miller.jpg";
import pMacMillerBack from "../../assets/products/mac-miller-back.jpg";
import pThumbsUp from "../../assets/products/thumbs-up.jpg";
import pThumbsUpBack from "../../assets/products/thumbs-up-back.jpg";
import pGoodAm from "../../assets/products/go-od-am.jpg";
import pGoodAmBack from "../../assets/products/go-od-am-back.jpg";
import pSwimming from "../../assets/products/swimming.jpg";
import pSwimmingBack from "../../assets/products/swimming-back.jpg";
import pTilInfinity from "../../assets/products/til-infinity.jpg";
import pTilInfinityBack from "../../assets/products/til-infinity-back.jpg";
import pKids from "../../assets/products/kids.jpg";
import pKidsBack from "../../assets/products/kids-back.jpg";
import pSwimmingCircles from "../../assets/products/swimming-in-circles.jpg";
import pSwimmingCirclesBack from "../../assets/products/swimming-in-circles-back.jpg";
import pCirclesXXL from "../../assets/products/circles-xxl.jpg";
import pCirclesXXLBack from "../../assets/products/circles-xxl-back.jpg";
import pCircles from "../../assets/products/circles.jpg";
import pCirclesBack from "../../assets/products/circles-back.jpg";
import pSelfCare from "../../assets/products/self-care.jpg";
import pSelfCareBack from "../../assets/products/self-care-back.jpg";
import pFaces from "../../assets/products/faces.jpg";
import pFacesBack from "../../assets/products/faces-back.jpg";

export type Product = {
  id: number;
  slug: string;
  name: string;
  price: string;
  badge: "New" | null;
  dimensions: string;
  fitSizes: string;
  images: string[];
};

export const products: Product[] = [
  {
    id: 1,
    slug: "so-much-of-this-world-is-above-us",
    name: "So Much of this World is Above Us (XS-XL)",
    price: "$350.00",
    badge: "New",
    dimensions: "27W x 27L",
    fitSizes: "XS-XL",
    images: [pSoMuch, pSoMuchBack],
  },
  {
    id: 2,
    slug: "mac-miller",
    name: "Mac Miller (XS-XL)",
    price: "$350.00",
    badge: "New",
    dimensions: "27W x 26L",
    fitSizes: "XS-XL",
    images: [pMacMiller, pMacMillerBack],
  },
  {
    id: 3,
    slug: "thumbs-up",
    name: "Thumbs Up (XS-XL)",
    price: "$350.00",
    badge: "New",
    dimensions: "27W x 25L",
    fitSizes: "XS-XL",
    images: [pThumbsUp, pThumbsUpBack],
  },
  {
    id: 4,
    slug: "go-od-am",
    name: "GO:OD AM (XS-XL)",
    price: "$350.00",
    badge: "New",
    dimensions: "27W x 26L",
    fitSizes: "XS-XL",
    images: [pGoodAm, pGoodAmBack],
  },
  {
    id: 5,
    slug: "swimming",
    name: "Swimming (XS-XL)",
    price: "$350.00",
    badge: null,
    dimensions: "27W x 27L",
    fitSizes: "XS-XL",
    images: [pSwimming, pSwimmingBack],
  },
  {
    id: 6,
    slug: "til-infinity",
    name: "Til Infinity (XS-XL)",
    price: "$350.00",
    badge: null,
    dimensions: "26W x 28L",
    fitSizes: "XS-XL",
    images: [pTilInfinity, pTilInfinityBack],
  },
  {
    id: 7,
    slug: "kids",
    name: "Kids (XS-XL)",
    price: "$350.00",
    badge: null,
    dimensions: "26W x 26L",
    fitSizes: "XS-XL",
    images: [pKids, pKidsBack],
  },
  {
    id: 8,
    slug: "swimming-in-circles",
    name: "Swimming in Circles (XS-XL)",
    price: "$350.00",
    badge: null,
    dimensions: "27W x 27L",
    fitSizes: "XS-XL",
    images: [pSwimmingCircles, pSwimmingCirclesBack],
  },
  {
    id: 9,
    slug: "circles-xxl",
    name: "Circles (XS-XXL)",
    price: "$350.00",
    badge: null,
    dimensions: "28W x 27L",
    fitSizes: "XS-XXL",
    images: [pCirclesXXL, pCirclesXXLBack],
  },
  {
    id: 10,
    slug: "circles",
    name: "Circles (XS-XL)",
    price: "$350.00",
    badge: null,
    dimensions: "27W x 26L",
    fitSizes: "XS-XL",
    images: [pCircles, pCirclesBack],
  },
  {
    id: 11,
    slug: "self-care",
    name: "Self Care (XS-XL)",
    price: "$350.00",
    badge: null,
    dimensions: "27W x 26L",
    fitSizes: "XS-XL",
    images: [pSelfCare, pSelfCareBack],
  },
  {
    id: 12,
    slug: "faces",
    name: "Faces (XS-XL)",
    price: "$350.00",
    badge: null,
    dimensions: "27W x 26L",
    fitSizes: "XS-XL",
    images: [pFaces, pFacesBack],
  },
];

export const productBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const newArrivals = products.filter((p) => p.badge === "New");

// ─── Copy from the real site (greenwrld-co.com) ───
export const PRODUCT_COPY = {
  materials:
    "Every item is repurposed using authentic, second hand materials. 100% sustainable.",
  sizing:
    "Sizes in the parentheses are guidelines. Find specific measurements of each item in the description for the most accurate sizing. It helps to measure a hoodie of your own & compare measurements. Check IG to see how items are modeled on a size small. If wanting an item's sizing adjusted, please reach out through DM on IG.",
  care:
    "Wash inside out, on cold and hang dry. If needing to machine dry, only do it occasionally.",
  shipping:
    "Domestic shipping is $5 (USA). International shipping ranges from $20-$50 USD extra. We do not offer returns, please make sure you're confident about purchasing your item. If you're unhappy about your purchase in any way, please DM us on instagram and we will try to figure something out.",
};
