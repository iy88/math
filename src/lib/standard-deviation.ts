import variance from "./variance";
export default function standardDeviation(list:list):number{
  if(list.length > 1){
    return Math.sqrt(variance(list));
  }else{
    return 0;
  }
}