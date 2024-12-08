import React from "react";

import Hero from "./Component/Hero";
import { NavBar } from "./Component/Navbar";

import SideTableSection from "./Component/SideTableSection";
import HeroWithProducts from "./Component/HeroWithProduct";
import Footer from "./Component/Footer";


const MainPage = () => {
  return (
    <div>
      <NavBar />
      <Hero/>
      <SideTableSection/>
      <HeroWithProducts />
      
<Footer />
      
      
    </div>
  );
};

export default MainPage;