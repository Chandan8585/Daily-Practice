const str = "madam";
/**
 * 1st Method
*/

/** 
console.log(str.split(" ").join(""));
const arr = str.split("").reverse().join("");
if(str===arr){
    console.log("palindrome");
}
else{
    console.log("not a palindrome");
}

**/







/**
 * 
 * 2nd Method
 */

let reverseStr = "";
for(let i=str.length-1; i>=0 ; i--){
    reverseStr += str[i];
}
if(str===reverseStr){
    console.log("Palindrome");
}
else{
    console.log("not a palindrome");
}