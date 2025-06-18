import React, { useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
// import About from './sections/About/About';
import Services from "./sections/ServicesBlock/Services";
import WhyUs from "./sections/WhyUs/WhyUs";
// import Contacts from './sections/Contacts/Contacts';
// import Promos from './sections/Promos/Promos';
import Reviews from './sections/Reviews/Reviews';
import { headerConfigs } from "../../config/headerConfigs";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToId = location.state?.scrollToId;

    if (scrollToId) {
      setTimeout(() => {
        const el = document.getElementById(scrollToId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);
  return (
    <MainLayout headerProps={headerConfigs.home}>
      {/* <About variant="light" /> */}
      <WhyUs variant="dark" />
      {/* <Animation variant="light" /> */}
      <Services variant="dark" />
      {/* <Team variant="light" /> */}
      <Reviews variant="dark" />
      {/* <Promos variant="promo" /> */}
      {/* <Contacts variant="light" /> */}
    </MainLayout>
  );
};

export default HomePage;
