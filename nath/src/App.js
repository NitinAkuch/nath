// import Register from "./Pages/Register";
import RegisterOne from "./Pages/RegiasterOne";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navabar from "./Components/Navabar";

function App() {
  return (
    <>
      <Router>
        <Navabar />
        <div>
          <Routes>
            <Route path="/register" element={<RegisterOne />} />

            <Route path="/login" element={<Login />} />

            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
