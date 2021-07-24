import React, { useEffect, useLayoutEffect, useState } from "react";
import "./ChangeTexture.scss";
import { Button, Card, Col, Menu, Modal, Radio, Row, Slider, Tabs } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { ReactComponent as PaintBucket } from "../assets/images/PaintBucket.svg";
import { ReactComponent as Pencil } from "../assets/images/Pencil.svg";
import { ReactComponent as Eraser } from "../assets/images/Eraser.svg";
import img from "../assets/images/slider/frame00050.png";
import { generateStyle, generateTexture } from "../API";
import { Style } from "./Style";
import Icon from "@ant-design/icons";
import Canvas from "./Canvas";
import { AnimatePresence, motion } from "framer-motion";
import { pageAnimation, pageTransition } from "../Animation";
import { Loading } from "./Loading";

const { SubMenu } = Menu;
const { TabPane } = Tabs;
interface ChangeTextureProps {
    isDone: boolean;
    onDone: (isDone: boolean) => any;
}
const base_url = "http://localhost:8000/";
export const ChangeTexture: React.FC<ChangeTextureProps> = ({
    isDone,
    onDone,
}: ChangeTextureProps) => {
    const [fillColor, setfillColor] = useState("#000000");
    const [strokeColor, setstrokeColor] = useState("#000000");
    const [type, settype] = useState("pencil");
    const [loading, setloading] = useState(true);
    useEffect(() => {
        generateTexture().then((data) => {
            console.log(data);
            setloading(false);
        });
        return () => {};
    }, []);
    return (
        <>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageAnimation}
                transition={pageTransition}
                className="page-generate-image"
                style={{
                    transformStyle: "preserve-3d",
                    position: "absolute",
                    width: "100%",
                    backfaceVisibility: "hidden",
                    zIndex: !loading ? 0 : 2,
                }}
            >
                <AnimatePresence>
                    {loading && (
                        <motion.div
                            key={"loading"}
                            // initial={false}
                            animate={{ y: 0 }}
                            exit={{ y: "100vh" }}
                            transition={{
                                // delay: 1,
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                            style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                zIndex: 2,
                            }}
                        >
                            <Loading></Loading>
                        </motion.div>
                    )}
                </AnimatePresence>
                <Row className="container">
                    <Col
                        span={7}
                        className="col-container"
                        style={{ padding: 32 }}
                    >
                        <div className="paint-controller-container">
                            <h1>Set Pushchair Texture</h1>
                            <div className="draw-type-selector">
                                <Button
                                    className={
                                        "button-draw-type-select " +
                                        (type === "pencil"
                                            ? "button-draw-type-select-active"
                                            : "")
                                    }
                                    value="pencil"
                                    onClick={(event) => {
                                        settype("pencil");
                                    }}
                                >
                                    <Icon component={Pencil}></Icon>
                                </Button>
                                {/* <Button
                                    className={
                                        "button-draw-type-select " +
                                        (type === "fill"
                                            ? "button-draw-type-select-active"
                                            : "")
                                    }
                                    value="fill"
                                    onClick={(event) => {
                                        settype("fill");
                                    }}
                                >
                                    <Icon component={PaintBucket}></Icon>
                                </Button> */}
                                <Button
                                    className={
                                        "button-draw-type-select " +
                                        (type === "eraser"
                                            ? "button-draw-type-select-active"
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
                            {!loading && (
                                <Row>
                                    {[1, 2, 3, 4, 5, 6].map((num) => {
                                        return (
                                            <Col>
                                                <Card className="paint-pallete">
                                                    <img
                                                        src={
                                                            base_url +
                                                            "/output/texture/texture_" +
                                                            num +
                                                            ".jpg?" +
                                                            Math.random()
                                                        }
                                                    />
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                </Row>
                            )}
                        </div>
                        <div className="btn-texture-container">
                            <Button className="btn-save-texture" type="primary">
                                {/* <img
                                    src={
                                        require("../assets/images/art_pallete.svg")
                                            .default
                                    }
                                ></img> */}
                                Back
                            </Button>
                            <Button
                                className="btn-save-texture"
                                type="primary"
                                onClick={() => {
                                    onDone(true);
                                }}
                            >
                                {/* <img
                                    src={
                                        require("../assets/images/art_pallete.svg")
                                            .default
                                    }
                                ></img> */}
                                Save
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Modal
                    // closable={false}
                    className="share-modal"
                    centered
                    visible={isDone}
                    onCancel={() => {
                        onDone(false);
                    }}
                    // onOk={() => setVisible(false)}
                    // onCancel={() => setVisible(false)}
                    width={1000}
                    footer={false}
                >
                    <Row>
                        <Col span={12}>
                            <div className="share-image-container">
                                <p>Choose the product you want to customize</p>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="share-text-container">hey</div>
                        </Col>
                    </Row>

                    <div className="type-selector"></div>
                    {/* <Button
                        className="button-start-customize"
                        onClick={() => {
                            setisStarted(false);
                            history.push("/generateimage");
                        }}
                    >
                        Start Customize
                    </Button> */}
                </Modal>
            </motion.div>
        </>
    );
};
