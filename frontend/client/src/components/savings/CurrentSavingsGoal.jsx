import React, { useCallback, useState, useContext, useEffect } from 'react';
import { useSavingsHook } from '../../hooks/savings';


const ViewSavingsGoals = () => {

  const { viewSavingsGoal, currentSavingsGoal } = useSavingsHook();
  console.log("check csg", currentSavingsGoal)

useEffect(() => {
  viewSavingsGoal()
}, [])

  return (
    <div>
      <h1>Current Savings Goal: </h1>
      {currentSavingsGoal &&
      <>
        <p>Goal Name: {currentSavingsGoal.saving_name}</p>
        <p>Goal Amount: ${currentSavingsGoal.goal_amount}.00</p>
        <p>Currently Saved: ${currentSavingsGoal.current_amount}.00</p>
        <p>Date Created: {currentSavingsGoal.date_created}</p>
      </>
      }

    </div>
  )
}

export default ViewSavingsGoals;