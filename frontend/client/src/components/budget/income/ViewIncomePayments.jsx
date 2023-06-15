import React, { useState } from 'react';
// import NavigationBar from '../components/NavigationBar'
import { useIncomeHook } from '../../../hooks/income';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ViewIncomePayments = () => {
  const [startDate, setStartDate] = useState(new Date());

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  function getMonth(startDate) {
    const monthIndex = startDate.getMonth();
    return months[monthIndex];
  }

  const month = getMonth(startDate);
  const year = startDate.getFullYear();
  console.log('income payments: ', month, year)

  const { viewIncomePayments, incomePayments } = useIncomeHook();

  const handleClick = (event) => {
    event.preventDefault()
    viewIncomePayments(startDate)
  }

  const sortedIncomePayments = [...incomePayments].sort((a, b) => {
    return new Date(a.income_date) - new Date(b.income_date);
  });

  return (
    <div>
      <div>------------------------------------------------------------</div>
      <p>Income Payments Received in {month} {year}</p>

      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        showFullMonthYearPicker
        showFourColumnMonthYearPicker
      />
      <button type="submit" onClick={handleClick}> Get Income Payments </button>

      <table>
        <thead>
          <tr>
            <th>Income Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {sortedIncomePayments.map((payment, index) => (
            <tr key={`${payment.user_id}_${index}`}>
              <td>{months[payment.income_date.slice(5,7).padStart(2, '0') - 1]} {payment.income_date.slice(8, 10)}, {payment.income_date.slice(0,4)}</td>
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