import React from "react";
import { Outlet } from "react-router-dom";
import HeaderRoom from "../components/Header/HeaderRoom";
import FooterInner from "../components/Footer/FooterInner";
import { usePageConfig } from "../hooks/usePageConfig";


const RoomLayout = () => {
    const { quote, menuItems } = usePageConfig();

    return (
        <>
            <HeaderRoom />
            <main>
                <Outlet />
            </main>
            <FooterInner quote={quote} menuItems={menuItems} />
        </>
    )
}

export default RoomLayout;