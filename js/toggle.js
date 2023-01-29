const togglePasswordBtn = document.querySelector(".toggle-password");
const PIN = document.querySelector("#pin");
let hidden = true;

togglePasswordBtn.addEventListener("click", function () {
  if (hidden) {
    PIN.type = "text";
    hidden = false;
  } else {
    PIN.type = "password";
    hidden = true;
  }
});
