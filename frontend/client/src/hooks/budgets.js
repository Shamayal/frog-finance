import {useState} from "react";
import axios from 'axios';

export const useBudgetHook = () => {
  const [ monthlyBudget, setMonthlyBudget ] = useState([]);
  const [ notBudgetCategories, setNotBudgetCategories ] = useState([]);
  const [ setCreateBudget ] = useState();
  const [ setUpdateBudget ] = useState();

  const viewMonthlyBudget = (startDate) => {
    const budgetMonth = () => {
      const month = startDate.getMonth() + 1;
      return month < 10 ? `0${month}` : `${month}`;
    }

    const budgetYear = () => {
      return startDate.getFullYear().toString();
    }
    axios({
      url: `http://localhost:3030/budget/${budgetMonth()}/${budgetYear()}`,
      method: "GET",
      dataResponse: "json"
    })
      .then((res) => {
        console.log("check the data coming", res.data)
        setMonthlyBudget(res.data.budget_by_category)
      })
      .catch((error) => {
        console.error('Error fetching Budgets:', error);
    });
  }

  const createBudget = (amount, startDate, category) => {

    const formatDate = startDate.toISOString().split('T')[0];

    const obj = {user_id: 1, budget_amount: amount, category_id: category, total_spent: 0, updated_at: formatDate,  budget_reached: false} 

    axios.post('http://localhost:3030/budget/add', obj)
      .then((res) => {
        console.log("Budget Created: ", res.data)
        setCreateBudget(res.data.budget_added)
      })
      .catch((error) => {
        console.error('Error in Creating Budget:', error);
    });
  }  

  const updateBudget = (amount, category, startDate) => {
    const formatDate = startDate.toISOString().split('T')[0];

    const obj = {user_id: 1, budget_amount: amount, category_id: category, updated_at: formatDate} 

    axios.post('http://localhost:3030/budget/updateAmount', obj)
      .then((res) => {
        console.log("Budget Created: ", res.data)
        setUpdateBudget(res.data.budget_amount_updated)
      })
      .catch((error) => {
        console.error('Error in Updating Budget:', error);
    });
  }  

  const viewNotBudgetCategories = (startDate) => {
    const budgetMonth = () => {
      const month = startDate.getMonth() + 1;
      return month < 10 ? `0${month}` : `${month}`;
    }

    const budgetYear = () => {
      return startDate.getFullYear().toString();
    }
    axios({
      url: `http://localhost:3030/budget/notCategories/${budgetMonth()}/${budgetYear()}`,
      method: "GET",
      dataResponse: "json"
    })
      .then((res) => {
        console.log("check the data coming", res.data)
        setNotBudgetCategories(res.data.categories)
      })
      .catch((error) => {
        console.error('Error fetching Categories not budgeted:', error);
    });
  }

  return {
    viewMonthlyBudget,
    monthlyBudget,
    createBudget,
    updateBudget,
    viewNotBudgetCategories,
    notBudgetCategories
  }
}





