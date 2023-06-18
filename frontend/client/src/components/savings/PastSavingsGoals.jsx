import React, { useCallback, useState, useContext, useEffect, useRef } from 'react';
import { useSavingsHook } from '../../hooks/savings';
import ReactCanvasConfetti from "react-canvas-confetti";


const ViewPastSavingsGoals = () => {

  const { viewPastSavingsGoal, pastSavingsGoal } = useSavingsHook();
  console.log("check pastSavingGoal state", pastSavingsGoal)

  useEffect(() => {
    viewPastSavingsGoal()
  }, [])

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
};

const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0 },
        particleCount: Math.floor(2000 * particleRatio)
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 326,
      startVelocity: 130
    });

    makeShot(0.2, {
      spread: 60
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45
    });
  }, [makeShot]);

  return (
    <div>
      <button onClick={fire}>Fire</button>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
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
            <div className="progress w-50" role="progressbar" aria-label="Success example" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
              <div className="progress-bar bg-success" style={{ width: '100%' }}>100%</div>
            </div>
            <br />

          </section>
        ))
      )}

    </div>
  )
}

export default ViewPastSavingsGoals;
