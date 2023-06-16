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
        />

        <br />


        <label htmlFor="debt_amount">
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

        <label htmlFor="interest_rate">
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

        <button  className='btn btn-light' type="submit" onClick={handleClick}>Create Goal</button>
      </form>

      <form className="w-full max-w-md">
  <div className="md:flex md:items-center mb-6">

    <div className="md:w-1/3">
      <label className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
      Debt to pay off:
      </label>
    </div>

    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text" value="" placeholder='Debt Name' />
    </div>
  </div>

  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
        Amount of debt
      </label>
    </div>

    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-password" type="number" placeholder="$0" />
    </div>
  </div>

  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
        Interest Rate
      </label>
    </div>

    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-password" type="number" placeholder="0.00%" />
    </div>
  </div>

  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button className="shadow bg-blue-600 hover:bg-blue-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        Create Goal
      </button>
    </div>
  </div>

</form>



    </div>
  )
}

export default CreateDebtGoal;