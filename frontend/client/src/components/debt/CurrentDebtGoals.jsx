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
            <p>Initial amount: ${debtGoal.initial_amount}.00</p>
            <p>Interest Rate: {debtGoal.interest_rate}%</p>
            <p>Amount Paid Off: ${debtGoal.amount_paid}.00</p>
            <p>Amount Left: ${debtGoal.amount_left}.00</p>
          </section>
        ))
      )}

    </div>
  );
};

export default ViewDebtGoals;

