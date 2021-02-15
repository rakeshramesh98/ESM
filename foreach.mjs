// Syntax
// arr.forEach(callback(currentValue[, index[, array]]) {
//   // execute something
// }[, thisArg]);
export default function forEach() {
    console.log("array is ['2', '5', '1']")
    const array1 = ['2', '5', '1'];
    
    array1.forEach(element => console.log(element));
    console.log("----------------------------------------------------")
    }