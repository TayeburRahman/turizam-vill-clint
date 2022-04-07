import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddService from "./Component/AddService/AddService";
import Blog from "./Component/Blog/Blog";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import ManageOder from "./Component/ManageAllOders/ManageOder";
import MyOrders from "./Component/MyOders/MyOrders";
import NotFount from "./Component/NotFount/NotFount";
import ServiceDtl from "./Component/Service/ServiceDtl/ServiceDtl";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/campBlog">
              <Blog></Blog>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageOder">
              <ManageOder></ManageOder>
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDtl></ServiceDtl>
            </PrivateRoute>
            <PrivateRoute path="*">
              <NotFount></NotFount>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
