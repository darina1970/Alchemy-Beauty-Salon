import React from "react";
import RoomMainScreen from "../../../components/Rooms/RoomMainScreen/RoomMainScreen";

import hair from "../../../assets/images/Services/hair.webp";
import hair1 from "../../../assets/images/Rooms/HairRoom/hair2.webp";
import hair2 from "../../../assets/images/Rooms/HairRoom/hair2.webp";
import hair3 from "../../../assets/images/Rooms/HairRoom/hair2.webp";
import hair4 from "../../../assets/images/Rooms/HairRoom/hair2.webp";
import hair5 from "../../../assets/images/Rooms/HairRoom/hair2.webp";
import hair6 from "../../../assets/images/Rooms/HairRoom/hair2.webp";

const portfolio = [
  { src: hair },
  { src: hair1 },
  { src: hair2 },
  { src: hair3 },
  { src: hair4 },
  { src: hair5 },
  { src: hair6 },
];

const HairRoom = () => {
  return (
    <div>
      <RoomMainScreen
        title="комната волос"
        quote="Сила природы в каждом локоне"
        variant="light"
        portfolio={portfolio}
      />
    </div>
  );
};

export default HairRoom;
