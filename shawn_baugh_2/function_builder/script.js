// 1
function runningLogger() {
    console.log("I'm running!");
}
runningLogger();

// 2
function multiplyByTen(x) {
    x = x * 10
    console.log(x);
}
multiplyByTen(2200);

// 3
function stringReturnOne() {
    x = "I'm hard coded ;)"
    console.log(x);
}
stringReturnOne()
function stringReturnTwo() {
    y = "I'm hard coded too ;D"
    console.log(y);
}
stringReturnTwo();

// 4
function caller(x) {
    if ( x = typeof function(){} ) {
        console.log('running a function???')
    } else{
    }
}
caller();

// 5
function myDOubleConsoleLog(x,y) {
    if(typeof x === 'function' || typeof y === 'function'){
        console.log(x);
        console.log(y);
    } else{
    }
}
myDOubleConsoleLog();

6
function caller2(x) {
    console.log('Starting');
    if(typeof x === 'function'){
        setTimeout(function(){
            x();
        }, 2000)
        console.log('ending?')
    }return ('Interesting #Authmanvoice')
}
caller2(myDOubleConsoleLog(stringReturnOne(), caller()));


// function test(){
//     console.log('i started')
//     setTimeout(function(){
//         console.log('i waited 2 seconds')
//     }, 2000)
// }
// test()
