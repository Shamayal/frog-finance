const ViewIncomePayments = (props) => {
  
  console.log('view income payments props:', props);

  const sortedIncomePayments = [...(props.incomePayments)].sort((a, b) => {
    return new Date(a.income_date) - new Date(b.income_date);
  });

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="font-poppins">Income Date</th>
            <th className="font-poppins">Amount</th>
          </tr>
        </thead>
        <tbody className="font-quicksand">
          {sortedIncomePayments.map((payment, index) => (
            <tr key={`${payment.user_id}_${index}`}>
              <td>{props.months[payment.income_date.slice(5,7).padStart(2, '0') - 1]} {payment.income_date.slice(8, 10)}, {payment.income_date.slice(0,4)}</td>
              <td>${payment.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewIncomePayments;