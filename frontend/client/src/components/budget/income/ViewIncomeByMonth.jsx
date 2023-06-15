import React, { useState } from 'react';
import { useIncomeHook } from '../../../hooks/income';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ViewIncomeByMonth = () => {
  const [startDate, setStartDate] = useState(new Date());

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  function getMonth(startDate) {
    const monthIndex = startDate.getMonth();
    return months[monthIndex];
  }

  const month = getMonth(startDate);
  const year = startDate.getFullYear();
  console.log('income by month: ', month, year)

  const { viewIncomeByMonth, incomeByMonth } = useIncomeHook();

  const handleClick = (event) => {
    event.preventDefault()
    viewIncomeByMonth(startDate)
  }

  return (
    <div>
      <div>------------------------------------------------------------</div>
      <p>Total Income Earned in {month} {year}</p>

      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        showFullMonthYearPicker
        showFourColumnMonthYearPicker
      />
      <button type="submit" onClick={handleClick}> Get Total Income </button>

      <div>
        <p>Total Amount:</p>
        {incomeByMonth.map((i, index) => (
        <p key={`${i.user_id}_${index}`}>${i.total_monthly_income ? `${Number(i.total_monthly_income).toLocaleString()}` : '0'}</p>))}

      </div>
      <div>------------------------------------------------------------</div>
    </div>
  )
}

export default ViewIncomeByMonth;