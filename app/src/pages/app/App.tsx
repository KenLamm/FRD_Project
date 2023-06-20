import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthenticationTitle } from "../auth/login";
import Project from "../newProject/NewProject";
import Photo from "../photodetail/photodetail";
import Record from "../record/record";
import Task from "../task/task";
import Landing from "../../Landing";
import Navbar from "../navbar/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Category } from "../category/Category";
import ReadingPage from "../safetyprecaution/Safety";
import TopNavbar from "../navbar/topNavbar";

export const queryClient = new QueryClient();

const App = () => {
  return (
    <Router>
      <TopNavbar />
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<AuthenticationTitle />} />
          <Route path="/project" element={<Project />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/task/:pid/:cid" element={<Task />} />
          <Route path="/record/:id" element={<Record />} />
          <Route path="/photodetail/:id" element={<Photo />} />
          <Route path="/rules" element={<ReadingPage />} />
        </Routes>
      </QueryClientProvider>
    </Router>
  );
};

export default App;
