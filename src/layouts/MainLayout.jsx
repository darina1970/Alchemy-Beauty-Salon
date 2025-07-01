import React from "react";
// import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HeaderLayout from "../components/Header/HeaderLayout";



const MainLayout = ({ children}) => {
    return (
        <div className="layout">
            <HeaderLayout showBanner={true} showRoomMenu={false} />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;

