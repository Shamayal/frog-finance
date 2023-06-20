import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSavingsHook } from '../../hooks/savings';
import 'bootstrap/dist/css/bootstrap.css';
import { Toaster, toast } from 'react-hot-toast';

const CreateSavingsGoal = () => {
  const { createSavingsGoal, currentSavingsGoal, viewSavingsGoal } = useSavingsHook();
  const navigate = useNavigate();

  const [savingName, setSavingName] = useState("")
  const [goalAmount, setGoalAmount] = useState("")
  const [currentAmount, setCurrentAmount] = useState("")

  const handleClick = (event) => {
    event.preventDefault()
    createSavingsGoal(savingName, goalAmount, currentAmount).then(() => {
      navigate("/savings/progress")
      toast.success('Successfully create a savings goal!')
    });
  }

  useEffect(() => {
    viewSavingsGoal()
  }, []);

  return (
      <div className='wrapper savings-goal-section font-quicksand '>
        <h1 className='font-poppins'>Grow your savings <br /> Leap forward one goal at a time</h1>

          <main className='row justify-content-between'>

            <section className='col create-savings-container bg-lightgray rounded-md'>
              <h4 className='font-poppins'> <span>Create a Savings Goal  </span> </h4>
              {currentSavingsGoal &&
                <div className='savings-text-bg rounded-md'>
                  <p>You already have an active savings goal</p>
                  <p>Leap towards one goal at a time to stay focused</p>
                  <p>Click the button below to see your current savings progress</p>
                  <button className='btn btn-light' onClick={() => navigate("/savings/progress")}>view savings goal</button>
                </div>
              }

              {!currentSavingsGoal &&
                <form className='savings-text-bg rounded-md'>

                  <label htmlFor="saving_name">
                    What are you saving for?
                  </label>
                  <br />
                  <input
                    type="text"
                    value={savingName}
                    name="saving_name"
                    id="saving_name"
                    placeholder='goal name'
                    onChange={(event) => setSavingName(event.target.value)}
                    required
                  />

                  <label htmlFor="goal_amount">
                    How much do you need to save?
                  </label>
                  <input
                    type="number" value={goalAmount}
                    name="goal_amount"
                    id="goal_amount"
                    placeholder='$0'
                    onChange={(event) => setGoalAmount(event.target.value)}
                    required
                  />

                  <label htmlFor="current_amount">
                    How much have you already saved?
                  </label>
                  <input
                    type="number"
                    value={currentAmount}
                    name="current_amount"
                    id="current_amount"
                    placeholder='$0'
                    onChange={(event) => setCurrentAmount(event.target.value)}
                  />
                  <br />
                  <br />

                  <button className='btn btn-light' type="submit" onClick={handleClick}>Create Goal</button>
                </form>
              }
            </section>

            <section className='col savings-page-how-it-works bg-lightgray rounded-md'>
              <h4 className='font-poppins'> How It Works</h4>
              <p> Choose a goal to work towards, whether it's a new car, school fees, an emergency fund, or a desk — whatever you need! </p>
              <p>Fill in the form - name of the goal, the amount you aim to save, and amount saved so far. </p>
              <p> Unsure of your current savings? Leave it as zero and Frog Finance will calculate it for you based on your net income from the Money Management sections.</p>
              <p> Create your goal, then sit back and watch your savings adjust automatically throughout the months as you add income and expenses. Now you will always know how much you have saved towards your goal.</p>
              <p>Once you've achieved your current goal, come back & create a new one!</p>
            </section>

          </main>

      </div>
  )
}

export default CreateSavingsGoal;