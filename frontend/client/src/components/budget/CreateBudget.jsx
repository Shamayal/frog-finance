import React, { useState } from 'react';
import { useBudgetHook } from '../../hooks/budgets';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const ViewAddBudget = () => {
  const [amount, setAmount ] = useState("")
  const [startDate, setStartDate] = useState(new Date());
  const [category, setCategory ] = useState("")
  const [submitted, setSubmitted] = useState(false);

  const { viewAddBudget, viewNotBudgetCategories, notBudgetCategories } = useBudgetHook();


  const handleCategoryChange = (event) => {
    console.log(event.target.value);
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
  };

  let handleDateChange = date => { 
    setStartDate(date);
    viewNotBudgetCategories(date);
  };
  
  const handleClick = (event) => {
    event.preventDefault()
    viewAddBudget(amount, startDate, category)
    setSubmitted(true);
    setAmount("");
    setStartDate(new Date());
    setCategory("");
  }

  return (
    <div>
      <p>Create a Budget</p>

      <form>
        <table>
        <tr><td>
            <DatePicker
              showIcon
              selected={startDate}
              onChange={handleDateChange}
            />
          </td></tr>
          <tr><td>
            <label htmlFor="budget_category">Category:</label>
            <select id="budget_category" value={category} onChange={handleCategoryChange}>
              <option value="">Select Category</option>
              {notBudgetCategories.map(category => (
                <option value={category.id}>
                  {category.category}
                </option>
              ))}
          </select>
          </td></tr>
          <tr><td>
            <label htmlFor="budget_amount">Budget Amount:</label>
            <input type="number" value={amount} id="budget_amount" onChange={(event) => setAmount(event.target.value)} />
          </td></tr>    
          <tr><td>
            <button type="submit" onClick={handleClick}> Add Budget </button>
          </td></tr>
        </table>
      </form>

      {submitted && <p>Budget added successfully!</p>}

    </div>
  )
}

export default ViewAddBudget;