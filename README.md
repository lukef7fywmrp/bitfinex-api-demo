# Bitfinex API Demo

A demo web application that utilizes the Bitfinex API to fetch tickers, trades, candles, and single ticker data. The project is built with Next.js, Tailwind CSS, and TypeScript, and leverages lightweight-charts for displaying interactive and visually appealing charts. Tremor.so is used for tables and dashboard layouts.

**Table of Contents**

- [Live Project](#live-project)
- [Bitfinex API Documentation](#bitfinex-api-documentation)
- [Tech Used](#tech-used)
- [Features](#features)
- [Streaming with Next.js](#streaming-with-nextjs)
- [Revalidation and Caching](#revalidation-and-caching)
- [Future Plans](#future-plans)
- [Getting Started](#getting-started)
- [Contribution](#contribution)

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

## Revalidation and Caching

The Bitfinex API Demo project utilizes revalidation techniques for real-time data updates and optimized performance. Pages are automatically revalidated every 60 seconds, ensuring that users see the latest data from the Bitfinex API.

To keep data up-to-date, we use the `cache: 'no-store'` option, preventing outdated information from being displayed on subsequent visits.

Revalidation enhances user experience by providing timely and accurate market information without the need for manual refreshes. However, we carefully balance the revalidation interval to avoid excessive API requests.

Your feedback is valuable in refining our caching strategy and revalidation interval for the best possible performance. We aim to deliver an exceptional web application for cryptocurrency enthusiasts and traders.

## Future Plans

- Improve Responsiveness: The project will be made fully responsive to ensure seamless user experience across various devices and screen sizes.
- Additional Features: More features will be added to enrich the capabilities of the application.
- UI Enhancements: The user interface will undergo further refinements and improvements for a polished look.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/lukef7fywmrp/bitfinex-api-demo.git`
2. Navigate to the project directory: `cd bitfinex-api-demo`
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`

## Contribution

We welcome contributions to the Bitfinex API Demo project! If you find any issues or want to add new features, feel free to open a pull request.

Before contributing, please ensure you've read the [Contribution Guidelines](CONTRIBUTING.md).
