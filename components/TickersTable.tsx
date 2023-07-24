import { getFetchUrl } from "@/lib/getFetchUrl";
import {
  Table,
  TableBody,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import TickerTableRow from "./TickerTableRow";
import { notFound } from "next/navigation";

type Props = {
  currency: string;
};

async function TickersTable({ currency }: Props) {
  const response = await fetch(
    getFetchUrl(`api/getTickers/${currency.toUpperCase()}`)
  );
  const tickers: Ticker[] = await response.json();

  if (tickers.length === 0) {
    notFound();
  }

  return (
    <div className="overflow-y-scroll h-fit max-h-[70vh]">
      <Table className="border-2 border-[#420D90] rounded-xl">
        <TableHead>
          <TableRow>
            <TableHeaderCell className="tableHeaderCell">
              Symbol
            </TableHeaderCell>
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
            <TableHeaderCell className="tableHeaderCell">Link</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody className="!divide-y-0">
          {tickers.map((ticker, i) => (
            <TickerTableRow
              key={ticker[0]}
              index={i}
              ticker={ticker}
              tradeToCurrency={currency}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default TickersTable;
