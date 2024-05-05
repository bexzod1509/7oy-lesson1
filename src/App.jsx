import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import Create from "./pages/create/Create";
import Manage from "./pages/manage/Manage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<Admin />}>
          <Route path="create" element={<Create />} />
          <Route path="manage" element={<Manage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
