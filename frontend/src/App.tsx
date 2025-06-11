import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewLead from "./pages/NewLead";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newlead" element={<NewLead />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
