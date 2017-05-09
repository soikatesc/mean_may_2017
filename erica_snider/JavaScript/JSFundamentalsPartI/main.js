var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
for (index in x) {
  console.log(x[index]);
}

x.push(100);
console.log(x);

x += ["hello", "world", "JavaScript is Fun"];
console.log(x);

var sum = 0;
for (var i = 1; i <= 500; i++) {
  sum += i;
}
console.log(sum);

var arr = [1, 5, 90, 25, -3, 0]
var sum2 = 0;
var min = arr[0];
for (var i = 0; i<arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
  sum2 += arr[i];
}
console.log(min);
console.log(sum2/arr.length);


var newNinja = {
 name: 'Erica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}
for (key in newNinja) {
  console.log(key);
  console.log(newNinja[key]);
}
