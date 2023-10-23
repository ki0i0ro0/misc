export class Bowling {
  calc(value: string) {
    let sum = 0;
    value.split("").forEach((value, index, array) => {
      const num = this.convertNumber(value, index, array);
      sum += num;

      if (0 < index && index < array.length - 1 && array[index - 1] == "/") {
        sum += num;
      }

      if (1 < index && index < array.length - 1 && array[index - 2] == "X") {
        const firstNum = this.convertNumber(array[index - 1], index - 1, array);
        const secondNum = this.convertNumber(
          array[index - 2],
          index - 2,
          array
        );
        sum += firstNum + secondNum;
      }
    });
    return sum;
  }

  convertNumber(value: string, index: number, array: string[]) {
    let num = value == "X" ? 10 : value;
    if (value == "/") {
      num = 10 - Number(array[index - 1]);
    }
    if (value == "-") {
      num = 0;
    } else {
      num = Number(num);
    }
    return num;
  }
}
