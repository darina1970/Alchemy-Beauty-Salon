import React from "react";
import RoomGallery from "../../../components/Rooms/Gallery/RoomGallery";
import nailImages from "./nailRoomImages";

const NailsRoom = () => {
  return (
    <div>
      <h1>Комната ноготков</h1>
      <RoomGallery images={nailImages} />
    </div>
  );
};

export default NailsRoom;
