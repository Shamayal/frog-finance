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
            <div className='savings-text-bg rounded-md no-saving-goals-yet'>
              <p>You don't have any savings goals yet</p>
              <p>Is there something you would like to save for?</p>
              <p>Click the button below to create a goal</p>
              <button className='btn btn-dark' onClick={() => navigate("/savings/add")}>Create new goal</button>
            </div>
          }

          {currentSavingsGoal && (

            <div className='savings-text-bg rounded-md'>
              {console.log("CHECK", currentSavingsGoal.goal_amount)}
              <p><span className='font-poppins'>Goal Name: </span> {currentSavingsGoal.saving_name}</p>
              <p><span className='font-poppins'>Goal Amount: </span> ${parseFloat(currentSavingsGoal.goal_amount).toLocaleString()}</p>

              <p><span className='font-poppins'>Amount Saved: </span> ${parseFloat(currentSavingsGoal.current_amount).toLocaleString()}</p>
              <p><span className='font-poppins'>Amount Left: </span> ${parseFloat(currentSavingsGoal.goal_amount - currentSavingsGoal.current_amount).toLocaleString()}</p>
              <p><span className='font-poppins'>Date Created: </span> {new Date(currentSavingsGoal.date_created).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>


              <p >Progress:</p>
              {(() => {
                const currentAmount = parseInt(currentSavingsGoal.current_amount);
                console.log("check type current amount", currentAmount);
                console.log("check goal amount", currentSavingsGoal.goal_amount)
                const width = (currentAmount / currentSavingsGoal.goal_amount).toFixed(2) * 100;

                console.log('check width', width);

                return (
                  <div className="progress w-60 border border-black my-2" role="progressbar" aria-label="Success example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
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

          <p>Frog Finance automatically updates your savings progress each time an expense is made or income is added, so you don't have to worry about making any calculations. How do we do it? </p>

          <p className='font-poppins'>Savings = Income - (Expenses + Debt Payments)</p>

          <p>Simply check here each time you want to see your savings goal progress. </p>

          <p>Once a goal reaches 100% complete, it automatically moves to the Savings Achievements page where you can view all the savings goals you've achieved. </p>

          {currentSavingsGoal && (
            <>
              <button className='btn btn-dark'  onClick={() => navigate("/money/income/add")}>Add income</button>
              <button className='btn btn-dark mx-2.5 my-2'  onClick={() => navigate("/money/expenses/add")}>Add expense</button>
              <button className='btn btn-dark'  onClick={() => navigate("/debt/progress")}>Add debt payment</button>
            </>
          )}

        </section>

      </main>
    </div>

  );
};

export default ViewSavingsGoals;

