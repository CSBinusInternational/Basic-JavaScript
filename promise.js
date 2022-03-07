/*
refactoring the use of callback with promises also using async await
*/
console.log("start");
function loginUser(name, passowrd) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({ userName: name });
    }, 3000);
  });
}
function getUserVideos(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(["video1", "video2", "video3"]);
    }, 2000);
  });
}
function videoDetails(video) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("title of video");
    }, 2000);
  });
}
loginUser("vin", 12345)
  .then(function (user) {
    getUserVideos(user.name);
  })
  .then(function (videos) {
    videoDetails(videos[1]);
  })
  .then(function (detail) {
    return console.log(detail);
  });
console.log("end");
