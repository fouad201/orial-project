import React from "react";
import TechnologySection from "./TechnologySection";
import DigitalDesignSection from "./DigitalDesignSection";
import "./ServiceSections.css";

const ServiceSections = () => {
  return (
    <div className="service-sections-container">
      <TechnologySection />
      <DigitalDesignSection />
    </div>
  );
};

export default ServiceSections;
