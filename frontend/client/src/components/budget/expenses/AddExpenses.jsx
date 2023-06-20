import React, { useState } from 'react';
import { useExpensesHook } from '../../../hooks/expenses';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Toaster, toast } from 'react-hot-toast';
import "../../../styles/expenses.css"


const ViewAddExpenses = () => {
  const [amount, setAmount ] = useState("")
  const [startDate, setStartDate] = useState(new Date());
  const [category, setCategory ] = useState("")
  const [subCategory, setSubCategory ] = useState("")

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
    event.preventDefault();

    if (parseFloat(amount) <= 0 || isNaN(parseFloat(amount))) {
      toast.error("Expense must be greater than $0!");
      return;
    }

    if (!category) {
      toast.error("Please select a category!");
      return;
    }

    if (!subCategory) {
      toast.error("Please select a sub-category!");
      return;
    }
    

    if (parseFloat(amount) > 0 && category && subCategory) {
      viewAddExpenses(amount, startDate, category, subCategory)
      setAmount("");
      setStartDate(new Date());
      setCategory("");
      setSubCategory("");
      toast.success('Successfully added expense!')
    }
    
  }

  return (
    <div className='wrapper expenses-add-section font-quicksand '>
        <h1 className='font-poppins'>Manage your finances<br />Your first hop to financial freedom</h1>
        <main className='row justify-content-between'>
          <section className='col add-expenses-container bg-lightgray rounded-md'>
            <h4 className='font-poppins'> <span>Add Expense</span> </h4>
            <form className="expenses-text-bg rounded-md">
              <label htmlFor="expense_spent">Amount Spent:</label>
              <br />
                <input
                  type="number"
                  value={amount}
                  id="expense_spent"
                  placeholder="$0"
                  onChange={(event) => setAmount(event.target.value)}
                />
                <br />
              <label>Select Month:</label>
                <DatePicker
                  showIcon
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
                <br />
              <div className="categories">
                <label htmlFor="expense_category">Category:</label>
                <br />
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
                <br />
                <label htmlFor="expense_subcategory">Subcategory:</label>
                <br />
                  <select id="expense_subcategory" value={subCategory} onChange={handleSubCategoryChange}>
                    <option value="">Select Subcategory</option>
                    {categorySubcategoriesMap[category]?.map((subcategory) => (
                    <option key={subcategory.id} value={subcategory.id}>{subcategory.name}</option>
                    ))}
                  </select>

              </div>
                <br />
              <button type="submit" className="btn btn-dark" onClick={handleClick}>
                Add Expense
              </button>
            </form>
          </section>

            <section className='col expenses-page-how-it-works bg-lightgray rounded-md'>
              <h4 className='font-poppins'> How It Works</h4>
              <p>With bills, necessities, and additional purchases, expenses can pile up on us and make it hard to keep track of the amount of money we are spending.</p>
              <p>You can use the "Add Expense" feature on Frog Finance to keep a record of where your money is going!</p>
              <p>Frog Finance allows you to select from 13 different main categories, such as "Housing", and "Food". Pick the one that aligns with your expense for better classification. You will then be promped to select a sub-category. We have a total of 58 sub-categories, for example "Groceries" and "Dining Out" for "Food" to cover all the types of expenses you might make!</p>
              <p>Fill in the form - the amount of money you spent, and the date you made the expense. Select a category and a sub-category.</p>
              <p>This will allow you to understand your spending patterns in detail and provide insight on where you might want to cut costs!</p>
            </section>
          </main>
    </div>
  )
}

export default ViewAddExpenses;
