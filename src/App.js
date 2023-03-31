import Register from "./pages/Register";
import "./style.scss"
import React, { Component, useContext } from 'react';
import Login from "./pages/Login";
import Home from "./pages/Home";
import { createBrowserRouter,  RouterProvider, Route, Link, BrowserRouter as Router, Routes, Navigate,} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  const ProtectRoute=({children})=>{
    if(!currentUser) return <Navigate to='/login'/>
    return children;
  }

  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<ProtectRoute>
            <Home/>
          </ProtectRoute>}
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
