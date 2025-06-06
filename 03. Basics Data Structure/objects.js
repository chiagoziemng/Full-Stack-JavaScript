// Create object name (car)
const car = {};

// add (type, model, color) as properties
car.type = "Ford";
car.model = "X-com";
car.color = "Black";

// check the type of object
console.log(car.type);
console.log(car["type"]);

// Update the type property to "Toyota"
car.type = "Toyata";

// Add new property wheels
car.wheels = 4;

// log car to the console
console.log(car);
