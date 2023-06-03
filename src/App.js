import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Animals from "./routes/Animals";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Ticket from "./routes/Ticket";
import Plan from "./routes/Plan";
import Park from "./routes/Park";
import Admin from "./routes/Admin";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/shared/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/tickets" element={<Ticket />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/park" element={<Park />} />
        <Route path="/admin" element={<Admin />} />

        <Route path="/layout" element={<Layout />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
   
  );
}

export default App;
