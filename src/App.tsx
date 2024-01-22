import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import DaftarProduct from "./Pages/DaftarProduct";
import CreateProduct from "./Pages/CreateProduct";
import DetailProduct from "./Pages/DetailProduct";
import ListUsers from "./Pages/DaftarUser";
import Payment from "./Pages/Payment";
import HistoryOrder from "./Pages/historyOrder";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DaftarProduct />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/create-product" element={<CreateProduct />}></Route>
          <Route path="/detail-product/:id" element={<DetailProduct />}></Route>
          <Route path="/daftar/users" element={<ListUsers />}></Route>
          <Route path="/history-order/users" element={<HistoryOrder />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;









