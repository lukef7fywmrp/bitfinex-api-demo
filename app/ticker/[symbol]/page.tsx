import Chart from "@/components/Chart";

type Props = {
  params: { symbol: string };
};

export const revalidate = 60;

function TickerPage({ params: { symbol } }: Props) {
  symbol = `t${decodeURIComponent(symbol).replace(":", "").toUpperCase()}`;

  return (
    <section className="flex-1">
      <Chart symbol={symbol} />
    </section>
  );
}

export default TickerPage;
