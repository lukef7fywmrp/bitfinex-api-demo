import TickersTable from "@/components/TickersTable";

type Props = {
  params: { currency: string };
};

export const revalidate = 60;

function CurrencyPage({ params: { currency } }: Props) {
  return (
    <div className="border-2 border-t-0 border-[#420D90] rounded-xl rounded-t-none px-6 pb-6">
      <TickersTable currency={currency} />
    </div>
  );
}

export default CurrencyPage;
