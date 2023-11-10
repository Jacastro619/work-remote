// This function will handle the logging out of a user
const logoutHandler = async () => {
  // Here we are creating the fetch request
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  // If the response is okay a success alert is shown and the user is taken back to the homepage
  if (response.ok) {
    $("#logout-success").addClass("show");
    setTimeout(() => {
      document.location.replace("/");
      $("#logout-success").removeClass("show");
    }, 1000);
    // If response is not okay then an alert will display
  } else {
    $("#logout-alert").addClass("show");
    setTimeout(() => {
      $("#logout-alert").removeClass("show");
    }, 3000);
  }
};

document.querySelector("#logout-btn").addEventListener("click", logoutHandler);
