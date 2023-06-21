import React, { useContext, useEffect, useState } from "react";
import Search from "./Search";
import Details from "./Details";
import Overview from "./Overview";
import Chart from "./Charts";
import { stockApiHooks, StockContext } from '../../hooks/stocks';

const Dashboard = ({children}) => {

  const { stockSymbol } = useContext(StockContext)
  const { fetchStockDetails, fetchQuote } = stockApiHooks();


  const [ stockDetails, setStockDetails ] = useState({});
  const [ quote, setQuote ] = useState({});

  useEffect(() => {

    const updateStockDetails = async () => {
      try {
        const result = await fetchStockDetails(stockSymbol);
        setStockDetails(result);
      }
      catch(error) {
        setStockDetails({});
        console.log(error)
      }
    };

    const updateStockOverview = async () => {
      try {
        const result = await fetchQuote(stockSymbol);
        setQuote(result)
      }
      catch(error) {
        setQuote({});
        console.log(error)
      }
    };

    updateStockDetails();
    updateStockOverview();

  }, [stockSymbol]);


  return (
    <div className="stocks-container">
        <h1 className='font-poppin wrapper'>Learn stocks<br />Diversify your pond</h1>
        <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-5 font-quicksand">


      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1">
        <h1 className="text-4xl"> {stockDetails.name}</h1>
        <Search />
      </div>

      <div className="md:col-span-2 row-span-4">
      <Chart />
      </div>

      <div>
        <Overview
          symbol={stockSymbol}
          price={quote.pc}
          change={quote.d}
          changePercent={quote.dp}
          currency={stockDetails.currency}
        />
      </div>

      <div className="row-span-2 xl:row-span-3">
      <Details details={stockDetails}/>
      </div>

    </div>
    </div>



  )
}

export default Dashboard;