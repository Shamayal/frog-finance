import {useState} from "react";
import axios from 'axios';



export const useBudgetHook = () => {
  const [ monthlyBudget, setMonthlyBudget ] = useState([]);

  const viewMonthlyBudget = (month, year) => {
    // adds a 0 in front of the month if it is a single digit
    const paddedMonth = String(month).padStart(2, '0')
    axios({
      url: `http://localhost:3030/budget/${paddedMonth}/${year}`,
      method: "GET",
      dataResponse: "json"
    })
      .then((res) => {
        console.log("check the data coming", res.data)
        setMonthlyBudget(res.data.budget_by_category)
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
    });
  }

  return {
    viewMonthlyBudget,
    monthlyBudget

  }
}





