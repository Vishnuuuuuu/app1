// components/IncomePage.js
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
import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import './IncomePage.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const IncomePage = () => {
  const [income, setIncome] = useState(Array(12).fill(''));

  const handleIncomeChange = (index, value) => {
    const newIncome = [...income];
    newIncome[index] = Number(value);
    setIncome(newIncome);
  };

  const data = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [
      {
        label: 'Monthly Income',
        data: income,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
      },
    ],
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
        {income.map((value, index) => (
          <div key={index} className="input-group">
            <label>{data.labels[index]}: </label>
            <input
              type="number"
              value={value}
              onChange={(e) => handleIncomeChange(index, e.target.value)}
              placeholder="Enter income"
            />
          </div>
        ))}
      </div>
      <Line data={data} options={options} />
      <Bar data={data} options={options} />
    </div>
  );
};

export default IncomePage;
