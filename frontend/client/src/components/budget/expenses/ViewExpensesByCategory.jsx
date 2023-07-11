import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import "../../../styles/expenses.css"

const ViewExpensesByCategory = (props) => {

  console.log('view expense by category props:', props);

  const sortedExpensesByCategory = [...(props.expensesByCategory)].sort((a, b) => {
    return b.total_amount - a.total_amount;
  });

  ChartJS.register(ArcElement, Tooltip, Legend);

  const categoryLabels = [];
  const categoryData = [];

  sortedExpensesByCategory.forEach((expense) => {
    categoryLabels.push(expense.category_name);
    categoryData.push(expense.total_amount);
  });
  

  const data = {
    labels: categoryLabels,
    datasets: [
      {
        label: 'Total Amount $',
        data: categoryData,
        backgroundColor: [
          'rgba(255, 3, 56, 0.2)', // red
          'rgba(54, 162, 235, 0.2)', // blue
          'rgba(250, 234, 5, 0.2)', // yellow
          'rgba(75, 192, 79, 0.2)', // green
          'rgba(153, 102, 255, 0.2)', // purple
          'rgba(255, 159, 64, 0.2)', // orange
          'rgba(60, 186, 163, 0.2)', // turquoise
          'rgba(255, 71, 206, 0.2)', // pink
        ],
        borderColor: [
          'rgba(255, 3, 56, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 79, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(60, 186, 163, 1)',
          'rgba(255, 71, 206, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 14, // Customize the font size
            family: 'poppins', // Customize the font family
          },
          padding: 20, // Add spacing value in pixels
        },
      },
    },
  };

  return (
    <div>
      {/* <table>
        <thead>
          <tr>
            <th>Category Name</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {sortedExpensesByCategory.map((expenses, index) => (
            <tr key={`${expenses.user_id}_${index}`}>
              <td>{expenses.category_name}</td>
              <td>${Number(expenses.total_amount).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <div className="pieContainer">
        <Pie data={data} options={options}/>
      </div>
    </div>
  )
}

export default ViewExpensesByCategory;