// Toggle Password
const togglePasswordBtn = document.querySelector(".toggle-password");
const PIN = document.querySelector("#pin");
let hidden = true;

togglePasswordBtn.addEventListener("click", function () {
  if (hidden) {
    PIN.type = "text";
    togglePasswordBtn.innerHTML = '<i class="fas fa-eye"></i>';
    hidden = false;
  } else {
    PIN.type = "password";
    togglePasswordBtn.innerHTML = '<i class="fas fa-eye-slash"></i>';
    hidden = true;
  }
});

// Helper
const helperToggleBtn = document.querySelector(".helper-toggle");
const popups = document.querySelector(".popups-wrapper");
helperToggleBtn.addEventListener("click", function () {
  popups.style.display = "flex";
});
popups.addEventListener("click", function () {
  this.style.display = "none";
});
