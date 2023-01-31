// Camera Stream
const camera = document.querySelector("#camera");
let constraints = {
  video: {
    width: window.innerWidth,
    height: window.innerHeight,
    facingMode: {
      exact: "user",
    },
  },
};
async function init() {
  let stream = await navigator.mediaDevices.getUserMedia(constraints);
  handleSuccess(stream);
}
function handleSuccess(stream) {
  window.stream = stream;
  camera.srcObject = stream;
}
init();

// Snapshot
const snapshotBtn = document.querySelector("#snapshot-btn");
const snapshotWrapper = document.querySelector(".snapshot-wrapper");
const result = document.querySelector("#snapshot-result");
let context = result.getContext("2d");
snapshotBtn.addEventListener("click", function () {
  context.drawImage(camera, 0, 0, camera.videoWidth, camera.videoHeight);
  snapshotWrapper.style.display = "flex";
});
// Close Snapshot Result
const closeBtn = document.querySelector("#close-btn");
closeBtn.addEventListener("click", function () {
  snapshotWrapper.style.display = "none";
});

// Profile Toggle
const profileBtn = document.querySelector("#profile-toggle");
const profileWrapper = document.querySelector(".profile-wrapper");

profileBtn.addEventListener("click", function () {
  profileWrapper.style.display = "flex";
});
profileWrapper.addEventListener("click", function () {
  this.style.display = "none";
});

// Success Toggle
const successWrapper = document.querySelector(".success-wrapper");
successWrapper.addEventListener("click", function () {
  this.style.display = "none";
});
// Next Snapshot Result
const nextBtn = document.querySelector("#next-btn");
nextBtn.addEventListener("click", function () {
  snapshotWrapper.style.display = "none";
  successWrapper.style.display = "flex";
});
