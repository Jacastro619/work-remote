const deleteHandler = async (event) => {
  console.log("test");
  const id = event.target.getAttribute("data-id");
  console.log(id);
  const response = await fetch(`/delete/post/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/jobs/user/posts");
  } else {
    $("#deleteErr-alert").addClass("show");
    setTimeout(() => {
      $("#deleteErr-alert").removeClass("show");
    }, 3000);
  }
};

$(document).on("click", "#confirm-btn", deleteHandler);
