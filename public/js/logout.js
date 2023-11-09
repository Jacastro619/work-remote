const logoutHandler = async () => {
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    $("#logout-success").addClass("show");
    setTimeout(() => {
      document.location.replace("/");
      $("#logout-success").removeClass("show");
    }, 1000);
  } else {
    $("#logout-alert").addClass("show");
    setTimeout(() => {
      $("#logout-alert").removeClass("show");
    }, 3000);
  }
};

document.querySelector("#logout-btn").addEventListener("click", logoutHandler);
