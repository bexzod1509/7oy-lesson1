import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import Create from "./pages/create/Create";
import Manage from "./pages/manage/Manage";
import CreateUser from "./pages/createuser/CreateUser";
import ManageUser from "./pages/manageuser/ManageUser";
import Navbar from "./components/navbar/Navbar";
import Users from "./pages/users/Users";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="admin" element={<Admin />}>
          <Route path="create" element={<Create />} />
          <Route path="manage" element={<Manage />} />
          <Route path="createuser" element={<CreateUser />} />
          <Route path="manageuser" element={<ManageUser />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
