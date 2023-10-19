import { useState, createContext } from 'react';
import Button from "./Button";
import './Calc.css';

const CalcContext = createContext();

function Calculator() {
  const [calc, setCalc] = useState({
    sign: '',
    num: 0,
    res: 0
  });

  const btnValues = [
    ['c', "+/-", "%", "/"],
    ["7", "8", "9", 'x'],
    ["4", "5", "6", '-'],
    ["1", "2", "3", '+'],
    ["0", ".", "="]
  ];

  return (
    <CalcContext.Provider value={{ calc, setCalc }}>
      <div className="wrapper">
        <div className="screen">
          {calc.num || calc.res}
        </div>
        <div className="button-box">
          {btnValues.map((row, rowIndex) => (
            <div key={rowIndex} className="btn-row">
              {row.map((btn, btnIndex) => (
                <Button key={btnIndex} value={btn} calc={calc} setCalc={setCalc} />

              ))}
            </div>
          ))}
        </div>
      </div>
    </CalcContext.Provider>
  );
}

export default Calculator;
