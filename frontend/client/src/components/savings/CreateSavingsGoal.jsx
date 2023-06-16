import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSavingsHook } from '../../hooks/savings';
import 'bootstrap/dist/css/bootstrap.css';

const CreateSavingsGoal = () => {
  const [savingName, setSavingName] = useState("")
  const [goalAmount, setGoalAmount] = useState("")
  const [currentAmount, setCurrentAmount] = useState("")

  const navigate = useNavigate();

  const { createSavingsGoal, currentSavingsGoal, viewSavingsGoal } = useSavingsHook();

  const handleClick = (event) => {
    event.preventDefault()
    createSavingsGoal(savingName, goalAmount, currentAmount).then(() => {
      navigate("/savings/progress")
    });
  }

  useEffect(() => {
    viewSavingsGoal()
  }, []);

  return (
    <div>
      <h1>Create New Savings Goal: </h1>

      {currentSavingsGoal &&
        <div>
          <p>You already have an active savings goal. To stay focused, leap towards one saving goal at a time</p>
          <button className='btn btn-light' onClick={() => navigate("/savings/progress")}>view savings goal</button>
        </div>
      }

      {!currentSavingsGoal &&

        <form action="">

          <label htmlFor="saving_name">
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


          <label htmlFor="goal_amount">
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

          <label htmlFor="current_amount">
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

          <button className='btn btn-light' type="submit" onClick={handleClick}>Create Goal</button>
        </form>

      }



    </div>
  )
}

export default CreateSavingsGoal;