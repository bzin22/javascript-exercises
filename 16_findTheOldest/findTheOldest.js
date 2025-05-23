const findTheOldest = function(people) {
    return people.reduce((age, person) => {
        if (age.yearOfDeath == undefined){
            age.yearOfDeath = new Date().getFullYear();
        }
        if (person.yearOfDeath == undefined){
            person.yearOfDeath = new Date().getFullYear();
        }
        if (person.yearOfDeath - person.yearOfBirth > age.yearOfDeath - age.yearOfBirth){
            age = person;
        }
        return age
    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;