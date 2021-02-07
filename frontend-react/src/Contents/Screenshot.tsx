import React, { useLayoutEffect, useState } from "react";
import logo from "../assets/images/logo/niomata_logo_black1.png";
import screenshoot1 from "../assets/images/home/screenshoot1.png"
import screenshoot2 from "../assets/images/home/screenshoot2.png"
import screenshoot3 from "../assets/images/home/screenshoot3.png"
import screenshoot4 from "../assets/images/home/screenshoot4.png"
import screenshoot5 from "../assets/images/home/screenshoot5.png"
interface ScreenshotProps {}


export const Screenshot: React.FC<ScreenshotProps> = () => {
  useLayoutEffect(() => {
    return () => {};
  }, []);
  return (
    <section className="h2-app-screenshot s-padding" id="screenshot">
      <div className="container">
        <div className="s-title">
          <h2>App Screenshots</h2>
          <p>
            Ut totam hymenaeos a quasi enim, duis erat mollitia, pellentesque ac
            metus!
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="swiper-container app-screenshot">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="app-screenshot-item style-2">
                    <img src={screenshoot1} alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="app-screenshot-item style-2">
                    <img src={screenshoot2} alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="app-screenshot-item style-2">
                    <img src={screenshoot3} alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="app-screenshot-item style-2">
                    <img src={screenshoot4} alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="app-screenshot-item style-2">
                    <img src={screenshoot5} alt="" />
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
