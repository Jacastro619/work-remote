const postHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#job-title").value.trim();
  const description = document.querySelector("#job-desc").value.trim();
  const type = document.querySelector("#job-type").value;
  const budget = document.querySelector("#budget").value.trim();

  if (!title || !description || !type || !budget) {
    alert("All fields must be filled out");
    return;
  }

  if (title || description || type || budget) {
    const response = await fetch("/post", {
      method: "POST",
      body: JSON.stringify({ title, description, type, budget }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/jobs/user/posts");
    } else {
      alert("Error creating post");
    }
  }
};

document.querySelector("#post-form").addEventListener("submit", postHandler);
