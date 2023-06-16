import React, { useCallback, useState, useContext, useEffect } from 'react';
import { useSavingsHook } from '../../hooks/savings';


const ViewSavingsGoals = () => {

  const { viewSavingsGoal, currentSavingsGoal } = useSavingsHook();
  console.log("current savings goal state", currentSavingsGoal)

  useEffect(() => {
    viewSavingsGoal()
  }, [])

  const currentAmount = parseInt(currentSavingsGoal.current_amount);

  const width = (currentSavingsGoal.goal_amount / currentAmount).toFixed(0);

  console.log('check width', width)

  return (
    <div>
      <h1>Current Savings Goal: </h1>

      {!currentSavingsGoal && <p>You dont have any savings goals yet</p>}

      {currentSavingsGoal &&
        <>
          <p>Goal Name: {currentSavingsGoal.saving_name}</p>
          <p>Goal Amount: ${currentSavingsGoal.goal_amount}.00</p>
          <p>Currently Saved: ${currentSavingsGoal.current_amount}.00</p>
          <p>Date Created: {currentSavingsGoal.date_created}</p>

          <p>Progress:</p>

          <div className="progress w-50" role="progressbar" aria-label="Success example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-bar bg-success" style={{ width: `${width}%` }}>{width}%</div>

          </div>


        </>
      }
    </div>
  )
}

export default ViewSavingsGoals;