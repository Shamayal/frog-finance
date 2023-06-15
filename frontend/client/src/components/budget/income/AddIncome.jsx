import React, { useState } from 'react';
import { useIncomeHook } from '../../../hooks/income';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const ViewAddIncome = () => {
  const [amount, setAmount ] = useState("")
  const [startDate, setStartDate] = useState(new Date());
  const [submitted, setSubmitted] = useState(false);

  const { viewAddIncome } = useIncomeHook();

  const handleClick = (event) => {
    event.preventDefault()
    viewAddIncome(amount, startDate)
    setSubmitted(true);
    setAmount("");
    setStartDate(new Date());
  }

  const handleDateChange = (date) => {
    setStartDate(date);
  }

  return (
    <div>
      <div>------------------------------------------------------------</div>
      <p>Add Income</p>

      <form>

        <label htmlFor="income_earned">Amount Earned:</label>
        <input type="number" value={amount} id="income_earned" onChange={(event) => setAmount(event.target.value)} />

        <DatePicker
          showIcon
          selected={startDate}
          onChange={handleDateChange}
        />

        <button type="submit" onClick={handleClick}> Add Income </button>
      </form>

      {submitted && <p>Income added successfully!</p>}


      <div>------------------------------------------------------------</div>
    </div>
  )
}

export default ViewAddIncome;
