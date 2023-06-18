import React, { useEffect, useState } from 'react';
import { useBudgetHook } from '../../hooks/budgets';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';


const CreateBudget = () => {
  useEffect(() => {
    handleDateChange(new Date());
 }, []);
  const [amount, setAmount ] = useState("")
  const [startDate, setStartDate] = useState(new Date());
  const [category, setCategory ] = useState("")
  const [submitted, setSubmitted] = useState(false);

  const { createBudget, viewNotBudgetCategories, notBudgetCategories } = useBudgetHook();


  const handleCategoryChange = (event) => {
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
    toast.success('Successfully created budget!')
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
      {notBudgetCategories.length == 0 && <><p>Created this month Budget for all Categories, You Can Update the Budge for the Category by clicking link below...</p>
        <Link to='/money/budget/update'>Update Budge</Link></> }      
      {submitted && <p>Budget added successfully!</p>}

    </div>
  )
}

export default CreateBudget;