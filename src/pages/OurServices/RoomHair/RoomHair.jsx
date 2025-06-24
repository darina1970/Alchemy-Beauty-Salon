import React from "react";
import RoomGallery from "../../../components/Rooms/Gallery/RoomGallery";
import hairImages from "./hairRoomImages";

const HairRoom = () => {
  return (
    <div>
      <h1>Комната волос</h1>
      <RoomGallery images={hairImages} />
    </div>
  );
};

export default HairRoom;
