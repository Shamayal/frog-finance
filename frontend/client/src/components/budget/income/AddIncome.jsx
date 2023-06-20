import React, { useState } from 'react';
import { useIncomeHook } from '../../../hooks/income';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import "../../../styles/income.css"

const ViewAddIncome = () => {
  const navigate = useNavigate();
  const [amount, setAmount ] = useState("")
  const [startDate, setStartDate] = useState(new Date());

  const { viewAddIncome } = useIncomeHook();

  const handleClick = async (event) => {
    event.preventDefault();
    if (parseFloat(amount) > 0) {
        await viewAddIncome(amount, startDate);
        navigate('/money/income/view');
        toast.success('Successfully added income!');
    } else {
      toast.error('Income must be greater than $0!');
    }
  };

  const handleDateChange = (date) => {
    setStartDate(date);
  }

  return (
    <div className='wrapper income-add-section font-quicksand '>
      <h1 className='font-poppins'>Manage your finances<br /> Your first hop to financial freedom</h1>

          <main className='row justify-content-between'>
            <section className='col add-income-container bg-lightgray rounded-md'>
              <h4 className='font-poppins'> <span>Add Income</span> </h4>
              <form className="income-text-bg rounded-md">
                <label htmlFor="income_earned">Amount Earned:</label>
                <br />
                  <input
                    type="number"
                    value={amount}
                    id="income_earned"
                    placeholder="$0"
                    onChange={(event) => setAmount(event.target.value)}
                  />    
                  <br />
                <label>Select Month:</label>
                  <DatePicker
                    showIcon
                    selected={startDate}
                    onChange={handleDateChange}
                  />
                <br />
                <br />
                <button type="submit" className="btn btn-dark" onClick={handleClick}>
                  Add Income
                </button>
              </form>
            </section>

            <section className='col income-page-how-it-works bg-lightgray rounded-md'>
              <h4 className='font-poppins'> How It Works</h4>
              <p>So you've received a payslip from your employer, now what? </p>
              <p>You can use the "Add Income" feature on Frog Finance to keep track of the amount of money you are making!</p>
              <p>Fill in the form - the amount of money you earned, and the date you received the payslip.</p>
              <p>This will allow you to plan how much you can pay towards your debt and what you can put into your savings!</p>
            </section>

          </main>

      </div>
  )
}

export default ViewAddIncome;