import React, { useLayoutEffect, useState } from "react";
import "./AddTexture.scss";
import { Button, Card, Col, Menu, Radio, Row, Slider, Tabs } from "antd";
import Icon from "@ant-design/icons";
import { ReactComponent as pushchair } from "../assets/images/pushchair.svg";
import { ReactComponent as stroller } from "../assets/images/stroller.svg";
import { ReactComponent as childseat } from "../assets/images/childseat.svg";
import img from "../assets/images/slider/frame00050.png";

const { SubMenu } = Menu;
const { TabPane } = Tabs;
interface AddTextureProps {}

export const AddTexture: React.FC<AddTextureProps> = () => {
    const styleType = ["Tire", "Basket", "Hood", "Shaft", "Bag"];
    const style = [{ name: "Default" }, { name: "Sport" }];
    const [slider, setslider] = useState(50);
    const [styleTypeSelected, setstyleTypeSelected] = useState(styleType[0]);
    const [styleSelected, setstyleSelected] = useState(style[0]);
    return (
        <>
            <div>
                <Row className="container">
                    <Col span={12}>
                        <div className="styled-images">
                            <img
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
                            />
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
                        <div className="style-selector">
                            
                        </div>
                        <div className="style-sliders ">
                            <Slider className="custom-slider" />
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="generate-controller">
                            <h1>Customize Pushchair</h1>
                            <Row>
                                {styleType.map((style) => {
                                    return (
                                        <Col
                                            style={{ marginRight: 8 }}
                                            key={style}
                                        >
                                            <Button
                                                className={
                                                    "btn-select-category-style" +
                                                    " " +
                                                    (styleTypeSelected ===
                                                        style &&
                                                        "btn-select-category-style-selected ")
                                                }
                                                key={style}
                                                onClick={() => {
                                                    setstyleTypeSelected(style);
                                                }}
                                            >
                                                {style}
                                            </Button>
                                        </Col>
                                    );
                                })}
                            </Row>
                            <Row style={{ marginTop: 32 }}>
                                {style.map((s) => {
                                    return (
                                        <Col>
                                            <Card
                                                className={
                                                    "select-style" +
                                                    " " +
                                                    (styleSelected.name ===
                                                        s.name &&
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
                                                <h3>{s.name}</h3>
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
                            {/* <Button className="btn-generate-inspiration">
                                Generate Other
                            </Button> */}
                            <Button className="btn-customize" type="primary">
                                {/* <img
                                    src={
                                        require("../assets/images/art_pallete.svg")
                                            .default
                                    }
                                ></img> */}
                                Set Texture
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};
