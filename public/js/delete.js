// This function will handle delete requests for when the user wants to delete a post

const deleteHandler = async (event) => {
  // Here we are getting the id of the post and storing it in the id variable
  const id = event.target.getAttribute("data-id");

  // Here we create a response variable where we fetch the delete endpoint with the delete method
  const response = await fetch(`/delete/post/${id}`, {
    method: "DELETE",
  });

  // If the response comes back okay then we are replacing the location if the document with the dashboard
  if (response.ok) {
    document.location.replace("/jobs/user/posts");
  } else {
    // If the response does not come back okay then we pop up an error telling the user that an error occurred
    $("#deleteErr-alert").addClass("show");
    setTimeout(() => {
      $("#deleteErr-alert").removeClass("show");
    }, 3000);
  }
};

$(document).on("click", "#confirm-btn", deleteHandler);
