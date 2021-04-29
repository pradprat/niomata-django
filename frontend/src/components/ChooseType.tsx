import { Button, Col, Modal, Row } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useLayoutEffect, useState } from "react";
import background from "../assets/images//background/background2.png";
import "./ChooseType.scss";
import Icon from "@ant-design/icons";
import { ReactComponent as pushchair } from "../assets/images/pushchair.svg";
import { ReactComponent as stroller } from "../assets/images/stroller.svg";
import { ReactComponent as childseat } from "../assets/images/childseat.svg";
interface ChooseTypeProps {}
export const ChooseType: React.FC<ChooseTypeProps> = ({}) => {
    const [type, settype] = useState("Stroller");
    const [isStarted, setisStarted] = useState(false);
    const types = ["Stroller", "Childseat", "Pushchair"];
    const [typeSelected, settypeselected] = useState("stroller");
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
                                            type === "Stroller" ? "" : "none",
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
                                            type === "Pushchair" ? "" : "none",
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
                                            type === "Childseat" ? "" : "none",
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
                <div>
                    <p>Choose the product you want to customize</p>
                    <h1>{type}</h1>
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
            </Modal>
        </>
    );
};
