import { useState } from "react";
import Dashboard from "../../components/stocks/Dashboard";
import { StockContext } from "../../hooks/stocks";

const Stocks = () => {
  const [ stockSymbol, setStockSymbol ] = useState('META');
  return (
    <StockContext.Provider value={{stockSymbol, setStockSymbol}}>
      <Dashboard />

    </StockContext.Provider>
  );
};

export default Stocks;


