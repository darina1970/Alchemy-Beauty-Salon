import React from "react";
import RoomMainScreen from "../../../components/Rooms/RoomMainScreen/RoomMainScreen";

import tan from "../../../assets/images/Services/tan.webp";

const TanRoom = () => {
  return (
    <div>
      <RoomMainScreen
        title="комната загара"
        quote="золотое сияние природы"
        variant="light"
        portfolio={[{ src: tan }]}
        useSlider={false}
        showGallery={false}
        showWhatsapp={false}
      />
    </div>
  );
};

export default TanRoom;
