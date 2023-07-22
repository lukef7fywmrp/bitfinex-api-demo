import { SELECT_CURRENCIES } from "@/constants";
import Image from "next/image";
import logo from "../app/logo.svg";
import TickersNavLink from "./TickersNavLink";

function TickersHeader() {
  return (
    <header className="border-2 border-b-0 border-[#420D90] rounded-t-xl space-y-6">
      <div className="bg-[#2A216A] p-5 flex items-center justify-center rounded-t-xl">
        <Image
          src={logo}
          alt="Logo"
          className="object-contain brightness-0 invert"
        />
      </div>
      <nav className="border-none px-6 space-x-4 flex items-center justify-center pb-6">
        {SELECT_CURRENCIES.map((currency) => (
          <TickersNavLink key={currency} currency={currency} />
        ))}
      </nav>
    </header>
  );
}

export default TickersHeader;
