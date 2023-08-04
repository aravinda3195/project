/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RatingQuestion = ({ question, options, onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    onRatingChange(question, newRating);
  };

  return (
    <div className="rating">
      <p>{question}</p>
      <div>
        {options.map((option) => (
          <span
            key={option}
            onClick={() => handleRatingChange(option)}
            style={{
              cursor: "pointer",
              color: rating >= option ? "gold" : "grey",
            }}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

const MultipleRatingQuestions = () => {
  const questions = [
    {
      question: "Rate our quality of tutor communication skill:",
      options: [1, 2, 3, 4, 5],
    },
    {
      question: "Rate the quality of our tutor technical skills:",
      options: [1, 2, 3, 4, 5],
    },
    {
      question: "Rate the quality of our e-learning platform:",
      options: [1, 2, 3, 4, 5],
    },
    {
      question: "Rate the quality of teaching method:",
      options: [1, 2, 3, 4, 5],
    },
    {
      question: "Rate overall experience:",
      options: [1, 2, 3, 4, 5],
    },
  ];

  const [ratings, setRatings] = useState({});
  const navigate = useNavigate();

  const handleRatingChange = (question, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [question]: rating,
    }));
  };

  const handleSubmit = () => {
    // Handle submitting the ratings to the server or perform any other actions
    console.log("Ratings submitted:", ratings);
    navigate("/survey");
  };

  return (
    <div className="rating_form">
      <h2 className="rating">Rating Form</h2>
      {questions.map((q) => (
        <RatingQuestion
          key={q.question}
          question={q.question}
          options={q.options}
          onRatingChange={handleRatingChange}
        />
      ))}
      <br />
      <button onClick={handleSubmit} className="rating">
        Submit
      </button>
    </div>
  );
};

export default MultipleRatingQuestions;
