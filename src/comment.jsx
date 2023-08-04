// CommentPage.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CommentPage = () => {
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    // Handle submitting the comment to the server or perform any other actions
    console.log("Comment submitted:", comment);
    navigate("/final");
  };

  return (
    <div className="rating">
      <h2>Leave your comment</h2>
      <textarea
        rows="4"
        cols="50"
        value={comment}
        onChange={handleCommentChange}
        placeholder="Write your additional comments about us..."
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CommentPage;
