import "./App.css";
import AboutPage from "./componets/About";
import HomePage from "./componets/HomePage";
import Services from "./componets/Services";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutpage" element={<AboutPage/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    </Router>
  );
}

export default App;
