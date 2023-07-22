import extractCurrenciesFromPair from "./extractCurrenciesFromPair";

function processApiResponse(data: Ticker[]) {
  const currenciesSet: Set<string> = new Set();

  for (const pairData of data) {
    const tradingPair = pairData[0];
    const [currency1, currency2] = extractCurrenciesFromPair(tradingPair);
    currenciesSet.add(currency1);
    currenciesSet.add(currency2);
  }

  const uniqueCurrencies = Array.from(currenciesSet);

  return uniqueCurrencies;
}

export default processApiResponse;
