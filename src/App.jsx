import './App.css'
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  return (
    <div className="d-flex">
        <div style={{width:"300px"}}>
            <Sidebar/>
        </div>
        <div style={{width:"calc(100% - 300px)"}}>
            <Navbar/>
            <Dashboard/>
        </div>
    </div>
  )
}

export default App
