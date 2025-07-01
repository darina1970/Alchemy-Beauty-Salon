import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/Home";
import MastersPage from "../pages/Masters/Masters";
import ServicesPage from "../pages/OurServices/OurServices";
import RoomLayout from "../layouts/RoomLayout";
import HairRoom from "../pages/OurServices/RoomHair/RoomHair";
import NailsRoom from "../pages/OurServices/RoomNails/RoomNails";
import LookRoom from "../pages/OurServices/RoomLook/RoomLook";
import TanRoom from "../pages/OurServices/RoomTan/RoomTan";
import ScrollToHash from "../components/ScrollToHash";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const AppRouter = () => {
    return(
        <BrowserRouter>
            <ScrollToHash />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/masters" element={<MastersPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route element={<RoomLayout />}>
                    <Route path="/services/hair" element={<HairRoom />} />
                    <Route path="/services/nails" element={<NailsRoom />} />
                    <Route path="/services/look" element={<LookRoom />} />
                    <Route path="/services/tan" element={<TanRoom />} />
                </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
