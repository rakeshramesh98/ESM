 //Syntax--const new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])
 export default function concat() {
    const array1 = ['1', '2', 'c'];
    const array2 = ['7', '5', 'f'];
    const array3 = array1.concat(array2);
    console.log("concat ['1', '2', 'c'] & ['7', '5', 'f']")
    console.log(array3);
    console.log("----------------------------------------------------")
    }