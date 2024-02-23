import React from 'react';
import Navbar from '../../components/features/layout/navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/features/layout/footer';

const Base = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Base;
