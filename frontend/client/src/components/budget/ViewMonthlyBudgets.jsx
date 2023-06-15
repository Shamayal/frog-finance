import React, { useCallback, useState, useContext, useEffect } from 'react';
// import NavigationBar from '../components/NavigationBar'
import { useBudgetHook } from '../../hooks/budgets';

// to view expenses by category and see how much left in budget
const ViewMonthlyBudgets = () => {
  const [month, setMonth ] = useState("")
  const [year, setYear ] = useState("")

  const { viewMonthlyBudget, monthlyBudget } = useBudgetHook();


  const handleClick = (event) => {
    event.preventDefault()
    viewMonthlyBudget(month, year)
  }

  // console.log("check mb", monthlyBudget)

  return (
    <div>
      {monthlyBudget.map((budget) => <p key={budget.id}>{budget.category}</p>)}


      <form action="">
        <input type="text" value={month} id="budget_month" onChange={(event) => setMonth(event.target.value)}/>
        <input type="text" value={year} id="budget_year" onChange={(event) => setYear(event.target.value)} />
        <button type="submit" onClick={handleClick}> Get budget </button>
      </form>


    </div>
  )
}

export default ViewMonthlyBudgets;