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
import Layout from "./components/Layout";
import NavDashboard from "./components/NavDashboard";
import AnimalDetails from "./routes/AnimalDetails";
import EditAnimal from "./routes/EditAnimal";
import ManageTickets from "./routes/ManageTickets";
import Report from "./routes/Report";
import Search from "./routes/Search";
import Profile from './routes/Profile'
import ADashboard from "./routes/ADashboard";
import UpdateTicket from "./routes/UpdateTicket";
import AnimalUpdate from "./routes/AnimalUpdate";

function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/tickets" element={<Ticket />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/park" element={<Park />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<ADashboard />} />
        <Route path="/updatetickets" element={<UpdateTicket />} />
        <Route path="/animalupdate" element={<AnimalUpdate />} />







        <Route path="/layout" element={<Layout />} />
        <Route path="/NavDashboard" element={<NavDashboard />} />
        <Route path="/animaldetails" element={<AnimalDetails />} />
        <Route path="/edit" element={<EditAnimal />} />
        <Route path="/managetickets" element={<ManageTickets />} />
        <Route path="/report" element={<Report />} />
        <Route path="/search" element={<Search />} />








      </Routes>
    </>
   
  );
}

export default App;
