import React from "react";

// StockContext
export const StockContext = React.createContext();



// Api response || error msg
const fetchApiData = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error occurred: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

// Api fetches
export const stockApiHooks = () => {
  const basePath = 'https://finnhub.io/api/v1';
  const apiKey = process.env.REACT_APP_FINNHUB_API_KEY;

  const searchSymbols = async (query) => {
    const url = `${basePath}/search?q=${query}&token=${apiKey}`;
    return fetchApiData(url);
  };

  const fetchStockDetails = async (stockSymbol) => {
    const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=${apiKey}`;
    return fetchApiData(url);
  };

  const fetchQuote = async (stockSymbol) => {
    const url = `${basePath}/quote?symbol=${stockSymbol}&token=${apiKey}`;
    return fetchApiData(url);
  };

  const fetchHistoricalData = async (stockSymbol, resolution, from, to) => {
    const url = `${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=${apiKey}`;
    return fetchApiData(url);
  }

  return {
    searchSymbols,
    fetchStockDetails,
    fetchQuote,
    fetchHistoricalData
  };
};
