import React, { useState  } from 'react';
import { useBudgetHook } from '../../hooks/budgets';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../styles/budget.css';
import BudgetItem from "./BudgetItem";

// to view expenses by category and see how much left in budget
const ViewMonthlyBudgets = () => {

  const [startDate, setStartDate] = useState(new Date());
  const { viewMonthlyBudget, monthlyBudget } = useBudgetHook();

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  function getMonth(startDate) {
    const monthIndex = startDate.getMonth();
    return months[monthIndex];
  }

  const month = getMonth(startDate);
  const year = startDate.getFullYear();

  const handleClick = (event) => {
    event.preventDefault()
    viewMonthlyBudget(startDate)
  }
   
  return (
  <div className='wrapper budget-create-section font-quicksand'>
    <h1 className='font-poppins'>View the Budget for Category</h1>

    <main className='row justify-content-between'>
      <section className='col create-budget-container bg-lightgray rounded-md'>
      <h4 className='font-poppins'> <span>Budget for {month} {year} </span> </h4>
        <form className='budget-view-bg rounded-md'>
        <label htmlFor="budget_date">Budget Date:</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="MM/yyyy"
          showMonthYearPicker
          showFullMonthYearPicker
          showFourColumnMonthYearPicker
        />

        <button type="submit" className='btn btn-dark' onClick={handleClick}> Get Budget </button>
        <br /><br />
        { monthlyBudget.length > 0 &&
          <>
          <h2>Budgets for {month} {year}</h2>
          <div className="budgets">
            {
              monthlyBudget.map((budget) => (
                <BudgetItem key={budget.id} budget={budget} />
              ))
            }
          </div></>
        }
        </form>
      </section>
      <section className='col budget-page-how-it-works bg-lightgray rounded-md'>
        <h4 className='font-poppins'> How It Works </h4>
        <p> Display the Budget Amounts that you created for Housing, Food, Transportation — whatever you need! </p>
        <p> View the Category Name, Budget and Amount spend for each Category on Progress bar </p>
        <p> View the Amount Spent for each Category for that month </p>
        <p> Calcualted and Dispaly the remaining amount need to sepend for each Category..</p>
        <p> Select any month and See the Budget for each Category, come back & view a other one! </p>
      </section>
    </main>
  </div>
  )
}

export default ViewMonthlyBudgets;