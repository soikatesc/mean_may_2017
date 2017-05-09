function VehicleConstructor(name, numberofwheels, numberofpassengers){
  vehicle = {}
  vehicle.name = name,
  vehicle.number_of_wheels = numberofwheels,
  vehicle.number_of_passengers = numberofpassengers,
  vehicle.make_noise = function(){console.log("Making Noise")}
  return vehicle
}

var Bike = VehicleConstructor("Bike", 2, 2)
Bike.make_noise = function(){console.log("ring ring!")}
var Sedan = VehicleConstructor("Sedan", 4, 5)
Sedan.make_noise = function(){console.log("Honk Honk!")}
var Bus = VehicleConstructor("Bus", 4, 14)
Bus.pickupPassengers = function(newPassengers){ Bus.number_of_passengers += newPassengers; }
