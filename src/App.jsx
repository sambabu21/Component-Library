import { BrowserRouter, Route, Routes } from "react-router-dom";
import BadgesSection from "./Components/Badges/Index";
import BannerSection from "./Components/Banner/Index";
import ButtonSection from "./Components/Button/Index";
import CardSection from "./Components/Cards/Index";
import Footer from "./Components/Footer";
import Home from "./Components/HomePage/Home";
import MenuSection from "./Components/Menu/Index";
import TestimonialsSection from "./Components/Testimonials/Index";
import ToastSection from "./Components/Toast";
import TooltipSection from "./Components/Tooltips/Index";
import MainLayout from "./Layout/MainLayout";
import Components from "./ComponentPage/Components";
import AvatarSection from "./Components/Avatar/Index";
import ComponentDetailLayout from "./Layout/ComponentDetailLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />}/>
            <Route path="/components" element={<ComponentDetailLayout />}>
                <Route path="/components" element={<Components />}/>
                <Route path="/components/avatars" element={<AvatarSection />}/>
                <Route path="/components/badges" element={<BadgesSection />}/>
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
