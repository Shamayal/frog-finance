const ViewIncomePayments = (props) => {
  
  console.log('view income payments props:', props);

  const sortedIncomePayments = [...(props.incomePayments)].sort((a, b) => {
    return new Date(a.income_date) - new Date(b.income_date);
  });

  return (
    <div>
      <div>------------------------------------------------------------</div>
      <p>Income Payments Received in {props.month} {props.year}</p>
      <table>
        <thead>
          <tr>
            <th>Income Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {sortedIncomePayments.map((payment, index) => (
            <tr key={`${payment.user_id}_${index}`}>
              <td>{props.months[payment.income_date.slice(5,7).padStart(2, '0') - 1]} {payment.income_date.slice(8, 10)}, {payment.income_date.slice(0,4)}</td>
              <td>${payment.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>------------------------------------------------------------</div>
    </div>
  )
}

export default ViewIncomePayments;