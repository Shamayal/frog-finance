import 'frontend/client/src/styles/budget.css'

import ViewMonthlyBudgets from "../../../components/budget/ViewMonthlyBudgets"
const BudgetView = () => {
  return (
    <div>
      <h2>This is the Budget View Page</h2>
      <h4>Here users can view their overall budgets and amount left to spend!</h4>
      <ViewMonthlyBudgets />
    </div>
  );
};

export default BudgetView;
