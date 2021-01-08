import Constants from "../tools/constants";
const constants = new Constants();
export default function add(x: number | string, y: number | string): string {
  // Convert number to string
  if (x < 10 && y < 10) {
    return basicNumberAdditionResult(x, y).toString();
  }
  let sx = x.toString().split('');
  let sy = y.toString().split('');
  sx.length < sy.length ? [sx, sy] = [sy, sx] : [sy, sx] = [sy, sx];
  let result = [];
  for (let i = 0; i < Math.max(sx.length + 1, sy.length + 1); i++) {
    result.push(0);
  }
  let diff = sx.length - sy.length;
  for (let i = 0; i < diff; i++) {
    sy.unshift('0');
  }
  for (let i = sx.length - 1; i > -1; i--) {
    // check is there a number in this digit
    if (sy[i] !== '0') {
      if (checkAddResMoreThanNine(sx[i], sy[i])) {
        let temp = basicNumberAdditionResult(result[i + 1], getUnitsOfTheAdditionResult(sx[i], sy[i]));
        if (temp < 10) {
          result[i + 1] = temp;
        } else {
          result[i + 1] = temp % 10;
          result[i] = Math.floor(temp / 10);
        }
        result[i] = getTensOfTheAdditionResult(sx[i], sy[i]);
      } else {
        result[i + 1] += basicNumberAdditionResult(sx[i], sy[i]);
      }
    } else {
      if (checkAddResMoreThanNine(sx[i], result[i + 1])) {
        let temp = basicNumberAdditionResult(result[i + 1], getUnitsOfTheAdditionResult(sx[i], sy[i]));
        if (temp < 10) {
          result[i + 1] = temp;
        } else {
          result[i + 1] = temp % 10;
          result[i] = Math.floor(temp / 10);
        }
        result[i] = getTensOfTheAdditionResult(sx[i], result[i]);
      } else {
        result[i + 1] = basicNumberAdditionResult(sx[i], result[i + 1]);
      }
    }
  }
  return result.join('');
}

function checkAddResMoreThanNine(x: string | number, y: string | number): boolean {
  return constants.add[`${x}${y}`].isMoreThanNine;
}

function basicNumberAdditionResult(x: string | number, y: string | number): number {
  return constants.add[`${x}${y}`].res;
}

function getTensOfTheAdditionResult(x: string | number, y: string | number): number {
  return constants.add[`${x}${y}`].tens;
}

function getUnitsOfTheAdditionResult(x: string | number, y: string | number): number {
  return constants.add[`${x}${y}`].units;
}
