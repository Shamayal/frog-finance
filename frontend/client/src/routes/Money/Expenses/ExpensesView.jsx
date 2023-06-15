import ViewNetTotal from "../../../components/budget/ViewNetTotal"
import ViewExpensesTransactions from "../../../components/budget/expenses/ViewTransactionsByMonth"
import ViewExpensesByCategory from "../../../components/budget/expenses/ViewExpensesByCategory"

const ExpenseView = () => {
  return (
    <div>
      <h2>This is the Expense View Page</h2>
      <h4>Here users can view their expense totals!</h4>
      <ViewNetTotal />
      <ViewExpensesTransactions />
      <ViewExpensesByCategory />
    </div>
  );
};

export default ExpenseView;
