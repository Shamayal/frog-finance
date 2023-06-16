import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDebtHook } from '../../hooks/debt';

const CreateDebtGoal = () => {
  const [ debtName, setDebtName ] = useState("");
  const [ debtAmount, setDebtAmount ] = useState("");
  const [ interestRate, setInterestRate ] = useState("");

  const navigate = useNavigate();

  const { createDebtGoal } = useDebtHook();

  const handleClick = (event) => {
    event.preventDefault()
    createDebtGoal(debtName, debtAmount, interestRate).then(() => navigate("/debt/progress"))
  }

  return (
    <div>
      <h1>Create a New Debt Goal: </h1>
      <form action="">

        <label htmlFor="debt_name" className="sr-only">
        Debt you would like to pay off:
        </label>
        <input
          type="text"
          value={debtName}
          name="debt_name"
          id="debt_name"
          placeholder='debt name'
          onChange={(event) => setDebtName(event.target.value)}
        />

        <br />


        <label htmlFor="debt_amount" className="sr-only">
          Amount of debt:
        </label>
        <input
          type="number"
          value={debtAmount}
          name="debt_amount"
          id="debt_amount"
          placeholder='$0'
          onChange={(event) => setDebtAmount(event.target.value)}
        />

        <br />

        <label htmlFor="interest_rate" className="sr-only">
          Interest rate:
        </label>
        <input
          type="number"
          value={interestRate}
          name="interest_rate"
          id="interest_rate"
          placeholder='0.00%'
          onChange={(event) => setInterestRate(event.target.value)}
        />

        <br />

        <button type="submit" onClick={handleClick}>Create Goal</button>
      </form>


    </div>
  )
}

export default CreateDebtGoal;