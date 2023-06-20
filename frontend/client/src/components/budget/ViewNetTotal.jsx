// import React, { useState } from 'react';
// import { useExpensesHook } from '../../hooks/expenses';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

const ViewNetTotal = (props) => {

  console.log('view net total props:', props);

  // create a useHook for date that returns variables as seen in comment below
  // const {date, setDate, month, year} = useDateMonthYear() 

  // variable to derive month and year, can display and pass to function on line 60 in expenses.js

  return (
    <div>
      <p>Net Total Saved in {props.month} {props.year}</p>
      <table>
        <thead>
          <tr>
            <th>Total Income</th>
            <th>Total Expenses</th>
            <th>Net Total</th>
          </tr>
        </thead>
        <tbody>
          {props.netTotal.map((total, index) => (
            <tr key={`${total.user_id}_${index}`}>

              <td>${Number(total.total_income).toLocaleString()}</td>
              <td>-${Number(total.total_expenses).toLocaleString()}</td>
              <td>{total.net_total >= 0 ? `$${Number(total.net_total).toLocaleString()}` : `-$${Math.abs(Number(total.net_total)).toLocaleString()}`}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewNetTotal;