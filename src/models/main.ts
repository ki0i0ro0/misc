export class RomanToDECIMAL {
  print(romans: string) {
    let retNum = 0;
    let preNum = 0;
    romans.split("").forEach((value, index, array) => {
      let currentNum = 0;
      switch (value) {
        case "I":
          currentNum = 1;
          break;
        case "V":
          currentNum = 5;
          break;
        case "X":
          currentNum = 10;
          break;
        case "L":
          currentNum = 50;
          break;
        case "C":
          currentNum = 100;
          break;
        case "D":
          currentNum = 500;
          break;
        case "M":
          currentNum = 1000;
          break;
        default:
          currentNum = 0;
          break;
      }
      if (preNum < currentNum) {
        const multipleNum = this.checkBeforeMinus(array, index) + 2;
        retNum = retNum + currentNum - preNum * multipleNum;
      } else {
        retNum += currentNum;
      }

      preNum = currentNum;
    });
    return retNum;
  }

  private checkBeforeMinus(array: string[], index: number): number {
    const checkChar = array[index - 1];
    if (index - 2 > -1) {
      if (array[index - 2] === checkChar) {
        return 1 + this.checkBeforeMinus(array, index - 1);
      }
    }
    return 0;
  }
}
