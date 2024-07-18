
function validateEmail(email) {
  
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
  return emailPattern.test(email);
}

function validatePassword(password) {
  
  const passwordPattern =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&!*])[A-Za-z\d@#$%^&!*]{8,}$/;
  return passwordPattern.test(password);
}

function validateConfirmPassword(password, confirmPassword) {
  
    return password === confirmPassword;
}

function validateUsername(username) {
  const usernamePattern = /^[a-zA-Z0-9-]{3,20}$/;
  return usernamePattern.test(username);
}

const mail = document.getElementById("mail").value;
const password = document.getElementById("password").value;
const confirmPassword = document.getElementById("confirmPassword").value;
const username = document.getElementById("username").value;



export {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  validateUsername,
};
