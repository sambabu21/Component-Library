import BadgesSection from "./Components/Badges/Index";
import BannerSection from "./Components/Banner/Index";
import ButtonSection from "./Components/Button/Index";
import CardSection from "./Components/Cards/Index";
import Header from "./Components/Header";
import MenuSection from "./Components/Menu/Index";


function App() {

  return (
    <div className="w-full md:w-[80vw] mx-auto">
      <Header />
      <ButtonSection />
      <MenuSection />
      <BadgesSection />
      <BannerSection />
      <CardSection />
    </div>
  )
}

export default App
