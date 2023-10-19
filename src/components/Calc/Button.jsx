const getStyleName = (name) => {
  const className = {
    '=': 'equals',
    'x': 'opt',
    '/': 'opt',
    '+': 'opt',
    '-': 'opt'
  }
  return className[name]
}

const Button = ({value, calc, setCalc}) => {
  
  // User click dot
  const dotClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + '.' : calc.num
    })
  }

  // User click 'c'
  const resetClick = () => {
    setCalc({
      sign: '',
      num: 0,
      res: 0
    })
  }

  // User click number
  const handleClickNumber = () => {
    const numberString = value.toString();
    let numberValue;
    if(numberString === '0' && calc.num === 0) {
      numberValue = '0';
    } else {
      numberValue = Number(calc.num + numberString)
    }

    setCalc({
      ...calc,
      num: numberValue
    })
  }

  // User click operation sign
  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0
    })
  }

  // User click equals
  const equalsClick = () => {
    if (calc.res && calc.num ) {
      const math = (num1, num2, sign) => {
        const result = {
          '+': (num1, num2) => num1 + num2,
          '-': (num1, num2) => num1 - num2,
          'x': (num1, num2) => num1 * num2,
          '/': (num1, num2) => num1 / num2
        }
        return result[sign](num1, num2)
      }
      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: '',
        num: 0
      })
    }
  }

  // User click percent
  const percentClick = () => {
    setCalc({
      num: calc.num / 100,
      res: (calc.res / 100),
      sign: ''
    })
  }

  // User click invert
  const invertClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: ''
    })
  }

  
  const handleBtnClick = () => {
    const results = {
      '.': dotClick,
      'c': resetClick,
      '/': signClick,
      'x': signClick,
      '+': signClick,
      '-': signClick,
      '=': equalsClick,
      '%': percentClick,
      '+/-': invertClick
    }
    if (results[value]){
      return results[value]()
    } else {
      return handleClickNumber()
    }
  }

  return (
    <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
  )
}

export default Button;