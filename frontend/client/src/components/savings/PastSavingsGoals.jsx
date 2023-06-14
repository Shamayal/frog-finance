import React, { useCallback, useState, useContext, useEffect } from 'react';
import { useSavingsHook } from '../../hooks/savings';


const ViewPastSavingsGoals = () => {

  const { viewPastSavingsGoal, pastSavingsGoal } = useSavingsHook();
  console.log("check pastSavingGoal state", pastSavingsGoal)

useEffect(() => {
  viewPastSavingsGoal()
}, [])

  return (
    <div>
      <h1>Past Savings Goal: </h1>
      {pastSavingsGoal &&
      <>
        <p>Goal Name: {pastSavingsGoal.saving_name}</p>
        <p>Goal Amount: ${pastSavingsGoal.goal_amount}.00</p>
        <p>Saved: ${pastSavingsGoal.current_amount}.00</p>
        <p>Date Created: {pastSavingsGoal.date_created}</p>
        <p>Date Completed: {pastSavingsGoal.date_finished}</p>
      </>
      }
      {pastSavingsGoal.finished && <p>Congrats! You Reached your goal!</p> }

    </div>
  )
}

export default ViewPastSavingsGoals;