import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthenticationTitle } from "../auth/login";
import Question from "../../features/newProject/createButton";
import Project from "../newProject/NewProject";
import Photo from "../photodetail/photodetail";
import Folder from "../workingfolder/workingFolder";
import Task from "../task/task";
import Landing from "../../Landing";
import Navbar from "../navbar/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Category } from "../category/Category";

export const queryClient = new QueryClient();

const App = () => {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<AuthenticationTitle />} />
          <Route path="/project" element={<Project />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/task/:id" element={<Task />} />
          <Route path="/record/:id" element={<Folder />} />
          <Route path="/photodetail/:id" element={<Photo />} />
        </Routes>
      </QueryClientProvider>
    </Router>
  );
};

export default App;
