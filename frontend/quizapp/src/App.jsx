import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentSignup from "./components/StudentSignup";
import StudentLogin from "./components/StudentLogin";
import Dashboard from "./components/Dashboard"; // Example dashboard component
import QuizQuestions from "./components/QuizQuestions";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<StudentSignup />}></Route>
                <Route path="/signup" element={<StudentSignup />} />
                <Route path="/login" element={<StudentLogin />} />
                <Route path="/dashboard" element={<Dashboard />} />{" "}
                {/* Placeholder for post-login page */}
                <Route path="/quiz/questions" element={<QuizQuestions />} />
            </Routes>
        </Router>
    );
};

export default App;
