import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';
import ViewNetTotal from "../../../components/budget/ViewNetTotal"
import ViewExpensesTransactions from "../../../components/budget/expenses/ViewTransactionsByMonth"
import ViewExpensesByCategory from "../../../components/budget/expenses/ViewExpensesByCategory"
import { useExpensesHook } from '../../../hooks/expenses'

const ExpenseView = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { viewNetTotal, netTotal } = useExpensesHook();
  const { viewExpensesByCategory, expensesByCategory } = useExpensesHook();
  const { viewExpensesTransactions, expensesTransactions } = useExpensesHook();


  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  function getMonth(startDate) {
    const monthIndex = startDate.getMonth();
    return months[monthIndex];
  }

  const month = getMonth(startDate);
  const year = startDate.getFullYear();
  console.log("selected: ", month, year)

  const handleClick = (event) => {
    event.preventDefault()
    setIsSubmitted(true);
    viewNetTotal(startDate);
    viewExpensesByCategory(startDate)
    viewExpensesTransactions(startDate);
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
      <button type="submit" onClick={handleClick}> Submit to View Expenses </button>

      {isSubmitted && (
        <div>
          <ViewNetTotal month={month} year={year} netTotal={netTotal}/>
          <ViewExpensesByCategory month={month} year={year} expensesByCategory={expensesByCategory}/>
          <ViewExpensesTransactions months={months} month={month} year={year} expensesTransactions={expensesTransactions}/>
        </div>
      )}

      {/* {netTotal.length > 0 && <ViewNetTotal month={month} year={year} netTotal={netTotal} />} */}
      {/* {expensesByCategory.length > 0 && <ViewExpensesByCategory month={month} year={year} expensesByCategory={expensesByCategory} />} */}
      {/* {expensesTransactions.length > 0 && <ViewExpensesTransactions month={month} year={year} months={months} expensesTransactions={expensesTransactions} />} */}

    </div>
  );
};

export default ExpenseView;