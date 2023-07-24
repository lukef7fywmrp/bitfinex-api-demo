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

type TickerInfo = [
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

type Section = "hist" | "last";

type TimeFrame =
  | "1m"
  | "5m"
  | "15m"
  | "30m"
  | "1h"
  | "3h"
  | "6h"
  | "12h"
  | "1D"
  | "1W"
  | "14D"
  | "1M";

type Candle = [
  mts: number,
  open: number,
  close: number,
  high: number,
  low: number,
  volume: number
];
