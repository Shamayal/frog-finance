import { formatCurrency, formatPercentage } from "../helpers/helpers";
import '../../styles/budget.css';

const BudgetItem = ({ budget }) => {
  const { category, budget_amount, expense_amount } = budget;

  return (
    <div className="budget">
      <div className="progress-text">
        <label>{category}</label>
        <small>{formatCurrency(budget_amount)} Budgeted</small>
      </div>

      {(() => {
          const width = formatPercentage(expense_amount / budget_amount);

          return (
            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
              <div className="progress-bar bg-success" style={{ width: `${width}` }}>{width}</div>
            </div>
          );
        })()}
      <div className="progress-text">
        <small>${formatCurrency(expense_amount)} spent</small>
        {
          budget_amount > expense_amount ?
            <small>{formatCurrency(budget_amount - expense_amount)} remaining</small>
          : <label className="red-small">{formatCurrency(budget_amount - expense_amount)}</label>
        }     
      </div>
    </div>
  )
}
export default BudgetItem