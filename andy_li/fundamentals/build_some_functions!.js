function runningLogger(){
  console.log("I am running!");
}

function multiplyByTen(val){
  return val * 10;
}

function stringReturnOne(){
  return "string 1";
}

function stringReturnTwo(){
  return "string 2";
}

function caller(func){
  if (typeof(func) == "function"){
    return func();
  }
}

function myDoubleConsoleLog(func1, func2){
  if (typeof(func1) == "function" && typeof(func2) == "function"){
    console.log(func1());
    console.log(func2());
  }
}

function caller2(func){
  console.log("starting");
  if (typeof(func) == "function"){
    setTimeout(function(){
      func(stringReturnOne, stringReturnTwo)
    }, 2000);
    console.log("ending?");
    return "interesting";
  }
}

caller2(myDoubleConsoleLog);
