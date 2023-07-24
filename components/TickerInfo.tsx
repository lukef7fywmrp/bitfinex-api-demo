import formatNumber from "@/lib/formatNumber";
import { getFetchUrl } from "@/lib/getFetchUrl";
import {
  Badge,
  Flex,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";
import Image, { StaticImageData } from "next/image";
import genericIcon from "cryptocurrency-icons/32@2x/icon/generic@2x.png";
import { notFound, redirect } from "next/navigation";

type Props = {
  symbol: string;
  params: { symbol: string };
};

async function TickerInfo({ symbol, params }: Props) {
  const response = await fetch(getFetchUrl(`api/getTicker/${symbol}`));

  const ticker: TickerInfo = await response.json();

  if ((ticker[0] as any) === "error") {
    notFound();
  }

  const [
    bid,
    bidSize,
    ask,
    askSize,
    dailyChange,
    dailyChangeRelative,
    lastPrice,
    volume,
    high,
    low,
  ] = ticker;
  const dailyChangePercent = +((dailyChange / lastPrice) * 100).toFixed(2);
  const tradeFromCurrency = decodeURIComponent(params.symbol)
    .split(":")[0]
    .toUpperCase();
  const tradeToCurrency = decodeURIComponent(params.symbol)
    .split(":")[1]
    .toUpperCase();

  let tradeFromCurrencyIcon: StaticImageData;
  try {
    tradeFromCurrencyIcon =
      require(`cryptocurrency-icons/32@2x/icon/${tradeFromCurrency.toLowerCase()}@2x.png`).default;
  } catch (error) {
    tradeFromCurrencyIcon = genericIcon;
  }

  return (
    <Table className="border-2 border-[#420D90] rounded-xl overflow-y-scroll h-fit">
      <TableHead>
        <TableRow>
          <TableHeaderCell className="tableHeaderCell flex items-center !bg-[#2B0D62] z-20">
            <Image
              src={tradeFromCurrencyIcon.src}
              alt={tradeFromCurrency}
              width={35}
              height={35}
            />
            <Text className="tableCellText !font-semibold">
              {tradeFromCurrency}/{tradeToCurrency}
            </Text>
          </TableHeaderCell>
          <TableHeaderCell className="tableHeaderCell !bg-[#2B0D62] z-20"></TableHeaderCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell className="tableHeaderCell">
            Last Price
          </TableHeaderCell>
          <TableHeaderCell className="tableHeaderCell">
            24h Change
          </TableHeaderCell>
          <TableHeaderCell className="tableHeaderCell">
            24h High
          </TableHeaderCell>
          <TableHeaderCell className="tableHeaderCell">
            24h Volume
          </TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody className="!divide-y-0">
        <TableRow className="">
          <TableCell>
            <Text className="tableCellText !text-white/90">
              {formatNumber(lastPrice)}
            </Text>
          </TableCell>
          <TableCell>
            <Text
              className={`tableCellText ${
                dailyChangePercent < 0
                  ? "!text-red-500"
                  : dailyChangePercent === 0
                  ? "!text-yellow-500"
                  : "!text-green-500"
              }`}
            >
              {dailyChangePercent > 0
                ? `+${dailyChangePercent}%`
                : `${dailyChangePercent}%`}
            </Text>
          </TableCell>
          <TableCell>
            <Text className="tableCellText !text-white/90">
              {formatNumber(high)}
            </Text>
          </TableCell>
          <TableCell>
            <Text className="tableCellText !font-semibold">
              {formatNumber(volume, 2)} {tradeFromCurrency}
            </Text>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default TickerInfo;
