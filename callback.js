// we use a callback function here so that we can print the user that has been logged in.
// Because of the delay, they user variable will not contain anything inside it.
function loginUser(name, password, callback) {
  // mimic server delay 2sec
  setTimeout(() => {
    console.log("We have the data");
    callback({ userName: name });
  }, 2000);
}

console.log("Start");

const user = loginUser("Nathan", 12345, (user) => {
  console.log(user); // waits for the timeout; prints the user
});

console.log(user); // undefined

console.log("End");
