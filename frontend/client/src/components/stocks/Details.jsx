import React from "react";
import Card from "./Card";

const Details = () => {
  const detailsList = {
    name: 'Name',
    country: 'Country',
    currency: 'Currency',
    exchange: 'Exchange',
    ipo: 'IPO Date',
    marketCapitalization: 'Market Capitalization',
    finnhubIndustry: 'Industry'
  };

  const convertMillionToBillion = () => {
    return (number / 1000).toFixed(2);
  }
  return (
    <Card></Card>
  )
};

export default Details;