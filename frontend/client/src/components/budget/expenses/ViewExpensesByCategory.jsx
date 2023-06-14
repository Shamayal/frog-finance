import React, { useState } from 'react';
import { useExpensesHook } from '../../../hooks/expenses';

const ViewExpensesByCategory = () => {
  const [month, setMonth ] = useState("")
  const [year, setYear ] = useState("")

  const { viewExpensesByCategory, expensesByCategory } = useExpensesHook();

  const months = ['January','February','March','April','May','June','July','August','September','August','October','November','December']
  const years = [2023, 2022, 2021]

  const handleClick = (event) => {
    event.preventDefault()
    viewExpensesByCategory(month + 1, year)
  }

  const sortedExpensesByCategory = [...expensesByCategory].sort((a, b) => {
    return b.total_amount - a.total_amount;
  });

  return (
    <div>
      <div>------------------------------------------------------------</div>
      <p>Total Expenses By Category Spent in {months[month]} {year}</p>

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
            <th>Category Name</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {sortedExpensesByCategory.map((expenses, index) => (
            <tr key={`${expenses.user_id}_${index}`}>
              <td>{expenses.category_name}</td>
              <td>${Number(expenses.total_amount).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>------------------------------------------------------------</div>
    </div>
  )
}

export default ViewExpensesByCategory;