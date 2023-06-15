export const menuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Budget',
    url: '/budget',
    submenu: [
      {
        title: 'income',
        submenu: [
          {
            title: 'add income',
            url: 'add-income',
          },
          {
            title: 'view income',
            url: 'view-income',
          }
        ]
      },
      {
        title: 'expenses',
        url:  'expense',
      },
      {
        title: 'monthly budget tracker',
        url: 'monthly-budget-tracker'
      }
    ]
  },
  {
    title: 'Savings',
    url: '/savings',
    submenu: [
      {
        title: 'current goals',
        url: 'goals'
      },
      {
        title: 'past goals',
        url: 'past-goals'
      }
    ]
  },
  {
    title: 'Debt',
    url: '/debt',
    submenu: [
      {
        title: 'debt goals',
        url: 'goals'
      }
    ]
  },
  {
    title: 'Stocks',
    url: '/stocks',
  },
  {
    title: 'Learn',
    url: '/learn'
  }
];

