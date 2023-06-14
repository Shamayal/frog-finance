import React, { useCallback, useState, useContext, useEffect } from 'react';
import { useSavingsHook } from '../../hooks/savings';


const CreateSavingsGoal = () => {

  //   const { viewSavingsGoal, currentSavingsGoal } = useSavingsHook();
  //   console.log("current savings goal state", currentSavingsGoal)

  // useEffect(() => {
  //   viewSavingsGoal()
  // }, [])

  return (
    <div>
      <h1>Create New Savings Goal: </h1>
      <form action="">

        <label htmlFor="saving_name" className="sr-only">
          What are you saving for? Enter your goal name:
        </label>
        <input type="text" name="" id="saving_name" placeholder='goal name'/>

        <br />


        <label htmlFor="goal_amount" className="sr-only">
          How much do you need to save to reach this goal?
        </label>
        <input type="number" id="goal_amount" placeholder='$0'/>

        <br />

        <label htmlFor="current_amount" className="sr-only">
          How much have you already saved towards this goal?
        </label>
        <input type="number" id="current_amount" placeholder='$0' />

        <br />

        <button type="submit">Create Goal</button>
      </form>


    </div>
  )
}

export default CreateSavingsGoal;