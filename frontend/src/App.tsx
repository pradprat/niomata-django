import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./antd.less";
import "./App.scss";
import { Header } from "./components/Header";
import { GenerateImage } from "./components/GenerateImage";
import { ChangeStyle } from "./components/ChangeStyle";
import { Loading } from "./components/Loading";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import { ChangeTexture } from "./components/ChangeTexture";
import { Progress } from "./components/Progress";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import { ChooseType } from "./components/ChooseType";
import { AnimatePresence } from "framer-motion";
function App() {
    const location = useLocation();
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
        <div className="App" style={{ perspective: "4000px" }}>
            {/* {loading && <Loading></Loading>} */}
            <Header></Header>
            <div>
                <AnimatePresence>
                    <Switch location={location} key={location.pathname}>
                        <Route
                            path="/generateimage"
                            render={() => (
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
                        />
                        <Route
                            path="/changeStyle"
                            render={() => (
                                <ChangeStyle
                                    inspiration={inspiration}
                                    onGenerateImages={(isLoad) => {
                                        setloading(isLoad);
                                    }}
                                ></ChangeStyle>
                            )}
                        ></Route>
                        <Route
                            path="/changetexture"
                            render={() => <ChangeTexture></ChangeTexture>}
                        ></Route>
                        <Route
                            path="/"
                            render={() => <ChooseType></ChooseType>}
                        ></Route>
                    </Switch>
                </AnimatePresence>
            </div>

            {/* <ChangeStyle></ChangeStyle> */}
            {/* <ChangeTexture></ChangeTexture> */}
        </div>
    );
}

export default App;
