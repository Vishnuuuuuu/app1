import React, { useEffect, useState } from 'react';
import '../App.css';

const CapitalInterestPage = () => {
  const [capital, setCapital] = useState('');
  const [interest, setInterest] = useState('');
  const [amount, setAmount] = useState('');
  const [finalAmount, setFinalAmount] = useState('');

  useEffect(() => {
    const calculateFinalAmount = () => {
      if (capital && amount) {
        setFinalAmount((parseFloat(capital) + parseFloat(amount)).toFixed(2));
      } else {
        setFinalAmount('');
      }
    };

    calculateFinalAmount();
  }, [capital, amount]);

  const handleCapitalChange = (e) => {
    const value = e.target.value;
    setCapital(value);
    if (interest) {
      const calculatedAmount = (value * (interest / 100)).toFixed(2);
      setAmount(calculatedAmount);
    }
  };

  const handleInterestChange = (e) => {
    const value = e.target.value;
    setInterest(value);
    if (capital) {
      const calculatedAmount = (capital * (value / 100)).toFixed(2);
      setAmount(calculatedAmount);
    }
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    if (capital) {
      const calculatedInterest = ((value / capital) * 100).toFixed(2);
      setInterest(calculatedInterest);
    }
  };

  return (
    <div className="container">
      <h2>Capital and Interest Calculator</h2>
      <form>
        <div>
          <label>
            Capital:
            <input type="number" value={capital} onChange={handleCapitalChange} required />
          </label>
        </div>
        <div>
          <label>
            Interest (%):
            <input type="number" value={interest} onChange={handleInterestChange} />
          </label>
        </div>
        <div>
          <label>
            Amount:
            <input type="number" value={amount} onChange={handleAmountChange} />
          </label>
        </div>
        <div>
          <label>
            Final Amount:
            <input type="number" value={finalAmount} readOnly />
          </label>
        </div>
      </form>
    </div>
  );
};

export default CapitalInterestPage;
