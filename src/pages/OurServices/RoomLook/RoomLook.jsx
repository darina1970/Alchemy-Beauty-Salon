import React from "react";
import RoomMainScreen from "../../../components/Rooms/RoomMainScreen/RoomMainScreen";
import RoomGallery from "../../../components/Rooms/Gallery/RoomGallery";
import PriceBlock from "../../../components/Rooms/Price/PriceBlock";
import lookImages from "./lookRoomImages";
import { lookPrices } from "./lookPriceData";

import look1 from "../../../assets/images/Rooms/LookRoom/look1.webp";

const LookRoom = () => {
  return (
    <>
      <RoomMainScreen
        title="комната взгляда"
        quote="взгляд, в котором живёт сила стихий"
        variant="light"
        portfolio={[{ src: look1 }]}
        useSlider={false}
      />
      <RoomGallery images={lookImages} layout="layoutA" />
      <PriceBlock pricesByTab={lookPrices} theme="light" variant="light" />
    </>
  );
};

export default LookRoom;
