import { Navigation } from './components/navigation'
import { Header } from './components/header'
import SignUp from './components/SignUp'
import { Team } from './components/Team'
import { About } from './components/about'
import SmoothScroll from 'smooth-scroll'
import { useState, useEffect } from "react";
import JsonData from "./data/data.json";
import Chat from "./components/Chat";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Team data={landingPageData.Team} />
      <SignUp/>
      <Chat />
    </div>
  );
};

export default App;
