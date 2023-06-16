import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSavingsHook } from '../../hooks/savings';

const ViewSavingsGoals = () => {
  const navigate = useNavigate();
  const { viewSavingsGoal, currentSavingsGoal } = useSavingsHook();

  useEffect(() => {
    viewSavingsGoal();
  }, []);

  return (
    <div>
      <h1>Current Savings Goal: </h1>

      {!currentSavingsGoal &&
        <div>
          <p>You don't have any savings goals yet</p>
          <button className='btn btn-light' onClick={() => navigate("/savings/add")}>create new goal</button>

        </div>

      }

      {currentSavingsGoal && (
        <>
          <p>Goal Name: {currentSavingsGoal.saving_name}</p>
          <p>Goal Amount: ${currentSavingsGoal.goal_amount}.00</p>
          <p>Currently Saved: ${currentSavingsGoal.current_amount}.00</p>
          <p>Date Created: {currentSavingsGoal.date_created}</p>

          <p>Progress:</p>

          {(() => {
            const currentAmount = parseInt(currentSavingsGoal.current_amount);
            const width = (currentSavingsGoal.goal_amount / currentAmount).toFixed(0);

            console.log('check width', width);

            return (
              <div className="progress w-50" role="progressbar" aria-label="Success example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                <div className="progress-bar bg-success" style={{ width: `${width}%` }}>{width}%</div>
              </div>
            );
          })()}
        </>
      )}
    </div>
  );
};

export default ViewSavingsGoals;
