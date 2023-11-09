const renderPost = async () => {
  const path = window.location.pathname.split("/");
  const id = path[3];

  const response = await fetch(`/api/user/post/${id}`);

  if (!response.ok) {
    $("#postRetErr-alert").addClass("show");
    setTimeout(() => {
      $("#postRetErr-alert").removeClass("show");
    }, 3000);
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
    $("#fields-alert").addClass("show");
    setTimeout(() => {
      $("#fields-alert").removeClass("show");
    }, 3000);
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
    } else if (response.status === 422) {
      $("#budget-alert").addClass("show");
      setTimeout(() => {
        $("#budget-alert").removeClass("show");
      }, 3000);
    } else {
      $("#postErr-alert").addClass("show");
      setTimeout(() => {
        $("#postErr-alert").removeClass("show");
      }, 3000);
    }
  }
};

document.querySelector("#edit-form").addEventListener("submit", editHandler);
