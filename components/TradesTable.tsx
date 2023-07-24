import { getFetchUrl } from "@/lib/getFetchUrl";
import {
  Badge,
  Flex,
  Table,
  TableBody,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
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
    <Table className="border-2 border-[#420D90] rounded-xl overflow-y-scroll h-fit max-h-[65vh]">
      <TableHead>
        <TableRow>
          <TableHeaderCell className="tableHeaderCell !bg-[#2B0D62] z-20">
            <Flex justifyContent="start" className="space-x-2">
              <Title className="text-white font-semibold">Trades</Title>
              <Badge className="text-white bg-green-500">{trades.length}</Badge>
            </Flex>
            {/* <Text className="mt-2 text-[#675E82] font-medium">
              Overview of {symbol} trading pair
            </Text> */}
          </TableHeaderCell>
          <TableHeaderCell className="tableHeaderCell !bg-[#2B0D62] z-20"></TableHeaderCell>
          <TableHeaderCell className="tableHeaderCell !bg-[#2B0D62] z-20"></TableHeaderCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell className="tableHeaderCell">Time</TableHeaderCell>
          <TableHeaderCell className="tableHeaderCell">Price</TableHeaderCell>
          <TableHeaderCell className="tableHeaderCell">Amount</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody className="!divide-y-0">
        {trades.map((trade, i) => (
          <TradesTableRow key={trade?.[0]} index={i} trade={trade} />
        ))}
      </TableBody>
    </Table>
  );
}

export default TradesTable;
