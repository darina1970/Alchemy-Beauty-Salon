import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";



const MainLayout = ({ headerProps, children}) => {
    return (
        <div className="layout">
            <Header {...headerProps} />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;

