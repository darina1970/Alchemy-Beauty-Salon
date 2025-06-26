import React from "react";
import RoomMainScreen from "../../../components/Rooms/RoomMainScreen/RoomMainScreen";
import PriceBlock from '../../../components/Rooms/Price/PriceBlock';
import { tanPrices } from './tanPriceData';
import tan from "../../../assets/images/Services/tan.webp";

const TanRoom = () => {
    return (
        <>
            <RoomMainScreen
                title="комната загара"
                quote="золотое сияние природы"
                variant="light"
                portfolio={[{ src: tan }]}
                useSlider={false}
                showGallery={false}
                showWhatsapp={false}
            />
            <PriceBlock
                pricesByTab={tanPrices}
                theme= 'dark'
                variant='dark'
                tableTheme='tanning'
            />
        </>
    );

};

export default TanRoom;
