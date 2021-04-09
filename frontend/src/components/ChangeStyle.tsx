import React, { useEffect, useLayoutEffect, useState } from "react";
import "./ChangeStyle.scss";
import { Button, Card, Col, Menu, Radio, Row, Slider, Tabs } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { ReactComponent as pushchair } from "../assets/images/pushchair.svg";
import { ReactComponent as stroller } from "../assets/images/stroller.svg";
import { ReactComponent as childseat } from "../assets/images/childseat.svg";
import img from "../assets/images/slider/frame00050.png";
import { generateStyle } from "../API";
import { Style } from "./Style";

const { SubMenu } = Menu;
const { TabPane } = Tabs;
interface ChangeStyleProps {}
const base_url = "http://749963837cd3.ngrok.io/";
export const ChangeStyle: React.FC<ChangeStyleProps> = () => {
    // const styleCategories = ["Tire", "Basket", "Hood", "Shaft", "Bag"];
    const style = Style();

    console.log(style);

    // const style = [
    //     { id: "1101", name: "Default" },
    //     { id: "1101", name: "Sport" },
    //     { id: "1101", name: "Sport" },
    //     { id: "1101", name: "Sport" },
    //     { id: "1101", name: "Sport" },
    // ];
    const [typeSelected, settypeselected] = useState("stroller");

    const styleCategories = style
        .find((s) => s.type == typeSelected)
        ?.style.map((s) => s.type) as any;
    const [slider, setslider] = useState(50);
    const [styleCategorySelected, setstyleCategorySelected] = useState(
        styleCategories[0]
    );
    const [styleType, setstyleType] = useState(styleCategorySelected[0].type);
    const [styleSelected, setstyleSelected] = useState(style[0]);
    const [imgDisplay, setimgDisplay] = useState("");
    const [imgsNames, setimgsNames] = useState(new Array());

    useEffect(() => {
        return () => {};
    }, []);
    const tempImgsNames: string[] = [];
    useEffect(() => {
        for (let i = 1; i <= 10; i++) {
            let filename =
                typeSelected + "_style_" + styleSelected.type + "_step_" + i;
            tempImgsNames.push(filename);
        }
        console.log(tempImgsNames);

        setimgDisplay(tempImgsNames[0]);
        setimgsNames(tempImgsNames);
        return () => {};
    }, []);
    return (
        <>
            <div>
                <Row className="container">
                    <Col span={12}>
                        <div className="styled-images">
                            {imgsNames.map((img) => {
                                return (
                                    <img
                                        src={
                                            base_url +
                                            "style/" +
                                            typeSelected +
                                            "/" +
                                            img +
                                            ".jpg"
                                        }
                                        alt=""
                                        className={
                                            imgDisplay !== img
                                                ? "invisible"
                                                : ""
                                        }
                                    />
                                );
                            })}
                            {/* <img
                                src={
                                    require("../assets/images/slider/inspiration2/pushchair_1.png")
                                        .default
                                }
                                alt=""
                                // className={
                                //     inspirationDisplay !== name
                                //         ? "invisible"
                                //         : ""
                                // }
                            /> */}
                            {/* {imgsNames.map((name: string) => {
                                try {
                                    return (
                                        <img
                                            src={
                                                require("../assets/images/slider/inspiration2/" +
                                                    name +
                                                    ".png").default
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
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="generate-controller">
                            <h1>Customize {typeSelected}</h1>
                            <Row>
                                {styleCategories.map((style: any) => {
                                    return (
                                        <Col
                                            style={{ marginRight: 8 }}
                                            key={style}
                                        >
                                            <Button
                                                className={
                                                    "btn-select-category-style" +
                                                    " " +
                                                    (styleCategorySelected ===
                                                        style &&
                                                        "btn-select-category-style-selected ")
                                                }
                                                key={style}
                                                onClick={() => {
                                                    setstyleCategorySelected(
                                                        style
                                                    );
                                                }}
                                            >
                                                {style}
                                            </Button>
                                        </Col>
                                    );
                                })}
                            </Row>
                            <Row className="select-style-container">
                                {style.map((s) => {
                                    return (
                                        <Col>
                                            <Card
                                                className={
                                                    "select-style" +
                                                    " " +
                                                    (styleSelected.type ===
                                                        s.type &&
                                                        "select-style-selected")
                                                }
                                                hoverable
                                                onClick={() => {
                                                    setstyleSelected(s);
                                                }}
                                            >
                                                <img
                                                    src={
                                                        require("../assets/images/style/pushchair_default.png")
                                                            .default
                                                    }
                                                ></img>
                                                <h3>{s.type}</h3>
                                            </Card>
                                        </Col>
                                    );
                                })}
                                {/*                                 
                                <Col>
                                    <Card className="select-style" hoverable>
                                        <img
                                            src={
                                                require("../assets/images/style/pushchair_default.png")
                                                    .default
                                            }
                                        ></img>
                                        <h3>Sport</h3>
                                    </Card>
                                </Col> */}
                            </Row>
                            <Row style={{ marginTop: 8 }}>
                                <Col span={24}>
                                    <Card className={"container-slider-style"}>
                                        <Slider
                                            min={1}
                                            max={10}
                                            className="custom-slider"
                                            onChange={(val: any) => {
                                                console.log(val);
                                            }}
                                        />
                                        <Button
                                            className="btn-apply-style"
                                            type="primary"
                                        >
                                            Apply
                                        </Button>
                                    </Card>
                                </Col>
                            </Row>
                            {/* <Button className="btn-generate-inspiration">
                                Generate Other
                            </Button> */}
                            <div className="btn-container">
                                <Button
                                    className="btn-set-texture"
                                    type="primary"
                                >
                                    {/* <img
                                    src={
                                        require("../assets/images/art_pallete.svg")
                                            .default
                                    }
                                ></img> */}
                                    Set Texture <ArrowRightOutlined />
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};
