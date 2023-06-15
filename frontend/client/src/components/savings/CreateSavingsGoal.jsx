import React, { useState, useContext, useEffect } from 'react';
import { useSavingsHook } from '../../hooks/savings';




const CreateSavingsGoal = () => {
  const [savingName, setSavingName] = useState("")
  const [goalAmount, setGoalAmount] = useState("")
  const [currentAmount, setCurrentAmount] = useState("")


  const { viewSavingsGoal, createSavingsGoal, currentSavingsGoal  } = useSavingsHook();

  console.log("creat goal sg state", currentSavingsGoal)

  const handleClick = (event) => {
    event.preventDefault()
    createSavingsGoal(savingName, goalAmount, currentAmount)
  }

  return (
    <div>
      <h1>Create New Savings Goal: </h1>

      {currentSavingsGoal !== null && <p>You already have an active savings goal. Click here to view it</p>}

      {currentSavingsGoal === null &&

        <form action="">

          <label htmlFor="saving_name" className="sr-only">
            What are you saving for? Enter your goal name:
          </label>
          <input
            type="text"
            value={savingName}
            name="saving_name"
            id="saving_name"
            placeholder='goal name'
            onChange={(event) => setSavingName(event.target.value)}
          />

          <br />


          <label htmlFor="goal_amount" className="sr-only">
            How much do you need to save to reach this goal?
          </label>
          <input
            type="number" value={goalAmount}
            name="goal_amount"
            id="goal_amount"
            placeholder='$0'
            onChange={(event) => setGoalAmount(event.target.value)}
          />

          <br />

          <label htmlFor="current_amount" className="sr-only">
            How much have you already saved towards this goal?
          </label>
          <input
            type="number"
            value={currentAmount}
            name="current_amount"
            id="current_amount"
            placeholder='$0'
            onChange={(event) => setCurrentAmount(event.target.value)}
          />

          <br />

          <button type="submit" onClick={handleClick}>Create Goal</button>
        </form>

      }



    </div>
  )
}

export default CreateSavingsGoal;