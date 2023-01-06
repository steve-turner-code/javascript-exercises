const fibonacci = function(index) {
    let previous = 0;
    let current = 1;


    for (let i = 1; i<index; i++) {
        let currentStore = current
        current += previous;
        previous = currentStore;
    }
return current;
};

// Do not edit below this line
module.exports = fibonacci;
