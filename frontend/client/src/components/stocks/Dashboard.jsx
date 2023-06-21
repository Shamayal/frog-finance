import React from "react";
import Card from "./Card";
import { mockCompanyDetails } from "../../constants/mock";
import Search from "./Search";
import Details from "./Details";
import Overview from "./Overview";
import Chart from "./Charts";

const Dashboard = ({children}) => {
  return (
    <div className="stocks-container">
        <h1 className='font-poppin wrapper'>Learn stocks<br />Diversify your pond</h1>
        <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-5 font-quicksand">


      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1">
        <h1 className="text-5xl"> {mockCompanyDetails.name}</h1>
        <Search />
      </div>

      <div className="md:col-span-2 row-span-4">
      <Chart />
      </div>

      <div>
        <Overview
          symbol={mockCompanyDetails.ticker}
          price={300}
          change={30}
          changePercent={10.0}
          currency={'USD'}
        />
      </div>

      <div className="row-span-2 xl:row-span-3">
      <Details details={mockCompanyDetails}/>
      </div>

    </div>
    </div>



  )
}

export default Dashboard;