import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from './components/Home';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PrivateRoute from './Utils/PrivateRoute'

function App() {
  const [token, setToken] = useState();

  return (



    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      <Route
            path="/dashboard"

            element={

              <PrivateRoute>

                <Dashboard x={1} />

              </PrivateRoute>

            }

          ></Route>
    </Routes>

  );
}

export default App;