import React from "react";
import RoomMainScreen from "../../../components/Rooms/RoomMainScreen/RoomMainScreen";

import look1 from "../../../assets/images/Rooms/LookRoom/look1.webp";

const LookRoom = () => {
  return (
    <div>
      <RoomMainScreen
        title="комната взгляда"
        quote="взгляд, в котором живёт сила стихий"
        variant="light"
        portfolio={[{ src: look1 }]}
        useSlider={false}
      />
    </div>
  );
};

export default LookRoom;
