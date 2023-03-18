import { Counter } from "../src/models/fizzbuzz";

describe("FizzBuzz", () => {
  it("渡された数が3で割り切れる時、Fizzを返す", () => {
    expect(new Counter().print(3)).toEqual("Fizz");
  });
});
