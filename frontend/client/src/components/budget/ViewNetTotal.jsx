import React, { useState } from 'react';
import { useExpensesHook } from '../../hooks/expenses';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ViewNetTotal = () => {
  // const [month, setMonth ] = useState("")
  // const [year, setYear ] = useState("")
  const [startDate, setStartDate] = useState(new Date());
  // const year = 
  // startDate derive
  // use variable in jsx and 
  // create a use hook for date that returns startDate, month, year
  
  // const {date, setDate, month, year} = useDateMonthYear() 
 

  const { viewNetTotal, netTotal } = useExpensesHook();

  const months = ['January','February','March','April','May','June','July','August','September','August','October','November','December']
  const years = [2023, 2022, 2021]

  const handleClick = (event) => {
    event.preventDefault()
    // viewNetTotal(month + 1, year)

    viewNetTotal(startDate);
    console.log('startDate: ', startDate)

    setStartDate(new Date ());
  }
  // variable to derive month and year, can display and pass to function

  return (
    <div>
      <div>------------------------------------------------------------</div>
      <p>Net Total Saved in {startDate.toString()}</p>

      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        showFullMonthYearPicker
        showFourColumnMonthYearPicker
      />

      <form action="">
        {/* <select value={month} id="netTotal_month" onChange={(event) => setMonth(Number(event.target.value))}>
          <option value="">Select Month</option>
          {months.map((month, index) => (
            <option key={index} value={index}>{month}</option>
          ))}
        </select>

        <select value={year} id="netTotal_year" onChange={(event) => setYear(event.target.value)}>
          <option value="">Select Year</option>
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select> */}

        <button type="submit" onClick={handleClick}> Get Net Total </button>
      </form>

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