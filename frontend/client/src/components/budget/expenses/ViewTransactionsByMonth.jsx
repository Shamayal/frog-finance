// import React, { useState } from 'react';
// import { useExpensesHook } from '../../../hooks/expenses';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

const ViewExpensesTransactions = (props) => {

  console.log('view expense transactions props:', props);
 
  const sortedExpensesTransactions = [...(props.expensesTransactions)].sort((a, b) => {
    return new Date(a.expense_date) - new Date(b.expense_date);
  });

  return (
    <div>
      <div>------------------------------------------------------------</div>
      <p>All Expense Transactions in {props.month} {props.year}</p>
      <table>
        <thead>
          <tr>
            <th>Expense Date</th>
            <th>Category Name</th>
            <th>Sub-Category Name</th>
            <th>Amount Spent</th>
          </tr>
        </thead>
        <tbody>
          {sortedExpensesTransactions.map((transaction, index) => (
            <tr key={`${transaction.user_id}_${index}`}>
              <td>{props.months[transaction.expense_date.slice(5,7).padStart(2, '0') - 1]} {transaction.expense_date.slice(8, 10)}, {transaction.expense_date.slice(0,4)}</td>
              <td>{transaction.category_name}</td>
              <td>{transaction.sub_category_name}</td>
              <td>${Number(transaction.amount).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>------------------------------------------------------------</div>
    </div>
  )
}

export default ViewExpensesTransactions;