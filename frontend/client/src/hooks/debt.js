import { useState } from 'react';
import axios from 'axios';

export const useDebtHook = () => {
  const [currentDebtGoals, setCurrentDebtGoals] = useState([]);
  const [paidOffDebts, setpaidOffDebts] = useState([]);

  const viewDebtGoals = () => {
    axios
      .get('http://localhost:3030/debt')
      .then((res) => {
        console.log('current debt goal data', res.data);
        setCurrentDebtGoals(res.data.current_debt);
      })
      .catch((error) => {
        console.error('Error fetching debt goals:', error);
      });
  };

  const viewPaidOffDebts = () => {
    axios
      .get('http://localhost:3030/debt/paidoff')
      .then((res) => {
        console.log('past debt goal data', res.data);
        setpaidOffDebts(res.data.paid_off_debt);
      })
      .catch((error) => {
        console.error('Error fetching past debt goals:', error);
      });
  };

  return {
    viewDebtGoals,
    currentDebtGoals,
    viewPaidOffDebts,
    paidOffDebts,
  };
};

