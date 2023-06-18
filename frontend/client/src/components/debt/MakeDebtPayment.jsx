import React, { useState, useEffect } from 'react';
import { useDebtHook } from '../../hooks/debt';
import { Toaster, toast } from 'react-hot-toast';

const MakeDebtPayment = (props) => {
  const { addDebtPayment, viewDebtGoals } = useDebtHook();

  const [debtPaymentAmount, setDebtPaymentAmount] = useState('');
  const [debtGoalId, setDebtGoalId] = useState('');

  const handleClick = (event) => {
    event.preventDefault()
    addDebtPayment(debtPaymentAmount, debtGoalId)
    props.setOpenModal(false)
    toast.success('Successfully updated your debt payments!')
  }

  useEffect(() => {
    viewDebtGoals();
  }, []);


  return (
    <div>
      <form action="" className='font-quicksand'>

        <label htmlFor="debt_payment_amount">
          Amount paid:
        </label>
        <div class="input-group mb-3">
          <span class="input-group-text">$</span>
          <input
            type="number" class="form-control"
            aria-label="Amount (to the nearest dollar)"
            value={debtPaymentAmount}
            name="debt_payment_amount"
            id="debt_payment_amount"
            placeholder='0'
            onChange={(event) => setDebtPaymentAmount(event.target.value)} />
          <span class="input-group-text">.00</span>
        </div>

        <label htmlFor="debt_goal_id">
          Debt goal id:
        </label>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">#</span>
          <input
          type="number"
          class="form-control"
          placeholder="id"
          value={debtGoalId}
          name="debt_goal_id"
          id="debt_goal_id"
          onChange={(event) => setDebtGoalId(event.target.value)}
          />
        </div>

        <div className='modal-footer'>
          <button className='btn btn-danger' onClick={() => props.setOpenModal(false)}>cancel</button>
          <button type="submit" className='btn btn-primary' onClick={handleClick}>
            add payment
          </button>
        </div>

      </form>
    </div>
  );
};

export default MakeDebtPayment;