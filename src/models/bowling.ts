export class Bowling {
  calc(value: string) {
    let sum = 0;
    value.split("").forEach((value) => {
      if (!isNaN(value as any)) {
        sum += Number(value);
      }
    });
    return sum;
  }
}
