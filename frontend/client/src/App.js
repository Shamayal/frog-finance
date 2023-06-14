// from video
import LoginButton from "./components/authentication/LoginButton";
import LogoutButton from "./components/authentication/LogoutButton";
import Profile from "./components/authentication/Profile";
import ViewMonthlyBudgets from "./components/budget/ViewMonthlyBudgets";
import CurrentSavingGoal from './components/savings/CurrentSavingsGoal'
import { useAuth0 } from "@auth0/auth0-react";
import './App.css';
import axios from 'axios';
import {useEffect} from "react";
import ViewIncomePayments from "./components/budget/income/ViewIncomePayments";
import ViewIncomeByMonth from "./components/budget/income/ViewIncomeByMonth";
import ViewNetTotal from "./components/budget/ViewNetTotal";
import ViewExpensesByCategory from "./components/budget/expenses/ViewExpensesByCategory";
import ViewExpensesTransactions from "./components/budget/expenses/ViewTransactionsByMonth";

function App() {
  const { isLoading, error } = useAuth0();

  return (
    <main className="column">
      <h1>Auth0 Login</h1>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <LoginButton />
          <LogoutButton />
          <Profile />
          <ViewMonthlyBudgets />
          <CurrentSavingGoal />
          <ViewIncomePayments />
          <ViewIncomeByMonth />
          <ViewNetTotal />
          <ViewExpensesByCategory />
          <ViewExpensesTransactions />
        </>

      )}
    </main>
  );
}

export default App;