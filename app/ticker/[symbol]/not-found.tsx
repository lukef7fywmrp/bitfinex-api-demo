import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested ticker info</p>
      <p>
        View <Link href="/currency/usd">all tickers</Link>
      </p>
    </div>
  );
}
