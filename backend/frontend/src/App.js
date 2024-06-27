import { Container } from "react-bootstrap";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/Footer";
import CartScreen from "./screens/CartScreen";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/PrdouctListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";


function App() {
  return (
    <Router>
      <Header />
      <main className="py-5">
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen/>} exact />
            <Route path='/login' element={<LoginScreen/>}/>
            <Route path='/register' element={<RegisterScreen/>}/>
            <Route path='/profile' element={<ProfileScreen/>}/>
            <Route path='/shipping' element={<ShippingScreen/>}/>
            <Route path='/placeorder' element={<PlaceOrderScreen/>}/>
            <Route path='/order/:id' element={<OrderScreen/>}/>
            <Route path='/payment' element={<PaymentScreen/>}/>
            <Route path='/product/:id' element={<ProductScreen/>}/>
            <Route path='/cart/:id?' element={<CartScreen/>}  />
            <Route path='/admin/userList' element={<UserListScreen/>}/>
            <Route path='/admin/user/:id/edit' element={<UserEditScreen/>}/>
            <Route path='/admin/productlist' element={<ProductListScreen/>}/>
            <Route path='/admin/product/:id/edit' element={<ProductEditScreen/>}/>
            <Route path='/admin/orderlist' element={<OrderListScreen/>}/>



          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
