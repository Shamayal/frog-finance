import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';
import ViewNetTotal from "../../../components/budget/ViewNetTotal"
import ViewIncomeByMonth from "../../../components/budget/income/ViewIncomeByMonth";
import ViewIncomePayments from "../../../components/budget/income/ViewIncomePayments"
import { useIncomeHook } from '../../../hooks/income';
import { useExpensesHook } from '../../../hooks/expenses'

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
    viewIncomeByMonth(startDate)
    viewIncomePayments(startDate)
  }

  return (
    <div>
      <h2>This is the Income View Page</h2>
      <h4>Here users can view their income totals!</h4>

      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        showFullMonthYearPicker
        showFourColumnMonthYearPicker
      />
      <button type="submit" onClick={handleClick}> Submit to View Income </button>

      {isSubmitted && (
        <div>
          <ViewNetTotal month={month} year={year} netTotal={netTotal}/>
          <ViewIncomeByMonth month={month} year={year} incomeByMonth={incomeByMonth}/>
          <ViewIncomePayments months={months} month={month} year={year} incomePayments={incomePayments}/>
        </div>
      )}
    </div>
  );
};

export default IncomeView;
