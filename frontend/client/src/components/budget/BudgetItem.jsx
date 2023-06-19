import { formatCurrency, formatPercentage } from "../helpers/helpers";

const BudgetItem = ({ budget }) => {
  const { category, budget_amount, expense_amount } = budget;

  return (
    <div className="budget">
      <div className="progress-text">
        <h4>{category}</h4>
        <p>{formatCurrency(budget_amount)} Budgeted</p>
      </div>
      <progress max={budget_amount} value={expense_amount}>
        {formatPercentage(expense_amount / budget_amount)}
      </progress>
      <div className="progress-text">
        <small>${formatCurrency(expense_amount)} spent</small>
        <small>{formatCurrency(budget_amount - expense_amount)} remaining</small>
      </div>
    </div>
  )
}
export default BudgetItem