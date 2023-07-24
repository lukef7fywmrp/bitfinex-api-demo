import { NextResponse } from "next/server";

type Props = {
  params: {
    candle: string;
    section: string;
  };
};

export async function GET(
  request: Request,
  { params: { candle, section }, params }: Props
) {
  if (!candle || !section) {
    return NextResponse.json(
      { message: "Missing candle or section" },
      { status: 400 }
    );
  }

  const response = await fetch(
    `https://api-pub.bitfinex.com/v2/candles/${JSON.parse(candle)}/${JSON.parse(
      section
    )}?sort=1`,
    { headers: { "Content-Type": "application/json" }, cache: "no-store" }
  );
  const candles = await response.json();

  if (candles[0] === "error") {
    return new Response(candles[2], { status: 404 });
  }

  return NextResponse.json(candles, { status: 200 });
}
