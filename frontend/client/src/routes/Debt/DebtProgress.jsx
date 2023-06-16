import CurrentDebtGoals from '../../components/debt/CurrentDebtGoals'

const DebtProgress = () => {
  return (
    <div>
      <h2>This is the Debt Progress Page</h2>
      <h4>Users can add a see their debt in a graph and how much they have left to pay off</h4>

      <CurrentDebtGoals />
    </div>
  );
};

export default DebtProgress;
