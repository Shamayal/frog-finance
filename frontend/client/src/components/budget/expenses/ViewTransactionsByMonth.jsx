import React, { useState } from 'react';
import { useExpensesHook } from '../../../hooks/expenses';

const ViewExpensesTransactions = () => {
  const [month, setMonth ] = useState("")
  const [year, setYear ] = useState("")

  const { viewExpensesTransactions, expensesTransactions } = useExpensesHook();

  const months = ['January','February','March','April','May','June','July','August','September','August','October','November','December']
  const years = [2023, 2022, 2021]

  const handleClick = (event) => {
    event.preventDefault()
    viewExpensesTransactions(month + 1, year)
  }

  const formatDate = (dateString) => {
    const splitDate = dateString.split('-');
    return (`${months[Number(splitDate[1]) - 1]} ${splitDate[2]}, ${splitDate[0]}`) 
  };

  const sortedExpensesTransactions = [...expensesTransactions].sort((a, b) => {
    return new Date(a.expense_date) - new Date(b.expense_date);
  });

  return (
    <div>
      <div>------------------------------------------------------------</div>
      <p>All Expense Transactions in {months[month]} {year}</p>

      <form action="">
        <select value={month} id="expenses_month" onChange={(event) => setMonth(Number(event.target.value))}>
          <option value="">Select Month</option>
          {months.map((month, index) => (
            <option key={index} value={index}>{month}</option>
          ))}
        </select>

        <select value={year} id="expenses_year" onChange={(event) => setYear(event.target.value)}>
          <option value="">Select Year</option>
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>

        <button type="submit" onClick={handleClick}> Get Expenses By Category </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Expense Date</th>
            <th>Category Name</th>
            <th>Sub-Category Name</th>
            <th>Amount Spent</th>
          </tr>
        </thead>
        <tbody>
          {sortedExpensesTransactions.map((transaction, index) => (
            <tr key={`${transaction.user_id}_${index}`}>
              <td>{formatDate(transaction.expense_date)}</td>
              <td>{transaction.category_name}</td>
              <td>{transaction.sub_category_name}</td>
              <td>${Number(transaction.amount).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>------------------------------------------------------------</div>
    </div>
  )
}

export default ViewExpensesTransactions;