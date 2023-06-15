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

  const createDebtGoal = (debtName, debtAmount, interestRate) => {
    const data = {
      name: debtName,
      initial_amount: debtAmount,
      interest_rate: interestRate
    }
    axios.post(`http://localhost:3030/debt/new`, data)
    .catch((error) => {
      console.error('Error posting new debt goal:', error);
    });
  };

  const addDebtPayment = (debtName, debtAmount, interestRate) => {
    const data = {
      name: debtName,
      initial_amount: debtAmount,
      interest_rate: interestRate
    }
    axios.post(`http://localhost:3030/debt/payment`, data)
    .catch((error) => {
      console.error('Error posting new debt goal:', error);
    });
  };

  return {
    viewDebtGoals,
    currentDebtGoals,
    viewPaidOffDebts,
    paidOffDebts,
    createDebtGoal,
    addDebtPayment
  };
};

