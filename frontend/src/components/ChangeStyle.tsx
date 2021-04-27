import React, { useEffect, useLayoutEffect, useState } from "react";
import "./ChangeStyle.scss";
import {
    Button,
    Card,
    Col,
    Menu,
    message,
    Radio,
    Row,
    Slider,
    Tabs,
} from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { ReactComponent as pushchair } from "../assets/images/pushchair.svg";
import { ReactComponent as stroller } from "../assets/images/stroller.svg";
import { ReactComponent as childseat } from "../assets/images/childseat.svg";
import img from "../assets/images/slider/frame00050.png";
import { generateStyle } from "../API";
import { Style } from "./Style";
import { motion } from "framer-motion";
import { pageAnimation, pageTransition } from "../Animation";
const base_url = "http://localhost:8000/";
const { SubMenu } = Menu;
const { TabPane } = Tabs;
interface ChangeStyleProps {
    onGenerateImages: (isLoad: boolean) => void;
    inspiration: string;
}
export const ChangeStyle: React.FC<ChangeStyleProps> = ({
    onGenerateImages,
    inspiration,
}: ChangeStyleProps) => {
    console.log(inspiration);
    const [isFirst, setisFirst] = useState(true);
    const [loading, setloading] = useState(true);
    const [rand, setrand] = useState(1);
    const style = Style();
    const [typeSelected, settypeselected] = useState(inspiration.split("_")[0]);
    const styleCategoriesData = style.find((s) => s.type == typeSelected)
        ?.style;
    const styleCategories = (styleCategoriesData as any).map(
        (cat: any) => cat.type
    );
    const [slider, setslider] = useState(11);
    const [styleCategorySelected, setstyleCategorySelected] = useState(
        styleCategories[0]
    );
    const [styleType, setstyleType] = useState(
        (styleCategorySelected as any)[0].type
    );

    const [styleSelected, setstyleSelected] = useState(
        styleCategoriesData?.find((cat) => cat.type == styleCategorySelected)
            ?.style[0]
    );
    const [styleGenerated, setstyleGenerated] = useState(
        styleCategoriesData?.find((cat) => cat.type == styleCategorySelected)
            ?.style[0]
    );
    const [styleGeneratedStep, setstyleGeneratedStep] = useState(11);
    const [imgDisplay, setimgDisplay] = useState("");
    const [imgsNames, setimgsNames] = useState(new Array());
    const styleList = (styleCategoriesData as any).find(
        (styleCat: any) => styleCat.type === styleCategorySelected
    ).style;
    const success = () => {
        message.success({
            content: <span className="custom-class-text">Style Applied</span>,
            className: "custom-class",
            duration: 1,
        });
    };
    useEffect(() => {
        setstyleSelected(
            styleCategoriesData?.find(
                (cat) => cat.type == styleCategorySelected
            )?.style[0]
        );
        return () => {};
    }, [styleCategorySelected]);

    const tempImgsNames: string[] = [];
    useEffect(() => {
        for (let i = 1; i <= 20; i++) {
            let filename = styleSelected?.type + "_step_" + i;
            tempImgsNames.push(filename);
        }
        setimgDisplay(tempImgsNames[0]);
        setimgsNames(tempImgsNames);
        return () => {};
    }, [styleSelected]);

    useEffect(() => {
        setloading(true);
        onGenerateImages(true);
        setrand(Math.random());
        if (isFirst) {
            generateStyle(
                isFirst,
                typeSelected,
                "",
                inspiration,
                "" + styleSelected?.type
            ).then(() => {
                console.log("generateStyle Done");
                onGenerateImages(false);
                setloading(false);
            });
            setisFirst(false);
        } else {
            generateStyle(
                isFirst,
                typeSelected,
                "" + styleGenerated?.type,
                styleGenerated?.type + "_step_" + styleGeneratedStep,
                "" + styleSelected?.type
            ).then(() => {
                console.log("generateStyle Done");
                onGenerateImages(false);
                setloading(false);
                setslider(11);
            });
        }
        console.log(styleSelected);
        return () => {};
    }, [styleSelected]);

    return (
        <>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageAnimation}
                transition={pageTransition}
                style={{
                    transformStyle: "preserve-3d",
                    position: "absolute",
                    width: "100%",
                    backfaceVisibility: "hidden",
                }}
            >
                <Row className="container">
                    <Col span={12}>
                        <div className="styled-images">
                            {!loading &&
                                imgsNames.map((img) => {
                                    // console.log(img);
                                    return (
                                        <img
                                            src={
                                                base_url +
                                                "output/" +
                                                typeSelected +
                                                "/" +
                                                styleSelected?.type +
                                                "/" +
                                                img +
                                                ".jpg?" +
                                                rand
                                            }
                                            alt=""
                                            className={
                                                styleSelected?.type +
                                                    "_step_" +
                                                    slider !==
                                                img
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
                            <p>Set style for each part of the product</p>
                            <Row>
                                {(styleCategories as any).map((style: any) => {
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
                                {styleList.map((s: any) => {
                                    return (
                                        <Col>
                                            <Card
                                                className={
                                                    "select-style" +
                                                    " " +
                                                    (styleSelected?.type ===
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
                                                {/*  */}
                                                <h3>
                                                    {(
                                                        "" +
                                                        s.type.match(
                                                            "(?<=" +
                                                                typeSelected +
                                                                "_).*"
                                                        )
                                                    ).replace("_", " ")}
                                                </h3>
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
                                        <Row>
                                            <Col span={3}>
                                                <h3 style={{ color: "white" }}>
                                                    More Simple
                                                </h3>
                                            </Col>
                                            <Col
                                                span={18}
                                                style={{ padding: "4px 16px" }}
                                            >
                                                <Slider
                                                    min={1}
                                                    max={20}
                                                    value={slider}
                                                    className="custom-slider"
                                                    onChange={(val: any) => {
                                                        setslider(val);
                                                    }}
                                                />
                                            </Col>
                                            <Col span={3}>
                                                <h3 style={{ color: "white" }}>
                                                    More Complex
                                                </h3>
                                            </Col>
                                        </Row>
                                        <Button
                                            className="btn-apply-style"
                                            type="primary"
                                            onClick={() => {
                                                setstyleGenerated(
                                                    styleSelected
                                                );
                                                setstyleSelected(styleSelected);
                                                setstyleGeneratedStep(slider);
                                                success();
                                            }}
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
            </motion.div>
        </>
    );
};
