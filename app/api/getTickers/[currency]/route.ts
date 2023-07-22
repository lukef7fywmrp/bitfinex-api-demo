import { NextResponse } from "next/server";

type Props = {
  params: {
    currency: string;
  };
};

export async function GET(request: Request, { params: { currency } }: Props) {
  if (!currency) {
    return NextResponse.json({ message: "Missing currency" }, { status: 400 });
  }

  const tradingPairsResponse = await fetch(
    "https://api-pub.bitfinex.com/v2/conf/pub:list:pair:exchange",
    { headers: { "Content-Type": "application/json" }, cache: "no-store" }
  );
  const tradingPairs: TradingPair[][] = await tradingPairsResponse.json();

  // Filter trading pairs ending with the currency
  const filteredTradingPairs = tradingPairs[0].filter((pair) =>
    pair.endsWith(currency)
  );

  if (filteredTradingPairs.length === 0) {
    return new Response(`No trading pairs found for ${currency}`, {
      status: 404,
    });
  }

  // get the tickers for the filtered trading pairs
  const tickersResponse = await fetch(
    `https://api-pub.bitfinex.com/v2/tickers?symbols=${filteredTradingPairs
      .map((pair) => `t${pair}`)
      .join(",")}`,
    {
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    }
  );
  const tickers = await tickersResponse.json();

  if (tickers[0] === "error") {
    return new Response(tickers[2], { status: 404 });
  }

  return NextResponse.json(tickers, { status: 200 });
}
