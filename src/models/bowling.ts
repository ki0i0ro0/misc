export class Bowling {
  calc(value: string) {
    let sum = 0;
    value.split("").forEach((value, index, array) => {
      if (!isNaN(value as any)) {
        if (array.length - 1 == index) return;
        sum += Number(value);
      }

      if (value == "/") {
        sum =
          sum + -1 * Number(array[index - 1]) + 10 + Number(array[index + 1]);
      }

      if (value == "X") {
        sum += 10;
      }

      if (value == "X" && index > 1) {
        if (array.length - 1 == index) return;
        sum += 20;
      }
    });
    return sum;
  }
}
