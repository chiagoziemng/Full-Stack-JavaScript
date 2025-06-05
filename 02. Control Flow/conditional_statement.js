// Create variable name (password) store nothing
let password;

// if password is equal to 8 print "Welcome"
if (password == 8) {
  console.log("Welcome");
}

// if password is less than or equal to 8 print "Password is too short"
else if (password <= 8) {
  console.log("Password is too short");
}

// if password is greater than or equal to 8 print "Too Long Password" & "Password should be 8 characters"
else if (password >= 8) {
  console.log("Too Long Password");
  console.log("Password should be 8 characters");
}

//  if all fails print "Please provide a password."
else {
  console.log("Please provide a password.");
}
