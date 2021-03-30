import React, { useState } from "react";
import logo from "./logo.svg";
import "./antd.less";
import "./App.scss";
import { Header } from "./components/Header";
import background from "./assets/images/rectangle.svg";
import { GenerateImage } from "./components/GenerateImage";
import { ChangeStyle } from "./components/ChangeStyle";

function App() {
  const [page, setpage] = useState("generate");
  return (
    <div className="App">
      {/* <img className="home-background" /> */}
      <Header></Header>
      {(page === "generate" && <GenerateImage onGenerate={()=>{setpage("changeStyle")}}></GenerateImage>) || (
        <ChangeStyle></ChangeStyle>
      )}
      {/* <ChangeStyle></ChangeStyle> */}
    </div>
  );
}

export default App;
