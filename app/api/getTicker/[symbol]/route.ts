import { NextResponse } from "next/server";

type Props = {
  params: {
    symbol: string;
  };
};

export async function GET(request: Request, { params: { symbol } }: Props) {
  if (!symbol) {
    return NextResponse.json({ message: "Missing symbol" }, { status: 400 });
  }

  const response = await fetch(
    `https://api-pub.bitfinex.com/v2/ticker/${symbol}`,
    { cache: "no-store", headers: { "Content-Type": "application/json" } }
  );
  const ticker = await response.json();

  if (ticker[0] === "error") {
    return new Response(ticker[2], { status: 404 });
  }

  return NextResponse.json(ticker, { status: 200 });
}
