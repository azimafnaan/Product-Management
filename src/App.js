import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './App.css'
import Home from "./pages/home/Home";
function App () {
  return (
    <div className="App">
      <Topbar></Topbar>
      <div className="container">
        <Sidebar></Sidebar>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
