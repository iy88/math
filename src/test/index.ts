import math from "../index";
console.log('start tests...');
console.assert(math.median([1, 2, 3]) === 2, "check median");
console.assert(math.average([1, 2, 3], [3, 2, 1]) === 10 / 6,"check weight average");
console.assert(math.mode([2,4,4,3,3,3])!.toString() === [3].toString(),"check mode");
console.assert(math.variance([1,2]) === (Math.pow(1-1.5,2)+Math.pow(2-1.5,2))/2,"check variance");
console.assert(math.standardDeviation([1,2]) === Math.sqrt((Math.pow(1-1.5,2)+Math.pow(2-1.5,2))/2),"check standard deviation")
console.assert(Number(math.tools.add(999999999,999999999)) === 999999999 + 999999999,"check addition");
console.log('all done');