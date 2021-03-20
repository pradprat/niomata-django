import React, { useLayoutEffect, useState } from "react";
import "./ChangeStyle.scss";
import { Button, Col, Menu, Radio, Row, Slider, Tabs } from "antd";
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
      <Row>
        <Col flex="auto">
          <div className="generate-images">
            <img
              src={require("../assets/images/slider/frame00050.png").default}
              alt=""
            />
            <Slider
              onChange={(event: any) => {
                setslider(event);
              }}
              min={50}
              max={99}
              className="custom-slider"
            />
            <br />
            <Button
              className="home-button"
              type="default"
              size={"large"}
              style={{ minWidth: "10vw", margin: 8 }}
            >
              Save Result
            </Button>
            <Button
              className="home-button"
              type="primary"
              size={"large"}
              style={{ minWidth: "10vw", margin: 8 }}
            >
              Texture Customization
            </Button>
          </div>
        </Col>
        <Col flex="500px">
          <div className="custom-configurator">
            <div className="configurator-container">
              <Tabs defaultActiveKey="Tire" onChange={()=>{}} style={{width:"100%"}}>
                <TabPane tab="Tire" key="Tire">
                  Content of Tab Pane 1
                </TabPane>
                <TabPane tab="Hood" key="Hood">
                  Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Shaft" key="Shaft">
                  Content of Tab Pane 3
                </TabPane>
                <TabPane tab="Bag" key="Bag">
                  Content of Tab Pane 3
                </TabPane>
                <TabPane tab="Basket" key="Basket">
                  Content of Tab Pane 3
                </TabPane>
              </Tabs>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
