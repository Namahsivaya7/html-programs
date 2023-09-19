// function clearScreen() {
//     document.getElementById("result").value = " ";
// }
// function display(value) {
//     document.getElementById("result").value += value;
// }
// function calculate() {
//     var p = document.getElementById("result").value;
//     var q = eval(p);
//     document.getElementById("result").value = q;
// }   

let expr = " ";
const resultEl = document.getElementById("result");

function onclickhandler(event){
    const value = event.target.value;
    expr = expr+value;
    resultEl.value = expr;
    console.log(expr);

}
function onclickhandler(){
    const result = eval(expr);
    resultEl.value = result;
    console.log(result);
}