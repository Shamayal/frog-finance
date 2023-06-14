import {useState} from "react";
import axios from 'axios';

export const useIncomeHook = () => {
  const [ incomePayments, setincomePayments ] = useState([]);

  const viewIncomePayments = (month, year) => {
    const paddedMonth = String(month).padStart(2, '0')
    axios({
      url: `http://localhost:3030/income/payments?year=${year}&month=${paddedMonth}`,
      method: "GET",
      dataResponse: "json"
    })
      .then((res) => {
        console.log("check the data coming", res.data)
        setincomePayments(res.data.monthly_income_payments)
      })
      .catch((error) => {
        console.error('Error fetching income payments:', error);
    });
  }


  http://localhost:3030/income/payments?month=05&year=2023
  return {
    viewIncomePayments,
    incomePayments
  }
}





