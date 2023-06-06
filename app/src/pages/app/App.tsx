import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthenticationTitle } from "../../features/auth/login";
import { StatsCard } from '../../features/process/pjprocess';
import  Todo  from '../../features/todo/todo';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthenticationTitle />} />
        <Route path="/stats-card" element={<StatsCard />} />
        <Route path="/Todo" element={<Todo />} />

      </Routes>
    </Router>
  );
};

export default App;
