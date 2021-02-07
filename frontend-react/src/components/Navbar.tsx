import React, { useLayoutEffect, useState } from "react";
import logo from "../assets/images/logo/niomata_logo_black1.png";
interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scroll, setScroll] = useState(0);
  const [pos, setPos] = useState("home");
  onscroll = () => {
    setScroll(window.pageYOffset);
    let home = document.getElementById("home");
    let features = document.getElementById("feature");
    let screenshots = document.getElementById("screenshot");
    let homePos = home?.getBoundingClientRect().top ?? -9999;
    let featuresPos = features?.getBoundingClientRect().top ?? -9999;
    let screenshotsPos = screenshots?.getBoundingClientRect().top ?? -9999;
    if (homePos < 200 && homePos > -200) {
      console.log("homepos", homePos);
      setPos("home");
    }
    
    if (featuresPos < 200 && featuresPos > -200) {
      console.log("featuresPos", featuresPos);
      setPos("feature");
    }
    if (screenshotsPos < 200 && screenshotsPos > -200) {
      console.log("screenshotsPos", screenshotsPos);
      setPos("screenshot");
    }
  };
  useLayoutEffect(() => {
    console.log(pos);

    return () => {};
  }, []);
  return (
    <header className="header">
      <nav
        className={
          "navbar navbar-expand-lg fixed-top nav-c-black " +
          (scroll > 0 ? "sticky-nav" : "")
        }
        id="main-nav"
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img className="white-logo" src={logo} height="34px" alt="" />
            <img className="color-logo" src={logo} height="34px" alt="" />
          </a>
          <button
            className="navbar-toggler order-1"
            type="button"
            data-toggle="collapse"
            data-target="#main-nav-collapse"
            aria-controls="main-nav-collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="menu-toggle">
              <span className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <span className="hamburger-cross">
                <span></span>
                <span></span>
              </span>
            </span>
          </button>
          <div
            className="collapse navbar-collapse order-3 order-lg-2"
            id="main-nav-collapse"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a
                  className={
                    "nav-link nav-link-scroll " +
                    (pos == "home" ? "active" : "")
                  }
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    "nav-link nav-link-scroll " +
                    (pos == "feature" ? "active" : "")
                  }
                  href="#feature"
                >
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    "nav-link nav-link-scroll " +
                    (pos == "screenshot" ? "active" : "")
                  }
                  href="#screenshot"
                >
                  Screenshots
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
