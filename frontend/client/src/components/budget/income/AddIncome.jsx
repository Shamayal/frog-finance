import React, { useState } from 'react';
import { useIncomeHook } from '../../../hooks/income';

const ViewAddIncome = () => {
  const [amount, setAmount ] = useState("")
  const [day, setDay ] = useState("")
  const [month, setMonth ] = useState("")
  const [year, setYear ] = useState("")

  const { viewAddIncome, addIncome } = useIncomeHook();

  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
  const months = ['January','February','March','April','May','June','July','August','September','August','October','November','December']
  const years = [2023, 2022, 2021]

  const handleClick = (event) => {
    event.preventDefault()
    viewAddIncome(amount, day, month + 1, year)
  }

  return (
    <div>
      <div>------------------------------------------------------------</div>
      <p>Add Income</p>

      <form action="">

        <label htmlFor="income_earned">Amount Spent:</label>
        <input type="number" value={amount} id="income_earned" onChange={(event) => setAmount(event.target.value)} />

        <select value={day} id="income_day" onChange={(event) => setDay(Number(event.target.value))}>
          <option value="">Select Day</option>
          {days.map((day, index) => (
            <option key={index} value={index}>{day}</option>
          ))}
        </select>

        <select value={month} id="income_month" onChange={(event) => setMonth(Number(event.target.value))}>
          <option value="">Select Month</option>
          {months.map((month, index) => (
            <option key={index} value={index}>{month}</option>
          ))}
        </select>

        <select value={year} id="income_year" onChange={(event) => setYear(event.target.value)}>
          <option value="">Select Year</option>
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>

        <button type="submit" onClick={handleClick}> Add Income </button>
      </form>

      {/* <div>
        <p>Total Amount:</p>
        {addIncome.map((i, index) => (
        <p key={`${i.user_id}_${index}`}>${i.total_monthly_income ? `${Number(i.total_monthly_income).toLocaleString()}` : '0'}</p>))}

      </div> */}
      <div>------------------------------------------------------------</div>
    </div>
  )
}

export default ViewAddIncome;