import { formatCurrency, formatPercentage } from "../../helpers/currency-helper";
import '../../styles/budget.css';

const BudgetItem = ({ budget }) => {
  const { category, budget_amount, expense_amount } = budget;

  return (
    <div className="budget">
      <div className="progress-text">
        <label>{category}</label>
        <small>{formatCurrency(budget_amount)} Budget</small>
      </div>

      {(() => {
          const width = formatPercentage(expense_amount / budget_amount);
          const progressBarColor = parseInt(width) < 80 ? 'bg-success' : (parseInt(width) < 100 ? 'bg-warning' : 'bg-danger');

          return (
            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>

              <div className={`progress-bar ${progressBarColor}`} style={{ width: `${width}` }}>{width}</div>
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