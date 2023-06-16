import ViewNetTotal from "../../../components/budget/ViewNetTotal"
import ViewExpensesTransactions from "../../../components/budget/expenses/ViewTransactionsByMonth"
import ViewExpensesByCategory from "../../../components/budget/expenses/ViewExpensesByCategory"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';

import { useExpensesHook } from '../../../hooks/expenses';

const ExpenseView = () => {
  const [startDate, setStartDate] = useState(new Date());

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  function getMonth(startDate) {
    const monthIndex = startDate.getMonth();
    return months[monthIndex];
  }

  const month = getMonth(startDate);
  const year = startDate.getFullYear();

  const { viewNetTotal, netTotal } = useExpensesHook();
  const { viewExpensesByCategory, expensesByCategory } = useExpensesHook();
  const { viewExpensesTransactions, expensesTransactions } = useExpensesHook();


  const handleClick = (event) => {
    event.preventDefault()
    viewNetTotal(startDate)
    viewExpensesByCategory(startDate)
    viewExpensesTransactions(startDate)
  }

  return (
    <div>
      <h2>This is the Expense View Page</h2>
      <h4>Here users can view their expense totals!</h4>

      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        showFullMonthYearPicker
        showFourColumnMonthYearPicker
      />
      <button type="submit" onClick={handleClick}> Get All Transactions </button>

      {netTotal.length > 0 && <ViewNetTotal month={month} year={year} netTotal={netTotal} />}
      {expensesByCategory.length > 0 && <ViewExpensesByCategory month={month} year={year} expensesByCategory={expensesByCategory} />}
      {expensesTransactions.length > 0 && <ViewExpensesTransactions month={month} year={year} months={months} expensesTransactions={expensesTransactions} />}
    </div>
  );
};

export default ExpenseView;
