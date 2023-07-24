import formatNumber from "@/lib/formatNumber";
import getClientTimezone from "@/lib/getClientTimezone";
import { TableCell, TableRow, Text } from "@tremor/react";

type Props = {
  index: number;
  trade: Trade;
};

function TradesTableRow({ index, trade }: Props) {
  const [id, mts, amount, price] = trade;
  const amountToDisplay = +amount.toFixed(4);

  const formattedTime = new Date(mts).toLocaleTimeString("en-US", {
    timeZone: getClientTimezone(),
  });

  return (
    <TableRow className={`${index % 2 ? "!bg-[#2A216A]" : "bg-transparent"}`}>
      <TableCell>
        <Text className="tableCellText !text-white/90">{formattedTime}</Text>
      </TableCell>
      <TableCell>
        <Text className="tableCellText !text-white/90 !font-semibold">
          {formatNumber(price)}
        </Text>
      </TableCell>

      <TableCell>
        <Text
          className={`tableCellText ${
            amountToDisplay < 0
              ? "!text-red-500"
              : amountToDisplay === 0
              ? "!text-yellow-500"
              : "!text-green-500"
          }`}
        >
          {amountToDisplay > 0 ? `+${amountToDisplay}` : `${amountToDisplay}`}
        </Text>
      </TableCell>
    </TableRow>
  );
}

export default TradesTableRow;
