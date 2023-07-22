type Ticker = [
  symbol: string,
  bid: number,
  bidSize: number,
  ask: number,
  askSize: number,
  dailyChange: number,
  dailyChangeRelative: number,
  lastPrice: number,
  volume: number,
  high: number,
  low: number
];

type TradingPair = string;

type Trade = [id: number, mts: number, amount: number, price: number];
