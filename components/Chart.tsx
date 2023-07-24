import { getFetchUrl } from "@/lib/getFetchUrl";
import {
  Badge,
  Flex,
  Title
} from "@tremor/react";
import ChartContainer from "./ChartContainer";

type Props = {
  symbol: string;
};

async function Chart({ symbol }: Props) {
  const section: Section = "hist";
  const timeFrame: TimeFrame = "30m";
  const candle = `trade:${timeFrame}:${symbol}`;
  const response = await fetch(
    getFetchUrl(
      `api/getCandles/${JSON.stringify(candle)}/${JSON.stringify(section)}`
    )
  );
  const candles: Candle[] = await response.json();

  return (
    <div className="relative flex-1 flex-col flex border-2 border-[#420D90] rounded-xl h-[90vh] overflow-hidden">
      <div>
        <div className="tableHeaderCell !bg-[#2B0D62] z-20">
          <Flex justifyContent="start" className="space-x-2">
            <Title className="text-white font-semibold">Chart</Title>
            <Badge className="text-white bg-green-500">{candles.length}</Badge>
          </Flex>
          {/* <Text className="mt-2 text-[#675E82] font-medium">
              Overview of {symbol} trading pair
            </Text> */}
        </div>
      </div>
      <ChartContainer candles={candles} />
    </div>
  );
}

export default Chart;
