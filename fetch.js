// fetch(url, options)
// to post a json data to a server, set the correct header(application/json), stringify the body
fetch("https://reqres.in/api/users", {
  method: "POST", // HTTP methods
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "User 1",
  }),
}) // fetch is a promise based (can use async await, then, catch)
  .then((res) => {
    if (res.ok) {
      console.log("Successfull");
      return res.json(); // access body}
    } else {
      console.log("not Successfull");
    }
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("ERROR"));
