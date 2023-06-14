import React, { useState } from 'react';
import { useIncomeHook } from '../../../hooks/income';

// to view expenses by category and see how much left in budget
const ViewIncomeByMonth = () => {
  const [month, setMonth ] = useState("")
  const [year, setYear ] = useState("")

  const { viewIncomeByMonth, incomeByMonth } = useIncomeHook();

  const months = ['January','February','March','April','May','June','July','August','September','August','October','November','December']
  const years = [2023, 2022, 2021]

  const handleClick = (event) => {
    event.preventDefault()
    viewIncomeByMonth(month + 1, year)
  }

  const formatDate = (dateString) => {
    const splitDate = dateString.split('-');
    return (`${months[Number(splitDate[1]) - 1]} ${splitDate[2]}, ${splitDate[0]}`) 
  };

  return (
    <div>
      <div>------------------------------------------------------------</div>
      <p>Total Income Earned in {months[month]} {year}</p>

      <form action="">
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

        <button type="submit" onClick={handleClick}> Get Total Income </button>
      </form>

      <div>
        <p>Total Amount:</p>
        {incomeByMonth.map((i, index) => (
        <p key={`${i.user_id}_${index}`}>{i.total_monthly_income}</p>))}

      </div>
      <div>------------------------------------------------------------</div>
    </div>
  )
}

export default ViewIncomeByMonth;