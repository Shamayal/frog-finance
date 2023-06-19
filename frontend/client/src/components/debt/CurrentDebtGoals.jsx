import React, { useEffect, useState } from 'react';
import { useDebtHook } from '../../hooks/debt';
import { useNavigate } from 'react-router-dom';
import '../../styles/Modal.css';
import ModalDebtPayment from './ModalDebtPayment';
import '../../styles/debt.css';

const ViewDebtGoals = () => {
  const navigate = useNavigate();
  const { viewDebtGoals, currentDebtGoals } = useDebtHook();

  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    viewDebtGoals();
  }, [openModal]);

  return (
    <div className='wrapper debt-goal-section font-quicksand'>
      <h1 className='font-poppins'>Pay down your debt <br /> Leap forward one goal at a time</h1>

      <main className='row justify-content-between'>
        <h4>Debt Goal Progress</h4>

        {/* No current dobt goals */}
        {currentDebtGoals.length === 0 &&
          <>
            <section className='col no-completed-savings-container bg-lightgray rounded-md'>
              <h4>No debt goals yet</h4>
              <div className='savings-text-bg rounded-md'>
                <p>You don't have any current debt goals</p>
                <p>Don't worry, you can create a new goal or view your past achievements </p>
                <button className='btn btn-light m-2' onClick={() => navigate("/debt/add")}>New debt goal</button>
                <button className='btn btn-light m-2' onClick={() => navigate("/debt/past")}>View paid off debts</button>
              </div>
            </section>

            <section className='col savings-page-how-it-works bg-lightgray rounded-md'>
              <h4 className='font-poppins'> How It Works</h4>
              <p>current debt goals - description</p>
            </section>
          </>
        }


        {currentDebtGoals.length > 0 && (
          currentDebtGoals.map((debtGoal) => {
            const width = (debtGoal.amount_paid / debtGoal.initial_amount) * 100;

            return (
              <section className='col current-debt-container bg-lightgray rounded-md' key={debtGoal.debt_id}>
                <h4 className='font-poppins'>Currently paying off: your {debtGoal.name}!</h4>
                <div className='debt-text-bg rounded-md'>
                  <div className='flex justify-between'>
                    <p><span className='font-poppins'>Goal Name: </span>  {debtGoal.name} </p>
                    <p><span className='font-poppins'>ID # </span> {debtGoal.debt_id}</p>
                  </div>

                  <p><span className='font-poppins'>Initial Amount: </span> ${debtGoal.initial_amount}</p>
                  <p><span className='font-poppins'>Interest Rate: </span> {debtGoal.interest_rate}%</p>
                  {debtGoal.amount_paid === null && <p><span className='font-poppins'>Amount Paid Off: </span>  $0</p>}
                  {debtGoal.amount_paid !== null && <p><span className='font-poppins'>Amount Paid Off: </span> ${debtGoal.amount_paid}</p>}
                  <p><span className='font-poppins'>Amount Left: </span> ${debtGoal.amount_left}</p>
                  <p><span className='font-poppins'>Progress: </span></p>
                  <div className="progress w-60" role="progressbar" aria-label="Success example" aria-valuenow={width} aria-valuemin={0} aria-valuemax={100}>
                    <div className="progress-bar bg-success" style={{ width: `${width}%` }}>{width}%</div>
                  </div>
                  <br />
                  <button className='btn btn-light openModalBtn' onClick={() => setOpenModal(true)} >
                    Update payments
                  </button>

                </div>

              </section>
            );
          })
        )}
        {openModal && <ModalDebtPayment setOpenModal={setOpenModal} />}

      </main>





    </div>
  );

};

export default ViewDebtGoals;

