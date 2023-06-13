import {useState} from "react";
import axios from 'axios';



export const useBudgetHook = () => {
  const [ monthlyBudget, setMonthlyBudget ] = useState([]);

  const viewMonthlyBudget = (month, year) => {
    axios({
      url: `http://localhost:3030/budget/${month}/${year}`,
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





