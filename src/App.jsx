import BadgesSection from "./Components/Badges/Index";
import BannerSection from "./Components/Banner/Index";
import ButtonSection from "./Components/Button/Index";
import CardSection from "./Components/Cards/Index";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import MenuSection from "./Components/Menu/Index";
import TestimonialsSection from "./Components/Testimonials/Index";
import ToastSection from "./Components/Toast";
import TooltipSection from "./Components/Tooltips/Index";

function App() {
  return (
    <>
      <Header />
      <Home />
      <ButtonSection />
      <MenuSection />
      <BadgesSection />
      <BannerSection />
      <CardSection />
      <ToastSection />
      <TooltipSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}

export default App;
