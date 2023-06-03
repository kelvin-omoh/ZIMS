import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import PlanAdeventure from "../components/PlanAdeventure";
import GeneralAdmission from "../components/GeneralAdmission";
import Directions from "../components/Directions";
import Lodge from "../components/Lodge";
import AdminLogin from "../components/AdminLogin";

const Plan = () => {
  return (
    <div>
      <Navbar />
      <HeroImage />
      <PlanAdeventure />
      <GeneralAdmission />
      <Directions />
      <Lodge />
      {/* <AdminLogin/> */}

      <Footer />
    </div>
  );
};

export default Plan;
