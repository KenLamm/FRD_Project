import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthenticationTitle } from "../auth/login";
import  {StatsCard}  from "../../features/process/pjprocess";
import Question from "../../features/newProject/createButton";
import ButtonCreator from "../newProjectPages/NewProject";
import PhotoPage from "../photodetailPages/photodetail";
import FolderPage from "../workingfolderPages/workingFolder";
import Todo from "../todoPages/todo";
import Landing from "../../Landing";
import Navbar from "../navbarPages/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<AuthenticationTitle />} />
        <Route path="/task" element={<StatsCard/>} />
        <Route path="/project" element={<ButtonCreator />} />
        <Route path="/Todo" element={<Todo />} />

        <Route path="/photodetail" element={<PhotoPage />} />
        <Route path="/workingFolder" element={<FolderPage />} />
      </Routes>
    </Router>
  );
};

export default App;
