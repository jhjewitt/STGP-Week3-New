for(let i = 1; i <10 ; i++) {
    console.log(i);
}

let x = 2;
let loopCounter = 0;
while(x < 10000){
    loopCounter++;
    x**=2;
    console.log('X = ' + x + ' Loop Counter = ' + loopCounter);
}