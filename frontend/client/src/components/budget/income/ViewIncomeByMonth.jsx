const ViewIncomeByMonth = (props) => {

  console.log('view income by month props:', props);

  return (
    <div>
      <h5 className="font-poppins">Total Income Earned in <br /> {props.month} {props.year}</h5>
      <br />
      <div>
        {props.incomeByMonth.map((i, index) => (
        <h4 className="font-poppins" key={`${i.user_id}_${index}`}>${i.total_monthly_income ? `${Number(i.total_monthly_income).toLocaleString()}` : '0'}</h4>))}

      </div>
    </div>
  )
}

export default ViewIncomeByMonth;