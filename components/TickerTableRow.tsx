import formatNumber from "@/lib/formatNumber";
import { TableCell, TableRow, Text } from "@tremor/react";
import genericIcon from "cryptocurrency-icons/32@2x/icon/generic@2x.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  ticker: Ticker;
  index: number;
  tradeToCurrency: string;
};

function TickerTableRow({ ticker, index, tradeToCurrency }: Props) {
  const [
    symbol,
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
  const tradeFromCurrency = symbol
    .split(tradeToCurrency.toUpperCase())[0]
    .slice(1)
    .replace(":", "");

  let tradeFromCurrencyIcon: StaticImageData;
  try {
    tradeFromCurrencyIcon =
      require(`cryptocurrency-icons/32@2x/icon/${tradeFromCurrency.toLowerCase()}@2x.png`).default;
  } catch (error) {
    tradeFromCurrencyIcon = genericIcon;
  }

  return (
    <TableRow className={`${index % 2 ? "bg-transparent" : "!bg-[#2A216A]"}`}>
      <TableCell className="flex items-center !px-5">
        <Image
          src={tradeFromCurrencyIcon.src}
          alt={tradeFromCurrency}
          width={35}
          height={35}
        />
        <Text className="tableCellText !font-semibold">
          {tradeFromCurrency}/{tradeToCurrency.toUpperCase()}
        </Text>
      </TableCell>
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
          {formatNumber(volume, 2)}
        </Text>
      </TableCell>

      <TableCell>
        <Link
          href={`/ticker/${tradeFromCurrency.toLowerCase()}:${tradeToCurrency}`}
          className="button"
        >
          View Ticker
        </Link>
      </TableCell>
    </TableRow>
  );
}

export default TickerTableRow;
