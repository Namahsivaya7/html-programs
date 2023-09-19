// for(let i="0"; i<10; i++){
//     let stars=" ";
//     for(let j = 0; j<i+1; j++){
//         stars=stars + "*";
//     }
//     console.log(stars)
// }

let n = 5;
let string = "";
for (let i = 0; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);


