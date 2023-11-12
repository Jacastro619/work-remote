// This function handle the logging in of a user
const loginhandler = async (event) => {
  //Prevent the default function of a form
  event.preventDefault();

  // Store user input into variables
  const username = document.querySelector("#usernameInput").value.trim();
  const password = document.querySelector("#inputPassword").value.trim();

  // Check to see if all fields are filled out
  if (!username || !password) {
    $("#fields-alert").addClass("show");
    setTimeout(() => {
      $("#fields-alert").removeClass("show");
    }, 3000);
    return;
  }
  // If filled out properly then we create the fetch request
  if (username && password) {
    const response = await fetch("api/user/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    // if the response is okay the user will be logged in and sent to their dashboard
    if (response.ok) {
      document.location.replace("/jobs/user/posts");

      // This will bring back an error based on what type an error occurr
    } else if (response.status === 404) {
      $("#login-alert").addClass("show");
      setTimeout(() => {
        $("#login-alert").removeClass("show");
      }, 3000);
    } else {
      $("#loginErr-alert").addClass("show");
      setTimeout(() => {
        $("#loginErr-alert").removeClass("show");
      }, 3000);
    }
  }
};

// This function handles the sign up of a user
const signUpHandler = async (event) => {
  //Prevent the default function of a form
  event.preventDefault();

  // Store user input into variables
  const username = document.querySelector("#signUpUsernameInput").value.trim();
  const email = document.querySelector("#inputEmail").value.trim();
  const password = document.querySelector("#signUpInputPassword").value.trim();

  // Check to see if all fields are filled out
  if (!username || !email || !password) {
    $("#fields-alert").addClass("show");
    setTimeout(() => {
      $("#fields-alert").removeClass("show");
    }, 3000);
    return;
  }

  // If filled out properly then we create the fetch request
  if (username || email || password) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    // if the response is okay the user will be logged in and sent to their dashboard
    if (response.ok) {
      document.location.replace("/jobs/user/posts");
      // This will bring back an error based on what type an error occurr
    } else if (response.status === 422) {
      $("#username-alert").addClass("show");
      setTimeout(() => {
        $("#username-alert").removeClass("show");
      }, 3000);
    } else if (response.status === 401) {
      $("#email-alert").addClass("show");
      setTimeout(() => {
        $("#email-alert").removeClass("show");
      }, 3000);
    } else {
      $("#signup-alert").addClass("show");
      setTimeout(() => {
        $("#signup-alert").removeClass("show");
      }, 3000);
    }
  }
};

document.querySelector(".loginForm").addEventListener("submit", loginhandler);

document.querySelector(".signUpForm").addEventListener("submit", signUpHandler);
