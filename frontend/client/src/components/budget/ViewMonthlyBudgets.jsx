import React, { useCallback, useState, useContext, useEffect } from 'react';
// import NavigationBar from '../components/NavigationBar'
import { useBudgetHook } from '../../hooks/budgets';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
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
        <><><p>Budget for {months[month]} {year}</p>
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
        </table></>
        <table><tbody><tr><td>
          <h2 style={{ textAlign: "center" }}>Budget Pie Chart</h2>
          <Pie
            data={{
              labels: monthlyBudget.map((data) => data.category),
              datasets: [{
                //label: 'Expenses on Category',
                data: monthlyBudget.map((data) => data.budget_amount.toLocaleString()),
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: ['rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(54, 162, 235)',
                  'rgb(153, 102, 255)',
                  'rgb(201, 203, 207)'
                ],
                borderWidth: 1
              }]
            }} />
        </td>
        <td>
          <h2 style={{ textAlign: "center" }}>Expenses Pie Chart</h2>
          <Pie
            data={{
              labels: monthlyBudget.map((data) => data.category),
              datasets: [{
                //label: 'Expenses on Category',
                data: monthlyBudget.map((data) => data.expense_amount.toLocaleString()),
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: ['rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(54, 162, 235)',
                  'rgb(153, 102, 255)',
                  'rgb(201, 203, 207)'
                ],
                borderWidth: 1
              }]
            }} />
        </td>
        </tr>
        <tr><td>
          <h2 style={{ textAlign: "center" }}>Expenses Bar Chart</h2>
          <Bar
            data={{
              labels: monthlyBudget.map((data) => data.category),
              datasets: [{
                label: 'Budget on Category',
                data: monthlyBudget.map((data) => data.budget_amount.toLocaleString()),
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: ['rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(54, 162, 235)',
                  'rgb(153, 102, 255)',
                  'rgb(201, 203, 207)'
                ],
                borderWidth: 1
              }]
            }} />
            </td>
            <td>
            <h2 style={{ textAlign: "center" }}>Expenses Bar Chart</h2>
          <Bar
            data={{
              labels: monthlyBudget.map((data) => data.category),
              datasets: [{
                label: 'Expenses on Category',
                data: monthlyBudget.map((data) => data.expense_amount.toLocaleString()),
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: ['rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(54, 162, 235)',
                  'rgb(153, 102, 255)',
                  'rgb(201, 203, 207)'
                ],
                borderWidth: 1
              }]
            }} />
            </td></tr></tbody>
        </table></>
      }
    </div>
  )
}


export default ViewMonthlyBudgets;