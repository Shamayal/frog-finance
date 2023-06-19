import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSavingsHook } from '../../hooks/savings';
import '../../styles/savings.css';

const ViewSavingsGoals = () => {
  const navigate = useNavigate();
  const { viewSavingsGoal, currentSavingsGoal } = useSavingsHook();

  useEffect(() => {
    viewSavingsGoal();
  }, []);

  return (
    <div className='wrapper savings-goal-section font-quicksand'>
      <h1 className='font-poppins'>Grow your savings <br /> Leap forward one goal at a time</h1>

      <main className='row justify-content-between'>

        <section className='col current-savings-container bg-lightgray rounded-md'>
          <h4 className='font-poppins'>Current Savings Goal </h4>

          {!currentSavingsGoal &&
            <div className='savings-text-bg rounded-md'>
              <p>You don't have any savings goals yet</p>
              <p>Is there something you would like to save for?</p>
              <p>Click the button below to create a goal</p>
              <button className='btn btn-light' onClick={() => navigate("/savings/add")}>create new goal</button>
            </div>
          }

          {currentSavingsGoal && (
            <div className='savings-text-bg rounded-md'>
              <p><span className='font-poppins'>Goal Name: </span> {currentSavingsGoal.saving_name}</p>
              <p><span className='font-poppins'>Goal Amount: </span> ${currentSavingsGoal.goal_amount}.00</p>
              <p><span className='font-poppins'>Currently Saved: </span> ${currentSavingsGoal.current_amount}.00</p>
              <p><span className='font-poppins'>Date Created: </span> {currentSavingsGoal.date_created}</p>

              <p >Progress:</p>
              {(() => {
                const currentAmount = parseInt(currentSavingsGoal.current_amount);
                console.log("check current amount", currentAmount)
                console.log("check goal amount", currentSavingsGoal.goal_amount)
                const width = (currentAmount / currentSavingsGoal.goal_amount).toFixed(2) * 100;

                console.log('check width', width);

                return (
                  <div className="progress w-60" role="progressbar" aria-label="Success example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                    <div className="progress-bar bg-success" style={{ width: `${width}%` }}>{width}%</div>
                  </div>
                );
              })()}
            </div>
          )}
        </section>

        <section className='col savings-page-how-it-works bg-lightgray rounded-md'>
          <h4 className='font-poppins'> How It Works</h4>
          <p>View your current savings goal and keep track of your progress.  </p>

          <p>Frog Finance automatically updates your savings progress each time an expense is made or income is added, so you don't have to worry about making calculations.  </p>

          <p>Simply check here each time you want to see your current savings goal progress. </p>

          <p>Once a goal reaches 100% complete, it automatically moves to the Savings Achievements page where you can view all the savings goals you've achieved. </p>
        </section>

      </main>
    </div>

  );
};

export default ViewSavingsGoals;
