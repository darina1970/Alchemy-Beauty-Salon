import React from "react";
import RoomMainScreen from "../../../components/Rooms/RoomMainScreen/RoomMainScreen";

import nails from "../../../assets/images/Services/nails.webp";
import nails1 from "../../../assets/images/Rooms/NailsRoom/nails1.webp";
import nails2 from "../../../assets/images/Rooms/NailsRoom/nails2.webp";
import nails3 from "../../../assets/images/Rooms/NailsRoom/nails3.webp";
import nails4 from "../../../assets/images/Rooms/NailsRoom/nails4.webp";

const portfolio = [
  { src: nails },
  { src: nails1 },
  { src: nails2 },
  { src: nails3 },
  { src: nails4 },
];

import RoomGallery from "../../../components/Rooms/Gallery/RoomGallery";
import PriceBlock from "../../../components/Rooms/Price/PriceBlock";
import Sterilization from "../../../pages/OurServices/RoomNails/Sterilization/Sterilization";
import nailImages from "./nailRoomImages";
import { nailsTabs, nailsPricesByTab } from "./nailsPriceData";

const NailsRoom = () => {
  return (
    <div>
      <RoomMainScreen
        title="Комната ноготков"
        quote="алхимия цвета на кончиках пальцев"
        variant="light"
        portfolio={portfolio}
      />
      <RoomGallery images={nailImages} />
      <PriceBlock
        tabs={nailsTabs}
        defaultTabKey="manicure"
        pricesByTab={nailsPricesByTab}
        theme="light"
        variant="light"
      />
      <Sterilization />
    </div>
  );
};

export default NailsRoom;
