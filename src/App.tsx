import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import DaftarProduct from "./Pages/DaftarProduct";
import CreateProduct from "./Pages/CreateProduct";
import DetailProduct from "./Pages/DetailProduct";
import ListUsers from "./Pages/DaftarUser";
import Payment from "./Pages/Payment";
import HistoryOrder from "./Pages/historyOrder";
import ListProduct from "./Pages/ListProduct";
import Cart from "./Pages/Cart";
import ProfileToko from "./Pages/ShopProfile";
import UserProfile from "./Pages/ProfilSaya";

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
          <Route path="/daftar-users" element={<ListUsers />}></Route>
          <Route path="/history-order/users" element={<HistoryOrder />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/list-product" element={<ListProduct />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/profiltoko" element={<ProfileToko />}></Route>
          <Route path="/profilsaya" element={<UserProfile />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
