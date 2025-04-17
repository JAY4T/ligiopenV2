import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";

import "./styles.css"; // Ensure this matches your actual file path
import '@fortawesome/fontawesome-free/css/all.min.css';



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        

      </Routes>
    </Router>
  );
};

export default App;
