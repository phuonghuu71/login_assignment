import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Profile from "./Profile/Profile";

import { AnimatePresence } from "framer-motion";

import "./styles.scss";

function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route Component={Login} path="/" />
        <Route Component={Profile} path="profile" />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
