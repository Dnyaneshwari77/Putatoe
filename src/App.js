import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Small_comp from "./components/small_comp";
import Title from "./components/Title";
import { IconContext } from "react-icons";
import Slider from "./components/Slider";
import BottonMenu from "./components/BottonMenu";
import Main_services from "./components/Main_services";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Small_comp />
      <Title title="All Popular Service Provider" />
      <Slider />
      <Title title="Service We Provider" />
      <Main_services />
      <BottonMenu />
    </div>
  );
}

export default App;
