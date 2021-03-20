import React, { useLayoutEffect, useState } from "react";
import "./GenerateImage.scss";
import { Button, Card, Col, Menu, Radio, Row, Slider } from "antd";
import Icon from "@ant-design/icons";
import { ReactComponent as pushchair } from "../assets/images/pushchair.svg";
import { ReactComponent as stroller } from "../assets/images/stroller.svg";
import { ReactComponent as childseat } from "../assets/images/childseat.svg";
import img from "../assets/images/slider/frame00050.png";

const { SubMenu } = Menu;

interface GenerateImageProps {
  onGenerate: () => any;
}

export const GenerateImage: React.FC<GenerateImageProps> = ({ onGenerate }) => {
  const [slider, setslider] = useState(50);
  const [typeSelected, settypeselected] = useState("pushchair");
  const [inspirationSelected, setinspirationSelected] = useState(1);
  const imgsNumber = [];
  for (let i = 50; i < 100; i++) {
    imgsNumber.push(i);
  }
  return (
    <>
      <div>
        <Row className="container">
          <Col span={12}>
            <div className="generated-images">
              {imgsNumber.map((num: number) => {
                return (
                  <img
                    src={
                      require("../assets/images/slider/frame000" + num + ".png")
                        .default
                    }
                    alt=""
                    className={num !== slider ? "invisible" : ""}
                  />
                );
              })}
            </div>
            <div className="type-selector">
              <Button
                className={
                  "button-type-select " +
                  (typeSelected === "pushchair" ? "button-type-active" : "")
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
                  (typeSelected === "childseat" ? "button-type-active" : "")
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
                  (typeSelected === "stroller" ? "button-type-active" : "")
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
                    </Card>
                  </Col>
                ))}
              </Row>
              <Button className="btn-generate-inspiration">
                Generate Other
              </Button>
              <Button className="btn-customize" type="primary">
                <img
                  src={require("../assets/images/art_pallete.svg").default}
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
