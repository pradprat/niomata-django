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
import firebase from "firebase/app";
const { SubMenu } = Menu;

interface GenerateImageProps {
    onGenerate: () => any;
}
let base_url = "http://da33ddadf13a.ngrok.io/";
export const GenerateImage: React.FC<GenerateImageProps> = ({ onGenerate }) => {
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({} as any), []);
    const [slider, setslider] = useState(50);
    const [typeSelected, settypeselected] = useState("stroller");
    const [inspirationSelected, setinspirationSelected] = useState(1);
    const [inspirationDisplay, setinspirationDisplay] = useState(
        typeSelected + "_1"
    );
    const [loading, setloading] = useState(true);
    let tempimgsNames: string[] = [];
    const [value, loading_firebase, error] = useDownloadURL(
        firebase.storage().ref("/")
    );
    const [imgsNames, setimgsNames] = useState(new Array());
    const [imgsDisplay, setimgsDisplay] = useState(new Array());
    const storage = firebase.storage();
    const storageRef = storage.ref();

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
                        console.log(filename);
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
                        // console.log(filename);
                        setinspirationDisplay(filename);
                    }, num * 25);
                }
            }
        } else {
            for (let revNum = 3; revNum > -1; revNum--) {
                if (revNum === 0) {
                    setTimeout(() => {
                        let filename = typeSelected + "_" + inspiration;
                        console.log(filename);
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
                        console.log(filename);
                        setinspirationDisplay(filename);
                    }, (3 - revNum) * 25);
                }
            }
        }
    };

    const setImage = (type: string) => {
        // console.log(type);
        // console.log(typeSelected);
        // console.log(imgsNames);

        imgsNames.map((img) => {
            storageRef
                .child("output/" + type + "/" + img + ".jpg")
                .getDownloadURL()
                .then((url) => {
                    // console.log(url);
                    try {
                        let a = imgsDisplay.find(
                            (imgDis) => imgDis.name === img
                        ).url;
                    } catch (error) {
                        let imgDisplayTemp = imgsDisplay;
                        imgDisplayTemp.push({ url: url, name: img });
                        setimgsDisplay(imgDisplayTemp);
                    }
                    // if (imgsDisplay.find((imgDis) => imgDis.name === img).url) {
                    //     console.log(img);
                    // } else {
                    //     console.log(img);
                    // }
                })
                .catch(function (error) {
                    console.log(error);
                });
        });
    };

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
        tempimgsNames = Array.from(new Set(tempimgsNames));
        setimgsNames(tempimgsNames);
        console.log(tempimgsNames);
        setinspirationDisplay(typeSelected + "_1");
        setinspirationSelected(1);

        return () => {};
    }, [typeSelected]);

    useEffect(() => {
        console.log(imgsNames);

        console.log(typeSelected);
        setImage(typeSelected);
        setinspirationDisplay(typeSelected + "_1");
        setinspirationSelected(1);
        return () => {};
    }, [imgsNames]);


    useEffect(() => {
        forceUpdate();
        return () => {
        }
    }, [imgsDisplay])

    return (
        <>
            <div>
                <Row className="container">
                    <Col span={12}>
                        <div className="generated-images">
                            {/* {!loading && (
                                <img
                                    src={
                                        base_url +
                                        typeSelected +
                                        "/" +
                                        typeSelected +
                                        "_" +
                                        1 +
                                        "_to_" +
                                        (1 + 1) +
                                        "_0" +
                                        ".jpg"
                                    }
                                    // src={
                                    //   require("../assets/images/slider/inspiration2/" +
                                    //     name +
                                    //     ".png").default
                                    // }
                                    alt=""
                                />
                            )} */}
                            {/* {imgsNames.map((name: string) => {
                                try {
                                    return (
                                        <img
                                            src={
                                                require("../assets/images/output/" +
                                                    typeSelected +
                                                    "/" +
                                                    name +
                                                    ".jpg").default
                                            }
                                            alt=""
                                            className={
                                                inspirationDisplay !== name
                                                    ? "invisible"
                                                    : ""
                                            }
                                        />
                                    );
                                } catch (e) {}
                            })} */}
                            {imgsDisplay.map((img: any) => {
                                
                                return (
                                    <img
                                        src={img.url}
                                        alt=""
                                        className={
                                            // inspirationDisplay !== img.name
                                            false
                                                ? "invisible"
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
                                <Icon component={pushchair}></Icon>
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
                                <Icon component={stroller}></Icon>
                            </Button>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="generate-controller">
                            <h1>Inspiration</h1>
                            <Row>
                                {[1, 2, 3, 4, 5, 6].map((num) => (
                                    <Col>
                                        <Card
                                            className={
                                                "inspiration-thumbnail " +
                                                (inspirationSelected === num
                                                    ? "active-inspiration-thumbnail"
                                                    : "")
                                            }
                                            hoverable
                                            onClick={() => {
                                                changeInspiration(num);
                                                setinspirationSelected(num);
                                            }}
                                        >
                                            <img
                                                // src={
                                                //     base_url +
                                                //     typeSelected +
                                                //     "/" +
                                                //     typeSelected +
                                                //     "_" +
                                                //     num +
                                                //     ".jpg?"+Math.random()
                                                // }
                                                src={
                                                    require("../assets/images/output/" +
                                                        typeSelected +
                                                        "/" +
                                                        typeSelected +
                                                        "_" +
                                                        num +
                                                        ".jpg").default
                                                }
                                            ></img>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                            <Button className="btn-generate-inspiration">
                                Generate Other
                            </Button>
                            <Button className="btn-customize" type="primary">
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
