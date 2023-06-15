import React, { useEffect } from 'react';
import { useDebtHook } from '../../hooks/debt';

const ViewDebtGoals = () => {
  const { viewDebtGoals, currentDebtGoals } = useDebtHook();

  console.log("check fe cdg", currentDebtGoals)

  useEffect(() => {
    viewDebtGoals();
  }, []);

  return (
    <div>
      <h1>Current Debt Goals:</h1>

      {currentDebtGoals.length === 0 && <p>No debt goals yet</p>
      }

      {currentDebtGoals.length > 0 && (
        currentDebtGoals.map((debtGoal) => (
          <section key={debtGoal.id}>
            <h3>Goal Name: {debtGoal.name}</h3>
            <p>Initial amount: ${debtGoal.initial_amount}</p>
            <p>Interest Rate: {debtGoal.interest_rate}%</p>
            {debtGoal.amount_paid === null && <p>Amount Paid Off: $0</p>}
            {debtGoal.amount_paid !== null && <p>Amount Paid Off: ${debtGoal.amount_paid}</p>}
            <p>Amount Left: ${debtGoal.amount_left}</p>
            {/* <p>Amount Left: ${!debtGoal.amount_left && "mark complete"}</p> */}
            <p>Debt id: {debtGoal.debt_id}</p>
            <button>
              Update payments
            </button>
          </section>
        ))
      )}

    </div>
  );
};

export default ViewDebtGoals;

