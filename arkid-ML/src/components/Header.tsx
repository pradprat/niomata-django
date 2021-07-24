import React, { useEffect, useLayoutEffect, useState } from "react";
import "./Header.scss";
import logo from "../assets/images/logo/niomata_logo_black1.png";
import { Col, Menu, Row } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Progress } from "./Progress";
import { useHistory, useLocation } from "react-router-dom";
import logo_arkid from "../assets/images/logo/logo_arkid.svg";
import logo_arkid_white from "../assets/images/logo/logo_arkid_white.svg";
const { SubMenu } = Menu;

interface HeaderProps {
    isDone: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isDone }: HeaderProps) => {
    const history = useHistory();
    const location = useLocation();
    useEffect(() => {
        console.log(location.pathname);

        return () => {};
    }, [location]);
    return (
        <header>
            <Row>
                <Col flex="0" style={{ marginRight: 32 }}>
                    <div
                        className="logo"
                        onClick={() => {
                            history.push("/");
                        }}
                        style={{ cursor: "pointer" }}
                    >
                        <h1 style={{ fill: "#1f3260" }}>
                            {(location.pathname === "/" && (
                                <img src={logo_arkid_white} />
                            )) || <img src={logo_arkid} />}

                            {/* <strong>AR</strong>kid */}
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
                    <Progress isDone={isDone}></Progress>
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
