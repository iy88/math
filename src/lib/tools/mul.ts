import add from "./add";
for(let i = 0; i < 1000; i++){
  for(let j = 0; j < 1000;j++){
    console.log(add(i,j) === (i + j).toString());
  }
}