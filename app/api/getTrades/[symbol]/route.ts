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
    `https://api-pub.bitfinex.com/v2/trades/${JSON.parse(symbol)}/hist`,
    {
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    }
  );
  const trades = await response.json();

  if (trades[0] === "error") {
    return new Response(trades[2], { status: 404 });
  }

  return NextResponse.json(trades, { status: 200 });
}
