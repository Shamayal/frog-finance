import React, { useEffect, useRef } from 'react';
import { useSavingsHook } from '../../hooks/savings';
import ReactCanvasConfetti from "react-canvas-confetti";
import useConfettiHook from '../../hooks/confetti';

const ViewPastSavingsGoals = () => {
  const { viewPastSavingsGoal, pastSavingsGoal } = useSavingsHook();
  const { fire, getInstance, canvasStyles } = useConfettiHook();

  useEffect(() => {
    viewPastSavingsGoal();
  }, []);

  return (
    <div>
      <h1>Past Savings Goal:</h1>
      {pastSavingsGoal.length === 0 && <p>No savings goals have been reached yet</p>}

      {pastSavingsGoal.length > 0 && (
        <>
          <button onClick={fire}>Fire</button>
          <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
        </>
      )}

      {pastSavingsGoal.length > 0 && (
        pastSavingsGoal.map((pastSaving) => (
          <section key={pastSaving.savings_id}>
            <h3>Goal Name: {pastSaving.saving_name}</h3>
            <p>Goal Amount: ${pastSaving.goal_amount}.00</p>
            <p>Saved: ${pastSaving.current_amount}.00</p>
            <p>Date Created: {pastSaving.date_created}</p>
            <p>Date Completed: {pastSaving.date_finished}</p>
            <p>Congrats, you finished saving up for your {pastSaving.saving_name}!</p>
            <div className="progress w-50" role="progressbar" aria-label="Success example" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
              <div className="progress-bar bg-success" style={{ width: '100%' }}>100%</div>
            </div>
            <br />
          </section>
        ))
      )}
    </div>
  );
};

export default ViewPastSavingsGoals;
