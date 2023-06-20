import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';
import ViewNetTotal from "../../../components/budget/ViewNetTotal"
import ViewExpensesTransactions from "../../../components/budget/expenses/ViewTransactionsByMonth"
import ViewExpensesByCategory from "../../../components/budget/expenses/ViewExpensesByCategory"
import { useExpensesHook } from '../../../hooks/expenses'
import "../../../styles/expenses.css"

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
  console.log("selected: ", month, year);

  const handleClick = (event) => {
    event.preventDefault()
    setIsSubmitted(true);
    viewNetTotal(startDate);
    viewExpensesByCategory(startDate);
    viewExpensesTransactions(startDate);
  }

  const handleDateChange = (date) => {
    setIsSubmitted(false);
    setStartDate(date);
  }

  console.log('expenses transactions lenght', expensesTransactions.length);

  return (
    <div className="wrapper expenses-add-section font-quicksand">
      <h1 className='font-poppins'>Manage your finances<br />Your first hop to financial freedom</h1>

      {/* add a savings rate % with information on what that value mean */}
      <main className='row justify-content-between'>
          <section className='col add-expenses-container bg-lightgray rounded-md'>
            <h4 className='font-poppins'> <span>View Expenses</span> </h4>
            <form className="expenses-text-bg rounded-md">
              <label>Select Month:</label>
              <br />
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                showFullMonthYearPicker
                showFourColumnMonthYearPicker
              />
               <button type="submit" className="btn btn-dark" onClick={handleClick}>
                Submit
              </button>
            </form>
            {isSubmitted && expensesTransactions.length > 0 ? (
              <div>
                <ViewNetTotal month={month} year={year} netTotal={netTotal}/>
                <ViewExpensesByCategory className="" month={month} year={year} expensesByCategory={expensesByCategory}/>
                <ViewExpensesTransactions className="" months={months} month={month} year={year} expensesTransactions={expensesTransactions}/>
              </div>
            ) : null} 

            {isSubmitted && expensesTransactions.length < 1 ? (
              <div>
                <h4>No expenses logged in {month} {year}.</h4>
              </div>
            ) : null}
          </section>

            <section className='col expenses-page-how-it-works bg-lightgray rounded-md'>
              <h4 className='font-poppins'> How It Works</h4>
              <p>Select a month and year and Frog Finance will display the total amount of expenses you made as well as a breakdown of which categories and sub-categories you made the most expenses in.</p>
              <p>This will allow you to see your spending patterns and adjust your budgets so that you can reach your savings goals and debt payments!</p>
            </section>
          </main>
    </div>
  );
};

export default ExpenseView;