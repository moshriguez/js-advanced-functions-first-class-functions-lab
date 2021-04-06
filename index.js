const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(arr) {
    return arr.slice(0, 2)
}

const returnLastTwoDrivers = function(arr) {
    return arr.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const fareDoubler = fare => fare * 2;
const fareTripler = fare => fare * 3;
const fareQuadrupler = fare => fare * 4;
const fareQuintupler = fare => fare * 5;

function createFareMultiplier(num) {
    switch (num) {
        case 2:
            return fareDoubler;
        case 3:
            return fareTripler;
        case 4:
            return fareQuadrupler;
        case 5:
            return fareQuintupler;
    }
}

function selectDifferentDrivers(arr, func) {
    return func(arr);
}