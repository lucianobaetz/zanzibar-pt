import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getHotel, HOTELS } from "@/content/hotels";
import { alternatesFor } from "@/i18n/seo";
import { HotelPageView } from "@/views/HotelPageView";

type HotelPageProps = { params: Promise<{ slug: string }> };

export const generateStaticParams = () => HOTELS.map((hotel) => ({ slug: hotel.slug }));

export const generateMetadata = async ({ params }: HotelPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const hotel = getHotel(slug);
  if (!hotel) return {};

  const cover = hotel.images[0];
  return {
    title: { absolute: hotel.seoTitle },
    description: hotel.seoDescription,
    alternates: alternatesFor("pt", "hotel", hotel.slug),
    openGraph: {
      title: hotel.seoTitle,
      description: hotel.seoDescription,
      url: `/hoteis/${hotel.slug}`,
      images: cover ? [{ url: cover.src, alt: cover.alt }] : [],
    },
  };
};

export default async function HotelPage({ params }: HotelPageProps) {
  const { slug } = await params;
  if (!getHotel(slug)) notFound();
  return <HotelPageView slug={slug} />;
}
