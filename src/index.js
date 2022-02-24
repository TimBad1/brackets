module.exports = function check(str, bracketsConfig) {

// function check(str, bracketsConfig) {
  
  let OPEN_BRACKETS = [];
  let BRACKETS_PAIR = {};

  bracketsConfig.forEach((item, index) => {
    OPEN_BRACKETS[index] = item[0];
    BRACKETS_PAIR[item[1]] = item[0];
  })

  console.log(OPEN_BRACKETS);
  console.log(BRACKETS_PAIR);

  function isBracketsOk(str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
      let currentSymbol = str[i];

      let topElement = stack[stack.length - 1];

      if (stack.length > 0 
        && Object.keys(BRACKETS_PAIR).includes(currentSymbol) 
        && BRACKETS_PAIR[currentSymbol] === topElement) {
          stack.pop();
      } else if (OPEN_BRACKETS.includes(currentSymbol)) {
        stack.push(currentSymbol);
      } else {
        if (stack.length === 0) {
          return false;
        }

        

        if (BRACKETS_PAIR[currentSymbol] === topElement) {
          stack.pop();
        } else {
          return false;
        }
      }
    }

    return stack.length === 0;
  } 

  // console.log(46);
  return isBracketsOk(str);
}

const config5 = [['(', ')'], ['|', '|']];

// check('|()|(||)||', config5)