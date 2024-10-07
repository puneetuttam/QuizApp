import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminPanel = () => {
    const [quizAdded, setQuizAdded] = useState(false); // Track if a quiz has been added

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <nav>
                {/* Link to Add Quiz */}
                <Link to="/add-quiz">Add Quiz</Link>

                {/* Conditionally render Add Question link */}
                {quizAdded ? (
                    <Link to="/add-question">Add Question</Link>
                ) : (
                    <p>Please add a quiz first before adding questions.</p>
                )}
            </nav>

            {/* Outlet for rendering nested routes */}
            <Outlet context={{ setQuizAdded }} />
        </div>
    );
};

export default AdminPanel;
