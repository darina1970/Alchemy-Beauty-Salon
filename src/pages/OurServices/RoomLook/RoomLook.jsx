import React from "react";
import RoomMainScreen from "../../../components/Rooms/RoomMainScreen/RoomMainScreen";

import look from "../../../assets/images/Services/look.webp";

const LookRoom = () => {
  return (
    <div>
      <RoomMainScreen
        title="комната взгляда"
        quote="взгляд, в котором живёт сила стихий"
        variant="light"
        portfolio={[{ src: look }]}
        useSlider={false}
      />
    </div>
  );
};

export default LookRoom;
