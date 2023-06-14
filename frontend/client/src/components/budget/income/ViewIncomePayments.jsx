import React, { useState } from 'react';
// import NavigationBar from '../components/NavigationBar'
import { useIncomeHook } from '../../../hooks/income';

const ViewIncomePayments = () => {
  const [month, setMonth ] = useState("")
  const [year, setYear ] = useState("")

  const { viewIncomePayments, incomePayments } = useIncomeHook();

  const months = ['January','February','March','April','May','June','July','August','September','August','October','November','December']
  const years = [2023, 2022, 2021]
  // const months = [
  //   { value: "01", label: "January" },
  //   { value: "02", label: "February" },
  //   { value: "03", label: "March" },
  //   { value: "04", label: "April" },
  //   { value: "05", label: "May" },
  //   { value: "06", label: "June" },
  //   { value: "07", label: "July" },
  //   { value: "08", label: "August" },
  //   { value: "09", label: "September" },
  //   { value: "10", label: "October" },
  //   { value: "11", label: "November" },
  //   { value: "12", label: "December" }
  // ]

  const handleClick = (event) => {
    event.preventDefault()
    viewIncomePayments(month + 1, year)
  }

  const formatDate = (dateString) => {
    // const date = new Date(dateString + 'T00:00:00.000Z');
    const splitDate = dateString.split('-');
    return (`${months[Number(splitDate[1]) - 1]} ${splitDate[2]}, ${splitDate[0]}`) 
    // const options = { month: 'long', day: 'numeric', year: 'numeric' };
    // return date.toLocaleDateString('en-US', options);
  };

  return (
    <div>
      <div>------------------------------------------------------------</div>
      <p>Income Payments Received in {months[month]} {year}</p>

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

        {/* <input type="text" value={year} id="income_year" onChange={(event) => setYear(event.target.value)} /> */}
        <button type="submit" onClick={handleClick}> Get Income Payments </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Income Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {incomePayments.map((payment, index) => (
            <tr key={`${payment.user_id}_${index}`}>
              <td>{formatDate(payment.income_date)}</td>
              <td>${payment.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>------------------------------------------------------------</div>
    </div>
  )
}

export default ViewIncomePayments;