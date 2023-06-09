import {useState} from "react";
import axios from 'axios';

export const useExpensesHook = () => {
  const [ expensesByCategory, setExpensesByCategory ] = useState([]);
  const [ expensesTransactions, setExpensesTransactions ] = useState([]);
  const [ addExpenses, setAddExpenses ] = useState([]);
  const [ netTotal, setNetTotal ] = useState([]);

  const viewExpensesByCategory = (startDate) => {
    const formatMonth = (startDate) => {
      const month = startDate.getMonth() + 1;
      return month < 10 ? `0${month}` : `${month}`;
    }

    const formatYear = (startDate) => {
      return startDate.getFullYear().toString();
    }

    axios({
      url: `http://localhost:3030/expenses?year=${formatYear(startDate)}&month=${formatMonth(startDate)}`,
      method: "GET",
      dataResponse: "json"
    })
      .then((res) => {
        console.log("expenses by category data:", res.data)
        setExpensesByCategory(res.data.total_expenses_by_category)
      })
      .catch((error) => {
        console.error('Error fetching expenses by category:', error);
    });
  }

  const viewExpensesTransactions = (startDate) => {
    const formatMonth = (startDate) => {
      const month = startDate.getMonth() + 1;
      return month < 10 ? `0${month}` : `${month}`;
    }

    const formatYear = (startDate) => {
      return startDate.getFullYear().toString();
    }

    axios({
      url: `http://localhost:3030/expenses/transactions?year=${formatYear(startDate)}&month=${formatMonth(startDate)}`,
      method: "GET",
      dataResponse: "json"
    })
      .then((res) => {
        console.log("expenses transactions:", res.data)
        setExpensesTransactions(res.data.all_transactions_per_month)
      })
      .catch((error) => {
        console.error('Error fetching expense transactions:', error);
    });
  }

  const viewAddExpenses = (amount, startDate, category, subCategory) => {

    const formatDate = startDate.toISOString().split('T')[0];

    const obj = {user_id: 1, amount, expense_date: formatDate, category_id: category, sub_category_id: subCategory} 

    axios.post('http://localhost:3030/expenses/add', obj)
      .then((res) => {
        console.log("expense added: ", res.data)
        setAddExpenses(res.data.expense_added)
      })
      .catch((error) => {
        console.error('Error in adding expense:', error);
    });
  }  

  const viewNetTotal = (startDate) => {
    const formatMonth = (startDate) => {
      const month = startDate.getMonth() + 1;
      return month < 10 ? `0${month}` : `${month}`;
    }

    const formatYear = (startDate) => {
      return startDate.getFullYear().toString();
    }

    axios({
      url: `http://localhost:3030/expenses/netTotal?year=${formatYear(startDate)}&month=${formatMonth(startDate)}`,
      method: "GET",
      dataResponse: "json"
    })
      .then((res) => {
        console.log("net total data:", res.data)
        setNetTotal(res.data.net_total)
      })
      .catch((error) => {
        console.error('Error fetching net total:', error);
    });
  }

  return {
    viewExpensesByCategory,
    expensesByCategory,
    viewExpensesTransactions,
    expensesTransactions,
    viewNetTotal,
    netTotal,
    viewAddExpenses,
    addExpenses
  }
}