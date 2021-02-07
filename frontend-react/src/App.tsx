import React, { useLayoutEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./assets/css/animate.css";
import "./assets/css/lightcase.css";
import "./assets/css/simple-line-icons.css";
import "./assets/css/ElegantIcons.css";
import "./assets/css/swiper.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/home-5-style.css";
import "./assets/css/responsive.css";
import { Navbar } from "./components/Navbar";
import { Main } from "./Contents/Home";
import { Feature } from "./Contents/Feature";
import { Screenshot } from "./Contents/Screenshot";

function App() {
  
  useLayoutEffect(() => {
    document.addEventListener("scroll",()=>{
      
    })
    return () => {};
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Main></Main>
     <Feature></Feature>
     <Screenshot></Screenshot>
    </div>
  );
}

export default App;
