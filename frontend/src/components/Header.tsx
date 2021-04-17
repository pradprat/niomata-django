import React, { useLayoutEffect, useState } from "react";
import "./Header.scss";
import logo from "../assets/images/logo/niomata_logo_black1.png";
import { Col, Menu, Row } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Progress } from "./Progress";
const { SubMenu } = Menu;

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
    return (
        <header>
            <Row>
                <Col flex="0" style={{ marginRight: 32 }}>
                    <div className="logo">
                        <h1 style={{ color: "#1f3260" }}>
                            <strong>AR</strong>kid
                        </h1>
                        {/* <img src={logo} height="30" /> */}
                    </div>
                </Col>
                <Col
                    flex={1}
                    style={{
                        marginRight: "auto",
                        marginLeft: "auto",
                        maxWidth: 1280,
                    }}
                >
                    <Progress></Progress>
                </Col>
                <Col flex="0" style={{ marginLeft: 32 }}>
                    <div className="menu">
                        <Menu
                            className="menu-nav"
                            mode="horizontal"
                            inlineCollapsed={false}
                            overflowedIndicator={<MenuOutlined />}
                        >
                            <Menu.Item key="Home">Back To Home</Menu.Item>
                        </Menu>
                    </div>
                </Col>
            </Row>
        </header>
    );
};
