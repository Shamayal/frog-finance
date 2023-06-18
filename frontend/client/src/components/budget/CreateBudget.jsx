import React, { useState } from 'react';
import { useBudgetHook } from '../../hooks/budgets';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const CreateBudget = () => {
  const [amount, setAmount ] = useState("")
  const [startDate, setStartDate] = useState(new Date());
  const [category, setCategory ] = useState("")
  const [submitted, setSubmitted] = useState(false);

  const { createBudget, viewNotBudgetCategories, notBudgetCategories } = useBudgetHook();


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
    createBudget(amount, startDate, category)
    setSubmitted(true);
    setAmount("");
    setStartDate(new Date());
    setCategory("");
  }

  return (
    <div>
      <h2>
        Create a Budget
      </h2>

      <form>
      <div>  
        <label htmlFor="budget_date">Budget Date:</label>
        <DatePicker
          showIcon
          selected={startDate}
          onChange={handleDateChange}
        />
      </div>
      <div>  
        <label htmlFor="budget_category">Category:</label>
        <select id="budget_category" value={category} onChange={handleCategoryChange}>
          <option value="">Select Category</option>
          {notBudgetCategories.map(category => (
            <option value={category.id}>
              {category.category}
            </option>
          ))}
        </select>
      </div>
      <div>  
        <label htmlFor="budget_amount">Budget Amount:</label>
        <input type="number" value={amount} id="budget_amount" onChange={(event) => setAmount(event.target.value)} />
      </div >

      <button type="submit" onClick={handleClick}> Add Budget </button>

      </form>

      {submitted && <p>Budget added successfully!</p>}

    </div>
  )
}

export default CreateBudget;