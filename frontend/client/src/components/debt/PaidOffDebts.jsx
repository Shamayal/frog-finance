import React, { useEffect } from 'react';
import { useDebtHook } from '../../hooks/debt';
import { useNavigate } from 'react-router-dom';
import ReactCanvasConfetti from "react-canvas-confetti";
import useConfettiHook from '../../hooks/confetti';
import '../../styles/debt.css';

const ViewPaidOffDebts = () => {
  const navigate = useNavigate();
  const { viewPaidOffDebts, paidOffDebts } = useDebtHook();
  const { fire, getInstance, canvasStyles } = useConfettiHook();

  console.log("check fe paid off debts", paidOffDebts)

  useEffect(() => {
    viewPaidOffDebts();
  }, []);

  return (
    <div className='wrapper debt-goal-section font-quicksand debt-achievements-pg'>
      <h1 className='font-poppins'>Pay down your debt <br /> Leap forward one goal at a time</h1>

      <main className='row justify-content-between'>
        <h4 className='font-poppins'>Debt Achievments - Completed Goals: </h4>



        {paidOffDebts.length === 0 &&
          <>
            <section className='col no-completed-debt-container bg-lightgray rounded-md'>
              <div className='debt-text-bg rounded-md'>
                <h4>No achievements yet</h4>
                <p>You haven't completed any debt goals</p>
                <p>Don't worry, you can view your current debt goals or create a goal if you don't have one yet! </p>
                <button className='btn btn-dark m-2' onClick={() => navigate("/debt/add")}>New debt goal</button>
                <button className='btn btn-dark m-2' onClick={() => navigate("/debt/progress")}>View current goals</button>
              </div>
            </section>

            <section className='col debt-page-how-it-works bg-lightgray rounded-md'>
              <h4 className='font-poppins'> How It Works</h4>
              <p>debt achievement description</p>
            </section>
          </>
        }

        {paidOffDebts.length > 0 && (
          paidOffDebts.map((paidDebt) => (
            <section className='col completed-debt-container bg-lightgray rounded-md' key={paidDebt.debt_id}>
              <h4 className='font-poppins'>You paid off your {paidDebt.name}!</h4>
              <div className='debt-text-bg rounded-md'>
              <p><span className='font-poppins'>Debt Name: </span> {paidDebt.name}</p>
              <p><span className='font-poppins'>Initial Amount: </span> ${parseFloat(paidDebt.initial_amount).toLocaleString()}.00</p>
              <p><span className='font-poppins'>Amount Left: </span> $0</p>
              <p><span className='font-poppins'>Interest Rate: </span> {paidDebt.interest_rate}%</p>
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

export default ViewPaidOffDebts;

