const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// usernameInput.addEventListener("input", (event) => {
//   console.log(event.target.name, event.target.value);
// });

const loginObject = { username: "", password: "" };

const inputChangeHandler = (event) => {
  loginObject[event.target.name] = event.target.value;
};

const loginFormSubmit = (e) => {
  e.preventDefault();
  console.log(loginObject);
};

// usernameInput.addEventListener("input", inputChangeHandler);
// passwordInput.addEventListener("input", inputChangeHandler);

loginForm.addEventListener("input", inputChangeHandler);
loginForm.addEventListener("submit", loginFormSubmit);
