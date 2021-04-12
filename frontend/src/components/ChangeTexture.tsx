import React, { useEffect, useLayoutEffect, useState } from "react";
import "./ChangeTexture.scss";
import { Button, Card, Col, Menu, Radio, Row, Slider, Tabs } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { ReactComponent as PaintBucket } from "../assets/images/PaintBucket.svg";
import { ReactComponent as Pencil } from "../assets/images/Pencil.svg";
import { ReactComponent as Eraser } from "../assets/images/Eraser.svg";
import img from "../assets/images/slider/frame00050.png";
import { generateStyle } from "../API";
import { Style } from "./Style";
import Icon from "@ant-design/icons";
import Canvas from "./Canvas";

const { SubMenu } = Menu;
const { TabPane } = Tabs;
interface ChangeTextureProps {}
export const ChangeTexture: React.FC<ChangeTextureProps> = () => {
    const [fillColor, setfillColor] = useState("#000000");
    const [strokeColor, setstrokeColor] = useState("#000000");
    const [type, settype] = useState("pencil");
    return (
        <>
            <div>
                <Row className="container">
                    <Col span={7} className="col-container">
                        <div className="paint-controller-container">
                            <h1>Set Pushchair Texture</h1>
                            <div className="type-selector">
                                <Button
                                    className={
                                        "button-type-select " +
                                        (type === "pencil"
                                            ? "button-type-active"
                                            : "")
                                    }
                                    value="pencil"
                                    onClick={(event) => {
                                        settype("pencil");
                                    }}
                                >
                                    <Icon component={Pencil}></Icon>
                                </Button>
                                <Button
                                    className={
                                        "button-type-select " +
                                        (type === "fill"
                                            ? "button-type-active"
                                            : "")
                                    }
                                    value="fill"
                                    onClick={(event) => {
                                        settype("fill");
                                    }}
                                >
                                    <Icon component={PaintBucket}></Icon>
                                </Button>
                                <Button
                                    className={
                                        "button-type-select " +
                                        (type === "eraser"
                                            ? "button-type-active"
                                            : "")
                                    }
                                    value="eraser"
                                    onClick={(event) => {
                                        settype("eraser");
                                    }}
                                >
                                    <Icon component={Eraser}></Icon>
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col span={10} className="col-container">
                        <div className="paint-draw-area-container">
                            <Canvas
                                height={500}
                                width={500}
                                fillColor={fillColor}
                                strokeColor={strokeColor}
                                strokeWidth={20}
                                type={type}
                            ></Canvas>
                            {/* <img
                                src={
                                    require("../assets/images/slider/inspiration2/pushchair_1.png")
                                        .default
                                }
                            /> */}
                        </div>
                    </Col>
                    <Col span={7} className="col-container">
                        <div className="paint-pallete-container">
                            <Row>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                                    (num) => {
                                        return (
                                            <Col>
                                                <Card className="paint-pallete"></Card>
                                            </Col>
                                        );
                                    }
                                )}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};
