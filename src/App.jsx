import "./App.css";
import AboutPage from "./componets/About";
import HomePage from "./componets/HomePage";
import NavBar from "./componets/NavBar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



function App() {
  return (
<><Router>
  <Routes>
  <Route path="/" element={<HomePage/>} />
  <Route path="/AboutPage" element={<AboutPage/>} />
  </Routes>
</Router>
</>
  );
}

export default App;




