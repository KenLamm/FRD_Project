import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TodoPages from "../../features/todo/todo";


const Done = () => {
  return (
    <Router>
      <Routes>
       
        <Route path="/TodoPages" element={<TodoPages />} />
      </Routes>
    </Router>
  );
};

export default Done;
