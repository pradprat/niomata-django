import { Button, Col, Modal, Row } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useLayoutEffect, useState } from "react";
import background from "../assets/images//background/background2.png";
import "./ChooseType.scss";
import Icon from "@ant-design/icons";
import { ReactComponent as pushchair } from "../assets/images/pushchair.svg";
import { ReactComponent as stroller } from "../assets/images/stroller.svg";
import { ReactComponent as childseat } from "../assets/images/childseat.svg";
import { useHistory } from "react-router-dom";
import { pageAnimation, pageTransition } from "../Animation";
interface ChooseTypeProps {
    typeSelected: string;
    onTypeSelected: (type: string) => any;
}
export const ChooseType: React.FC<ChooseTypeProps> = ({
    typeSelected,
    onTypeSelected,
}: ChooseTypeProps) => {
    const history = useHistory();
    const [type, settype] = useState("Stroller");
    const [isStarted, setisStarted] = useState(false);
    const types = ["Stroller", "Childseat", "Pushchair"];
    var interval = null as any;
    useEffect(() => {
        var i = 0;

        interval = setInterval(() => {
            console.log(i);
            settype(types[i]);
            if (i < 2) {
                i++;
            } else {
                i = 0;
            }
        }, 3000);
        return () => {
            clearInterval(interval);
        };
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
                }}
            >
                <img className="home-background" src={background} />
                <motion.div className="choose-type">
                    <Row className="container">
                        <Col span={12}>
                            <div className="text-container">
                                <h1>
                                    Personalized your own{" "}
                                    <motion.span
                                        key={type}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{
                                            duration: 1,
                                            ease: [0.4, 0, 0.6, 0.9],
                                        }}
                                    >
                                        {type}
                                    </motion.span>
                                </h1>
                                <Button
                                    onClick={() => {
                                        setisStarted(true);
                                    }}
                                >
                                    GET STARTED
                                </Button>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="image-container">
                                <motion.span
                                    key={type}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        duration: 1,
                                        ease: [0.4, 0, 0.6, 0.9],
                                    }}
                                >
                                    <img
                                        style={{
                                            display:
                                                type === "Stroller"
                                                    ? ""
                                                    : "none",
                                        }}
                                        height="500"
                                        width="500"
                                        src={
                                            require("../assets/images/selectType/Stroller.png")
                                                .default
                                        }
                                    ></img>
                                    <img
                                        style={{
                                            display:
                                                type === "Pushchair"
                                                    ? ""
                                                    : "none",
                                        }}
                                        height="500"
                                        width="500"
                                        src={
                                            require("../assets/images/selectType/Pushchair.png")
                                                .default
                                        }
                                    ></img>
                                    <img
                                        style={{
                                            display:
                                                type === "Childseat"
                                                    ? ""
                                                    : "none",
                                        }}
                                        height="500"
                                        width="500"
                                        src={
                                            require("../assets/images/selectType/Childseat.png")
                                                .default
                                        }
                                    ></img>
                                </motion.span>
                            </div>
                        </Col>
                    </Row>
                </motion.div>
                <Modal
                    // closable={false}
                    className="get-started-modal"
                    centered
                    visible={isStarted}
                    onCancel={() => {
                        setisStarted(false);
                    }}
                    // onOk={() => setVisible(false)}
                    // onCancel={() => setVisible(false)}
                    width={1000}
                    footer={false}
                >
                    <div className="display-container">
                        <p>Choose the product you want to customize</p>
                        <h1>{typeSelected}</h1>
                        <AnimatePresence>
                            <motion.span
                                key={typeSelected}
                                initial={{ x: "100vw" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100vw" }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut",
                                }}
                                className="image-holder"
                            >
                                <img
                                    style={{
                                        display:
                                            typeSelected === "stroller"
                                                ? ""
                                                : "none",
                                    }}
                                    height="500"
                                    width="500"
                                    src={
                                        require("../assets/images/selectType/Stroller.png")
                                            .default
                                    }
                                ></img>
                                <img
                                    style={{
                                        display:
                                            typeSelected === "pushchair"
                                                ? ""
                                                : "none",
                                    }}
                                    height="500"
                                    width="500"
                                    src={
                                        require("../assets/images/selectType/Pushchair.png")
                                            .default
                                    }
                                ></img>
                                <img
                                    style={{
                                        display:
                                            typeSelected === "childseat"
                                                ? ""
                                                : "none",
                                    }}
                                    height="500"
                                    width="500"
                                    src={
                                        require("../assets/images/selectType/Childseat.png")
                                            .default
                                    }
                                ></img>
                            </motion.span>
                        </AnimatePresence>
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
                                onTypeSelected("pushchair");
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
                                onTypeSelected("childseat");
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
                                onTypeSelected("stroller");
                            }}
                        >
                            <Icon component={pushchair}></Icon>
                        </Button>
                    </div>
                    <Button
                        className="button-start-customize"
                        onClick={() => {
                            setisStarted(false);
                            history.push("/generateimage");
                        }}
                    >
                        Start Customize
                    </Button>
                </Modal>
            </motion.div>
        </>
    );
};
