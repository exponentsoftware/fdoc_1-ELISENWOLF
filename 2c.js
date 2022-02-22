const reverseArray = (array) => {
    var reversedArray = [];
    while(i = array.pop()){
        reversedArray.push(i);
    }
    return reversedArray;
}

const placearray = ( array ) => {
    for(let i = 0; i < array.length; i++){
        var temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
    }
}

console.log(reverseArray(["A", "B", "C"]));