export default function median(list: list): number | null {
  if (list.length > 0) {
    let sortedList: list = list.sort();
    if (sortedList.length < 2) {
      return sortedList[0];
    } else {
      if (sortedList.length % 2 === 0) {
        return (sortedList[sortedList.length / 2 - 1] + sortedList[sortedList.length / 2]) / 2;
      } else {
        return sortedList[Math.floor(sortedList.length / 2)]
      }
    }
  } else {
    return null
  }
}