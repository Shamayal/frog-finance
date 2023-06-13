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
      {currentSavingsGoal && <p>{currentSavingsGoal.saving_name}</p>}

    </div>
  )
}

export default ViewSavingsGoals;