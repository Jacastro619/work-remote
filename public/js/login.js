const loginhandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#usernameInput").value.trim();
  const password = document.querySelector("#inputPassword").value.trim();

  if (!username || !password) {
    $("#fields-alert").addClass("show");
    setTimeout(() => {
      $("#fields-alert").removeClass("show");
    }, 3000);
    return;
  }

  if (username && password) {
    const response = await fetch("api/user/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/jobs/user/posts");
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

const signUpHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#signUpUsernameInput").value.trim();
  const email = document.querySelector("#inputEmail").value.trim();
  const password = document.querySelector("#signUpInputPassword").value.trim();

  if (!username || !email || !password) {
    $("#fields-alert").addClass("show");
    setTimeout(() => {
      $("#fields-alert").removeClass("show");
    }, 3000);
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
