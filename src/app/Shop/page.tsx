'use client';

import React from 'react';
import { NavBar } from '../Component/Navbar';
import FilterPage from '../Filter-page/page';
import NewComponent from '../Cards/page';

import Footer2 from '../Footer2/page';
import Vase from '../ShoppingCart/vase/page';






const Shop = () => {
  return (
    <div className="bg-white">
      {/* NavBar */}
      <NavBar bgColor="bg-[#FFFFFF]" />

      {/* Vase Section */}
      <Vase />
      

      {/* Filter Section */}
      <FilterPage />
     

      {/* Product Cards */}
      <div className="my-8">
       {/* Ensure this renders products correctly */}
       
      </div>

      {/* Additional Sections */}
    
      <NewComponent />
    

      {/* Footer */}
      <Footer2 />
    </div>
  );
};

export default Shop;