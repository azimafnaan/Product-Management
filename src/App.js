import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './App.css'
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";

function App () {
  return (
    <Router>

      <Topbar></Topbar>
      <div className="container">
        <Sidebar></Sidebar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/users">
            <UserList></UserList>
          </Route>
          <Route path="/user/:userId">
            <User></User>
          </Route>
          <Route path="/newUser">
            <NewUser></NewUser>
          </Route>
          <Route path="/products">
            <ProductList></ProductList>
          </Route>
          <Route path="/product/:productId">
            <ProductList></ProductList>
          </Route>
          <Route path="/newProduct">
            <ProductList></ProductList>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;