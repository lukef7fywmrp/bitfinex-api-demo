import { getFetchUrl } from "@/lib/getFetchUrl";
import {
  Table,
  TableBody,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import TradesTableRow from "./TradesTableRow";
import { notFound } from "next/navigation";

type Props = {
  symbol: string;
};

async function TradesTable({ symbol }: Props) {
  const response = await fetch(
    getFetchUrl(`api/getTrades/${JSON.stringify(symbol)}`)
  );
  const trades: Trade[] = await response.json();

  if (trades.length === 0) {
    notFound();
  }

  return (
    <div className="overflow-y-scroll h-fit max-h-[70vh]">
      <Table className="border-2 border-[#420D90] rounded-xl">
        <TableHead>
          <TableRow>
            <TableHeaderCell className="tableHeaderCell">Time</TableHeaderCell>
            <TableHeaderCell className="tableHeaderCell">Price</TableHeaderCell>
            <TableHeaderCell className="tableHeaderCell">
              Amount
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody className="!divide-y-0">
          {trades.map((trade, i) => (
            <TradesTableRow key={trade?.[0]} index={i} trade={trade} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default TradesTable;
