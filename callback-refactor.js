/*
refactoring the use of callback with promises also using async await
*/
console.log("start");

function loginUser(name, passowrd) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("user logged in");
      resolve({ userName: name });
    }, 3000);
  });
}

function getUserVideos(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("get videos");
      resolve(["video1", "video2", "video3"]);
    }, 2000);
  });
}

function getVideoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("title of video");
    }, 2000);
  });
}

// async await
// use try catch to get the error (reject)
async function displayUser() {
  try {
    const loggedUser = await loginUser("vin", 12345);
    const videos = await getUserVideos(loggedUser.userName);
    const details = await getVideoDetails(videos[0]);
    console.log(details);
  } catch (err) {
    console.log(err);
  }
}

displayUser();

// const yt = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("Grabbing content from youtube");
//     resolve({ videos: [1, 2, 3, 4, 5] });
//   }, 2000);
// });

// const fb = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("Grabbing content from facebook");
//     resolve({ user: "Name" });
//   }, 5000);
// });

/*
with async (run yt and fc at the same time)
*/

// Promise.all([yt, fb]).then((result) => console.log(result));

console.log("end");
