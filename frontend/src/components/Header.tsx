import React, { useLayoutEffect, useState } from "react";
import "./Header.scss";
import logo from "../assets/images/logo/niomata_logo_black1.png";
import { Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <div className="logo">
        <h1 style={{color:"white"}}><strong>AR</strong>kid</h1>
        {/* <img src={logo} height="30" /> */}
      </div>
      <div className="menu">
        <Menu
          className="menu-nav"
          mode="horizontal"
          inlineCollapsed={false}
          overflowedIndicator={<MenuOutlined />}
        >
          <Menu.Item key="Home">Back To Home</Menu.Item>
          {/* <Menu.Item key="About Us">About Us</Menu.Item>
          <SubMenu key="Features" title="Features">
            <Menu.Item key="setting:1">Back To Home</Menu.Item>
          </SubMenu> */}
        </Menu>
      </div>
    </header>
  );
};
