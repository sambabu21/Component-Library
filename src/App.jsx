import { BrowserRouter, Route, Routes } from "react-router-dom";
import BadgesSection from "./Components/Badges/Index";
import BannerSection from "./Components/Alerts/Index";
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
import AlertSection from "./Components/Alerts/Index";
import { createContext, useState } from "react";

const NavContext = createContext();
export { NavContext };

function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <NavContext.Provider value={{navOpen,setNavOpen}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/components" element={<ComponentDetailLayout />}>
              <Route path="/components" element={<Components />} />
              <Route path="/components/avatars" element={<AvatarSection />} />
              <Route path="/components/badges" element={<BadgesSection />} />
              <Route path="/components/alerts" element={<AlertSection />} />
              <Route path="/components/buttons" element={<ButtonSection />} />
              <Route path="/components/menu" element={<MenuSection />} />
              <Route path="/components/toasts" element={<ToastSection />} />
              <Route path="/components/tooltips" element={<TooltipSection />} />
              <Route path="/components/cards" element={<CardSection />} />
              <Route
                path="/components/testimonials"
                element={<TestimonialsSection />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </NavContext.Provider>
  );
}

export default App;
