// components/TxPage.js
import React, { useState } from 'react';
import '../App.css';

const TxPage = () => {
  const [stockShortTerm, setStockShortTerm] = useState('');
  const [stockLongTerm, setStockLongTerm] = useState('');
  const [realEstateProfit, setRealEstateProfit] = useState('');

  // Tax rates as per 2024 budget
  const shortTermTaxRate = 0.20; // 20%
  const longTermTaxRate = 0.125; // 12.5%
  const realEstateTaxRate = 0.125; // 12.5%

  const formatNumber = (num) => {
    if (num >= 1e7) return (num / 1e7).toFixed(2) + ' Cr';
    if (num >= 1e5) return (num / 1e5).toFixed(2) + ' L';
    if (num >= 1e3) return (num / 1e3).toFixed(2) + ' k';
    return num.toFixed(2);
  };

  const calculateTaxAndProfit = (amount, rate) => {
    const tax = amount * rate;
    const profit = amount - tax;
    return { tax, profit };
  };

  const handleStockShortTermChange = (e) => setStockShortTerm(Number(e.target.value));
  const handleStockLongTermChange = (e) => setStockLongTerm(Number(e.target.value));
  const handleRealEstateProfitChange = (e) => setRealEstateProfit(Number(e.target.value));

  const shortTermResults = calculateTaxAndProfit(stockShortTerm, shortTermTaxRate);
  const longTermResults = calculateTaxAndProfit(stockLongTerm, longTermTaxRate);
  const realEstateResults = calculateTaxAndProfit(realEstateProfit, realEstateTaxRate);

  return (
    <div className="tx-container">
      <h2>Tax Calculator</h2>

      <div className="tax-section">
        <h3>Stock Transactions</h3>

        <div className="input-group">
          <label>Short-Term Gains:</label>
          <input
            type="number"
            value={stockShortTerm}
            onChange={handleStockShortTermChange}
            placeholder="Enter short-term gains"
          />
          <p>Tax: ₹{formatNumber(shortTermResults.tax)}, Profit: ₹{formatNumber(shortTermResults.profit)}</p>
        </div>

        <div className="input-group">
          <label>Long-Term Gains:</label>
          <input
            type="number"
            value={stockLongTerm}
            onChange={handleStockLongTermChange}
            placeholder="Enter long-term gains"
          />
          <p>Tax: ₹{formatNumber(longTermResults.tax)}, Profit: ₹{formatNumber(longTermResults.profit)}</p>
        </div>
      </div>

      <div className="tax-section">
        <h3>Real Estate Transactions</h3>

        <div className="input-group">
          <label>Profit:</label>
          <input
            type="number"
            value={realEstateProfit}
            onChange={handleRealEstateProfitChange}
            placeholder="Enter real estate profit"
          />
          <p>Tax: ₹{formatNumber(realEstateResults.tax)}, Profit: ₹{formatNumber(realEstateResults.profit)}</p>
        </div>
      </div>
    </div>
  );
};

export default TxPage;
