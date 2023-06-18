import React, { useState } from 'react';
import { useIncomeHook } from '../../../hooks/income';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Toaster, toast } from 'react-hot-toast';
import "./AddIncome.css"

const ViewAddIncome = () => {
  const [amount, setAmount ] = useState("")
  const [startDate, setStartDate] = useState(new Date());

  const { viewAddIncome } = useIncomeHook();

  const handleClick = (event) => {
    event.preventDefault()
    if (parseFloat(amount) > 0) {
      viewAddIncome(amount, startDate)
      setAmount("");
      setStartDate(new Date());
      toast.success('Successfully added income!');
    } else {
      toast.error('Income must be greater than $0!');
    }
  }

  const handleDateChange = (date) => {
    setStartDate(date);
  }

  return (
    <div className="container">
      <h2 className="fontweight-700 font-poppins">Add Income</h2>
        
      <form className="income-box border rounded p-4 font-quicksand">
        <div className="form-group">
          <label htmlFor="income_earned">Amount Earned:</label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input
              type="number"
              className="form-control"
              value={amount}
              id="income_earned"
              onChange={(event) => setAmount(event.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Select Month:</label>
          <DatePicker
            showIcon
            className="form-control"
            selected={startDate}
            onChange={handleDateChange}
          />
        </div>

        <button type="submit" className="btn btn-dark" onClick={handleClick}>
          Add Income
        </button>
      </form>
      
    </div>
  )
}

export default ViewAddIncome;
