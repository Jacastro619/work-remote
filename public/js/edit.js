// This functions renders the post for when the user wants the edit it
const renderPost = async () => {
  // Here we are getting the id from the pathname of the current document
  const path = window.location.pathname.split("/");
  const id = path[3];

  // Here we do a fetch to get all the data from the specific post using the id
  const response = await fetch(`/api/user/post/${id}`);

  // if the response is not okay we return an error message
  if (!response.ok) {
    $("#postRetErr-alert").addClass("show");
    setTimeout(() => {
      $("#postRetErr-alert").removeClass("show");
    }, 3000);
    return;
  }

  // If the response is okay then we convert it to json
  const data = await response.json();

  // If converting to json works okay then we are populating each element with the value that was recieved from the get request
  if (response.ok) {
    document.querySelector("#job-title").value = data.job_title;
    document.querySelector("#job-desc").value = data.job_description;
    document.querySelector("#job-type").value = data.job_type;
    document.querySelector("#budget").value = data.job_budget;
  }
};

// We want this function to be called as soon as the page loads
renderPost();

// This function handles when the user submits an edit to their post
const editHandler = async (event) => {
  // Prevent the default function of a form
  event.preventDefault();

  // Here we are getting the id from the pathname of the current document
  const path = window.location.pathname.split("/");
  const id = path[3];

  // Storing all the input values into variables to include in our fetch request
  const upTitle = document.querySelector("#job-title").value.trim();
  const upDescription = document.querySelector("#job-desc").value.trim();
  const upType = document.querySelector("#job-type").value;
  const upBudget = document.querySelector("#budget").value.trim();

  // If any of these slots or empty then we are alerting the user to fill out all slots
  if (!upTitle || !upDescription || !upType || !upBudget) {
    $("#fields-alert").addClass("show");
    setTimeout(() => {
      $("#fields-alert").removeClass("show");
    }, 3000);
    return;
  }

  // If all slots are properly filled out then we make the PUT request to update the post
  if (upTitle || upDescription || upType || upBudget) {
    // Here we send the request to update a post by id
    const response = await fetch(`/edit/post/${id}`, {
      method: "PUT",
      body: JSON.stringify({ upTitle, upDescription, upType, upBudget }),
      headers: { "Content-Type": "application/json" },
    });

    // If the response is ok then we replace the document with the dashboard
    if (response.ok) {
      document.location.replace("/jobs/user/posts");

      // If response is not okay then we send back an error alert based on what error occurred
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
