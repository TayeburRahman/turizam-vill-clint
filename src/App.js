import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import MyOrders from "./Component/MyOders/MyOrders";
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
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/myOrders">
              <MyOrders></MyOrders>
            </Route> 
            <PrivateRoute path="/service/:serviceId">
              <ServiceDtl></ServiceDtl>
            </PrivateRoute> 
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
