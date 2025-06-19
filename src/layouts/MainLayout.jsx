import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


const MainLayout = ({ headerProps, children}) => {
    return (
        <>
            <Header {...headerProps} />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default MainLayout;

