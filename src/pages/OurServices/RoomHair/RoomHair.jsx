import React from "react";
import RoomMainScreen from "../../../components/Rooms/RoomMainScreen/RoomMainScreen";

import hair from "../../../assets/images/Services/hair.webp";
import hair1 from "../../../assets/images/Rooms/HairRoom/hair1.webp";
import hair2 from "../../../assets/images/Rooms/HairRoom/hair2.webp";
import hair3 from "../../../assets/images/Rooms/HairRoom/hair3.webp";
import hair4 from "../../../assets/images/Rooms/HairRoom/hair4.webp";
import hair5 from "../../../assets/images/Rooms/HairRoom/hair5.webp";
import hair6 from "../../../assets/images/Rooms/HairRoom/hair6.webp";

const portfolio = [
  { src: hair },
  { src: hair1 },
  { src: hair2 },
  { src: hair3 },
  { src: hair4 },
  { src: hair5 },
  { src: hair6 },
];

import RoomGallery from "../../../components/Rooms/Gallery/RoomGallery";
import PriceBlock from "../../../components/Rooms/Price/PriceBlock";
import hairImages from "./hairRoomImages";
import { hairTabs, hairPricesByTab } from "./hairPriceData";

const HairRoom = () => {
  return (
    <>
      <RoomMainScreen
        title="комната волос"
        quote="Сила природы в каждом локоне"
        variant="light"
        portfolio={portfolio}
      />
      <RoomGallery images={hairImages} />
      <PriceBlock
        tabs={hairTabs}
        defaultTabKey="womenCuts"
        pricesByTab={hairPricesByTab}
        theme="light"
        variant="light"
      />
    </>
  );
};

export default HairRoom;
