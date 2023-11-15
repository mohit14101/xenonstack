import { Route, Routes, useSearchParams } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  const[logged,setLogged]=useState(false);
  return(
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col">
      <Navbar logged={logged} setLogged={setLogged} />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login setLogged={setLogged} />}/>
        <Route path="/signup" element={<Signup  setLogged={setLogged}  />} />
        <Route path="/dashboard" element={
          <PrivateRoute logged={logged}>
             <Dashboard/>
          </PrivateRoute>
        }/>
        <Route/>
      </Routes>
    </div>
  )
}

export default App;
