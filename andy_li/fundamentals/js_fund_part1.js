var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];

for (var i = 0; i < x.length; i++) {
  console.log(x[i]);
}

x.push(100);

var new_arr1 = ["hello", "world", "JavaScript is Fun"];
console.log(x.concat(new_arr1));

sum1 = 0;
for (var i = 1; i <= 500; i++) {
  sum1 += i;
}

console.log(sum1);

var new_arr2 = [1, 5, 90, 25, -3, 0], min = new_arr2[0];
for (var i = 0; i < new_arr2.length; i++) {
  if (new_arr2[i] < min){
    min = new_arr2[i];
  }
}
console.log(min);

sum2 = 0
for (var j = 0; j < new_arr2.length; j++) {
  sum2 += new_arr2[j];
}
console.log(sum2 / new_arr2.length);

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for (var key in newNinja) {
  console.log(key + ": " + newNinja[key]);
}
