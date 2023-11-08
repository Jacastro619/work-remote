const loginhandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#usernameInput").value.trim();
  const password = document.querySelector("#inputPassword").value.trim();

  if (!username || !password) {
    alert("Please fill out both feilds");
    return;
  }

  if (username && password) {
    const response = await fetch("api/user/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else if (response.status === 400) {
      alert("Invalid Username or Password");
    } else {
      alert("Failed to log in");
    }
  }
};

const signUpHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#signUpUsernameInput").value.trim();
  const email = document.querySelector("#inputEmail").value.trim();
  const password = document.querySelector("#signUpInputPassword").value.trim();

  if (!username || !email || !password) {
    alert("All fields must be filled out");
    return;
  }

  if (username || email || password) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else if (response.status === 422) {
      alert("Username is already in use");
    } else {
      alert("Failed to sign up");
    }
  }
};

document.querySelector(".loginForm").addEventListener("submit", loginhandler);

document.querySelector(".signUpForm").addEventListener("submit", signUpHandler);
