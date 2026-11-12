import Image from "next/image";
import type { HotelImage } from "@/content/hotels";

type HotelGalleryProps = { images: readonly HotelImage[] };

// Booking-style mosaic: one large photo and four smaller ones. The rest follow in a strip.
export const HotelGallery = ({ images }: HotelGalleryProps) => {
  const [main, ...others] = images;
  if (!main) return null;
  const grid = others.slice(0, 4);
  const strip = others.slice(4);

  return (
    <div className="space-y-3">
      <div className="grid gap-3 md:h-[28rem] md:grid-cols-[2fr_1fr_1fr] md:grid-rows-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl md:row-span-2 md:aspect-auto">
          <Image src={main.src} alt={main.alt} fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
        {grid.map((image) => (
          <div key={image.src} className="relative hidden overflow-hidden rounded-3xl md:block">
            <Image src={image.src} alt={image.alt} fill sizes="25vw" className="object-cover" />
          </div>
        ))}
      </div>
      {/* On phones the extra photos scroll sideways, never by themselves. */}
      <ul className="flex snap-x gap-3 overflow-x-auto pb-2 md:hidden" aria-label="Mais fotos">
        {[...grid, ...strip].map((image) => (
          <li key={image.src} className="relative h-32 w-48 shrink-0 snap-start overflow-hidden rounded-2xl">
            <Image src={image.src} alt={image.alt} fill sizes="12rem" className="object-cover" />
          </li>
        ))}
      </ul>
      {strip.length > 0 ? (
        <ul className="hidden gap-3 md:grid md:grid-cols-3" aria-label="Mais fotos">
          {strip.map((image) => (
            <li key={image.src} className="relative aspect-[3/2] overflow-hidden rounded-2xl">
              <Image src={image.src} alt={image.alt} fill sizes="25vw" className="object-cover" />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
