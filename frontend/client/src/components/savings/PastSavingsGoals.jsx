import React, { useEffect, useRef } from 'react';
import { useSavingsHook } from '../../hooks/savings';
import { useNavigate } from 'react-router-dom';
import ReactCanvasConfetti from "react-canvas-confetti";
import useConfettiHook from '../../hooks/confetti';
import '../../styles/savings.css';

const ViewPastSavingsGoals = () => {
  const navigate = useNavigate();
  const { viewPastSavingsGoal, pastSavingsGoal } = useSavingsHook();
  const { fire, getInstance, canvasStyles } = useConfettiHook();

  useEffect(() => {
    viewPastSavingsGoal();
  }, []);

  return (
    <div className='wrapper savings-goal-section font-quicksand saving-achievements-pg'>
      <h1 className='font-poppins'>Grow your savings <br /> Leap forward one goal at a time</h1>

      <main className='row justify-content-between'>

        <h4 className='font-poppins'>Saving Achievments - Completed Goals: </h4>

        {pastSavingsGoal.length === 0 &&
          <>
            <section className='col no-completed-savings-container bg-lightgray rounded-md'>
              <div className='savings-text-bg rounded-md'>
                <h4>No achievements yet</h4>
                <p>You haven't completed any savings goals</p>
                <p>Don't worry, you can view your current savings goals or create a goal if you don't have one yet! </p>
                <button className='btn btn-dark m-2' onClick={() => navigate("/savings/add")}>New savings goal</button>
                <button className='btn btn-dark m-2' onClick={() => navigate("/savings/progress")}>View current goals</button>
              </div>
            </section>

            <section className='col savings-page-how-it-works bg-lightgray rounded-md'>
              <h4 className='font-poppins'> How It Works</h4>
              <p>savings achievement description</p>
            </section>
          </>
        }

        {pastSavingsGoal.length > 0 && (
          pastSavingsGoal.map((pastSaving) => (
            <section className='col completed-savings-container bg-lightgray rounded-md' key={pastSaving.savings_id}>

              <div className='savings-text-bg rounded-md'>
                <h4 className='font-poppins'>You finished saving for your {pastSaving.saving_name}!</h4>
                <p><span className='font-poppins'>Goal Name: </span> {pastSaving.saving_name}</p>
                <p><span className='font-poppins'>Goal Amount: </span> ${parseFloat(pastSaving.goal_amount).toLocaleString()}.00</p>
                <p><span className='font-poppins'>Total Saved: </span> ${parseFloat(pastSaving.current_amount).toLocaleString()}.00</p>
                <p><span className='font-poppins'>Date Created: </span> {new Date(pastSaving.date_created).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                <p><span className='font-poppins'>Date Finished: </span> {new Date(pastSaving.date_finished).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                <p>Progress:</p>
                <div className="progress w-50" role="progressbar" aria-label="Success example" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                  <div className="progress-bar bg-success" style={{ width: '100%' }}>100%</div>
                </div>

                <div className='congrats-container'>
                  <button onClick={fire} className="congrats-confetti btn btn-dark rounded-md">Congrats!</button>
                  <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
                </div>
              </div>

            </section>
          ))
        )}
      </main>
    </div>
  );
};

export default ViewPastSavingsGoals;

