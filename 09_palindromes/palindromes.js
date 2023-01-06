const palindromes = function (string) {

const lowerCase = string.toLowerCase();
const reversedString = lowerCase
    .split('')
    .reverse()
    .join('')

return (lowerCase === reversedString);


};

// Do not edit below this line
module.exports = palindromes;
