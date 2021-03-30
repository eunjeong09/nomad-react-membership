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
