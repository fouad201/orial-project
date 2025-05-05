import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./MainPage/Navbar";
import FirstSection from "./MainPage/FirstSection";
import ServicesSection from "./MainPage/ServicesSection";
import Features from "./MainPage/Features";
import OurPartners from "./MainPage/OurPartners";
import MadeByOriall from "./MainPage/MadeByOriall";
import ContactSupport from "./MainPage/ContactSupport";
import Footer from "./MainPage/Footer";
import ServiceFirstSection from "./ServiceFolder/FirstSection";
import VRARSection from "./ServiceFolder/VRARSection";
import ServiceSections from "./ServiceFolder/ServiceSections";
import PortfolioFirstSection from "./Portoflio/FirstSection";
import CustomSoftwareSection from "./Portoflio/CustomSoftwareSection";
import TestimonialsSection from "./Portoflio/TestimonialsSection";
import TeamSection from "./Team/TeamSection";
import TeamHeroSection from "./Team/TeamHeroSection";
import AboutUs from "./AboutUs";
import CallUS from "./CallUSFolder";
import "./App.css";

// Home page with FirstSection and ServicesSection components
const Home = () => (
  <>
    <FirstSection />
    <ServicesSection />
    <Features />
    <OurPartners />
    <MadeByOriall />
    <ContactSupport />
  </>
);

// Updated Services page with our new component
const Services = () => (
  <>
    <ServiceFirstSection />
    <VRARSection />
    <ServiceSections />
  </>
);

// Portfolio page
const Portfolio = () => (
  <>
    <PortfolioFirstSection />
    <CustomSoftwareSection />
    <TestimonialsSection />
    <ContactSupport />
  </>
);

// Team page
const Team = () => (
  <>
    <TeamHeroSection />
    <TeamSection />
    <ContactSupport />
  </>
);

// Simple page components for demonstration
const Projects = () => <div className="page-content">أعمالنا</div>;
// Use our new AboutUs component instead of the placeholder
const About = () => <AboutUs />;
// Update Contact to use our new CallUS component
const Contact = () => <CallUS />;

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
