import React, { useState } from 'react';
import { useExpensesHook } from '../../../hooks/expenses';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
      <div>------------------------------------------------------------</div>
    </div>
  )
}

export default ViewExpensesByCategory;