import React, { useState } from 'react';
import { useIncomeHook } from '../../../hooks/income';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Toaster, toast } from 'react-hot-toast';

const ViewAddIncome = () => {
  const [amount, setAmount ] = useState("")
  const [startDate, setStartDate] = useState(new Date());

  const { viewAddIncome } = useIncomeHook();

  const handleClick = (event) => {
    event.preventDefault()
    viewAddIncome(amount, startDate)
    setAmount("");
    setStartDate(new Date());
    toast.success('Successfully added income!')
  }

  const handleDateChange = (date) => {
    setStartDate(date);
  }

  return (
    <div>
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
    </div>
  )
}

export default ViewAddIncome;
