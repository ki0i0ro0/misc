import { Bowling } from "./bowling";

describe("", () => {
  it("通常", () => {
    expect(new Bowling().calc("9-9-9-9-9-9-9-9-9-9-")).toEqual(90);
  });
  it("通常2", () => {
    expect(new Bowling().calc("9-9-9-9-9-9-9-9-9-8-")).toEqual(89);
  });
  it("スペア", () => {
    expect(new Bowling().calc("5/5/5/5/5/5/5/5/5/5/5")).toEqual(150);
  });
  it("ストライク", () => {
    expect(new Bowling().calc("XXXXXXXXXXXX")).toEqual(300);
  });
});
