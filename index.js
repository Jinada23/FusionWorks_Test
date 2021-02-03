const arr = [
  1,
  0,
  10,
  "0",
  "1",
  "",
  NaN,
  false,
  null,
  undefined,
  "false",
  "true",
];

for (el in arr){
    if(arr[el]){
        console.log(arr[el]);
    }
}

