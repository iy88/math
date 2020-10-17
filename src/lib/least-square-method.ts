import average from "./average";
interface res {
  k: number | null
  b: number | null
}
export default function leastSquareMethod(xyPair: xyList): res {
  if (xyPair.length >= 2) {
    let xs: list = [], ys: list = [], xys: list = [], xxs: list = [], averagedX: number, averagedY: number, averagedXY: number, averagedXX: number, k: number;
    xyPair.forEach(xy => {
      xs.push(xy.x);
      ys.push(xy.y);
      xys.push(xy.x * xy.y);
      xxs.push(xy.x * xy.x);
    });
    averagedX = average(xs)!;
    averagedY = average(ys)!;
    averagedXY = average(xys)!;
    averagedXX = average(xxs)!;
    k = (averagedXY - averagedX * averagedY) / (averagedXX - averagedX * averagedX);
    return {
      k,
      b: averagedY - averagedX * k
    }
  } else {
    return {
      k: null,
      b: null
    }
  }
}