import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-28 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-clove-500">404</p>
      <Link href="/" className="mt-8 inline-block rounded-full bg-clove-500 px-7 py-3.5 font-bold text-white hover:bg-clove-600">
        Zanzibar
      </Link>
    </div>
  );
}
