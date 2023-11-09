const deleteHandler = async (event) => {
  const confirmation = confirm(
    "Are you sure you want to delete this post? This cannot be undone!"
  );

  if (confirmation) {
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
  } else {
    return;
  }
};

document.querySelector("#deleteBtn").addEventListener("click", deleteHandler);
