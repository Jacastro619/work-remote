const renderPost = async () => {
  const path = window.location.pathname.split("/");
  const id = path[3];

  const response = await fetch(`/api/user/post/${id}`);

  if (!response.ok) {
    alert("Error while trying to retrieve data");
    return;
  }

  const data = await response.json();

  if (response.ok) {
    document.querySelector("#job-title").value = data.job_title;
    document.querySelector("#job-desc").value = data.job_description;
    document.querySelector("#job-type").value = data.job_type;
    document.querySelector("#budget").value = data.job_budget;
  }
};

renderPost();

const editHandler = async (event) => {
  event.preventDefault();

  const path = window.location.pathname.split("/");
  const id = path[3];

  const upTitle = document.querySelector("#job-title").value.trim();
  const upDescription = document.querySelector("#job-desc").value.trim();
  const upType = document.querySelector("#job-type").value;
  const upBudget = document.querySelector("#budget").value.trim();

  if (!upTitle || !upDescription || !upType || !upBudget) {
    alert("All fields must be filled out");
    return;
  }

  if (upTitle || upDescription || upType || upBudget) {
    const response = await fetch(`/edit/post/${id}`, {
      method: "PUT",
      body: JSON.stringify({ upTitle, upDescription, upType, upBudget }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/jobs/user/posts");
    } else {
      alert("Error creating post");
    }
  }
};

document.querySelector("#edit-form").addEventListener("submit", editHandler);
