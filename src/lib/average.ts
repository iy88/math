import sum from "./tools/sum";
export default function average(list: list, weight?: list): number | null {
  if (list.length >= 2) {
    if (weight && weight.length === list.length) {
      return sum(list.map((number, index) => number * weight[index])) / sum(weight);
    } else {
      return sum(list) / list.length;
    }
  } else if (list.length < 1) {
    return null
  } else {
    return list[0];
  }
}