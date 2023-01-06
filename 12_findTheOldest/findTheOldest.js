const findTheOldest = function(array) {
    return array.reduce((oldest, person) => {
        const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        const currentAge = person.yearOfDeath - person.yearOfBirth;

        return oldestAge < currentAge ? person : oldest;
    }
        
        
        
        )
};

function getAge (person) {

}

// Do not edit below this line
module.exports = findTheOldest;
