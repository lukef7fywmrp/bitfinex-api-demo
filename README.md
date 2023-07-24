# Bitfinex API Demo

![Bitfinex API Demo](https://your-project-image-url.com)

A demo web application that utilizes the Bitfinex API to fetch tickers, trades, candles, and single ticker data. The project is built with Next.js, Tailwind CSS, and TypeScript, and leverages lightweight-charts for displaying interactive and visually appealing charts. Tremor.so is used for efficient data streaming and optimizing server-side rendering.

## Live Project

Check out the live demo of the Bitfinex API Demo: [Live Project](https://bitfinex-api-demo.vercel.app/)

## Bitfinex API Documentation

Explore the Bitfinex API documentation to learn more about available endpoints and data formats: [Bitfinex API Docs](https://docs.bitfinex.com/reference/rest-public-tickers)

## Tech Used

- Next.js
- Tailwind CSS
- TypeScript
- Lightweight Charts
- Tremor.so

## Features

The Bitfinex API Demo project offers the following features:

1. Fetch tickers data from Bitfinex API.
2. Retrieve trade information using the API.
3. Get candle data for visualizing price trends.
4. Fetch data for a specific ticker using the API.

Additionally, we've employed clever Next.js optimization techniques and React Server Components to improve performance.

## Streaming with Next.js

In the Bitfinex API Demo project, we employ Next.js Streaming to optimize data loading and enhance user experience. Streaming breaks down the page's HTML into smaller chunks and progressively sends them from the server to the client. This allows parts of the page to be displayed sooner, without waiting for all data to load before rendering. As a result, the project achieves reduced Time To First Byte (TTFB), improved First Contentful Paint (FCP), and faster Time to Interactive (TTI), especially on slower devices. By leveraging Streaming, we ensure a seamless and efficient user interface.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/Bitfinex-API-Demo.git`
2. Navigate to the project directory: `cd Bitfinex-API-Demo`
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`

## Contribution

We welcome contributions to the Bitfinex API Demo project! If you find any issues or want to add new features, feel free to open a pull request.

Before contributing, please ensure you've read the [Contribution Guidelines](CONTRIBUTING.md).
