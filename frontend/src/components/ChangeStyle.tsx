import React, { useLayoutEffect, useState } from "react";
import "./ChangeStyle.scss";
import { Button, Card, Col, Menu, Radio, Row, Slider, Tabs } from "antd";
import Icon from "@ant-design/icons";
import { ReactComponent as pushchair } from "../assets/images/pushchair.svg";
import { ReactComponent as stroller } from "../assets/images/stroller.svg";
import { ReactComponent as childseat } from "../assets/images/childseat.svg";
import img from "../assets/images/slider/frame00050.png";

const { SubMenu } = Menu;
const { TabPane } = Tabs;
interface ChangeStyleProps {}

export const ChangeStyle: React.FC<ChangeStyleProps> = () => {
    const [slider, setslider] = useState(50);
    return (
        <>
            <div>
                <Row className="container">
                    <Col span={12}>
                        <div className="styled-images">
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
                        <div className="type-selector">
                            {/* <Button
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
                            </Button> */}
                            {/* <Button
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
                            </Button> */}
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="generate-controller">
                            <h1>Inspiration</h1>
                            <Row>
                                {[1, 2, 3, 4, 5, 6].map((num) => (
                                    <Col>
                                        {/* <Card
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
                                                src={
                                                    require("../assets/images/slider/inspiration/pushchair_" +
                                                        num +
                                                        ".png").default
                                                }
                                            ></img>
                                            {inspirationSelected == num && (
                                                <div className="active-inspiration"></div>
                                            )}
                                        </Card> */}
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
