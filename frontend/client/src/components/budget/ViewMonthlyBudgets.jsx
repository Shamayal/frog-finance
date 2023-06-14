import React, { useCallback, useState, useContext, useEffect } from 'react';
// import NavigationBar from '../components/NavigationBar'
import { useBudgetHook } from '../../hooks/budgets';

// to view expenses by category and see how much left in budget
const ViewMonthlyBudgets = () => {
  const [month, setMonth ] = useState("")
  const [year, setYear ] = useState("")

  const { viewMonthlyBudget, monthlyBudget } = useBudgetHook();

  const months = ['January','February','March','April','May','June','July','August','September','August','October','November','December']
  const years = [2023, 2022, 2021]

  const handleClick = (event) => {
    event.preventDefault()
    viewMonthlyBudget(month + 1, year)
  }

   
  return (
    <div>
      <form action="">
        <select value={month} id="budget_month" onChange={(event) => setMonth(Number(event.target.value))}>
          <option value="">Select Month</option>
          {months.map((month, index) => (
            <option key={index} value={index}>{month}</option>
          ))}
        </select>

        <select value={year} id="budget_year" onChange={(event) => setYear(event.target.value)}>
          <option value="">Select Year</option>
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>

        <button type="submit" onClick={handleClick}> Get Budget </button>
      </form>

      { monthlyBudget.length > 0 && 
        <><p>Budget for {months[month]} {year}</p><table border={1}>
            <thead>
              <tr color='yellow'>
                <th>Category</th>
                <th>Budget Amount</th>
                <th>Total Expenses</th>
                <th>Budget Reached</th>
              </tr>
            </thead>
            <tbody>
              {monthlyBudget.map((budget, index) => (
                <tr key={`${budget.id}_${index}`}>
                  <td>{budget.category}</td>
                  <td>${budget.budget_amount.toLocaleString()}</td>
                  <td>${budget.expense_amount.toLocaleString()}</td>
                  <td>{String(budget.budget_reached)}</td>
                </tr>
              ))}
            </tbody>
          </table></>
      }
    </div>
  )
}


export default ViewMonthlyBudgets;