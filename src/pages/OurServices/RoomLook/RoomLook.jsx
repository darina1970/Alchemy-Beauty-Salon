import React from "react";
import RoomGallery from "../../../components/Rooms/Gallery/RoomGallery";
import look1 from "../../../assets/images/Rooms/RoomLook/look1.webp";
import look2 from "../../../assets/images/Rooms/RoomLook/look2.webp";
import look3 from "../../../assets/images/Rooms/RoomLook/look3.webp";
import look4 from "../../../assets/images/Rooms/RoomLook/look4.webp";
import look5 from "../../../assets/images/Rooms/RoomLook/look5.webp";
import look6 from "../../../assets/images/Rooms/RoomLook/look6.webp";

const LookRoom = () => {
  const lookImages = [
    { src: look1, alt: "Пример работы со взлядом 1" },
    { src: look2, alt: "Пример работы со взлядом 2" },
    { src: look3, alt: "Пример работы со взлядом 3" },
    { src: look4, alt: "Пример работы со взлядом 4" },
    { src: look5, alt: "Пример работы со взлядом 5" },
    { src: look6, alt: "Пример работы со взлядом 6" },
  ];
  return (
    <div>
      <h1>Комната взгляда</h1>
      <RoomGallery images={lookImages} />
    </div>
  );
};

export default LookRoom;
