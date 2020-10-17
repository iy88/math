export default function unique(list: list): list {
  if (list.length > 1) {
    return [...(new Set(list))];
  } else {
    return list;
  }
}