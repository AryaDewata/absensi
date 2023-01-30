const camera = document.querySelector("#camera");
let constraints = {
  video: {
    width: window.innerWidth,
    height: window.innerHeight,
    facingMode: "user",
  },
};

async function init() {
  try {
    let stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleSuccess(stream);
  } catch (err) {
    console.log(err);
  }
}

function handleSuccess(stream) {
  window.stream = stream;
  camera.srcObject = stream;
}

init();

// Facing mode
const facingBtn = document.querySelector("#facing-btn");
facingBtn.addEventListener("click", function () {
  if (constraints.video.facingMode != "user") {
    constraints.video.facingMode = "user";
    camera.style.transform = "scaleX(-1)";
  } else {
    constraints.video.facingMode = "enviroment";
    camera.style.transform = "scaleX(1)";
  }
  init();
});
