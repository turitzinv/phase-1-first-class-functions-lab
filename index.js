// Code your solution in this file!
const returnFirstTwoDrivers = function (array){
    //const array = ['Sally', 'Bob', 'Freddy', 'Claudia'];
    return array.slice(0,2)
}

const returnLastTwoDrivers = function(array){
    //const array = ['Sally', 'Bob', 'Freddy', 'Claudia'];
    return array.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

 function createFareMultiplier(number){
     return function(fare){
        return fare * number
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

let drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']
function selectDifferentDrivers(drivers, selectingDrivers) {
    if (selectingDrivers === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers) 
        } else {
            return returnLastTwoDrivers(drivers);
        }
}