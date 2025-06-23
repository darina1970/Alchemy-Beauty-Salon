import React from "react";
import RoomGallery from "../../../components/Rooms/Gallery/RoomGallery";
import hair1 from "../../../assets/images/RoomHair/hair1.png";
import hair2 from "../../../assets/images/RoomHair/hair2.png";
import hair3 from "../../../assets/images/RoomHair/hair3.png";
import hair4 from "../../../assets/images/RoomHair/hair4.png";
import hair5 from "../../../assets/images/RoomHair/hair5.png";
import hair6 from "../../../assets/images/RoomHair/hair6.png";

const HairRoom = () => {
  const hairImages = [
    { src: hair1, alt: "Пример работы с волосами 1" },
    { src: hair2, alt: "Пример работы с волосами 2" },
    { src: hair3, alt: "Пример работы с волосами 3" },
    { src: hair4, alt: "Пример работы с волосами 4" },
    { src: hair5, alt: "Пример работы с волосами 5" },
    { src: hair6, alt: "Пример работы с волосами 6" },
  ];
  return (
    <div>
      <h1>Комната волос</h1>
      <RoomGallery images={hairImages} />
    </div>
  );
};

export default HairRoom;
