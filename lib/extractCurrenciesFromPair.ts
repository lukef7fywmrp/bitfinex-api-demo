function extractCurrenciesFromPair(pair: string): [string, string] {
  if (pair.startsWith("f")) {
    // Handle futures trading pairs
    const delimiterIndex = pair.indexOf(":");
    if (delimiterIndex !== -1) {
      // If ":" is found, split the pair using the delimiter
      const currency1 = pair.substring(1, delimiterIndex); // "USD"
      const currency2 = pair.substring(delimiterIndex + 1); // "BTC"
      return [currency1, currency2];
    } else {
      // If ":" is not found, handle other cases (e.g., "fXAUT", "fUST", etc.)
      const currency1 = pair.substring(1, 5); // "XAUT" or "UST" or "BTC"
      const currency2 = pair.substring(5); // The rest of the string
      return [currency1, currency2];
    }
  } else {
    // Handle regular trading pairs without "f" prefix
    const colonIndex = pair.indexOf(":");
    if (colonIndex !== -1 && colonIndex !== 1) {
      // If ":" is found and not at the beginning, split the pair using the colon
      const currency1 = pair.substring(0, colonIndex); // "X" or "X" or "T"
      const currency2 = pair.substring(colonIndex + 1); // The rest of the string (e.g., "UST" or "ETH")
      return [currency1, currency2];
    } else if (pair.startsWith(":")) {
      // Handle cases like ":USD" or ":BTC"
      const currency1 = ""; // Empty string (no currency code)
      const currency2 = pair.substring(1); // The rest of the string (e.g., "USD" or "BTC")
      return [currency1, currency2];
    } else {
      // If no colon is found or at the beginning, assume a regular trading pair
      const currency1 = pair.substring(1, 4); // First three characters
      const currency2 = pair.substring(4); // The rest of the string
      return [currency1, currency2];
    }
  }
}

export default extractCurrenciesFromPair;
