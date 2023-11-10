// This function handles when the user wants to create a post
const postHandler = async (event) => {
  // This function handle the logging in of a user
  event.preventDefault();

  // Store user input into variables
  const title = document.querySelector("#job-title").value.trim();
  const description = document.querySelector("#job-desc").value.trim();
  const type = document.querySelector("#job-type").value;
  const budget = document.querySelector("#budget").value.trim();

  // Check to see if all fields are filled out
  if (!title || !description || !type || !budget) {
    $("#fields-alert").addClass("show");
    setTimeout(() => {
      $("#fields-alert").removeClass("show");
    }, 3000);
    return;
  }

  // If filled out properly then we create the fetch request
  if (title || description || type || budget) {
    const response = await fetch("/post", {
      method: "POST",
      body: JSON.stringify({ title, description, type, budget }),
      headers: { "Content-Type": "application/json" },
    });

    // if the response is okay the post will be posted and the user will be sent to their dashboard
    if (response.ok) {
      document.location.replace("/jobs/user/posts");
      // This will bring back an error based on what type an error occurr
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

document.querySelector("#post-form").addEventListener("submit", postHandler);
