import ViewNetTotal from "../../../components/budget/ViewNetTotal"
import ViewIncomeByMonth from "../../../components/budget/income/ViewIncomeByMonth";
import ViewIncomePayments from "../../../components/budget/income/ViewIncomePayments"

const IncomeView = () => {
  return (
    <div>
      <h2>This is the Income View Page</h2>
      <h4>Here users can view their income totals!</h4>
      <ViewNetTotal />
      <ViewIncomeByMonth />
      <ViewIncomePayments />
    </div>
  );
};

export default IncomeView;
