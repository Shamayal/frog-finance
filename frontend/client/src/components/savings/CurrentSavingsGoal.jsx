import React, { useCallback, useState, useContext, useEffect } from 'react';
// import NavigationBar from '../components/NavigationBar'
import { useSavingsHook } from '../../hooks/savings';

// to view expenses by category and see how much left in budget
const ViewSavingsGoals = () => {

  const { viewSavingsGoal, currentSavingsGoal } = useSavingsHook();
  console.log("check csg", currentSavingsGoal)

useEffect(() => {
  viewSavingsGoal()
}, [])

  return (
    <div>
      <p>hello</p>
      {currentSavingsGoal && <p>{currentSavingsGoal.saving_name}</p>}

    </div>
  )
}

export default ViewSavingsGoals;