import React, { useState  } from 'react';
import { useBudgetHook } from '../../hooks/budgets';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import BudgetItem from "./BudgetItem";

// to view expenses by category and see how much left in budget
const ViewMonthlyBudgets = () => {

  const [startDate, setStartDate] = useState(new Date());
  const { viewMonthlyBudget, monthlyBudget } = useBudgetHook();

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  function getMonth(startDate) {
    const monthIndex = startDate.getMonth();
    return months[monthIndex];
  }

  const month = getMonth(startDate);
  const year = startDate.getFullYear();

  const handleClick = (event) => {
    event.preventDefault()
    viewMonthlyBudget(startDate)
  }
   
  return (
    <div className="form-wrapper">
      <h2 className="h3">
        Budget for {month} {year}
      </h2>

    <div className="flex-sm">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        showFullMonthYearPicker
        showFourColumnMonthYearPicker
      />
    </div>
      <button type="submit"  className="btn btn--dark" onClick={handleClick}> Get Budget </button>

      { monthlyBudget.length > 0 &&
        <>
        <h2>Budgets for {month} {year}</h2>
        <div className="budgets">
          {
            monthlyBudget.map((budget) => (
              <BudgetItem key={budget.id} budget={budget} />
            ))
          }
        </div>
        
      <div className="form-wrapper">
        <h2 className="h3">
          Budget for {month} {year}
        </h2>

        <table>
          <thead>
            <tr>
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
        </table>
      </div></>
      }
    </div>
  )
}

export default ViewMonthlyBudgets;