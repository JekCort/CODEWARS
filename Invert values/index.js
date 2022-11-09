// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

function invert(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] === 0){
            newArray.push(-0);
        } else {
            let res = array[i] * -1;
            newArray.push(res);

        }
    }

    return newArray;
}