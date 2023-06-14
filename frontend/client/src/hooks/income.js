import {useState} from "react";
import axios from 'axios';

export const useIncomeHook = () => {
  const [ incomePayments, setIncomePayments ] = useState([]);
  const [ incomeByMonth, setIncomeByMonth] = useState([]);
  const [ addIncome, setAddIncome ] = useState([]);

  const viewIncomePayments = (month, year) => {
    // adds a 0 in front of the month if it is a single digit
    const paddedMonth = String(month).padStart(2, '0')
    axios({
      url: `http://localhost:3030/income/payments?year=${year}&month=${paddedMonth}`,
      method: "GET",
      dataResponse: "json"
    })
      .then((res) => {
        console.log("income payments data: ", res.data)
        setIncomePayments(res.data.monthly_income_payments)
      })
      .catch((error) => {
        console.error('Error fetching income payments:', error);
    });
  }

  const viewIncomeByMonth = (month, year) => {
    // adds a 0 in front of the month if it is a single digit
    const paddedMonth = String(month).padStart(2, '0')
    axios({
      url: `http://localhost:3030/income?year=${year}&month=${paddedMonth}`,
      method: "GET",
      dataResponse: "json"
    })
      .then((res) => {
        console.log("income by month data: ", res.data)
        setIncomeByMonth(res.data.monthly_income)
      })
      .catch((error) => {
        console.error('Error fetching income by month:', error);
    });
  }

  const viewAddIncome = (amount, day, month, year) => {
    // adds a 0 in front of the month if it is a single digit
    axios({
      url: `http://localhost:3030/income/add`,
      method: "POST",
      dataResponse: "json"
    })
      .then((res) => {
        console.log("income by month data: ", res.data)
        setIncomeByMonth(res.data.income_added)
      })
      .catch((error) => {
        console.error('Error fetching income by month:', error);
    });
  }

  // to view in browser : http://localhost:3030/income/payments?month=05&year=2023
  return {
    viewIncomePayments,
    incomePayments,
    viewIncomeByMonth,
    incomeByMonth,
    viewAddIncome,
    addIncome
  }
}





