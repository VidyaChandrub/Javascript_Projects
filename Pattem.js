//I have a created a function which accepts string as a parameter .Inside a function i have declared a variable called to result 
//store the result and declared a temproary variable and set it to true, after that am iterating throug the string using for loop
// and am a getting each character through string prediefined method and then am checking whether a char is equal a space or not 
//if it is not equal am again taking if condition am checking my temp variable if its true am making char as UPPER case and adding to result and else making a Lower case and adding tp result .
//toggling temp variable for each char 
//if it is equal am adding space to result string
//am taking user input using promt
//calling a function with user input.


function makeDancing(str) {   
    let result = '';
    let upperCase = true; 
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);   
        if (char !== ' ') {
            if (upperCase) {
                result += char.toUpperCase(); 
            } else {
                result += char.toLowerCase(); 
            }
            upperCase = !upperCase;  
        } else {
            result += ' '; 
        }
    }
    return result;
}


const inputString = prompt("Enter a sentence: ");
// const inputString = "This is Dancing senTence";
const dancingResult = makeDancing(inputString);
console.log("Original sentence:", inputString);
console.log("Dancing sentence:", dancingResult);
