import React, { useLayoutEffect, useState } from "react";
import "./Header.scss";
import logo from "../assets/images/logo/niomata_logo_black1.png"
import { Menu } from "antd";
import {
    MenuOutlined
} from "@ant-design/icons";

const { SubMenu } = Menu;

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <div className="logo">
          <img src={logo} height="30" />
      </div>
      <div className="menu">
        <Menu className="menu-nav" mode="horizontal" inlineCollapsed={false} overflowedIndicator={<MenuOutlined />} >
          <Menu.Item key="mail">Navigation One</Menu.Item>
          <Menu.Item key="app">Navigation Two</Menu.Item>
        </Menu>
      </div>
    </header>
  );
};
