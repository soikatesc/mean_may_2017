function VehicleConstructor(name, num_of_wheels, num_of_passengers, speed){
    var Distance_Traveled = 0
    var updateDistanceTraveled = function(){
        for(var i = 0; i < speed; i++){
            Distance_Traveled++
        }
    }

    this.name =  name;
    this.num_of_wheels = num_of_wheels;
    this.num_of_passengers = num_of_passengers;
    this.makeNoise = function() {
        console.log("I'm makeing noise!");
    }
    this.move = function () {
        updateDistanceTraveled();
        // console.log(this);
        this.makeNoise();
    }
    this.checkMiles = function () {
        console.log(Distance_Traveled);
    }
    this.getDistanceTraveled =  function() {
        return Distance_Traveled
    }
}
// bike
var Bike = new VehicleConstructor('mongoose', 2, 1, 10);
Bike.makeNoise = function() {
    console.log('Ring ring in the thing thing')
}
Bike.makeNoise();
Bike.move();
console.log(Bike.getDistanceTraveled());
// sedan
var Sedan = new VehicleConstructor('q50', 4, 5);
Sedan.makeNoise = function() {
    console.log('Honk honk in the thong thong')
}
Sedan.makeNoise();
// bus
var Bus = new VehicleConstructor('Tour Bus', 10, 20);
for (var i = 0; i < Bus.num_of_passengers; i++){
   Bus.num_of_passengers + i
}
Bus.makeNoise();
console.log('Ho Ho in the...');
console.log(Bus.num_of_passengers);
