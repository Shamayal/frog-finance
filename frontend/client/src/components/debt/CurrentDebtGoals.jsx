import React, { useEffect, useState } from 'react';
import { useDebtHook } from '../../hooks/debt';
import '../../styles/Modal.css';
import ModalDebtPayment from './ModalDebtPayment';

const ViewDebtGoals = () => {
  const { viewDebtGoals, currentDebtGoals } = useDebtHook();

  const [ openModal, setOpenModal ] = useState(false)

  useEffect(() => {
    viewDebtGoals();
  }, [openModal]);

  return (
    <div>
      <h1>Current Debt Goals:</h1>

      {currentDebtGoals.length === 0 && <p>No debt goals yet</p>}

      {currentDebtGoals.length > 0 && (
        currentDebtGoals.map((debtGoal) => {
          const width = (debtGoal.amount_paid / debtGoal.initial_amount) * 100;

          return (
            <section key={debtGoal.debt_id}>
              <h3>Goal Name: {debtGoal.name}</h3>
              <p>Initial amount: ${debtGoal.initial_amount}</p>
              <p>Interest Rate: {debtGoal.interest_rate}%</p>
              {debtGoal.amount_paid === null && <p>Amount Paid Off: $0</p>}
              {debtGoal.amount_paid !== null && <p>Amount Paid Off: ${debtGoal.amount_paid}</p>}
              <p>Amount Left: ${debtGoal.amount_left}</p>
              <p>Debt id: {debtGoal.debt_id}</p>
              <p>Progress:</p>
              <div className="progress w-50" role="progressbar" aria-label="Success example" aria-valuenow={width} aria-valuemin={0} aria-valuemax={100}>
                <div className="progress-bar bg-success" style={{ width: `${width}%` }}>{width}%</div>
              </div>
              <button className='btn btn-light openModalBtn' onClick={() => setOpenModal(true)} >
                Update payments
              </button>
            </section>
          );
        })
      )}
      {openModal && <ModalDebtPayment setOpenModal={setOpenModal} />}

    </div>
  );

};

export default ViewDebtGoals;

