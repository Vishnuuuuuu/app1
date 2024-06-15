import React, { useState } from 'react';
import '../App.css';
const CapitalInterestPage = () => {
  const [capital, setCapital] = useState('');
  const [interest, setInterest] = useState('');
  const [amount, setAmount] = useState('');

  const handleCapitalChange = (e) => {
    const value = e.target.value;
    setCapital(value);
    if (interest) {
      setAmount((value * (interest / 100)).toFixed(2));
    }
  };

  const handleInterestChange = (e) => {
    const value = e.target.value;
    setInterest(value);
    if (capital) {
      setAmount((capital * (value / 100)).toFixed(2));
    }
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    if (capital) {
      setInterest(((value / capital) * 100).toFixed(2));
    }
  };

  return (
    <div>
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
      </form>
    </div>
  );
};

export default CapitalInterestPage;
