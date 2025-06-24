import React from "react";
import RoomGallery from "../../../components/Rooms/Gallery/RoomGallery";
import nail1 from "../../../assets/images/Rooms/RoomNail/nail1.webp";
import nail2 from "../../../assets/images/Rooms/RoomNail/nail2.webp";
import nail3 from "../../../assets/images/Rooms/RoomNail/nail3.webp";
import nail4 from "../../../assets/images/Rooms/RoomNail/nail4.webp";
import nail5 from "../../../assets/images/Rooms/RoomNail/nail5.webp";
import nail6 from "../../../assets/images/Rooms/RoomNail/nail6.webp";

const NailsRoom = () => {
  const nailImages = [
    { src: nail1, alt: "Пример работы с ногтями 1" },
    { src: nail2, alt: "Пример работы с ногтями 2" },
    { src: nail3, alt: "Пример работы с ногтями 3" },
    { src: nail4, alt: "Пример работы с ногтями 4" },
    { src: nail5, alt: "Пример работы с ногтями 5" },
    { src: nail6, alt: "Пример работы с ногтями 6" },
  ];
  return (
    <div>
      <h1>Комната ноготков</h1>
      <RoomGallery images={nailImages} />
    </div>
  );
};

export default NailsRoom;
