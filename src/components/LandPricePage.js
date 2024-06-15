import React, { useEffect, useState } from 'react';
import '../App.css';
const LandPricePage = () => {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [pricePerSqFt, setPricePerSqFt] = useState('');
  const [totalPrice, setTotalPrice] = useState('');

  useEffect(() => {
    const calculatePrice = () => {
      if (length && width && pricePerSqFt) {
        const area = length * width;
        setTotalPrice(area * pricePerSqFt);
      } else {
        setTotalPrice('');
      }
    };

    calculatePrice();
  }, [length, width, pricePerSqFt]);

  return (
    <div>
      <h2>Land Price Calculator</h2>
      <form>
        <div>
          <label>
            Length:
            <input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Width:
            <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Price per Sq Ft:
            <input type="number" value={pricePerSqFt} onChange={(e) => setPricePerSqFt(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Total Price:
            <input type="number" value={totalPrice} readOnly />
          </label>
        </div>
      </form>
    </div>
  );
};

export default LandPricePage;
