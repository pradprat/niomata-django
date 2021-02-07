import React, { useLayoutEffect, useState } from "react";
import logo from "../assets/images/logo/niomata_logo_black1.png";
interface MainProps {}

export const Main: React.FC<MainProps> = () => {
 
  
  useLayoutEffect(() => {

    return () => {};
  }, []);
  return (
    <section className="home-5-banner bg-img main-banner" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-7">
            <div className="banner-content">
              <div className="">
                <h2
                  className="title wow fadeInUp"
                  data-wow-duration=".65s"
                  data-wow-delay=".1s"
                >
                  A new way to make simple Image Customization
                </h2>
              </div>
              <div className="">
                <span
                  className="sub-title wow fadeInUp"
                  data-wow-duration=".65s"
                  data-wow-delay=".3s"
                >
                  Magna exercitation! Dolor accumsan sapiente, curabitur
                  voluptate minim quidem placeat.
                </span>
              </div>
              <div className="btn-wrapper">
                <a
                  className="btn store-btn wow fadeInUp"
                  data-wow-duration=".65s"
                  data-wow-delay=".6s"
                  href="{{route('design')}}"
                >
                  <i className="fa fa-recycle fa-lg mr-2"></i>
                  <span>Design Combination</span>
                </a>
                <a
                  className="btn store-btn border-blue fill-style wow fadeInUp"
                  data-wow-duration=".65s"
                  data-wow-delay=".4s"
                  href="{{route('generate')}}"
                >
                  <i className="fa fa-random fa-lg mr-2"></i>
                  <span>Generate Image</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-5">
            <div className="video-popup">
              <img
                src="{{url('themes/niomata')}}/assets/images/img1.jpg"
                alt=""
              ></img>
              <div className="video-play">
                <a
                  href="https://www.youtube.com/embed"
                  data-rel="lightbox-popup"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="15px"
                    height="20px"
                  >
                    <path
                      fillRule="evenodd"
                      fill="rgb(255, 255, 255)"
                      d="M-0.001,1.104 C-0.001,2.027 -0.001,18.234 -0.001,18.872 C-0.001,19.698 0.872,20.312 1.734,19.829 C2.425,19.442 13.233,11.631 14.411,10.962 C15.185,10.523 15.172,9.478 14.411,9.038 C13.563,8.548 2.702,0.697 1.699,0.152 C0.964,-0.247 -0.001,0.194 -0.001,1.104 Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
