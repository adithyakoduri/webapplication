// auth.js

// Predefined credentials
const validUsername = "hi";
const validPassword = "hi";

// Validate login credentials
function validateLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === validUsername && password === validPassword) {
    // Hide login section and show app section
    document.getElementById("loginSection").classList.replace("visible", "hidden");
    document.getElementById("appSection").classList.replace("hidden", "visible");
  } else {
    // Show error message
    document.getElementById("loginMessage").style.display = "block";
  }
}
