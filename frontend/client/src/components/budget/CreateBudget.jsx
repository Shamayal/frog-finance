import React, { useEffect, useState } from 'react';
import { useBudgetHook } from '../../hooks/budgets';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-hot-toast';
import '../../styles/budget.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const CreateBudget = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("")
  const [startDate, setStartDate] = useState(new Date());
  const [category, setCategory] = useState("")
  const [submitted, setSubmitted] = useState(false);
  const { createBudget, viewNotBudgetCategories, notBudgetCategories } = useBudgetHook();

  useEffect(() => {
    handleDateChange(new Date());
  }, []);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    setSubmitted(false);
  };

  let handleDateChange = date => {
    setStartDate(date);
    viewNotBudgetCategories(date);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      await createBudget(amount, startDate, category);
      navigate("/money/budget/view");
      setSubmitted(true);
      toast.success('Successfully created budget!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='wrapper budget-create-section font-quicksand'>
      <h1 className='font-poppins'>Manage your finances<br /> Your first hop to financial freedom</h1>

      <main className='row justify-content-between'>
        <section className='col create-budget-container bg-lightgray rounded-md'>
          <h4 className='font-poppins'> <span>Create Budget  </span> </h4>
          <form className='budget-view-bg rounded-md'>
            <label htmlFor="budget_date">Budget Date:</label>
            <DatePicker
              showIcon
              selected={startDate}
              onChange={handleDateChange}
            />

            <label htmlFor="budget_category">Category:</label><br />
            <select id="budget_category" value={category} onChange={handleCategoryChange}>
              <option value="">Select Category</option>
              {notBudgetCategories.map(category => (
                <option value={category.id}>
                  {category.category}
                </option>
              ))}
            </select>

            <br /><label htmlFor="budget_amount">Budget Amount:</label><br />
            <input type="number" value={amount} id="budget_amount" onChange={(event) => setAmount(event.target.value)} />

            <br />
            <br />
            <button type="submit" className='btn btn-dark' onClick={handleClick}> Add Budget </button><br /><br />
            {notBudgetCategories.length === 0 && <><label>Created this month Budget for all Categories, You Can Update the Budget for the Category by clicking link below...</label>
              <Link to='/money/budget/update'>Update Budge</Link></>}
            {submitted && <h1 className='font-poppins'>Budget added successfully!</h1>}
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

export default CreateBudget;