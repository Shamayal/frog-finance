import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDebtHook } from '../../hooks/debt';
import { Toaster, toast } from 'react-hot-toast';
import '../../styles/savings.css';

const CreateDebtGoal = () => {
  const [debtName, setDebtName] = useState("");
  const [debtAmount, setDebtAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");

  const navigate = useNavigate();

  const { createDebtGoal } = useDebtHook();

  const handleClick = (event) => {
    event.preventDefault()
    createDebtGoal(debtName, debtAmount, interestRate).then(() => navigate("/debt/progress"))
    toast.success('Successfully create a debt goal!');
  }

  return (
    <div className='wrapper debt-goal-section font-quicksand'>
      <h1 className='font-poppins'>Pay down your debt <br /> Leap forward one goal at a time</h1>

      <main className='row justify-content-between'>
        <section className='col create-debt-container bg-lightgray rounded-md'>
          <h4 className='font-poppins'>Create a debt goal</h4>
          <form className='debt-text-bg rounded-md'>

            <label htmlFor="debt_name">
              Debt you would like to pay off:
            </label>
            <input
              type="text"
              value={debtName}
              name="debt_name"
              id="debt_name"
              placeholder='debt name'
              onChange={(event) => setDebtName(event.target.value)}
              required
            />
            <br />

            <label htmlFor="debt_amount">
              Amount of debt:
            </label>
            <br />
            <input
              type="number"
              value={debtAmount}
              name="debt_amount"
              id="debt_amount"
              placeholder='$0'
              onChange={(event) => setDebtAmount(event.target.value)}
              required
            />
            <br />

            <label htmlFor="interest_rate">
              Interest rate:
            </label>
            <br />
            <input
              type="number"
              value={interestRate}
              name="interest_rate"
              id="interest_rate"
              placeholder='0.00%'
              onChange={(event) => setInterestRate(event.target.value)}
              required
            />
            <br />

            <button className='btn btn-light' type="submit" onClick={handleClick}>Create Goal</button>
          </form>

        </section>

        <section className='col debt-page-how-it-works bg-lightgray rounded-md'>
          <h4 className='font-poppins'> How It Works</h4>
          <p> Keep track of all your debts in one place. For each debt, you can create a new goal and track your progress.</p>
          <p>Fill in the form - name of the debt, the amount you need to pay off, and the interest rate. </p>
          <p> Create your goal, and watch your progress as you make payments towards each debt.</p>
          <p>Come back & create a new goal any time you need to!</p>
          <p>Once a debt has been paid off, you can view it on the Paid Off page. </p>
        </section>

      </main>
    </div>
  )
}

export default CreateDebtGoal;