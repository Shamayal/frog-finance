const ViewIncomeByMonth = (props) => {

  console.log('view income by month props:', props);

  return (
    <div>
      <div>------------------------------------------------------------</div>
      <p>Total Income Earned in {props.month} {props.year}</p>
      <div>
        <p>Total Amount:</p>
        {props.incomeByMonth.map((i, index) => (
        <p key={`${i.user_id}_${index}`}>${i.total_monthly_income ? `${Number(i.total_monthly_income).toLocaleString()}` : '0'}</p>))}

      </div>
      <div>------------------------------------------------------------</div>
    </div>
  )
}

export default ViewIncomeByMonth;