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
      <h5 className="font-poppins">All Transactions in {props.month} {props.year}</h5>
      <br />
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="font-poppins">Expense Date</th>
            <th className="font-poppins">Category</th>
            <th className="font-poppins">Sub-Category</th>
            <th className="font-poppins">Amount</th>
          </tr>
        </thead>
        <tbody className="font-quicksand">
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
    </div>
  )
}

export default ViewExpensesTransactions;