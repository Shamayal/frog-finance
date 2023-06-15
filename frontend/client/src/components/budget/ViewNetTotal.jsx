import React, { useState } from 'react';
import { useExpensesHook } from '../../hooks/expenses';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ViewNetTotal = () => {
  const [startDate, setStartDate] = useState(new Date());

  function getMonth(startDate) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthIndex = startDate.getMonth();
    return months[monthIndex];
  }

  const month = getMonth(startDate);
  const year = startDate.getFullYear();
  console.log(month, year)

  // create a useHook for date that returns variables as seen in comment below
  // const {date, setDate, month, year} = useDateMonthYear() 

  const { viewNetTotal, netTotal } = useExpensesHook();

  const handleClick = (event) => {
    event.preventDefault()
    viewNetTotal(startDate);
  }
  // variable to derive month and year, can display and pass to function on line 60 in expenses.js

  return (
    <div>
      <div>------------------------------------------------------------</div>
      <p>Net Total Saved in {month} {year}</p>

      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        showFullMonthYearPicker
        showFourColumnMonthYearPicker
      />
      <button type="submit" onClick={handleClick}> Get Net Total </button>

      <table>
        <thead>
          <tr>
            <th>Total Income</th>
            <th>Total Expenses</th>
            <th>Net Total</th>
          </tr>
        </thead>
        <tbody>
          {netTotal.map((total, index) => (
            <tr key={`${total.user_id}_${index}`}>

              <td>${Number(total.total_income).toLocaleString()}</td>
              <td>-${Number(total.total_expenses).toLocaleString()}</td>
              <td>{total.net_total >= 0 ? `$${Number(total.net_total).toLocaleString()}` : `-$${Math.abs(Number(total.net_total)).toLocaleString()}`}</td>

            </tr>
          ))}
        </tbody>
      </table>
      <div>------------------------------------------------------------</div>
    </div>
  )
}

export default ViewNetTotal;