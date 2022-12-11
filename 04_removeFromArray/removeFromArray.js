const removeFromArray = function(array, ...args) {

for (let i = 0; i < args.length; i++){
        let removeItemIndex = array.indexOf(args[i]);
        array.splice(removeItemIndex, 1);
    }
return array;

};

module.exports = removeFromArray;

//Save the array to be searched
//Loop through every item in the arguments array
//Find the index of the item to be deleted
