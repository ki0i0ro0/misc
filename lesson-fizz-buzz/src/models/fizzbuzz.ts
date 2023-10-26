export class Counter {
  print(num: number) {
    switch (0) {
      case (num % 5) + (num % 3):
        return "FizzBuzz";
      case num % 3:
        return "Fizz";
      case num % 5:
        return "Buzz";
      default:
        return String(num);
    }
  }
}
