import React from "react";
import RoomGallery from "../../../components/Rooms/Gallery/RoomGallery";
import lookImages from "./lookRoomImages";

const LookRoom = () => {
  return (
    <div>
      <h1>Комната взгляда</h1>
      <RoomGallery images={lookImages} />
    </div>
  );
};

export default LookRoom;
