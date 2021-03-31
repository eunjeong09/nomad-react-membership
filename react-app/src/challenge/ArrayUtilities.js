const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
class ArrayUtilities {
  static addZeros = () => {
    return numbers.map((number) => `${number}0`);
  };

  static moreThanFifty = (addZeros) => {
    return addZeros.filter((addZero) => addZero > 50);
  };

  static removeFirst = (moreThanFifty) => {
    moreThanFifty.shift();
    return moreThanFifty;
  };

  static sumAll = (noFirst) => {
    let sum = 0;
    for (let i = 0; i < noFirst.length; i++) {
      sum += noFirst[i] * 1;
    }
    return sum;
  };

  static divide = (sumAll) => {
    sumAll += "";
    let one = sumAll.substring(0, 1);
    let two = sumAll.substring(1, 2);
    let three = sumAll.substring(2, 3);
    let array = [one, two, three];
    return array;
  };
}

// 정답
/*
class ArrayUtilities {
  static addZeros = arr => arr.map(n => n * 10);
  static moreThanFifty = arr => arr.filter(n => n > 50);
  static removeFirst = arr => {
    const [, ...rest] = arr;
    return rest;
  };
  static sumAll = arr => arr.reduce((a, b) => a + b, 0);
  static divide = payload => `${payload}`.split("");
}

*/

const addZeros = ArrayUtilities.addZeros(numbers);
console.log(addZeros);

const moreThanFifty = ArrayUtilities.moreThanFifty(addZeros);
console.log(moreThanFifty);

const noFirst = ArrayUtilities.removeFirst(moreThanFifty);
console.log(noFirst);

const sumAll = ArrayUtilities.sumAll(noFirst);
console.log(sumAll);

const divided = ArrayUtilities.divide(sumAll);
console.log(divided);
