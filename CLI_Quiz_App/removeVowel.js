/**
 * Remove Vowels From the String
 * 
*/

const Str = "The quick brown fox jumps over the lazy dog";
let Vowels = ["a","e","i", "o", "u"];
let result = "";
function removeVowels(Str){
    for(let char of Str){
        if(!Vowels.includes(char)){
            result+= char;
        }
    
    }
    return result
}

console.log(removeVowels(Str));
