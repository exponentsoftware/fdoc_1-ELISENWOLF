const checkUniqueness = arr => {
    var value = true;
    for( const element of arr) {
        if(arr.indexOf(element) !== arr.lastIndexOf(element)){
            value = false;
            break;
        }
    }
    return value
}
const arrOne = [1, 4, 6, 2, 1];
console.log(checkUniqueness(arrOne));

const arrTwo = [1, 4, 6, 2, 3]
console.log(checkUniqueness(arrTwo));
