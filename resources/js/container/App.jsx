import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import NotFount from "../Pages/NotFound";

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<NotFount />}/>
        </Routes>
    </Router>
  );
}

export default App;