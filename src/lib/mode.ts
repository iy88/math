import unique from "./tools/unique";
interface xvPair {
  n: number,
  f: number
}
export default function mode(list: list): list | null {
  if (list.length >= 2) {
    let uniqueList: list = unique(list);
    let valueList: list = uniqueList.map(number => list.join(' ').match(new RegExp(number.toString(), 'g'))!.length).map(v => Number(v));
    return valueList.filter(v => v === Math.max(...valueList)).map(v => Number(uniqueList[valueList.indexOf(v)]));
  } else if (list.length === 1) {
    return [list[0]];
  } else {
    return null;
  }
}