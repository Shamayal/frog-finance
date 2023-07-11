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

Users can add income when they receive a payslip. Users are then navigated to the view income page where they can see the total income for the month along with all of the payments they received. For example, here a user is adding an income of $3,000.

On the right side of the view income page, there is a section for the net total saved that month along with the calculated savings rate and an explanation of what that means in terms of reaching their financial goals.

!["Users can add and view their income."](https://github.com/Shamayal/frog-finance/blob/main/frontend/client/src/media/README%20gifs/income.gif)

### Track your Expenses

Users can add any purchases, or bill payments they have made and can select from 13 different categories and 58 different sub-categories. If a user misses a section on the form, they get a notification which has been implemented with the React Hot Toast Library. Here a user is adding a $50 grocery purchase.

Users are navigated to view all their expenses, they can see all the transactions for the month and a pie chart to see the breakdown by category. Here the user sees the grocery purchase they added for June as well as all the expenses made in May.

!["Users can add and view their expenses."](https://github.com/Shamayal/frog-finance/blob/main/frontend/client/src/media/README%20gifs/expenses.gif)

### Create and Track a Monthly Budget

Users can view their monthly budget by the different categories, and see if they are over, under, or approaching the limit. The progress bars on this page are updated with every expense added to show the remaining amount. For example, the food category for June shows the groceries expense, and the user can also view the budget for May.

!["Users can view their monthly budget."](https://github.com/Shamayal/frog-finance/blob/main/frontend/client/src/media/README%20gifs/view-budget.gif)

Users can create an expense category with a limit of how much they want to spend for that month as well as update that limit. Here, the user creates the transportation category for June with a limit of $100, they then go back and update that value to $200.

!["Users can create and update their monthly budget categories."](https://github.com/Shamayal/frog-finance/blob/main/frontend/client/src/media/README%20gifs/create-update-budget.gif)

### Set Savings Goals

Users can create and save for one goal at a time. Users can view their savings goal progress which is updates the progress bar every time they add income, make an expense, or make a debt payment across multiple months until the savings goal is reached.

Here, the user wants to save up $14,000 for school tuition. They add an income of $2,000 and an expense of $1,500 for rent and can see the progress bar is updated.

!["Users can create a saving goal."](https://github.com/Shamayal/frog-finance/blob/main/frontend/client/src/media/README%20gifs/create-saving.gif)

When a user reaches their savings goal, it is moved to their achievements page and they can create a new goal.

!["Users can complete a saving goal."](https://github.com/Shamayal/frog-finance/blob/main/frontend/client/src/media/README%20gifs/complete-saving.gif)

### Pay Off Debt

Users can create multiple debt goals and update the amount paid to see their progress and how much they still owe.

Here a user owes $1,000 on a credit card with a 7% interest rate. They update their debt goal with a $500 payment which automatically updates the progress bar.

!["Users can create a debt goal."](https://github.com/Shamayal/frog-finance/blob/main/frontend/client/src/media/README%20gifs/create-debt.gif)

When a user pays off their debt, it is moved to their achievements page.

!["Users can complete a debt goal."](https://github.com/Shamayal/frog-finance/blob/main/frontend/client/src/media/README%20gifs/complete-debt.gif)

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
