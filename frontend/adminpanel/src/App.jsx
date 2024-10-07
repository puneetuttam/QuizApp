import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AdminPanel from "./components/AdminPanel";
import AddQuiz from "./components/AddQuiz";
import AddQuestion from "./components/AddQuestion";
import QuizList from "./components/QuizList";

const App = () => {
    return (
        <Router>
            <div>
                <h1>Quiz Application</h1>
                <Routes>
                    {/* Default route for login */}
                    <Route path="/" element={<Login />} />

                    {/* Admin panel */}
                    <Route path="/admin" element={<AdminPanel />} />

                    {/* Route for adding a quiz */}
                    <Route path="/add-quiz" element={<AddQuiz />} />

                    <Route path="/quiz-list" element={<QuizList />} />
                    <Route
                        path="/add-question/:quizId"
                        element={<AddQuestion />}
                    />

                    {/* Route for adding questions */}
                    <Route path="/add-question" element={<AddQuestion />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
