import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import SignUp from "./components/SignUp";
import { Team } from "./components/Team";
import { About } from "./components/about";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { useState, useEffect } from "react";
import Chat from "./components/Chat";
import { onAuthStateChanged } from "firebase/auth";
// import "./App.css";
import { auth } from "./components/firebase/firebase-config";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  useEffect(
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
  );

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Team data={landingPageData.Team} />
      {!user ? <SignUp /> : <Chat />}
    </div>
  );
};

export default App;
