# Frog Finance

<img src="https://github.com/Shamayal/frog-finance/blob/main/frontend/client/public/frog-logo.png" alt="Frog Finance Logo" width="200px">

_Leap towards financial stability!_

Whether you’re a recent graduate trying to get rid of your student debt, a young family looking to purchase your first home, or a working professional struggling to track your expenses, Frog Finance is the solution to managing your money!

Frog Finance is a full stack, multi-page web application that allows users to manage their money and reach their financial goals.

#### Users Can:

- add and view their monthly income
- add and view their monthly expenses
- view their monthly savings rate
- create, track, and update their monthly budget
- create a savings goal and monitor its progress
- create a debt goal, and add payments to track amount left to pay off
- view stocks
- learn about personal finance

## Final Product

!["Navigating the homepage."](https://github.com/Shamayal/frog-finance/blob/main/frontend/client/src/media/README%20gifs/homepage.gif)

### Add your Income

Users can track the amount of money they are earning by adding income when they receive a payslip. Users are then navigated to the view income page where they can see the total income for the month along with all of the payments they received. For example, here a user is adding an income of $3000.

On the right side of the view income page, there is also a section for their net total saved that month along with the calculated savings rate and an explanation of what that means in terms of reaching their financial goals.

insert gif for income
!["Users can add and view their income"](https://github.com/Shamayal/frog-finance/blob/main/frontend/client/src/media/README%20gifs/income.gif)

### Track your Expenses

Users can also track any purchases, or bill payments they have made and can select from 13 different categories and 58 different sub-categories. If a user misses a section on the form, they get a notification which has been implemented with the React Hot Toast Library. Here a user is adding a $50 grocery purchase.

Users are navigated to view all their expenses, they can see all the transactions for the month and a pie chart to see the breakdown by category. These categories help the user see where they are spending their money. Here the user sees the grocery purchase they added for June as well as all the expenses made in May.

insert gif for expense

### Create a Monthly Budget

Users can also view their budget by the different categories, and see if they are over, under, or approaching the limit. This page is updated with every expense added, Users can see the progress bars and the remaining amount. For example these were all of our expenses in May, and for June we can see the expense for food is added.
View Budget - June Demonstration can see food expense from earlier

Users can select a date, an expense category, and a limit of how much they want to spend for that month. For example, for June I want to limit my transportation expenses to $100.
Create Budget - June Demonstration one category Transportation $100

Users can now see the budget of $100 added for Transportation.
View Budget - June Demonstration one category Transportation $100
Click on button for update budget

If at any time users want to update the budget amount, they can change it depending on past spending activity. For transportation, we changed the limit to $200.
Update Budget - go back to view. Transportation now $200

Users can now see the updated budget of $200 added for Transportation.
View Budget - June Demonstration one category Transportation $200

### Set Savings Goals

Users can save for one goal at a time. Let’s say we want to save up $14,000 for school

Add new savings goal, 3 other tabs open

Now the user can view their saving goal progress. This page tracks every time they add income, make an expense, or make a debt payment across multiple months until the savings goal is reached. Each time they add an income or expense, the amounts and the progress bar is adjusted. Lets do a demonstration to see that in action
Savings Progress

for income add, bar changes - 2000.
Lets say we received 2000 of income, When we check our savings page, we can see the amounts and the progress bar are updated

Add expenses, bar changes - 1500 for housing -> rent.
Now we’ll try the same thing with expenses. If we paid 1000 for rent this month, we can now see that it’s been deducted from the amount saved, and the progress bar is updated

Add income again and show it flips over - 7000.
Lets see what happens when the user reaches their savings goal. If i receive an income of 7000, thats enough to reached my goal. We can see its been removed from the savings goal page, and added to the savings achievement page instead

As users complete their saving goals, they can view them here on the achievements page, and they can click on the congrats button for a surprise. We see the tuition here.
Savings Achievements - confetti demonstration

### Pay Off Debt

Users can create multiple debt goals to keep track of any debts they might have. For example let’s say owe $1000 on our Credit Card, 7% interest rate.
Add new Debt goal

Here users can view all of their debt goals as well as their progress towards paying them off. They can also update the amount they owe, so lets say I paid $500 towards my credit card today, we can update that here. Then we see the amount of debt left and the progress bar has adjusted.

Debt Progress - modal demonstration

Similar to saving achievements, Frog Finance also celebrates each time a user pays off their debt.
Past Debt

### View Stocks

Users can learn about stocks and market trends by searching for stocks and viewing the data. They can learn how the price trend changes over a day, week, month, or year

!["Users can view stocks."](https://github.com/Shamayal/frog-finance/blob/main/frontend/client/src/media/README%20gifs/stocks.gif)

### Learn about Finance

Users can improve their financial literacy by learning about different topics on finance, as well as read some tips on how to save money.

!["Users can learn about personal finance."](https://github.com/Shamayal/frog-finance/blob/main/frontend/client/src/media/README%20gifs/personal-finance.gif)

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information

- username: `finals`
- password: `finals`
- database: `finalsdb`

3. Install dependencies: `npm i`
4. Reset database: `npm run db:reset`
5. Run the server: `npm run local`
6. Visit `http://localhost:3000`

## Warnings & Tips

- Use the `npm run db:reset` command each time there is a change to the database schema or seeds.
  - It runs through each of the files, in order, and executes them against the database.
  - Note: you will lose all newly created (test) data each time this is run, since the schema files will tend to `DROP` the tables and recreate them.

## Dependencies

- Node 10.x or above
