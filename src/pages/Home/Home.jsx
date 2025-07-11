import React, { useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import About from "./sections/About/About";
import Services from "./sections/ServicesBlock/Services";
import WhyUs from "./sections/WhyUs/WhyUs";
import Animation from "./sections/Animation/Animation";
import Team from "./sections/Team/Team";
import Contacts from "./sections/Contacts/Contacts";
import Promos from "./sections/Promos/Promos";
import Reviews from "./sections/Reviews/Reviews";
import { headerConfigs } from "../../config/headerConfigs";
import { useLocation } from "react-router-dom";

const homeBackgrounds = [
  '/images/Banners/Home/home-desktop.webp',
  '/images/Banners/Home/home-tablet.webp',
];

const HomePage = () => {
  const location = useLocation();

// Прелоад баннеров

  useEffect(() => {
    homeBackgrounds.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

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
      <About variant="light" />
      <WhyUs variant="dark" />
      <Animation variant="light" />
      <Services variant="dark" />
      <Team variant="light" />
      <Reviews variant="dark" />
      <Promos variant="promo" />
      <Contacts variant="light" />
    </MainLayout>
  );
};

export default HomePage;
