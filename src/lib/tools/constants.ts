export default class Constants {
  public add: { [key: string]: { res: number, units: number, tens: number, isMoreThanNine: boolean } } = {};
  constructor() {
    for (let i = 0; i < 11; i++) {
      for (let j = 0; j < 11; j++) {
        let res = i + j;
        let sres = res.toString()
        this.add[`${i}${j}`] = { res: res, units: Number(sres[1]) ? Number(sres[1]) : Number(sres[0]), tens: Number(sres[0]), isMoreThanNine: res > 9 };
      }
    }
  }
}