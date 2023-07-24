"use client";

import {
  CandlestickData,
  CrosshairMode,
  HistogramData,
  IChartApi,
  UTCTimestamp,
  WhitespaceData,
  createChart,
} from "lightweight-charts";
import { useEffect, useRef } from "react";

type Props = {
  candles: Candle[];
};

function ChartContainer({ candles }: Props) {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chart = useRef<IChartApi>();
  const resizeObserver = useRef<ResizeObserver>();
  const priceData: (CandlestickData | WhitespaceData)[] = candles.map(
    (candle) => ({
      time: (candle[0] / 1000) as UTCTimestamp,
      open: candle[1],
      high: candle[3],
      low: candle[4],
      close: candle[2],
    })
  );
  const volumeData: (WhitespaceData | HistogramData)[] = candles.map(
    (candle) => ({
      time: (candle[0] / 1000) as UTCTimestamp,
      value: candle[5],
    })
  );

  useEffect(() => {
    if (!chartContainerRef.current) return;

    chart.current = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      layout: {
        background: {
          color: "#2A216A",
        },
        textColor: "rgba(255, 255, 255, 0.9)",
      },
      grid: {
        vertLines: {
          color: "#18115E",
        },
        horzLines: {
          color: "#18115E",
        },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      leftPriceScale: {
        borderColor: "#485c7b",
      },
      rightPriceScale: {
        borderColor: "#485c7b",
      },
      timeScale: {
        borderColor: "#485c7b",
        timeVisible: true,
      },
    });

    const candleSeries = chart.current.addCandlestickSeries({
      upColor: "#22c55e",
      downColor: "#ef4444",
      borderDownColor: "#ef4444",
      borderUpColor: "#22c55e",
      wickDownColor: "#838ca1",
      wickUpColor: "#838ca1",
    });

    candleSeries.setData(priceData);

    // const volumeSeries = chart.current.addHistogramSeries({
    //   color: "#182233",
    //   baseLineWidth: 2,
    //   priceFormat: {
    //     type: "price",
    //   },
    //   priceScaleId: "",
    // });

    // volumeSeries.priceScale().applyOptions({
    //   // scaleMargins: {
    //   //   top: 0.8,
    //   //   bottom: 0,
    //   // },

    // });

    // volumeSeries.setData(volumeData);
  }, []);

  // resize chart on container resize
  useEffect(() => {
    if (!chartContainerRef.current) return;

    resizeObserver.current = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      if (!chart.current) return;

      chart.current.applyOptions({ width, height });
      setTimeout(() => {
        if (!chart.current) return;

        chart.current.timeScale().fitContent();
      }, 0);
    });

    resizeObserver.current.observe(chartContainerRef.current);

    return () => resizeObserver.current?.disconnect();
  }, []);

  return <div ref={chartContainerRef} className="w-full flex-1" />;
}

export default ChartContainer;
