import React, { useEffect, useLayoutEffect, useState } from "react";
import "./GenerateImage.scss";
import { Button, Card, Col, Menu, Radio, Row, Slider } from "antd";
import Icon from "@ant-design/icons";
import { ReactComponent as pushchair } from "../assets/images/pushchair.svg";
import { ReactComponent as stroller } from "../assets/images/stroller.svg";
import { ReactComponent as childseat } from "../assets/images/childseat.svg";
import img from "../assets/images/slider/frame00050.png";
import { generateImage } from "../API";
import { useDownloadURL } from "react-firebase-hooks/storage";
// import firebase from "firebase/app";
const { SubMenu } = Menu;
const base_url = "http://localhost:8000/";
interface GenerateImageProps {
    onChangeStyle: () => any;
    onGenerateImages: (isLoad: boolean) => void;
    onSelectInspiration: (inspiration: string) => void;
}
export const GenerateImage: React.FC<GenerateImageProps> = ({
    onChangeStyle,
    onGenerateImages,
    onSelectInspiration,
}) => {
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({} as any), []);
    const [slider, setslider] = useState(50);
    const [typeSelected, settypeselected] = useState("stroller");
    const [inspirationSelected, setinspirationSelected] = useState(1);
    const [inspirationDisplay, setinspirationDisplay] = useState(
        typeSelected + "_1"
    );
    const [inspirationImages, setinspirationImages] = useState(new Array());
    const [loading, setloading] = useState(true);
    let tempimgsNames: string[] = [];
    // const [value, loading_firebase, error] = useDownloadURL(
    //     firebase.storage().ref("/")
    // );
    const [imgsNames, setimgsNames] = useState(new Array());
    const [rand, setRand] = useState(1);
    const [imgsDisplay, setimgsDisplay] = useState(new Array());
    // const storage = firebase.storage();
    // const storageRef = storage.ref();

    const changeInspiration = async (inspiration: number) => {
        let first =
            inspiration > inspirationSelected
                ? inspirationSelected
                : inspiration;
        let second =
            inspiration > inspirationSelected
                ? inspiration
                : inspirationSelected;
        let isReverse = inspiration > inspirationSelected;
        if (isReverse) {
            for (let num = 1; num <= 4; num++) {
                if (num === 4) {
                    setTimeout(() => {
                        let filename = typeSelected + "_" + inspiration;
                        setinspirationDisplay(filename);
                    }, num * 25);
                } else {
                    setTimeout(() => {
                        let filename =
                            typeSelected +
                            "_" +
                            first +
                            "_to_" +
                            second +
                            "_" +
                            num;
                        setinspirationDisplay(filename);
                    }, num * 25);
                }
            }
        } else {
            for (let revNum = 3; revNum > -1; revNum--) {
                if (revNum === 0) {
                    setTimeout(() => {
                        let filename = typeSelected + "_" + inspiration;
                        setinspirationDisplay(filename);
                    }, (3 - revNum) * 25);
                } else {
                    setTimeout(() => {
                        let filename =
                            typeSelected +
                            "_" +
                            first +
                            "_to_" +
                            second +
                            "_" +
                            revNum;
                        setinspirationDisplay(filename);
                    }, (3 - revNum) * 25);
                }
            }
        }
    };

    // const setImage = (type: string) => {
    //     imgsNames.map((img) => {
    //         storageRef
    //             .child("output/" + type + "/" + img + ".jpg")
    //             .getDownloadURL()
    //             .then((url) => {
    //                 try {
    //                     let a = imgsDisplay.find(
    //                         (imgDis) => imgDis.name === img
    //                     ).url;
    //                 } catch (error) {
    //                     let imgDisplayTemp = imgsDisplay;
    //                     imgDisplayTemp.push({ url: url, name: img });
    //                     setimgsDisplay(imgDisplayTemp);
    //                     changeInspiration(1);
    //                     setinspirationSelected(1);
    //                 }
    //             })
    //             .catch(function (error) {
    //                 console.log(error);
    //             });
    //     });
    //     setinspirationDisplay(typeSelected + "_1");
    //     setinspirationSelected(1);
    // };
    useEffect(() => {
        onSelectInspiration(typeSelected + "_" + inspirationSelected);
        return () => {};
    }, [inspirationSelected, typeSelected]);
    useEffect(() => {
        for (let i = 1; i < 7; i++) {
            let filename = typeSelected + "_" + i;
            tempimgsNames.push(filename);
            for (let j = i + 1; j < 7; j++) {
                let filename = typeSelected + "_" + j;
                tempimgsNames.push(filename);
                if (i < 6) {
                    for (let l = 1; l <= 3; l++) {
                        let filename =
                            typeSelected + "_" + i + "_to_" + j + "_" + l;
                        tempimgsNames.push(filename);
                    }
                }
            }
        }
        setRand(Math.random());
        tempimgsNames = Array.from(new Set(tempimgsNames));
        setimgsNames(tempimgsNames);
        // console.log(tempimgsNames);

        setinspirationDisplay(typeSelected + "_1");
        setinspirationSelected(1);

        return () => {};
    }, [typeSelected]);

    useEffect(() => {
        generateNewStyle();
        return () => {};
    }, [typeSelected]);

    // useEffect(() => {
    //     setImage(typeSelected);
    //     return () => {};
    // }, [imgsNames]);

    // useEffect(() => {
    //     generateNewStyle();
    //     return () => {};
    // }, []);
    const generateNewStyle = () => {
        setRand(Math.random());
        onGenerateImages(true);
        setloading(true);
        generateImage(typeSelected)
            .then(() => {
                // console.log("Done");
                onGenerateImages(false);
                setloading(false);
                // setImage(typeSelected);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div>
                <Row className="container">
                    <Col span={12}>
                        <div className="generated-images">
                            {!loading &&
                                imgsNames.map((img: any) => {
                                    return (
                                        <img
                                            src={
                                                base_url +
                                                "output/" +
                                                typeSelected +
                                                "/" +
                                                img +
                                                ".jpg?" +
                                                rand
                                            }
                                            alt=""
                                            className={
                                                inspirationDisplay !== img
                                                    ? // false
                                                      "invisible"
                                                    : ""
                                            }
                                        />
                                    );
                                })}
                        </div>
                        <div className="type-selector">
                            <Button
                                className={
                                    "button-type-select " +
                                    (typeSelected === "pushchair"
                                        ? "button-type-active"
                                        : "")
                                }
                                value="pushchair"
                                onClick={(event) => {
                                    settypeselected("pushchair");
                                }}
                            >
                                <Icon component={stroller}></Icon>
                            </Button>
                            <Button
                                className={
                                    "button-type-select " +
                                    (typeSelected === "childseat"
                                        ? "button-type-active"
                                        : "")
                                }
                                value="childseat"
                                onClick={(event) => {
                                    settypeselected("childseat");
                                }}
                            >
                                <Icon component={childseat}></Icon>
                            </Button>
                            <Button
                                className={
                                    "button-type-select " +
                                    (typeSelected === "stroller"
                                        ? "button-type-active"
                                        : "")
                                }
                                value="stroller"
                                onClick={(event) => {
                                    settypeselected("stroller");
                                }}
                            >
                                <Icon component={pushchair}></Icon>
                            </Button>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="generate-controller">
                            <h1>Inspiration</h1>
                            <Row>
                                {!loading &&
                                    [1, 2, 3, 4, 5, 6].map((num) => {
                                        try {
                                            return (
                                                <Col>
                                                    <Card
                                                        className={
                                                            "inspiration-thumbnail " +
                                                            (inspirationSelected ===
                                                            num
                                                                ? "active-inspiration-thumbnail"
                                                                : "")
                                                        }
                                                        hoverable
                                                        onClick={() => {
                                                            changeInspiration(
                                                                num
                                                            );
                                                            setinspirationSelected(
                                                                num
                                                            );
                                                        }}
                                                    >
                                                        <img
                                                            src={
                                                                base_url +
                                                                "output/" +
                                                                typeSelected +
                                                                "/" +
                                                                typeSelected +
                                                                "_" +
                                                                num +
                                                                ".jpg?" +
                                                                rand
                                                            }
                                                            // onLoad={() => {
                                                            //     console.log(
                                                            //         imgDisplay.name
                                                            //     );
                                                            // }}
                                                        ></img>
                                                    </Card>
                                                </Col>
                                            );
                                        } catch (error) {}
                                    })}
                            </Row>
                            <Button
                                className="btn-generate-inspiration"
                                onClick={() => {
                                    generateNewStyle();
                                }}
                            >
                                Generate Other
                            </Button>
                            <Button
                                className="btn-customize"
                                type="primary"
                                onClick={() => {
                                    onChangeStyle();
                                }}
                            >
                                <img
                                    src={
                                        require("../assets/images/art_pallete.svg")
                                            .default
                                    }
                                ></img>
                                Customize
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};
