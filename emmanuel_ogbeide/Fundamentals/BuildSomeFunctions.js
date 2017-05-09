function runningLogger(){
  console.log("I am running");
}

function multiplyByTen(x){
  return 10*x
}
multiplyByTen(5)
function stringReturnOne(){
  return "hard-coded string 1"
}
function stringReturnTwo(){
  return "hard-coded string 2"
}
function caller (x){
  if (typeof(x) == "function"){
    x()
  }
}
function myDoubleConsoleLog(x, y){
  if (typeof(x) == "function"){
    x()
  }
  if (typeof(y) == "function"){
    y()
  }
}
function caller2(x){
  console.log('starting');
  setTimeout(function(){
    if (typeof(x)=='function'){
      x();
    }
  }, 2000);
  console.log('ending');
  return "interesting";
}
caller2(myDoubleConsoleLog())
