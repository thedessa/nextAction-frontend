import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from './components/Home/Home';
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Logout from "./components/Logout/Logout";
import PrivateRoute from './Utils/PrivateRoute';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/dashboard" element={<PrivateRoute> <Dashboard/> </PrivateRoute>}></Route>
    </Routes>

  );
}

export default App;