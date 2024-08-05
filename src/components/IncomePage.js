// import {
//   BarElement,
//   CategoryScale,
//   Chart as ChartJS,
//   Legend,
//   LinearScale,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip
// } from 'chart.js';
// import React, { useEffect, useState } from 'react';
// import { Bar, Line } from 'react-chartjs-2';
// import '../App.css';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

// const IncomePage = () => {
// // Load saved income from localStorage or initialize with empty values
// const savedIncome = JSON.parse(localStorage.getItem('income')) || Array(12).fill('');
// const [income, setIncome] = useState(savedIncome);

// const handleIncomeChange = (index, value) => {
//   const newIncome = [...income];
//   newIncome[index] = Number(value);
//   setIncome(newIncome);
//   localStorage.setItem('income', JSON.stringify(newIncome)); // Save to localStorage
// };

// // Save income to localStorage whenever it changes
// useEffect(() => {
//   localStorage.setItem('income', JSON.stringify(income));
// }, [income]);

// const data = {
//   labels: [
//     'January', 'February', 'March', 'April', 'May', 'June', 
//     'July', 'August', 'September', 'October', 'November', 'December'
//   ],
//   datasets: [
//     {
//       label: 'Monthly Income',
//       data: income,
//       borderColor: 'rgba(75, 192, 192, 1)',
//       backgroundColor: 'rgba(75, 192, 192, 0.2)',
//       fill: false,
//     },
//   ],
// };

// const options = {
//   scales: {
//     y: {
//       beginAtZero: true,
//     },
//   },
// };

// return (
//   <div className="income-container">
//     <h2>Income Page</h2>
//     <div className="inputs-container">
//       {income.map((value, index) => (
//         <div key={index} className="input-group">
//           <label>{data.labels[index]}: </label>
//           <input
//             type="number"
//             value={value}
//             onChange={(e) => handleIncomeChange(index, e.target.value)}
//             placeholder="Enter income"
//           />
//         </div>
//       ))}
//     </div>
//     <Line data={data} options={options} />
//     <Bar data={data} options={options} />
//   </div>
// );
// };
// export default IncomePage;
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import '../App.css'; // Ensure your CSS path is correct

// Registering components required by Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const IncomePage = () => {
  // Initialize state for income data with local storage fallback
  const [income, setIncome] = useState(() => {
    const savedIncome = localStorage.getItem('income');
    return savedIncome ? JSON.parse(savedIncome) : Array(12).fill('');
  });

  // Handle input changes and update local storage
  const handleIncomeChange = (index, value) => {
    const newIncome = [...income];
    newIncome[index] = Number(value);
    setIncome(newIncome);
    localStorage.setItem('income', JSON.stringify(newIncome));
  };

  // Effect hook to synchronize state to local storage
  useEffect(() => {
    localStorage.setItem('income', JSON.stringify(income));
  }, [income]);

  // Chart data setup
  const data = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [{
      label: 'Monthly Income',
      data: income,
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: false,
    }],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="income-container">
      <h2>Income Page</h2>
      <div className="inputs-container">
        {data.labels.map((label, index) => (
          <div key={index} className="input-group">
            <label>{label}: </label>
            <input
              type="number"
              value={income[index] || ''}
              onChange={(e) => handleIncomeChange(index, e.target.value)}
              placeholder="Enter income"
            />
          </div>
        ))}
      </div>
      <div className="charts-section">
        <Line data={data} options={options} />
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default IncomePage;
