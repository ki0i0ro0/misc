import { RomanToDECIMAL } from "../src/models/main";

describe("RomanToDecimal", () => {
  it("Iは1に置き換え", () => {
    expect(new RomanToDECIMAL().print("I")).toEqual(1);
  });
  it("IIは2に置き換え", () => {
    expect(new RomanToDECIMAL().print("II")).toEqual(2);
  });
  it("Vは5に置き換え", () => {
    expect(new RomanToDECIMAL().print("V")).toEqual(5);
  });
  it("VIは6に置き換え", () => {
    expect(new RomanToDECIMAL().print("VI")).toEqual(6);
  });
  it("IVは4に置き換え", () => {
    expect(new RomanToDECIMAL().print("IV")).toEqual(4);
  });
  it("Xは10に置き換え", () => {
    expect(new RomanToDECIMAL().print("X")).toEqual(10);
  });
  it("Lは50に置き換え", () => {
    expect(new RomanToDECIMAL().print("L")).toEqual(50);
  });
  it("Cは100に置き換え", () => {
    expect(new RomanToDECIMAL().print("C")).toEqual(100);
  });
  it("Mは1000に置き換え", () => {
    expect(new RomanToDECIMAL().print("M")).toEqual(1000);
  });
  it("MMVIは2006に置き換え", () => {
    expect(new RomanToDECIMAL().print("MMVI")).toEqual(2006);
  });
  it("MCMXLIVは1944に置き換え", () => {
    expect(new RomanToDECIMAL().print("MCMXLIV")).toEqual(1944);
  });
});
