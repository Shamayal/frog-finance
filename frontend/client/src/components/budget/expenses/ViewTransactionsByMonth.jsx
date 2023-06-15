import React, { useState } from 'react';
import { useExpensesHook } from '../../../hooks/expenses';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ViewExpensesTransactions = () => {
  const [startDate, setStartDate] = useState(new Date());

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  function getMonth(startDate) {
    // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthIndex = startDate.getMonth();
    return months[monthIndex];
  }

  const month = getMonth(startDate);
  const year = startDate.getFullYear();
  console.log(month, year)

  const { viewExpensesTransactions, expensesTransactions } = useExpensesHook();

  const handleClick = (event) => {
    event.preventDefault()
    viewExpensesTransactions(startDate);
  }

  const sortedExpensesTransactions = [...expensesTransactions].sort((a, b) => {
    return new Date(a.expense_date) - new Date(b.expense_date);
  });

  return (
    <div>
      <div>------------------------------------------------------------</div>
      <p>All Expense Transactions in {month} {year}</p>

      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        showFullMonthYearPicker
        showFourColumnMonthYearPicker
      />
      <button type="submit" onClick={handleClick}> Get All Transactions </button>

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
              <td>{month} {transaction.expense_date.slice(8, 10)}, {transaction.expense_date.slice(0,4)}</td>
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