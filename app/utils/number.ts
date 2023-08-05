export function shrinkNumber(num: number) {
  switch (true) {
    case num >= 0 && num < 10000:
      return String(num);
    case num >= 10000:
      return num / 10000 + "w+";
    default:
      return String(num);
  }
}
