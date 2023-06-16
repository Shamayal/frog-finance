import React, { useState  } from 'react';
import { useBudgetHook } from '../../hooks/budgets';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import "./ViewMonthlyBudget.css";
import { Line } from "react-chartjs-2";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// to view expenses by category and see how much left in budget
const ViewMonthlyBudgets = () => {
  Chart.register(CategoryScale);

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
    <div>
      <p>Budget for {month} {year}</p>

      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        showFullMonthYearPicker
        showFourColumnMonthYearPicker
      />
      <button type="submit" onClick={handleClick}> Get Budget </button>

      { monthlyBudget.length > 0 &&
        <><p>Budget for {month} {year}</p>
        <table border={1}>
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
        </table>
        <p>Graph for Budget (vs) Expenses for {month} {year}</p>
        <div className="lineContainer">
          <Line
              data={{
                labels: monthlyBudget.map((data) => data.category),
                datasets: [{
                  label: 'Budget',
                  data: monthlyBudget.map((data) => data.budget_amount.toLocaleString()),
                  borderColor: ['rgb(0, 0, 255)'],
                  backgroundColor: ['rgba(0, 0, 255, 0.5)'],

                },
                {
                  label: 'Expenses',
                  data: monthlyBudget.map((data) => data.expense_amount.toLocaleString()),
                  borderColor: ['rgb(255, 0, 0)'],
                  backgroundColor: ['rgba(255, 0, 0, 0.5)'],
                }]
              }} />
        </div></>
      }
    </div>
  )
}


export default ViewMonthlyBudgets;