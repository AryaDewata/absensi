const camera = document.querySelector("#camera");
const constraints = {
  video: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
};
async function init() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
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
