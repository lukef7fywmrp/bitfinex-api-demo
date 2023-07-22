"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

type Props = {
  currency: string;
};

function TickersNavLink({ currency }: Props) {
  const params = useParams();
  const isActive = params.currency === currency.toLowerCase();

  return (
    <Link
      href={`/currency/${currency.toLowerCase()}`}
      key={currency}
      className={`button ${
        isActive &&
        "bg-[#3FE8BD] !border-[#3FE8BD] !text-[#240E1F] hover:text-[#240E1F] hover:border-[#3FE8BD] hover:border-b"
      }`}
    >
      {currency}
    </Link>
  );
}

export default TickersNavLink;
