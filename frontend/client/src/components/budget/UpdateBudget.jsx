import React, { useState } from 'react';
import { useBudgetHook } from '../../hooks/budgets';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-hot-toast';
import '../../styles/budget.css';
import { useNavigate } from 'react-router-dom';

const UpdateBudget = () => {
  const navigate = useNavigate();
  const [amount, setAmount ] = useState("")
  const [startDate, setStartDate] = useState(new Date());
  const [category, setCategory ] = useState("")
  const [updated, setUpdated] = useState(false);

  const { updateBudget } = useBudgetHook();


  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    setUpdated(false);
  };


  const handleClick = async (event) => {
    event.preventDefault();
    try {
      await updateBudget(amount, category, startDate)
      navigate("/money/budget/view");
      setUpdated(true);
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
        <h4 className='font-poppins'> <span>Update Budget  </span> </h4>
        <form className='budget-text-bg rounded-md'>
          <label htmlFor="budget_category">Category:</label><br/>
          <select id="budget_category" value={category} onChange={handleCategoryChange}>
            <option value="">Select Category</option>
            <option value="1">Housing</option>
            <option value="2">Food</option>
            <option value="3">Transportation</option>
            <option value="4">Healthcare</option>
            <option value="5">Education</option>
            <option value="6">Shopping</option>
            <option value="7">Subscriptions</option>
            <option value="8">Communication</option>
            <option value="9">Entertainment</option>
            <option value="10">Hobbies</option>
            <option value="11">Travel</option>
            <option value="12">Pets</option>
            <option value="13">Other</option>
          </select>

          <br /><label htmlFor="budget_amount">Budget Amount:</label><br/>
          <input type="number" value={amount} id="budget_amount" onChange={(event) => setAmount(event.target.value)} />

          <br /><label htmlFor="budget_date">Budget Date:</label>
          <DatePicker
            showIcon
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <br/>
          <button type="submit" className='btn btn-dark' onClick={handleClick}> Update Budget </button>

      </form>

      {updated && <p>Budget Updated successfully!</p>}
      </section>
      <section className='col budget-page-how-it-works bg-lightgray rounded-md'>
        <h4 className='font-poppins'> How It Works</h4>
        <p> Choose a Category to set Budget Amount, whether it's a Housing, Food, Transportation — whatever you need! </p>
        <p>Fill in the form - Select a Category </p>
        <p> Enter the Budget Amount to set for the Month and Year Selected, then it will store and you can view the Budget and expenses..</p>
        <p> Choose the Month and Year to set the Budgt for that Category.</p>
        <p>Once you've Updated the budget for one Category, come back & create a new one!</p>
      </section>
    </main>
    </div>
  )
}

export default UpdateBudget;