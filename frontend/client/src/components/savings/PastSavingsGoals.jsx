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
      {pastSavingsGoal.length === 0 && <p>No savings goals have been reached yet</p>
      }

      {pastSavingsGoal.length > 0 && (
      pastSavingsGoal.map((pastSaving) => (
        <section key={pastSaving.savings_id}>
        <h3>Goal Name: {pastSaving.saving_name}</h3>
        <p>Goal Amount: ${pastSaving.goal_amount}.00</p>
        <p>Saved: ${pastSaving.current_amount}.00</p>
        <p>Date Created: {pastSaving.date_created}</p>
        <p>Date Completed: {pastSaving.date_finished}</p>
        <p>Congrats, you finished saving up for your {pastSaving.saving_name}!</p>
        </section>
        ))
      )}

    </div>
  )
}

export default ViewPastSavingsGoals;
