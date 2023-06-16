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
          <section key={paidDebt.debt_id}>
            <h3>Debt Name: {paidDebt.name}</h3>
            <p>Initial amount: ${paidDebt.initial_amount}.00</p>
            <p>Amount Left: $0</p>
            <p>Interest Rate: {paidDebt.interest_rate}%</p>
            <p>Congrats, you paid off your {paidDebt.name}!</p>
            <div className="progress w-50" role="progressbar" aria-label="Success example" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
              <div className="progress-bar bg-success" style={{ width: '100%' }}>100%</div>
            </div>
          </section>
        ))
      )}

    </div>
  );
};

export default ViewPaidOffDebts;

