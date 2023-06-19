import React, { useState } from 'react';
import { useIncomeHook } from '../../../hooks/income';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Toaster, toast } from 'react-hot-toast';
import "../../../styles/income.css"

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
    <div className='wrapper savings-goal-section font-quicksand '>
        <h1 className='font-poppins'>Manage your finances<br />Your first hop to financial freedom</h1>
          <main className='row justify-content-between'>

            <section className='col create-savings-container bg-lightgray rounded-md'>
              <h4 className='font-poppins'> <span>Add Income</span> </h4>
              <form className="savings-text-bg rounded-md">
                <div className="income-form-input">
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
                </div>
                <button type="submit" className="btn btn-dark" onClick={handleClick}>
                  Add Income
                </button>
              </form>

            </section>

            <section className='col savings-page-how-it-works bg-lightgray rounded-md'>
              <h4 className='font-poppins'> How It Works</h4>
              <p> So you've received a payslip from your employer, now what? </p>
              <p>You can use the "Add Income" feature on Frog Finance to keep track of the amount of money you are making!</p>
              <p>Fill in the form - the amount of money you earned, and the date you received the payslip.</p>
              <p>This will allow you to plan how much you can pay towards your debt and what you can put into your savings!</p>
            </section>

          </main>

      </div>
  )
}

export default ViewAddIncome;

// <div className="container">
// <h1 className='font-poppins'>Manage your finances</h1>
// <br />
// <h4 className='font-poppins'> <span>Add Income</span> </h4>

// <div className="income-body">
//   <div>
//     <form className="income-box border rounded p-4 font-quicksand">
//       <div className="form-group">
//         <label htmlFor="income_earned">Amount Earned:</label>
//         <div className="input-group mb-3">
//           <div className="input-group-prepend">
//             <span className="input-group-text">$</span>
//           </div>
//           <input
//             type="number"
//             className="form-control"
//             value={amount}
//             id="income_earned"
//             onChange={(event) => setAmount(event.target.value)}
//           />
//         </div>
//       </div>
//       <div className="form-group">
//         <label>Select Month:</label>
//         <DatePicker
//           showIcon
//           className="form-control"
//           selected={startDate}
//           onChange={handleDateChange}
//         />
//       </div>
//       <br />
//       <br />
//       <button type="submit" className="btn btn-dark" onClick={handleClick}>
//         Add Income
//       </button>
//     </form>
//   </div>
//   hi
//   <div>

//   </div>
// </div>
// </div>
