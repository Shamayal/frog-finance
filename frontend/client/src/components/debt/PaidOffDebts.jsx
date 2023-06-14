import React, { useEffect } from 'react';
import { useDebtHook } from '../../hooks/debt';

const ViewPaidOffDebts = () => {
  const { viewPaidOffDebts, paidOffDebts } = useDebtHook();

  console.log("check fe paid off debts", paidOffDebts)

  useEffect(() => {
    viewPaidOffDebts();
  }, []);

  return (
    <div>
      <h1>Paid Off Debts:</h1>

      {paidOffDebts.length === 0 && <p>No paid off debts yet</p>
      }

      {paidOffDebts.length > 0 && (
        paidOffDebts.map((paidDebt) => (
          <section key={paidDebt.id}>
            <h3>Debt Name: {paidDebt.name}</h3>
            <p>Initial amount: ${paidDebt.initial_amount}.00</p>
            <p>Amount Left: ${paidDebt.amount_left}.00</p>
            <p>Interest Rate: {paidDebt.interest_rate}%</p>
            <p>Congrats, you paid off your {paidDebt.name}!</p>
          </section>
        ))
      )}

    </div>
  );
};

export default ViewPaidOffDebts;

