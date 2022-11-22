import React, { useState , useEffect } from "react";
import Header from './components/Header';
import { Typography } from "@mui/material";
import CheckBox from "./components/CheckBox";
import ImageSlider from "./components/ImageSlider";
import EnterButton from "./components/EnterButton.js";

const App = () => {
  const [alergens, setAlergens] = useState([]);

  const slides = [
    { url: "http://localhost:3000/slaytlar/slayt1.png", title: "beach" },
    { url: "http://localhost:3000/slaytlar/slayt2.png", title: "boat" },
    { url: "http://localhost:3000/slaytlar/slayt3.png", title: "forest" },
    { url: "http://localhost:3000/slaytlar/slayt4.png", title: "city" },
    { url: "http://localhost:3000/slaytlar/slayt5.png", title: "italy" },
  ];

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  const navbarStyle = {
    margin:"0 auto",
  };

  return (
    <div>
        <div style = { navbarStyle }>
        <Header/>
        </div>
        <div style={containerStyles}>
            <ImageSlider slides={slides} />
            
        </div>
        {alergens} = <CheckBox/>
        <EnterButton/>
    </div>

    
  );
};

export default App;
