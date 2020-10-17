export default function sum(list: list): number {
  if (list.length < 1) {
    return 0;
  } else if (list.length < 2) {
    return list[0];
  } else {
    let res = 0;
    list.forEach(number => {
      res += number
    });
    return res;
  }
}