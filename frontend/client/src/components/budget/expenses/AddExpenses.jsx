import React, { useState } from 'react';
import { useExpensesHook } from '../../../hooks/expenses';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const ViewAddExpenses = () => {
  const [amount, setAmount ] = useState("")
  const [startDate, setStartDate] = useState(new Date());
  const [category, setCategory ] = useState("")
  const [subCategory, setSubCategory ] = useState("")
  const [submitted, setSubmitted] = useState(false);

  const { viewAddExpenses } = useExpensesHook();

  const categorySubcategoriesMap = {
    1: [{name: 'Utilities', id: 1}, {name: 'Rent/Mortgage', id: 2}, {name: 'Insurance', id: 3}, {name: 'Renovations and Maintenance', id: 4}, {name: 'Household Products', id: 5}, {name: 'Other', id: 6}],
    2: [{name: 'Groceries', id: 7}, {name: 'Dining Out', id: 8}, {name: 'Beverages', id: 9}, {name: 'Other', id: 10}],
    3: [{name: 'Gas', id: 11}, {name: 'Car Insurance', id: 12}, {name: 'Public Transit', id: 13}, {name: 'Maintenance', id: 14}, {name: 'Other', id: 15}],
    4: [{name: 'Prescriptions', id: 16}, {name: 'Vision Care', id: 17}, {name: 'Dental Care', id: 18}, {name: 'Other', id: 19}],
    5: [{name: 'Tuition', id: 20}, {name: 'Books', id: 21}, {name: 'Supplies', id: 22}, {name: 'Other', id: 23}],
    6: [{name: 'Shoes and Clothes', id: 24}, {name: 'Electronics', id: 25}, {name: 'Makeup and Skin Care', id: 26}, {name: 'Hygiene Products', id: 27}, {name: 'Other', id: 28}],
    7: [{name: 'Gym', id: 29}, {name: 'Streaming Services', id: 30}, {name: 'Gaming', id: 31}, {name: 'Memberships', id: 32}, {name: 'Other', id: 33}],
    8: [{name: 'Phone Bill', id: 34}, {name: 'Internet', id: 35}, {name: 'Other', id: 36}],
    9: [{name: 'Movies', id: 37}, {name: 'Concerts', id: 38}, {name: 'Events', id: 39}, {name: 'Hobbies', id: 40}, {name: 'Other', id: 41}],
    10: [{name: 'Equipment and Supplies', id: 42}, {name: 'Lessons or Coaching', id: 43}, {name: 'Events and Tickets', id: 44}, {name: 'Uniforms or Apparel', id: 45}, {name: 'Other', id: 46}],
    11: [{name: 'Accommodations', id: 47}, {name: 'Transportation', id: 48}, {name: 'Food and Dining', id: 49}, {name: 'Activities', id: 50}, {name: 'Other', id: 51}],
    12: [{name: 'Food', id: 52}, {name: 'Grooming', id: 53}, {name: 'Accessories', id: 54}, {name: 'Veterinary', id: 55}, {name: 'Other', id: 56}],
    13: [{name: 'Donations', id: 57}, {name: 'Other', id: 58}]
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    setSubCategory("");
  };

  const handleSubCategoryChange = (event) => {
    setSubCategory(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault()
    viewAddExpenses(amount, startDate, category, subCategory)
    setSubmitted(true);
    setAmount("");
    setStartDate(new Date());
    setCategory("");
    setSubCategory("");
  }

  return (
    <div>
      <div>------------------------------------------------------------</div>
      <p>Add Expense</p>

      <form>

        <label htmlFor="expense_spent">Amount Spent:</label>
        <input type="number" value={amount} id="expense_spent" onChange={(event) => setAmount(event.target.value)} />

        <DatePicker
          showIcon
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />

        <label htmlFor="expense_category">Category:</label>
        <select id="expense_category" value={category} onChange={handleCategoryChange}>
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

        <label htmlFor="expense_subcategory">Subcategory:</label>
        <select id="expense_subcategory" value={subCategory} onChange={handleSubCategoryChange}>
          <option value="">Select Subcategory</option>
          {categorySubcategoriesMap[category]?.map((subcategory) => (
            <option key={subcategory.id} value={subcategory.id}>{subcategory.name}</option>
          ))}
        </select>

        <button type="submit" onClick={handleClick}> Add Expense </button>
      </form>

      {submitted && <p>Expense added successfully!</p>}


      <div>------------------------------------------------------------</div>
    </div>
  )
}

export default ViewAddExpenses;
