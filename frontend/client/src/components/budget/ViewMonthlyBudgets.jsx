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
        <h4 className='font-poppins'> How It Works</h4>
        <p> Choose a Category to set Budget Amount, whether it's a Housing, Food, Transportation — whatever you need! </p>
        <p>Fill in the form - Select a Category </p>
        <p> Choose the Month and Year to set the Budgt for that Category.</p>
        <p> Enter the Budget Amount to set for the Month and Year Selected, then it will store and you can view the Budget and expenses..</p>
        <p>Once you've created the budget for one Category, come back & create a new one!</p>
      </section>
    </main>
  </div>
  )
}

export default ViewMonthlyBudgets;