import { Counter } from "./fizzbuzz";

describe("FizzBuzz", () => {
  it("渡された数が3で割り切れる時、Fizzを返す", () => {
    expect(new Counter().print(3)).toEqual("Fizz");
    expect(new Counter().print(6)).toEqual("Fizz");
  });
  it("渡された数が5で割り切れる時、Buzzを返す", () => {
    expect(new Counter().print(5)).toEqual("Buzz");
    expect(new Counter().print(20)).toEqual("Buzz");
  });
  it("渡された数が 3 でも 5 でも割り切れる時、FizzBuzz を返す", () => {
    expect(new Counter().print(15)).toEqual("FizzBuzz");
    expect(new Counter().print(30)).toEqual("FizzBuzz");
  });
});
