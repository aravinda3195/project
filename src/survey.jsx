import "./Survey.css";
import { useNavigate } from "react-router-dom";
const SurveyPage = () => {
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/comments");
  };
  return (
    <div className="container">
      <h1>Survey</h1>
      <form>
        <div className="question">
          <p>Question 1: How satisfied are you with our training?</p>
          <label>
            <input type="radio" name="q1" value="5" /> Very Satisfied
          </label>
          <label>
            <input type="radio" name="q1" value="4" /> Satisfied
          </label>
          <label>
            <input type="radio" name="q1" value="3" /> Neutral
          </label>
          <label>
            <input type="radio" name="q1" value="2" /> Dissatisfied
          </label>
          <label>
            <input type="radio" name="q1" value="1" /> Very Dissatisfied
          </label>
        </div>

        <div className="question">
          <p>Question 2: How likely are you to recommend us to a friend?</p>
          <label>
            <input type="radio" name="q2" value="5" /> Very Likely
          </label>
          <label>
            <input type="radio" name="q2" value="4" /> Likely
          </label>
          <label>
            <input type="radio" name="q2" value="3" /> Neutral
          </label>
          <label>
            <input type="radio" name="q2" value="2" /> Unlikely
          </label>
          <label>
            <input type="radio" name="q2" value="1" /> Very Unlikely
          </label>
        </div>
        <div className="question">
          <p> Question 3:Do you like our e-learning platform?</p>
          <label>
            <input type="radio" name="q3" value="5" /> Very Likely
          </label>
          <label>
            <input type="radio" name="q3" value="4" /> Likely
          </label>
          <label>
            <input type="radio" name="q3" value="3" /> Neutral
          </label>
          <label>
            <input type="radio" name="q3" value="2" /> Unlikely
          </label>
          <label>
            <input type="radio" name="q3" value="1" /> Very Unlikely
          </label>
        </div>
        <div className="question">
          <p>Question 4: Are you are okay with our fees structure?</p>
          <label>
            <input type="radio" name="q4" value="5" /> Very Likely
          </label>
          <label>
            <input type="radio" name="q4" value="4" /> Likely
          </label>
          <label>
            <input type="radio" name="q4" value="3" /> Neutral
          </label>
          <label>
            <input type="radio" name="q4" value="2" /> Unlikely
          </label>
          <label>
            <input type="radio" name="q4" value="1" /> Very Unlikely
          </label>
        </div>

        {/* Add more questions here */}

        <button type="submit" onClick={onSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SurveyPage;
