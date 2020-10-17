import average from "./average";
import sum from "./tools/sum";
export default function variance(list:list):number{
  if(list.length > 1){
    return sum(list.map(number=>Math.pow(number - average(list)!,2))) / list.length;
  }else{
    return 0;
  }
}