import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';
import ViewNetTotal from "../../../components/budget/ViewNetTotal"
import ViewIncomeByMonth from "../../../components/budget/income/ViewIncomeByMonth";
import ViewIncomePayments from "../../../components/budget/income/ViewIncomePayments"
import { useIncomeHook } from '../../../hooks/income';
import { useExpensesHook } from '../../../hooks/expenses'
import "../../../styles/income.css"

const IncomeView = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { viewNetTotal, netTotal } = useExpensesHook();
  const { viewIncomeByMonth, incomeByMonth } = useIncomeHook();
  const { viewIncomePayments, incomePayments } = useIncomeHook();

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
    viewIncomeByMonth(startDate);
    viewIncomePayments(startDate);
  }

  const handleDateChange = (date) => {
    setIsSubmitted(false);
    setStartDate(date);
  }

  return (
    <div className="wrapper income-add-section font-quicksand">
      <h1 className='font-poppins'>Manage your finances<br /> Your first hop to financial freedom</h1>

      <main className='row justify-content-between'>
        <section className='col view-income-container bg-lightgray rounded-md'>
          <h4 className='font-poppins'> <span>View Income</span> </h4>
          <form className="income-text-bg rounded-md">
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
            <br />
            <button type="submit" className="btn btn-dark" onClick={handleClick}>
              Submit
            </button>
          </form>

          {isSubmitted && incomePayments.length < 1 ? (
            <div className="income-text-bg rounded-md">
              <h5 className="font-poppins">No income made in {month} {year}.</h5>
            </div>
          ) : null}

          {isSubmitted && incomePayments.length > 0 ? (
            <div className="income-text-bg rounded-md">
              <h5 className="font-poppins"> See below for your income summary.</h5>
            </div>
          ) : null }

        </section>

        <section className='col income-page-how-it-works bg-lightgray rounded-md'>
          <h4 className='font-poppins'> How It Works</h4>
            <p>Select a month and year and Frog Finance will display the total amount of money you made as well as a breakdown of income earned by payment date.</p>
            <p>This will allow you to see the amount of money you have to allocate towards your monthly expenses, savings goals, and debt payments.</p>
        </section>
      </main>

      {isSubmitted && incomePayments.length > 0 ? (
        <main className='row justify-content-between'>
        <section className='col net-income-container bg-lightgray rounded-md'>
          <h4 className='font-poppins'> <span>Income: {month} {year} </span> </h4>
              <div className="income-text-bg rounded-md">
                <ViewIncomeByMonth month={month} year={year} incomeByMonth={incomeByMonth}/>
                <br />
                <ViewIncomePayments months={months} month={month} year={year} incomePayments={incomePayments}/>
              </div>
        </section>

        <section className='col income-net-total rounded-md'>
          <h4 className='font-poppins'>Net Total for {month} {year}</h4>
          <ViewNetTotal month={month} year={year} netTotal={netTotal}/>
        </section>
      </main>
      ) : null}
    </div>
  );
};

export default IncomeView;
