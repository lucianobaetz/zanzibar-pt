import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-28 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-clove-500">Erro 404</p>
      <h1 className="mt-3 text-4xl font-semibold text-ocean-900">Esta página não existe</h1>
      <p className="mt-4 text-ink-soft">Talvez o endereço tenha mudado. Veja os nossos hotéis em Zanzibar.</p>
      <Link href="/hoteis" className="mt-8 inline-block rounded-full bg-clove-500 px-7 py-3.5 font-bold text-white hover:bg-clove-600">
        Ver os hotéis
      </Link>
    </div>
  );
}
