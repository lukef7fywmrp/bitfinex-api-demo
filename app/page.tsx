import Link from "next/link";

export default function Home() {
  return (
    <div className="border-2 border-[#420D90] rounded-xl px-6 py-6 flex items-center justify-center">
      <Link href="/currency/usd" className="button">
        View Tickers
      </Link>
    </div>
  );
}
