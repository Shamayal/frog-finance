import React, { useState  } from 'react';
import { useBudgetHook } from '../../hooks/budgets';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../styles/budget.css';
import BudgetItem from "./BudgetItem";
import { Link } from 'react-router-dom';

// to view expenses by category and see how much left in budget
const ViewMonthlyBudgets = () => {

  const [startDate, setStartDate] = useState(new Date());
  const { viewMonthlyBudget, monthlyBudget } = useBudgetHook();
  const [ budgetFlag, setBudgetFlag ] = useState(false);

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
    if(monthlyBudget.length === 0)
      setBudgetFlag(true);
  }
   
  return (
  <div className={`wrapper font-quicksand ${monthlyBudget.length > 0 ? "budget-view-section" : "budget-create-section"}`} >
    <h1 className='font-poppins'>Manage your finances<br /> Your first hop to financial freedom</h1>


    <main className='row justify-content-between'>
      <section className='col create-budget-container bg-lightgray rounded-md'>
      <h4 className='font-poppins'> <span>Budget for {month} {year} </span> </h4>
        <form className={`rounded-md ${monthlyBudget.length > 0 ? "budget-view-bg" : "budget-text-bg"}`} >
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
         } {monthlyBudget.length === 0 && budgetFlag && <><label>Budget was not Created, Create a Budget on clicking link below...</label><Link to='/money/budget/add'>Create Budge</Link></>
        }
        </form>
      </section>

    </main>
  </div>
  )
}

export default ViewMonthlyBudgets;