import ButtonSection from "./Components/Button/Index";
import Header from "./Components/Header";
import MenuSection from "./Components/Menu/Index";


function App() {

  return (
    <div className="w-full md:w-[80vw] mx-auto">
      <Header />
      <ButtonSection />
      <MenuSection />
    </div>
  )
}

export default App