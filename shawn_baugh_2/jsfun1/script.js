var x = [3,5,'Dojo','rocks','Michael','Sensei']
for(var i = 0;  i < x.length; i++){
    console.log(x[i])
}
x.push(100);
x.push(['hello','world','javascript is fun'])
console.log(x)
for(var i = 0; i < 501; i++){
    i = i + i
}
console.log(i)
// minimum
function minimum() {
    var y = [1, 5, 90, 25, -3, 0]
    var min = y[0]
    for(var i = 1; i < y.length; i++){
        if(min > y[i]){
            min = y[i]
        }
    } console.log(min)
}
minimum()
// average
function avg() {
    var y = [1, 5, 90, 25, -3, 0]
    for(var i = 1; i < y.length; i++){
        i = i + i
    } console.log(i/y.length)
}
avg()

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}
for(var key in newNinja){
    console.log(key, newNinja[key])
}
