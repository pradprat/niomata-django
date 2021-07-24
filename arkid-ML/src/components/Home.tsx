import React, { useLayoutEffect, useState } from "react";
import "./Home.scss";
import background from "../assets/images/rectangle.svg";
import stroller from "../assets/images/start/stroller3.png";
import { Button, Menu } from "antd";

const { SubMenu } = Menu;

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <div className="home">
      {/* <img src={background} className="home-background" /> */}
      
      <div className="presentation">
        <div className="home-content">
          <div className="text-content">
          <h1 style={{fontWeight:"bold",fontSize:48}} >New way to <br/>Customize an Image</h1>
          <p>By using artificial intelligence technology, we provide tools that can generate, combine and customize images based on your preferences</p>
          </div>
          <Button className="home-button" type="primary" size={"large"} style={{width:"20vw"}} >Get Started</Button>
        </div>
        <div className="home-images">
          <img src={stroller} alt="stroller" />
        </div>
      </div>
    </div>
  );
};
