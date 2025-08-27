import React from 'react';
import NavigationBar from '../components/Navbar';
import Hero from '../components/Hero';
import Awareness from '../components/Awareness';
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Awareness />
      <Footer />
    </>
  );
}

export default LandingPage;