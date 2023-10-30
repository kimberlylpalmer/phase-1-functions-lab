// Code your solution in this file!
const distanceFromHqInBlocks = function (pickUp) {
    // let pickup;
    return Math.abs(pickUp - 42);
}

const distanceFromHqInFeet = function (pickUp) {
    // let pickup;
    return Math.abs(pickUp - 42) * 264;
}

const distanceTravelledInFeet = function (pickup, dropoff) {
    return Math.abs(pickup - dropoff) *264
}
// return distanceTravelledInFeet

const calculatesFarePrice = function (start, destination) {
    const distanceInFeet = Math.abs(start-destination) *264;
    if (distanceInFeet <= 400) {
        return  0
    }else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * .02
    }else if (distanceInFeet > 2000 && distanceInFeet <2500) {
        return 25
    }else {
        return 'cannot travel that far'
    }
}
// calculatesFarePrice(43, 44)
