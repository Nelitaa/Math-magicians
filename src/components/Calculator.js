import React from 'react';
import calculate from '../logic/calculate';

class MyCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-container">
        <div className="calculator-display">
          <span className="calculator-result">0</span>
        </div>
        <div className="calculator-keypad">
          <button type="button" className="input-button">AC</button>
          <button type="button" className="input-button">+/-</button>
          <button type="button" className="input-button">%</button>
          <button type="button" className="input-button background-orange">/</button>
          <button type="button" className="input-button">7</button>
          <button type="button" className="input-button">8</button>
          <button type="button" className="input-button">9</button>
          <button type="button" className="input-button background-orange">x</button>
          <button type="button" className="input-button">4</button>
          <button type="button" className="input-button">5</button>
          <button type="button" className="input-button">6</button>
          <button type="button" className="input-button background-orange">-</button>
          <button type="button" className="input-button">1</button>
          <button type="button" className="input-button">2</button>
          <button type="button" className="input-button">3</button>
          <button type="button" className="input-button background-orange">+</button>
          <button type="button" className="input-button two-space-width">.</button>
          <button type="button" className="input-button">0</button>
          <button type="button" className="input-button background-orange">=</button>
        </div>
      </div>
    );
  }
}

export default MyCalculator;
