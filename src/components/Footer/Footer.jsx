import React from "react";
import FooterMain from "./FooterMain";
import FooterInner from "./FooterInner";
import { usePageConfig } from "../../hooks/usePageConfig";


const Footer = () => {
    const { pageKey, menuItems, quote} = usePageConfig();
    
    return pageKey === 'home' ? (
        <FooterMain menuItems={menuItems} />
    ) : (
        <FooterInner menuItems={menuItems} quote={quote} />
    );
};

export default Footer; 