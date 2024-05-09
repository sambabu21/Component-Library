import BadgesSection from "./Components/Badges/Index";
import BannerSection from "./Components/Banner/Index";
import ButtonSection from "./Components/Button/Index";
import CardSection from "./Components/Cards/Index";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MenuSection from "./Components/Menu/Index";
import TestimonialsSection from "./Components/Testimonials/Index";
import ToastSection from "./Components/Toast";
import TooltipSection from "./Components/Tooltips/Index";

function App() {
  return (
    <div className="w-full md:w-[80vw] mx-auto">
      <Header />
      <ButtonSection />
      <MenuSection />
      <BadgesSection />
      <BannerSection />
      <CardSection />
      <ToastSection />
      <TooltipSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;
