import React, { useEffect, useRef } from 'react';
import { useSavingsHook } from '../../hooks/savings';
import ReactCanvasConfetti from "react-canvas-confetti";
import useConfettiHook from '../../hooks/confetti';
import '../../styles/savings.css';


const ViewPastSavingsGoals = () => {
  const { viewPastSavingsGoal, pastSavingsGoal } = useSavingsHook();
  const { fire, getInstance, canvasStyles } = useConfettiHook();

  useEffect(() => {
    viewPastSavingsGoal();
  }, []);

  return (
    <div className='wrapper savings-goal-section font-quicksand'>
      <h1 className='font-poppins'>Grow your savings <br /> Leap forward one goal at a time</h1>

      <h4 className='font-poppins'>Completed Saving Goals </h4>
      {pastSavingsGoal.length === 0 && <p>No savings goals have been reached yet</p>}

      {pastSavingsGoal.length > 0 && (
        pastSavingsGoal.map((pastSaving) => (
          <section key={pastSaving.savings_id}>
            <p><span className='font-poppins'>Goal Name: </span> {pastSaving.saving_name}</p>
            <p><span className='font-poppins'>Goal Amount: </span> ${pastSaving.goal_amount}.00</p>
            <p><span className='font-poppins'>Total Saved: </span> ${pastSaving.current_amount}.00</p>
            <p><span className='font-poppins'>Date Created: </span> {pastSaving.date_created}</p>
            <p><span className='font-poppins'>Date Completed: </span> {pastSaving.date_finished}</p>
          <div className='congrats-container'>
            <button onClick={fire} className="congrats-confetti rounded-md">Congrats!</button>
            <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} /> You finished saving up for your {pastSaving.saving_name}!
          </div>

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
