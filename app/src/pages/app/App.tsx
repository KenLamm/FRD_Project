import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthenticationTitle } from "../../features/auth/login";
import { StatsCard } from "../../features/process/pjprocess";
import Question from "../../features/newProject/createButton";
import ButtonCreator from "../newProjectPages/NewProject";
import PhotoPage from "../photodetailPages/photodetail";
import FolderPage from "../workingfolderPages/workingFolder";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthenticationTitle />} />
        <Route path="/stats-card" element={<StatsCard />} />
        <Route path="/project" element={<ButtonCreator />} />
        <Route path="/photodetail" element={<PhotoPage />} />
        <Route path="/workingFolder" element={<FolderPage />} />
      </Routes>
    </Router>
  );
};

export default App;
