import TradesTable from "@/components/TradesTable";

type Props = {
  params: { symbol: string };
};

export const revalidate = 60;

function TickerPage({ params: { symbol } }: Props) {
  symbol = `t${decodeURIComponent(symbol).replace(":", "").toUpperCase()}`;

  return (
    <div>
      <TradesTable symbol={symbol} />
    </div>
  );
}

export default TickerPage;
