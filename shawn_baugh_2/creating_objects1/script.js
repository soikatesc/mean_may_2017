function VehicleConstructor(name, num_of_wheels, num_of_passengers){
    var vehicle = {}

    vehicle.name =  name;
    vehicle.num_of_wheels = num_of_wheels;
    vehicle.num_of_passengers = num_of_passengers;

    vehicle.makeNoise = function() {
        console.log("I'm makeing noise!");
    }
    return vehicle
}
// bike
 var Bike = VehicleConstructor('mongoose', 2, 1);
 Bike.makeNoise = function() {
     console.log('Ring ring in the thing thing')
 }
 Bike.makeNoise();
 // sedan
 var Sedan = VehicleConstructor('q50', 4, 5);
 Sedan.makeNoise = function() {
     console.log('Honk honk in the thong thong')
 }
 Sedan.makeNoise();
 // bus
var Bus = VehicleConstructor('Tour Bus', 10, 20);
for (var i = 0; i < Bus.num_of_passengers; i++){
    Bus.num_of_passengers + i
}
Bus.makeNoise();
console.log(Bus.num_of_passengers);
