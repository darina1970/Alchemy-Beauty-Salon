import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/Home";
import MastersPage from "../pages/Masters/Masters";
import ServicesPage from "../pages/OurServices/OurServices";

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/masters" element={<MastersPage />} />
                <Route path="/services" element={<ServicesPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;