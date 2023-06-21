import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const labels = ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'];

const data = {
  labels,
  datasets: [
    {
      label: 'Years to Save Up 1 Years Worth of Expenses vs Savings Rate',
      data: [ 40, 10, 5, 3.3, 2.5, 2, 1.7, 1.4, 1.3, 1.1, 1],
      borderColor: '#BBD187',
      backgroundColor: '#BBD187',
      pointBackgroundColor: '#BBD187',
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Years to Save Up 1 Years Worth of Expenses vs Savings Rate',
      font: {
        size: 16,
        weight: 'bold',
        family: 'quicksand',
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Savings Rate',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Years',
      },
      min: 0,
      max: 12,
    },
  },
};


const ViewNetTotal = (props) => {

  console.log('view net total props:', props);

  // create a useHook for date that returns variables as seen in comment below
  // const {date, setDate, month, year} = useDateMonthYear() 

  // variable to derive month and year, can display and pass to function on line 60 in expenses.js

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr className="font-poppins">
            <th>Total Income</th>
            <th>Total Expenses</th>
            <th>Net Total</th>
          </tr>
        </thead>
        <tbody className="font-quicksand">
          {props.netTotal.map((total, index) => (
            <tr key={`${total.user_id}_${index}`}>

              <td>${Number(total.total_income).toLocaleString()}</td>
              <td>-${Number(total.total_expenses).toLocaleString()}</td>
              <td>{total.net_total >= 0 ? `$${Number(total.net_total).toLocaleString()}` : `-$${Math.abs(Number(total.net_total)).toLocaleString()}`}</td>

            </tr>
          ))}
        </tbody>
      </table>
      {props.netTotal.length > 0 && (
        <div>
          <h5 className="font-poppins">
            Savings Rate:{' '}
            {(
              ((props.netTotal[0].total_income - props.netTotal[0].total_expenses) / props.netTotal[0].total_income) *
              100
            ).toFixed(2)}
            %
          </h5>
          <h6>Your savings rate is the percentage of total income that you are saving each month. 
          A higher savings rate means you are saving more money each month towards your savings goals, such as building an emergency fund, planning for retirement, or working towards a down payment for a house.
         </h6>
          <h6><em className='calculation'>Savings Rate = (total income - total expenses) / total income</em></h6>
          <h6>The average savings rate among Canadians is between 1.9% to 3.6%.
            Frog Finance suggests following the <strong>50/30/20 rule, put 20% of your income towards savings, 30% towards wants, and 50% towards needs</strong>.
            However, it's important to set your savings rate based on your personal financial situation, goals, and priorities.
          </h6>
          <Line data={data} options={options}/>
        </div>
        
      )}
    </div>
  )
}

export default ViewNetTotal;