import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import NavBarComponent from "./Components/NavBarComponent/NavBarComponent";
import FooterComp from "./Components/Footer/FooterComp";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";

function App() {
  const [Position, setPosition] = useState(0);

  const handleScroll = (e) => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    let Position = Math.ceil((scrollTop / (scrollHeight - clientHeight)) * 100);
    setPosition(Position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <div className="progress" style={{ width: `${Position}%` }}></div>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <FooterComp
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7832.493127254315!2d76.96584845522595!3d11.020118441084893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85854304fc4f9%3A0x579d1a66f19910ea!2s4th%20St%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1721750458875!5m2!1sen!2sin"
        width="400"
        height="200"
        style="border:0;"
      />
    </>
  );
}

export default App;
