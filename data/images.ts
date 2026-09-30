export type Img = { src: string; alt: string; label: string };

export const images: Record<"opening" | "why" | "about" | "cta", Img> = {
  opening: { src: "", alt: "", label: "Opening photo" },   // e.g. "/images/opening.jpg"
  why:     { src: "", alt: "", label: "Campaign photo" },  // e.g. "/images/why.jpg"
  about:   { src: "", alt: "", label: "Club photo" },      // e.g. "/images/about.jpg"
  cta:     { src: "", alt: "", label: "Support photo" },   // e.g. "/images/cta.jpg"
};