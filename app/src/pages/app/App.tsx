import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthenticationTitle } from "../auth/login";
import { StatsCard } from "../../features/process/pjprocess";
import Question from "../../features/newProject/createButton";
import ButtonCreator from "../newProjectPages/NewProject";
import PhotoPage from "../photodetailPages/photodetail";
import FolderPage from "../workingfolderPages/workingFolder";
import Todo from "../todoPages/todo";
import Landing from "../../Landing";
import Navbar from "../navbarPages/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient();



const App = () => {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<AuthenticationTitle />} />
          <Route path="/task/:id" element={<StatsCard />} />
          <Route path="/project/:id" element={<ButtonCreator />} />
          <Route path="/Todo/:id" element={<Todo />} />
          <Route path="/photodetail/:id" element={<PhotoPage />} />
          <Route path="/workingFolder/:id" element={<FolderPage />} />
        </Routes>
      </QueryClientProvider>
    </Router>
  );
};

export default App;
