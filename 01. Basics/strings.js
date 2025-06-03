// Create variable name (favActorFirstName) & store your fav Actor name
let favActorFirstName = "James";

// Create variable name (favActorLastName) & store the last name of (FA)
let favActorLastName = "Leonard";

// Create variable name (fullname) & concatenate (favActorFirstName, favActorLastName)
let fullname = favActorFirstName + " " + favActorLastName;

// Create variable name (uppercase) & CAPITALIZE your fav actor name
let uppercase = fullname.toUpperCase();

// Create a variable name (message) & store `My favorite Actor Is (favActorName) & say something about you fav actor' name should be in UPPERCASE.
let message = `My favorite Actor Is ${uppercase} and he is good.`;

// Now append this message to the (message variable) `his best show is silicon valley`
message += ` his best tv show is silicon valley`;

console.log(message);
