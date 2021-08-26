import React from "react";
import HomeUpperSection from "./upper-section/HomeUpperSection";
import HomeLowerSection from "./lower-section/HomeLowerSection";
import PrimaryFooter from "./../_general/footer/PrimaryFooter";
import "../../styles/home/home_page.css"

function HomePage() {
  return (
    <div className="home-page-primary-wrapper">
      <HomeUpperSection />
      <HomeLowerSection />
      <PrimaryFooter />
    </div>
  );
}

export default HomePage;
