// Basic: Make a function that can be used anywhere in your file and that when
// invoked will console.log('I am running!'); Give it the name runningLogger.
function runningLogger(){
  console.log('I am running!');
}

// Basic: Make a function that is callable, has one parameter and multiplies the
// value of the parameter by 10 before returning the result. Give it the name
// multiplyByTen. Invoke it, passing it the argument 5.
function multiplyByTen(parameter){
  return parameter * 10;
}

// Basic: Write two functions (stringReturnOne and stringReturnTwo) that each
// return a different hard-coded string
function stringReturnOne(){
  return 'This is the first hard-coded string.'
}
function stringReturnTwo(){
  return 'This is the second hard-coded string.'
}

// Medium: Write a function named caller that has one parameter. If the argument
// provided to caller is a function (typeof may be useful), invoke the argument.
// Nothing is returned.
function caller(param){
  if (typeof param === 'function'){
    param();
  }
}

// Medium: Write a function named myDoubleConsoleLog that has two parameters. if
// the arguments passed to the function are functions, console.log the value that
// each function returns when invoked.
function myDoubleConsoleLog(param1, param2){
  if (typeof param1 === 'function' && typeof param2 === 'function'){
    console.log(param1());
    console.log(param2());
  }
}

// Hard: Write a function named caller2 that has one parameter. Have it console.log
// the string 'starting', wait 2 seconds, and then invokes the argument if the
// argument is a function. (setTimeout may be useful for this one.) The function
// should then console.log ‘ending?’ and return “interesting”. Invoke this function
// by passing it myDoubleConsoleLog.
function caller2(par){
  console.log('starting');
  setTimeout(function(){
    if (typeof par === 'function'){
      par();
    }
    console.log('ending?');
    console.log('interesting');
  }, 2000);
}


runningLogger();
console.log(multiplyByTen(21));
console.log(stringReturnOne());
console.log(stringReturnTwo());
console.log(caller());
console.log(myDoubleConsoleLog());
caller2(myDoubleConsoleLog());
