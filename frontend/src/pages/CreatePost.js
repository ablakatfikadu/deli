import { useState } from "react";
import Api from "../components/Api";

export default function CreatePost() {
  // Use the Api component to create an instance of the HTTP client
  const http  = Api();

  // State variables to store the title and description of the post
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Alert the user with the current title and description
    alert(`Title: ${title}\nDescription: ${description}`);

    // Reset the form fields
    setTitle("");
    setDescription("");

    // Send a POST request to the '/createpost' endpoint with the title and description
    http
      .post("/createpost", { title: title, description: description })
      .then((res) => {
        console.log("Request payload:", { title: title, description: description });
        console.log("Response:", res.data);
      })
      .catch((error) => {
        console.error("Error creating post:", error);
        console.error("Request payload:", { title: title, description: description });

        // Log more detailed error information if available
        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error:", error.message);
        }
      });
  };

  // Render the form
  return (
    <div className="container mt-5">
      <h3 className="text-center">Create Post</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="exampleFormControlInput1"
            placeholder="Sample Title"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Publish Now
        </button>
      </form>
    </div>
  );
}