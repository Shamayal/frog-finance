// from video
import LoginButton from "./components/authentication/LoginButton";
import LogoutButton from "./components/authentication/LogoutButton";
import Profile from "./components/authentication/Profile";
import ViewMonthlyBudgets from "./components/budget/ViewMonthlyBudgets";
import CurrentSavingGoal from './components/savings/CurrentSavingsGoal';
import PastSavingsGoals from './components/savings/PastSavingsGoals';
import CreateSavingsGoal from "./components/savings/CreateSavingsGoal";
import CurrentDebtGoals from './components/debt/CurrentDebtGoals';
import PaidOffDebts from './components/debt/PaidOffDebts';
import AddNewDebtGoal from './components/debt/AddNewDebtGoal';
import MakeDebtPayment from "./components/debt/MakeDebtPayment";
import { useAuth0 } from "@auth0/auth0-react";
import './App.css';
import axios from 'axios';
import {useEffect} from "react";
import ViewIncomePayments from "./components/budget/income/ViewIncomePayments";
import ViewIncomeByMonth from "./components/budget/income/ViewIncomeByMonth";
import ViewNetTotal from "./components/budget/ViewNetTotal";
import ViewExpensesByCategory from "./components/budget/expenses/ViewExpensesByCategory";
import ViewExpensesTransactions from "./components/budget/expenses/ViewTransactionsByMonth";
import ViewAddIncome from "./components/budget/income/AddIncome";
import ViewAddExpenses from "./components/budget/expenses/AddExpenses";

function App() {
  const { isLoading, error } = useAuth0();

  return (
    <main className="column">
      {/* <h1>Auth0 Login</h1> */}
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>

        </>

      )}
    </main>
  );
}

export default App;

//put month and year states here and pass it down to components that need it
// or create context and wrap it with elements 