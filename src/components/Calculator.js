import React from 'react';
import calculate from '../logic/calculate';

const MyCalculator = () => {
  const [state, setState] = React.useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (event) => {
    setState((state) => calculate(state, event.target.innerText));
  };

  const { total, next } = state;
  const result = next || total || '0';

  return (
    <div className="calculator-container">
      <div className="calculator-display">
        <span className="calculator-result">{result}</span>
      </div>
      <div className="calculator-keypad">
        <button type="button" onClick={handleClick} className="input-button">AC</button>
        <button type="button" onClick={handleClick} className="input-button">+/-</button>
        <button type="button" onClick={handleClick} className="input-button">%</button>
        <button type="button" onClick={handleClick} className="input-button background-orange">÷</button>
        <button type="button" onClick={handleClick} className="input-button">7</button>
        <button type="button" onClick={handleClick} className="input-button">8</button>
        <button type="button" onClick={handleClick} className="input-button">9</button>
        <button type="button" onClick={handleClick} className="input-button background-orange">x</button>
        <button type="button" onClick={handleClick} className="input-button">4</button>
        <button type="button" onClick={handleClick} className="input-button">5</button>
        <button type="button" onClick={handleClick} className="input-button">6</button>
        <button type="button" onClick={handleClick} className="input-button background-orange">-</button>
        <button type="button" onClick={handleClick} className="input-button">1</button>
        <button type="button" onClick={handleClick} className="input-button">2</button>
        <button type="button" onClick={handleClick} className="input-button">3</button>
        <button type="button" onClick={handleClick} className="input-button background-orange">+</button>
        <button type="button" onClick={handleClick} className="input-button two-space-width">.</button>
        <button type="button" onClick={handleClick} className="input-button">0</button>
        <button type="button" onClick={handleClick} className="input-button background-orange">=</button>
      </div>
    </div>
  );
};

export default MyCalculator;
