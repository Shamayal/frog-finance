export const menuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Money Management',
    url: '/money',
    submenu: [
      {
        title: 'Income',
        submenu: [
          {
            title: 'Add Income',
            url: '/money/income/add',
          },
          {
            title: 'View Income',
            url: 'money/income/view',
          }
        ]
      },
      {
        title: 'Expenses',
        submenu: [
          {
            title: 'Add Expense',
            url: '/money/expenses/add',
          },
          {
            title: 'View Expenses',
            url: 'money/expenses/view',
          }
        ]
      },
      {
        title: 'Budget',
        submenu: [
          {
            title: 'Update Spending Categories',
            url: '/money/budget/update',
          },
          {
            title: 'Monthly Overview',
            url: 'money/budget/view',
          }
        ]
      }
    ]
  },
  {
    title: 'Savings Goals',
    url: '/savings',
    submenu: [
      {
        title: 'Add New Goal',
        url: '/savings/add'
      },
      {
        title: 'Savings Progress',
        url: '/savings/progress'
      },
      {
        title: 'Savings Achievements',
        url: '/savings/achievements'
      }
    ]
  },
  {
    title: 'Debt Management',
    url: '/debt',
    submenu: [
      {
        title: 'Add New Debt',
        url: '/debt/add'
      },
      {
        title: 'Debt Progress',
        url: '/debt/progress'
      },
      {
        title: 'Past Debt',
        url: '/debt/past'
      }
    ]
  },
  {
    title: 'Stocks',
    url: '/stocks',
  },
  {
    title: 'Learn',
    url: '/learn',
    submenu: [
      {
        title: 'Money Tips 101',
        url: '/learn/money'
      },
      {
        title: 'Personal Finance',
        url: '/learn/finance'
      }
    ]
  }
];

