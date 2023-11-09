const deleteHandler = async (event) => {
  const id = event.target.getAttribute("data-id");
  console.log(id);
  const response = await fetch(`/delete/post/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/jobs/user/posts");
  } else {
    alert("Error in deleteing post");
  }
};

document.querySelector("#deleteBtn").addEventListener("click", deleteHandler);
