import ViewMonthlyBudgets from "../../../components/budget/ViewMonthlyBudgets"
const BudgetView = () => {
  return (
    <div>
      <h3>This is the Budget View Page</h3>
      <h4>Here users can view their overall budgets and amount left to spend!</h4>
      <ViewMonthlyBudgets />
    </div>
  );
};

export default BudgetView;
