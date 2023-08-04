import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommentPage from "./comment.jsx";
import RatingPage from "./rating";
import FeedbackForm from "./homePage";
import SurveyPage from "./survey.jsx";
import FinalPage from "./final";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/rating" element={<RatingPage />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/comments" element={<CommentPage />} />
        <Route path="/final" element={<FinalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
