const sumAll = function(numberOne, numberTwo) {
let total = 0

 if (numberOne > numberTwo) {
    [numberOne, numberTwo] = [numberTwo, numberOne];
}

if ((typeof numberOne != 'number') || (typeof numberTwo != 'number')) {
    return 'ERROR';
}

for (let i = numberOne; i <= numberTwo; i++){
    total += i;
}
return total;

};

// Do not edit below this line
module.exports = sumAll; 
