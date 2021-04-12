import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./antd.less";
import "./App.scss";
import { Header } from "./components/Header";
import background from "./assets/images/rectangle.svg";
import { GenerateImage } from "./components/GenerateImage";
import { ChangeStyle } from "./components/ChangeStyle";
import { Loading } from "./components/Loading";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import { ChangeTexture } from "./components/ChangeTexture";

function App() {
    const [page, setpage] = useState("generateimage");
    const [loading, setloading] = useState(false);
    const [inspiration, setinspiration] = useState("stroller_1");
    // if (!firebase.apps.length) {
    //     var firebaseConfig = {
    //         apiKey: "AIzaSyCP9sj_xIogRC_5EowwMwQIh9MEvLlCqrk",
    //         authDomain: "niomata-745ae.firebaseapp.com",
    //         databaseURL: "https://niomata-745ae-default-rtdb.firebaseio.com/",
    //         storageBucket: "niomata-745ae.appspot.com",
    //     };
    //     firebase.initializeApp(firebaseConfig);
    // } else {
    //     firebase.app(); // if already initialized, use that one
    // }

    useEffect(() => {
        return () => {};
    }, []);

    return (
        <div className="App">
            {/* <img className="home-background" /> */}
            {loading && <Loading></Loading>}
            <Header></Header>
            {page === "generateimage" && (
                <GenerateImage
                    onChangeStyle={() => {
                        setpage("changeStyle");
                    }}
                    onGenerateImages={(isLoad) => {
                        setloading(isLoad);
                    }}
                    onSelectInspiration={(inpiration) => {
                        setinspiration(inpiration);
                    }}
                ></GenerateImage>
            )}
            {page === "changeStyle" && (
                <ChangeStyle
                    inspiration={inspiration}
                    onGenerateImages={(isLoad) => {
                        setloading(isLoad);
                    }}
                ></ChangeStyle>
            )}
            {/* <ChangeStyle></ChangeStyle> */}
            {/* <ChangeTexture></ChangeTexture> */}
        </div>
    );
}

export default App;
