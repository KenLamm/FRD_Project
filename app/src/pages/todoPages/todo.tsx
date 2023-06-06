import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthenticationTitle } from "../../features/auth/login";
import TodoPages from "../../features/todo/todo";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthenticationTitle />} />
        <Route path="/TodoPages" element={<TodoPages />} />
      </Routes>
    </Router>
  );
};

export default App;
