var arr = [];
while(arr.length < 8){
    var number = Math.floor(Math.random() * 9) + 1;
    if(arr.indexOf(number) === -1) arr.push(number);
}
console.log(arr);