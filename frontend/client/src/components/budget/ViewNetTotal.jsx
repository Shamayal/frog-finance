import React, { useState } from 'react';
import { useExpensesHook } from '../../hooks/expenses';

const ViewNetTotal = () => {
  const [month, setMonth ] = useState("")
  const [year, setYear ] = useState("")

  const { viewNetTotal, netTotal } = useExpensesHook();

  const months = ['January','February','March','April','May','June','July','August','September','August','October','November','December']
  const years = [2023, 2022, 2021]

  const handleClick = (event) => {
    event.preventDefault()
    viewNetTotal(month + 1, year)
  }

  return (
    <div>
      <div>------------------------------------------------------------</div>
      <p>Net Total Saved in {months[month]} {year}</p>

      <form action="">
        <select value={month} id="netTotal_month" onChange={(event) => setMonth(Number(event.target.value))}>
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
        </select>

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
              {/* <td>${Number(total.net_total).toLocaleString()}</td> */}
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