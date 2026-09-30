import Image from "next/image";
import type { Img } from "@/data/images";

export default function MediaSlot({ img, ratio = "4/5", sizes = "(max-width:767px) 100vw, 40vw" }: { img: Img; ratio?: string; sizes?: string }) {
  return (
    <div
      className="ph mono"
      role={img.src ? undefined : "img"}
      aria-label={img.src ? undefined : `${img.label} placeholder`}
      style={{ position: "relative", overflow: "hidden", aspectRatio: ratio }}
    >
      {img.src ? <Image src={img.src} alt={img.alt} fill sizes={sizes} style={{ objectFit: "cover" }} /> : img.label}
    </div>
  );
}