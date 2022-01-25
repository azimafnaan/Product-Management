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
        </Switch>
      </div>
    </Router>
  );
}

export default App;