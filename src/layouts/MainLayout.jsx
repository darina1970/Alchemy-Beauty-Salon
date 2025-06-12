import React from "react";
import Header from "../components/Header/Header";

const MainLayout = ({ headerProps, children}) => {
    return (
        <>
            <Header {...headerProps} />
            <main>{children}</main>
        </>
    );
};

export default MainLayout;

