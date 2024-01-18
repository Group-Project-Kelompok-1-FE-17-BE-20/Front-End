import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import DaftarProduct from "./Pages/DaftarProduct";
import CreateProduct from "./Pages/CreateProduct";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DaftarProduct />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/CreateProduct" element={<CreateProduct />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
