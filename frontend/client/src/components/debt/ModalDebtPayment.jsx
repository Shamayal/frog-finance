import React, { useEffect } from 'react';
import { useDebtHook } from '../../hooks/debt';
import '../../styles/Modal.css';
import MakeDebtPayment from './MakeDebtPayment';

const ModalDebtPayment = (props) => {

  return (
    <div class="modalBackground">
      <div className='modalContainer'>
        <button onClick={() => props.setDebtModal(false)}>X</button>
        <div className='modalTitle'>
          <h2> Add a payment </h2>
        </div>

        <div className='modalBody'>
          <MakeDebtPayment setDebtModal={ props.setDebtModal } />
        </div>

      </div>
    </div> // bg
  );

};

export default ModalDebtPayment;

