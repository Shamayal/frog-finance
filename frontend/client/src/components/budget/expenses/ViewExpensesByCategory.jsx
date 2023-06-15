import React, { useState } from 'react';
import { useExpensesHook } from '../../../hooks/expenses';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

const ViewExpensesByCategory = () => {
  const [startDate, setStartDate] = useState(new Date());

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  function getMonth(startDate) {
    const monthIndex = startDate.getMonth();
    return months[monthIndex];
  }

  const month = getMonth(startDate);
  const year = startDate.getFullYear();
  console.log(month, year)

  const { viewExpensesByCategory, expensesByCategory } = useExpensesHook();

  const handleClick = (event) => {
    event.preventDefault()
    viewExpensesByCategory(startDate)
  }

  const sortedExpensesByCategory = [...expensesByCategory].sort((a, b) => {
    return b.total_amount - a.total_amount;
  });

  ChartJS.register(ArcElement, Tooltip, Legend);

  const categoryLabels = [];
  const categoryData = [];

  sortedExpensesByCategory.forEach((expense) => {
    categoryLabels.push(expense.category_name);
    categoryData.push(expense.total_amount);
  });

  const data = {
    labels: categoryLabels,
    datasets: [
      {
        label: 'Total Amount ($)',
        data: categoryData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div>------------------------------------------------------------</div>
      <p>Total Expenses By Category Spent in {month} {year}</p>

      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        showFullMonthYearPicker
        showFourColumnMonthYearPicker
      />
      <button type="submit" onClick={handleClick}> Get Expenses By Category </button>

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
      <Pie data={data}/>

      <div>------------------------------------------------------------</div>
    </div>
  )
}

export default ViewExpensesByCategory;