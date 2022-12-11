const reverseString = function(stringInput) {
    let stringArray = stringInput.split('');
    let returnString = '';
    for (let i = stringArray.length - 1; i >= 0; i--) {
        returnString += stringArray[i];
    }
    return returnString;

};

// Do not edit below this line
module.exports = reverseString;



// Convert the string to an array
// Create a return string
// Count backwards from array.length, adding each array element to a new string
// return the new string