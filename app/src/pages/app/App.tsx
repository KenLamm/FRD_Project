import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthenticationTitle } from "../../features/auth/login";
import { StatsCard } from '../../features/process/pjprocess';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthenticationTitle />} />
        <Route path="/stats-card" element={<StatsCard />} />
      </Routes>
    </Router>
  );
};

export default App;
