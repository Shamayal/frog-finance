// import React, { useState } from 'react';
// import { useIncomeHook } from '../../../hooks/income';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';


// const ViewAddExpenses = () => {
//   const [amount, setAmount ] = useState("")
//   const [startDate, setStartDate] = useState(new Date());
//   const [submitted, setSubmitted] = useState(false);

//   const { viewAddIncome, addIncome } = useIncomeHook();

//   const handleClick = (event) => {
//     event.preventDefault()
//     viewAddIncome(amount, startDate)
//     setSubmitted(true);
//   }

//   return (
//     <div>
//       <div>------------------------------------------------------------</div>
//       <p>Add Expense</p>

//       <form>

//         <label htmlFor="expense_spent">Amount Spent:</label>
//         <input type="number" value={amount} id="expense_spent" onChange={(event) => setAmount(event.target.value)} />

//         <DatePicker
//           showIcon
//           selected={startDate}
//           onChange={(date) => setStartDate(date)}
//         />

//         <button type="submit" onClick={handleClick}> Add Income </button>
//       </form>

//       {submitted && <p>Expense added successfully!</p>}


//       <div>------------------------------------------------------------</div>
//     </div>
//   )
// }

// export default ViewAddExpenses;
